import Link from "next/link"

export default function TermsOfService() {
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
            Terms of Service
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your use of AADHAR software and related services.
            </p>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
              By installing, accessing, or using AADHAR, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              If you do not agree, you must not use the software.
            </p>
          </section>

          {/* Nature of Service */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Nature of the Service</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
              AADHAR is an offline-first business management and point-of-sale system.
            </p>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              Core business data is stored locally on your device. Certain optional features (such as cloud backup 
              and license validation) require internet access.
            </p>
          </section>

          {/* License Grant */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. License Grant</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
              We grant you a limited, non-exclusive, non-transferable license to use AADHAR for internal business purposes.
            </p>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              You may not:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 ml-4">
              <li>Reverse engineer or modify the software</li>
              <li>Redistribute the software without authorization</li>
              <li>Use it for unlawful purposes</li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. User Responsibilities</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              You are solely responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 mb-4 ml-4">
              <li>Accuracy of all data entered into the system</li>
              <li>Compliance with tax, accounting, and regulatory requirements</li>
              <li>Maintaining physical and digital security of your device</li>
              <li>Maintaining backups of your data (unless subscribed to cloud backup services)</li>
            </ul>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              AADHAR does not provide legal, tax, or accounting advice.
            </p>
          </section>

          {/* Data Ownership */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Data Ownership</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              You retain full ownership of your business data.
            </p>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              AADHAR does not claim ownership over:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 mb-4 ml-4">
              <li>Sales records</li>
              <li>Inventory data</li>
              <li>Customer information</li>
              <li>Reports</li>
            </ul>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
              If cloud backup is enabled, encrypted backup files may be stored securely on our servers.
            </p>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              We do not access or analyze your business data without your consent.
            </p>
          </section>

          {/* Payments & Subscriptions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Payments & Subscriptions</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 mb-4 ml-4">
              <li>Certain features may require payment or active subscription.</li>
              <li>Fees are billed in advance and are non-refundable unless otherwise stated.</li>
              <li>We reserve the right to modify pricing with prior notice.</li>
            </ul>
          </section>

          {/* Service Availability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Service Availability</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
              Core billing functionality operates locally and does not require continuous internet access.
            </p>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              Online features may be temporarily unavailable due to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 mb-4 ml-4">
              <li>Maintenance</li>
              <li>Network interruptions</li>
              <li>Third-party service outages</li>
            </ul>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              We are not responsible for downtime caused by user hardware, internet failure, or power interruption.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 mb-4 ml-4">
              <li>AADHAR is provided "as is" without warranties.</li>
              <li>We are not liable for indirect or consequential damages.</li>
              <li>We are not responsible for loss of profits, tax penalties, accounting discrepancies, or business interruption.</li>
              <li>Our total liability shall not exceed the fees paid by you in the preceding 12 months.</li>
            </ul>
          </section>

          {/* Indemnification */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Indemnification</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-3">
              You agree to indemnify and hold AADHAR harmless from any claims arising from:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 ml-4">
              <li>Your misuse of the software</li>
              <li>Incorrect data entry</li>
              <li>Legal non-compliance</li>
            </ul>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Termination</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-slate-400 space-y-2 mb-4 ml-4">
              <li>You may stop using the software at any time.</li>
              <li>We may suspend or terminate access if you violate these Terms.</li>
              <li>Cloud backup data may be deleted after a reasonable retention period following termination.</li>
            </ul>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Governing Law</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              These Terms are governed by the laws of Nepal. Disputes shall be subject to the courts of Kathmandu, Nepal.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Changes to Terms</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              We may update these Terms periodically. Continued use after updates constitutes acceptance.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
              <p className="text-gray-700 dark:text-slate-300 mb-2"><strong>Email:</strong> legal@aadhar.com.np</p>
              <p className="text-gray-700 dark:text-slate-300 mb-2"><strong>Phone:</strong> +977 9768986351</p>
              <p className="text-gray-700 dark:text-slate-300"><strong>Address:</strong> Kathmandu, Nepal</p>
            </div>
          </section>

          {/* Acceptance */}
          <section className="mb-12">
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-slate-300 font-semibold mb-2">
                By using Aadhar's Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
              <p className="text-gray-600 dark:text-slate-400 text-sm">
                Last Updated: February 18, 2026
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
