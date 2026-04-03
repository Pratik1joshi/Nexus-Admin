import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-900 dark:to-slate-800 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-slate-400">
            Last updated: February 18, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
              AADHAR builds offline-first business software for shops and restaurants. We are committed to protecting 
              your privacy and ensuring that your business data remains under your control.
            </p>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              This Privacy Policy explains what information we collect, how we use it, and what we do not collect 
              when you use AADHAR software and related services.
            </p>
          </section>

          {/* Business Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Business Data (Stored Locally)</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
              AADHAR is designed as a local-first system.
            </p>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              All core business data — including:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 mb-4 ml-4">
              <li>Sales and transaction records</li>
              <li>Inventory and stock data</li>
              <li>Customer information (as entered by you)</li>
              <li>Supplier records</li>
              <li>Employee records</li>
              <li>Reports and analytics</li>
            </ul>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              is stored locally on your device.
            </p>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              <strong>We do not automatically collect, monitor, or store this business data on our servers.</strong>
            </p>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              You retain full ownership and control of your business data.
            </p>
          </section>

          {/* Cloud Backup */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Cloud Backup (Optional Feature)</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              If you enable Cloud Backup, the following applies:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 mb-4 ml-4">
              <li>Your local data folder is encrypted on your device before upload.</li>
              <li>Only encrypted backup files are stored on our secure cloud storage.</li>
              <li>We do not access, read, or analyze your business data inside these backups.</li>
              <li>Backups can only be restored using your license credentials.</li>
            </ul>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              Cloud Backup is optional. You may choose to use local backups only.
            </p>
          </section>

          {/* Account & Licensing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Account & Licensing Information</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              To provide licensing and support, we may collect:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 mb-4 ml-4">
              <li>Business name</li>
              <li>Contact name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>License key</li>
              <li>Subscription status</li>
            </ul>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              This information is used solely for:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 mb-4 ml-4">
              <li>Account management</li>
              <li>License validation</li>
              <li>Customer support</li>
              <li>Billing (if applicable)</li>
            </ul>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              We do not sell or rent this information.
            </p>
          </section>

          {/* Global Product Database */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Global Product Database (Barcode System)</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              AADHAR may maintain a shared product database containing:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 mb-4 ml-4">
              <li>Barcode numbers</li>
              <li>Product names</li>
              <li>Brand</li>
              <li>Category</li>
              <li>Unit</li>
            </ul>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              This database does not include:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 mb-4 ml-4">
              <li>Prices</li>
              <li>Sales data</li>
              <li>Stock levels</li>
              <li>Customer data</li>
              <li>Shop identification</li>
            </ul>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              If you choose to contribute product data to improve the barcode database, only non-sensitive product 
              details are shared.
            </p>
          </section>

          {/* Technical Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Automatically Collected Technical Information</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              When using online services (such as cloud backup or license validation), we may collect limited technical 
              information such as:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 mb-4 ml-4">
              <li>IP address</li>
              <li>App version</li>
              <li>Device type</li>
              <li>Date and time of access</li>
            </ul>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              This information is used only for system security, troubleshooting, and preventing abuse.
            </p>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. How We Use Information</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              We use collected information to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 mb-4 ml-4">
              <li>Provide and maintain our services</li>
              <li>Validate software licenses</li>
              <li>Provide technical support</li>
              <li>Improve product stability and performance</li>
              <li>Ensure security of our systems</li>
            </ul>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              <strong>We do not use your business data for advertising or resale.</strong>
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Data Security</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              We implement appropriate security measures including:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 mb-4 ml-4">
              <li>Encryption of cloud backups</li>
              <li>Secure authentication systems</li>
              <li>Access controls</li>
              <li>Regular software updates</li>
            </ul>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              While we strive to protect your information, no system is completely immune from risk.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Data Retention</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 mb-4 ml-4">
              <li>Local business data remains on your device unless you choose to delete it.</li>
              <li>Cloud backups are retained according to your subscription plan.</li>
              <li>Account and billing records may be retained as required by applicable laws.</li>
              <li>You may request account deletion at any time.</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Data Sharing</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              <strong>We do not sell your data.</strong>
            </p>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              We may disclose limited information only:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 mb-4 ml-4">
              <li>If required by law</li>
              <li>To comply with legal processes</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              Encrypted cloud backups are not accessed for analysis or marketing purposes.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Your Rights</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              You may:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 mb-4 ml-4">
              <li>Request access to your account information</li>
              <li>Correct inaccurate contact details</li>
              <li>Request deletion of your account</li>
              <li>Disable cloud backup at any time</li>
            </ul>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              To exercise these rights, contact us at: <strong>privacy@aadhar.com.np</strong>
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Children's Privacy</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              AADHAR is designed for business use and is not intended for individuals under 18 years of age.
            </p>
          </section>

          {/* Updates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Updates to This Policy</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              We may update this Privacy Policy periodically. Changes will be reflected by updating the "Last Updated" date.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Contact Us</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy:
            </p>
            <div className="bg-gray-50 dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
              <p className="text-gray-700 dark:text-slate-300 mb-2"><strong>Email:</strong> privacy@aadhar.com.np</p>
              <p className="text-gray-700 dark:text-slate-300 mb-2"><strong>Phone:</strong> +977 9768986351</p>
              <p className="text-gray-700 dark:text-slate-300"><strong>Address:</strong> Kathmandu, Nepal</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
