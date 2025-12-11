// Firebase Database Initialization Script
// Run this once to set up initial data structure and sample restaurants

import admin from 'firebase-admin';
import bcrypt from 'bcryptjs';

// Initialize Firebase Admin (you'll need to set up service account)
const serviceAccount = require('./firebase-service-account.json'); // You'll create this

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Generate license key
function generateLicenseKey(restaurantId) {
  const year = new Date().getFullYear();
  const random = Math.random().toString(36).substring(2, 10).toUpperCase();
  return `POS-${year}-${restaurantId}-${random}`;
}

// Calculate expiry date
function calculateExpiryDate(startDate, months) {
  const date = new Date(startDate);
  date.setMonth(date.getMonth() + months);
  return date.toISOString();
}

async function initializeFirebase() {
  console.log('🔥 Initializing Firebase Database...\n');

  try {
    // 1. Create admin user
    console.log('Creating admin user...');
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await db.collection('admin_users').doc('admin').set({
      username: 'admin',
      password: hashedPassword,
      email: 'admin@possystem.com',
      role: 'super_admin',
      created_at: new Date().toISOString()
    });
    console.log('✓ Admin user created\n');

    // 2. Create sample restaurants
    const sampleRestaurants = [
      {
        name: 'The Wild Stars',
        location: 'Mumbai, Maharashtra',
        contact_number: '+91 98765 43210',
        contact_email: 'contact@thewildstars.com',
        owner_name: 'Rajesh Kumar',
        plan_type: 'monthly',
        months: 1
      },
      {
        name: 'Spice Garden',
        location: 'Delhi, NCR',
        contact_number: '+91 98765 43211',
        contact_email: 'info@spicegarden.com',
        owner_name: 'Priya Sharma',
        plan_type: 'semi_annual',
        months: 6
      },
      {
        name: 'Ocean View Cafe',
        location: 'Goa',
        contact_number: '+91 98765 43212',
        contact_email: 'hello@oceanview.com',
        owner_name: 'John D\'Souza',
        plan_type: 'annual',
        months: 12
      }
    ];

    console.log('Creating sample restaurants...');
    for (const restaurantData of sampleRestaurants) {
      // Create restaurant
      const restaurantRef = db.collection('restaurants').doc();
      const restaurantId = restaurantRef.id;

      const restaurant = {
        name: restaurantData.name,
        location: restaurantData.location,
        contact_number: restaurantData.contact_number,
        contact_email: restaurantData.contact_email,
        owner_name: restaurantData.owner_name,
        status: 'active',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      await restaurantRef.set(restaurant);

      // Create license
      const licenseKey = generateLicenseKey(restaurantId.substring(0, 8));
      const startDate = new Date().toISOString();
      const expiryDate = calculateExpiryDate(startDate, restaurantData.months);

      const license = {
        restaurant_id: restaurantId,
        license_key: licenseKey,
        plan_type: restaurantData.plan_type,
        start_date: startDate,
        expiry_date: expiryDate,
        status: 'active',
        grace_period_days: 5,
        last_verified: null,
        created_at: new Date().toISOString()
      };

      await db.collection('licenses').doc(licenseKey).set(license);

      // Create payment record
      const planPrices = { monthly: 999, semi_annual: 4999, annual: 8999 };
      await db.collection('payments').add({
        restaurant_id: restaurantId,
        license_key: licenseKey,
        amount: planPrices[restaurantData.plan_type],
        plan_type: restaurantData.plan_type,
        payment_date: startDate,
        payment_method: 'initial',
        status: 'completed',
        created_at: new Date().toISOString()
      });

      console.log(`✓ Created: ${restaurantData.name} (${licenseKey})`);
    }

    console.log('\n✅ Firebase initialization complete!');
    console.log('\n📝 Summary:');
    console.log('   - Admin credentials: admin / admin123');
    console.log('   - 3 sample restaurants created');
    console.log('   - Licenses generated for all restaurants');
    console.log('   - Payment records initialized\n');

  } catch (error) {
    console.error('❌ Error initializing Firebase:', error);
  }

  process.exit(0);
}

initializeFirebase();
