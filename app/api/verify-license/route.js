import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';

export async function POST(request) {
  try {
    const { license_key } = await request.json();

    if (!license_key) {
      return NextResponse.json(
        { error: 'License key is required', valid: false },
        { status: 400 }
      );
    }

    // Get license info from Firebase
    const licenseDoc = await adminDb.collection('licenses').doc(license_key).get();

    if (!licenseDoc.exists) {
      return NextResponse.json({
        valid: false,
        error: 'Invalid license key'
      });
    }

    const license = licenseDoc.data();

    // Get restaurant info
    const restaurantDoc = await adminDb.collection('restaurants').doc(license.restaurant_id).get();
    
    if (!restaurantDoc.exists) {
      return NextResponse.json({
        valid: false,
        error: 'Restaurant not found'
      });
    }

    const restaurant = restaurantDoc.data();

    // Check if restaurant is active
    if (restaurant.status !== 'active') {
      return NextResponse.json({
        valid: false,
        error: 'Restaurant account is suspended'
      });
    }

    const now = new Date();
    const expiryDate = new Date(license.expiry_date);
    const daysRemaining = Math.ceil((expiryDate - now) / (1000 * 60 * 60 * 24));

    // Update last verified
    await adminDb.collection('licenses').doc(license_key).update({
      last_verified: new Date().toISOString()
    });

    // Log verification
    const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    await adminDb.collection('verification_logs').add({
      license_key,
      restaurant_id: license.restaurant_id,
      verification_status: daysRemaining > 0 ? 'valid' : 'expired',
      ip_address: clientIp,
      timestamp: new Date().toISOString()
    });

    // Check expiry
    if (daysRemaining < 0) {
      // Check grace period
      const graceDays = license.grace_period_days || 7;
      const graceRemaining = graceDays + daysRemaining;

      if (graceRemaining <= 0) {
        return NextResponse.json({
          valid: false,
          status: 'expired',
          error: 'License has expired',
          expiry_date: license.expiry_date,
          days_remaining: daysRemaining,
          restaurant: {
            name: restaurant.name,
            location: restaurant.location,
            contact_number: restaurant.contact_number,
            contact_email: restaurant.contact_email,
            owner_name: restaurant.owner_name
          }
        });
      }

      return NextResponse.json({
        valid: true,
        status: 'grace',
        message: 'License expired, in grace period',
        expiry_date: license.expiry_date,
        days_remaining: daysRemaining,
        grace_remaining: graceRemaining,
        restaurant: {
          name: restaurant.name,
          location: restaurant.location,
          contact_number: restaurant.contact_number,
          contact_email: restaurant.contact_email,
          owner_name: restaurant.owner_name
        },
        plan_type: license.plan_type
      });
    }

    return NextResponse.json({
      valid: true,
      status: daysRemaining <= 7 ? 'expiring_soon' : 'active',
      expiry_date: license.expiry_date,
      days_remaining: daysRemaining,
      restaurant: {
        name: restaurant.name,
        location: restaurant.location,
        contact_number: restaurant.contact_number,
        contact_email: restaurant.contact_email,
        owner_name: restaurant.owner_name
      },
      plan_type: license.plan_type
    });
  } catch (error) {
    console.error('License verification error:', error);
    return NextResponse.json(
      { error: 'Verification failed', valid: false, details: error.message },
      { status: 500 }
    );
  }
}
