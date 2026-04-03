"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/marketing/navbar"
import Footer from "@/components/marketing/footer"
import Link from "next/link"

export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Process transactions in milliseconds with zero latency. Built for speed.",
      details: [
        "Instant checkout processing",
        "Real-time inventory updates",
        "Quick product search",
        "Fast payment processing",
      ],
      gradient: "from-orange-400 to-blue-600",
    },
    {
      icon: "🧠",
      title: "AI-Powered Analytics",
      description: "Real-time insights into your sales, inventory, and customer behavior.",
      details: [
        "Predictive stock alerts",
        "Customer behavior analysis",
        "Sales trend forecasting",
        "Smart pricing suggestions",
      ],
      gradient: "from-amber-400 to-orange-600",
    },
    {
      icon: "☁️",
      title: "Cloud Synchronized",
      description: "Instant sync across all devices. Your data, everywhere, always.",
      details: [
        "Real-time data backup",
        "Access from any device",
        "Multi-location sync",
        "Automatic updates",
      ],
      gradient: "from-orange-400 to-teal-600",
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level encryption. PCI-DSS compliant. Your customers are safe.",
      details: [
        "End-to-end encryption",
        "Secure payment processing",
        "Data privacy compliance",
        "Regular security audits",
      ],
      gradient: "from-yellow-400 to-orange-600",
    },
    {
      icon: "🌐",
      title: "Multi-Channel",
      description: "Online, in-store, mobile. Sell anywhere, sync everywhere.",
      details: [
        "Unified inventory management",
        "Cross-platform orders",
        "Omnichannel experience",
        "Centralized reporting",
      ],
      gradient: "from-amber-400 to-rose-600",
    },
    {
      icon: "🎯",
      title: "Custom Workflows",
      description: "Build your perfect checkout experience. No coding required.",
      details: [
        "Drag-and-drop customization",
        "Custom receipt templates",
        "Flexible pricing rules",
        "Personalized dashboards",
      ],
      gradient: "from-orange-400 to-indigo-600",
    },
    {
      icon: "📱",
      title: "Camera Barcode Scan",
      description: "Use any smartphone camera to scan products instantly.",
      details: [
        "No hardware needed",
        "Works with any camera",
        "Instant product lookup",
        "Supports all barcode types",
      ],
      gradient: "from-green-400 to-emerald-600",
    },
    {
      icon: "📊",
      title: "Smart Reorders",
      description: "AI automatically suggests when and what to reorder.",
      details: [
        "Predictive stock levels",
        "Automatic reorder points",
        "Supplier management",
        "Cost optimization",
      ],
      gradient: "from-purple-400 to-indigo-600",
    },
    {
      icon: "🔌",
      title: "Offline Support",
      description: "Keep selling even when internet is down. Auto-syncs when back online.",
      details: [
        "Full offline functionality",
        "Local data storage",
        "Automatic sync on reconnect",
        "No data loss",
      ],
      gradient: "from-orange-400 to-red-600",
    },
    {
      icon: "🏪",
      title: "Multi-Chain Support",
      description: "Manage multiple stores from a single dashboard.",
      details: [
        "Centralized inventory",
        "Cross-store reporting",
        "Unified customer data",
        "Branch-wise analytics",
      ],
      gradient: "from-blue-400 to-cyan-600",
    },
  ]

  const comparisonFeatures = [
    { name: "Offline Support", other: false, nexus: true },
    { name: "AI Insights", other: false, nexus: true },
    { name: "Camera Barcode Scan", other: false, nexus: true },
    { name: "Smart Reorders", other: false, nexus: true },
    { name: "Works on Any Device", other: false, nexus: true },
    { name: "Multi-chain Support", other: false, nexus: true },
    { name: "Cloud Backup", other: true, nexus: true },
    { name: "Basic Reports", other: true, nexus: true },
    { name: "Customer Management", other: true, nexus: true },
    { name: "Real-time Sync", other: false, nexus: true },
    { name: "Custom Workflows", other: false, nexus: true },
    { name: "24/7 Support", other: false, nexus: true },
  ]

  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, rgba(34, 211, 238, 0.5) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-orange-400/10 border border-orange-400/30 rounded-full">
              <span className="text-orange-400 text-sm font-semibold">POWERFUL FEATURES</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                Succeed
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto mb-12">
              Aadhar POS comes packed with cutting-edge features designed to streamline your retail operations and boost your profits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 rounded-2xl bg-white/90 dark:bg-slate-800/40 border border-gray-200 dark:border-slate-700/50 hover:border-orange-400/50 hover:bg-gray-50 dark:hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-sm group"
              >
                <div className={`text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <ul className="space-y-3">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-slate-300 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Chart Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full">
              <span className="text-amber-400 text-sm font-semibold">COMPARISON CHART</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Aadhar?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400">
              Compare with other POS systems in Nepal
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 dark:bg-slate-800/40 backdrop-blur-sm border border-gray-200 dark:border-slate-700/50 rounded-2xl overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-slate-800/60 border-b border-gray-200 dark:border-slate-700">
              <div className="text-gray-600 dark:text-slate-400 font-semibold">Features</div>
              <div className="text-center text-gray-600 dark:text-slate-400 font-semibold">Other POS</div>
              <div className="text-center">
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-bold">
                  Aadhar POS
                </span>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-slate-700/50">
              {comparisonFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="grid grid-cols-3 gap-4 p-6 hover:bg-slate-800/30 transition-colors"
                >
                  <div className="text-gray-900 dark:text-white font-medium">{feature.name}</div>
                  <div className="text-center">
                    {feature.other ? (
                      <span className="text-green-400 text-2xl">✔</span>
                    ) : (
                      <span className="text-red-400 text-2xl">❌</span>
                    )}
                  </div>
                  <div className="text-center">
                    {feature.aadhar ? (
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 + 0.2, type: "spring" }}
                        className="text-orange-400 text-2xl inline-block"
                      >
                        ✔
                      </motion.span>
                    ) : (
                      <span className="text-red-400 text-2xl">❌</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Winner Badge */}
            <div className="p-8 bg-gradient-to-r from-orange-900/20 to-amber-900/20 border-t border-orange-400/30">
              <div className="flex items-center justify-center gap-4">
                <span className="text-4xl">🏆</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    Clear Winner: <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Aadhar POS</span>
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">12 out of 12 features. More value for your business.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400 mb-8">
              Join thousands of retailers who chose the smarter POS solution
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-started"
                className="px-8 py-4 bg-gradient-to-r from-orange-400 to-amber-400 text-slate-950 font-bold rounded-lg hover:shadow-2xl hover:shadow-orange-400/50 transition-all transform hover:scale-105 text-center"
              >
                Get Started Now →
              </Link>
              <Link
                href="/#contact"
                className="px-8 py-4 border-2 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white font-bold rounded-lg hover:border-orange-400 hover:text-orange-400 transition-all text-center"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
