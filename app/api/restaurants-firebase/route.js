import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';

// Generate license key
function generateLicenseKey(restaurantId) {
  const year = new Date().getFullYear();
  const random = Math.random().toString(36).substring(2, 10).toUpperCase();
  return `POS-${year}-${restaurantId}-${random}`;
}

// Calculate expiry date
function calculateExpiryDate(startDate, planType) {
  const date = new Date(startDate);
  const durations = {
    'monthly': 1,
    'semi_annual': 6,
    'annual': 12
  };
  date.setMonth(date.getMonth() + durations[planType]);
  return date.toISOString();
}

export async function GET(request) {
  try {
    // Get all restaurants
    const snapshot = await adminDb.collection('restaurants').orderBy('created_at', 'desc').get();
    
    const restaurants = [];
    for (const doc of snapshot.docs) {
      const restaurant = { id: doc.id, ...doc.data() };
      
      // Get license for this restaurant
      const licenseSnapshot = await adminDb.collection('licenses')
        .where('restaurant_id', '==', doc.id)
        .limit(1)
        .get();
      
      if (!licenseSnapshot.empty) {
        restaurant.license = licenseSnapshot.docs[0].data();
      }
      
      restaurants.push(restaurant);
    }

    return NextResponse.json({ restaurants });
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    return NextResponse.json(
      { error: 'Failed to fetch restaurants', details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, location, contact_number, contact_email, owner_name, plan_type } = body;

    // Validate required fields
    if (!name || !location || !contact_number || !plan_type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create restaurant document
    const restaurantRef = adminDb.collection('restaurants').doc();
    const restaurantId = restaurantRef.id;

    const restaurant = {
      name,
      location,
      contact_number,
      contact_email: contact_email || '',
      owner_name: owner_name || '',
      status: 'active',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    await restaurantRef.set(restaurant);

    // Generate license
    const licenseKey = generateLicenseKey(restaurantId.substring(0, 8));
    const startDate = new Date().toISOString();
    const expiryDate = calculateExpiryDate(startDate, plan_type);

    const planPrices = {
      'monthly': 999,
      'semi_annual': 4999,
      'annual': 8999
    };

    const license = {
      restaurant_id: restaurantId,
      license_key: licenseKey,
      plan_type,
      start_date: startDate,
      expiry_date: expiryDate,
      status: 'active',
      grace_period_days: 5,
      last_verified: null,
      created_at: new Date().toISOString()
    };

    await adminDb.collection('licenses').doc(licenseKey).set(license);

    // Create initial payment record
    await adminDb.collection('payments').add({
      restaurant_id: restaurantId,
      license_key: licenseKey,
      amount: planPrices[plan_type],
      plan_type,
      payment_date: startDate,
      payment_method: 'initial',
      status: 'completed',
      created_at: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      restaurant: { id: restaurantId, ...restaurant },
      license
    });
  } catch (error) {
    console.error('Error creating restaurant:', error);
    return NextResponse.json(
      { error: 'Failed to create restaurant', details: error.message },
      { status: 500 }
    );
  }
}
