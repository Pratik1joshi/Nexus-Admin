"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/marketing/navbar"
import Footer from "@/components/marketing/footer"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly") // monthly or yearly
  const [outlets, setOutlets] = useState(1)

  const plans = [
    {
      name: "Basic",
      description: "Perfect for single store owners",
      basePrice: 1000,
      features: [
        "Barcode scanning",
        "Fast invoicing",
        "Print support",
        "Stock tracking",
        "Low stock alerts",
        "Daily sales reports",
        "Up to 2 devices",
        "Email support",
      ],
      highlight: false,
    },
    {
      name: "Premium",
      description: "Complete solution with cloud backup",
      basePrice: 1300,
      features: [
        "Everything in Basic",
        "Encrypted cloud backup",
        "Auto-sync across devices",
        "Multi-location support",
        "Advanced analytics",
        "Monthly profit reports",
        "Supplier management",
        "Unlimited devices",
        "Priority support",
        "Free updates forever",
      ],
      highlight: true,
      badge: "Most Popular",
    },
  ]

  const calculatePrice = (basePrice) => {
    let price = basePrice
    
    // Add cost per additional outlet
    if (outlets > 1) {
      price += (outlets - 1) * 500
    }
    
    // Apply yearly discount (20% off)
    if (billingCycle === "yearly") {
      price = price * 12 * 0.8
    }
    
    return price
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NP", {
      style: "currency",
      currency: "NPR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
              <span className="text-orange-500 dark:text-orange-400 text-sm font-semibold">
                SIMPLE PRICING
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Transparent{" "}
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
              No hidden fees. No surprises. Just straightforward pricing that grows with your business.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            <span
              className={`text-lg font-medium transition-colors ${
                billingCycle === "monthly"
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-400 dark:text-slate-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative w-16 h-8 bg-gray-200 dark:bg-slate-700 rounded-full transition-colors"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-transform duration-300 ${
                  billingCycle === "yearly" ? "translate-x-8" : ""
                }`}
              />
            </button>
            <span
              className={`text-lg font-medium transition-colors ${
                billingCycle === "yearly"
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-400 dark:text-slate-500"
              }`}
            >
              Yearly{" "}
              <span className="text-sm text-green-500 font-semibold">(Save 20%)</span>
            </span>
          </motion.div>

          {/* Outlets Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-gray-200 dark:border-slate-700 max-w-md mx-auto"
          >
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Number of Outlets/Locations
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setOutlets(Math.max(1, outlets - 1))}
                className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors flex items-center justify-center font-bold text-lg"
                disabled={outlets === 1}
              >
                −
              </button>
              <div className="flex-1 text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{outlets}</div>
                <div className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                  {outlets === 1 ? "outlet" : "outlets"}
                </div>
              </div>
              <button
                onClick={() => setOutlets(outlets + 1)}
                className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors flex items-center justify-center font-bold text-lg"
              >
                +
              </button>
            </div>
            {outlets > 1 && (
              <p className="mt-3 text-sm text-orange-500 dark:text-orange-400">
                +Rs 500/month per additional outlet
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => {
            const price = calculatePrice(plan.basePrice)
            const monthlyEquivalent = billingCycle === "yearly" ? price / 12 : price

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`relative p-8 rounded-2xl border transition-all ${
                  plan.highlight
                    ? "bg-gradient-to-b from-orange-50 to-white dark:from-slate-800 dark:to-slate-900 border-orange-300 dark:border-orange-500/50 shadow-xl shadow-orange-500/10"
                    : "bg-white dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-500/30"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold rounded-full">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      {formatPrice(monthlyEquivalent)}
                    </span>
                    <span className="text-gray-500 dark:text-slate-400">/month</span>
                  </div>
                  {billingCycle === "yearly" && (
                    <p className="text-sm text-gray-600 dark:text-slate-400 mt-2">
                      Billed {formatPrice(price)} yearly
                    </p>
                  )}
                  {outlets > 1 && (
                    <p className="text-sm text-orange-500 dark:text-orange-400 mt-1">
                      For {outlets} outlets
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/get-started"
                  className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all ${
                    plan.highlight
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg hover:shadow-orange-500/50"
                      : "bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-600"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I switch plans later?",
                a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major payment methods including eSewa, Khalti, bank transfer, and credit/debit cards.",
              },
              {
                q: "Is there a setup fee?",
                a: "No setup fees. No hidden charges. Just the monthly subscription.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Absolutely. No long-term contracts. Cancel anytime with no questions asked.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
