"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { CheckCircle, X } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  })
  
  const [focused, setFocused] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (res.ok) {
        setShowSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessType: "",
          message: "",
        })
        setTimeout(() => setShowSuccess(false), 3000)
      } else {
        alert('❌ Failed to submit. Please try again.')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      alert('❌ Failed to submit. Please try again.')
    }
  }

  const businessTypes = [
    "Kirana Store",
    "Cosmetic Shop",
    "Mobile Shop",
    "Hardware Store",
    "Stationery",
    "Wholesale",
    "Pharmacy",
    "Clothing Store",
    "Electronics",
    "Liquor Shop",
    "Restaurant",
    "Other",
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.5) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-orange-400/10 border border-orange-400/30 rounded-full">
            <span className="text-orange-400 text-sm font-semibold">GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Transform Your{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-600 bg-clip-text text-transparent">
              Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            Have questions? Want a demo? We're here to help you get started with Aadhar POS.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <motion.div
                  animate={{
                    borderColor: focused === "name" ? "rgba(34, 211, 238, 0.5)" : "rgba(71, 85, 105, 0.5)",
                  }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                    required
                    className="w-full px-5 py-4 bg-white/90 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:bg-gray-100 dark:bg-slate-800/70 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                  {focused === "name" && (
                    <motion.div
                      layoutId="focus-indicator"
                      className="absolute inset-0 rounded-xl border-2 border-orange-400 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                  Email Address <span className="text-amber-400">*</span>
                </label>
                <motion.div
                  animate={{
                    borderColor: focused === "email" ? "rgba(34, 211, 238, 0.5)" : "rgba(71, 85, 105, 0.5)",
                  }}
                  className="relative"
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    required
                    className="w-full px-5 py-4 bg-white/90 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:bg-gray-100 dark:bg-slate-800/70 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                  {focused === "email" && (
                    <motion.div
                      layoutId="focus-indicator"
                      className="absolute inset-0 rounded-xl border-2 border-orange-400 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                  Phone Number <span className="text-amber-400">*</span>
                </label>
                <motion.div
                  animate={{
                    borderColor: focused === "phone" ? "rgba(34, 211, 238, 0.5)" : "rgba(71, 85, 105, 0.5)",
                  }}
                  className="relative"
                >
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused("")}
                    required
                    className="w-full px-5 py-4 bg-white/90 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:bg-gray-100 dark:bg-slate-800/70 transition-all duration-300"
                    placeholder="+977 XXXXX XXXXX"
                  />
                  {focused === "phone" && (
                    <motion.div
                      layoutId="focus-indicator"
                      className="absolute inset-0 rounded-xl border-2 border-orange-400 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Business Type Dropdown */}
              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                  Business Type <span className="text-amber-400">*</span>
                </label>
                <motion.div
                  animate={{
                    borderColor: focused === "businessType" ? "rgba(34, 211, 238, 0.5)" : "rgba(71, 85, 105, 0.5)",
                  }}
                  className="relative"
                >
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    onFocus={() => setFocused("businessType")}
                    onBlur={() => setFocused("")}
                    required
                    className="w-full px-5 py-4 bg-white/90 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-orange-400 focus:bg-gray-100 dark:bg-slate-800/70 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-white dark:bg-slate-800">Select your business type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type} className="bg-white dark:bg-slate-800">
                        {type}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-orange-400">
                    ▼
                  </div>
                  {focused === "businessType" && (
                    <motion.div
                      layoutId="focus-indicator"
                      className="absolute inset-0 rounded-xl border-2 border-orange-400 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                  Message <span className="text-gray-500 dark:text-slate-500">(Optional)</span>
                </label>
                <motion.div
                  animate={{
                    borderColor: focused === "message" ? "rgba(34, 211, 238, 0.5)" : "rgba(71, 85, 105, 0.5)",
                  }}
                  className="relative"
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                    rows="5"
                    className="w-full px-5 py-4 bg-white/90 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:bg-gray-100 dark:bg-slate-800/70 transition-all duration-300 resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                  {focused === "message" && (
                    <motion.div
                      layoutId="focus-indicator"
                      className="absolute inset-0 rounded-xl border-2 border-orange-400 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message →</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-600 to-amber-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <p className="text-sm text-gray-500 dark:text-slate-500 text-center">
                We'll get back to you within 24 hours
              </p>
            </form>
          </motion.div>

          {/* Contact Info & Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-slate-800/40 dark:to-slate-800/20 border border-gray-200 dark:border-slate-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Contact</h3>
              
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/90 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 hover:border-orange-400/50 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-400/10 flex items-center justify-center text-2xl">
                    📞
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-slate-400 text-sm">Call Us</p>
                    <p className="text-gray-900 dark:text-white font-semibold">+977 9768986351 </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/90 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 hover:border-amber-400/50 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center text-2xl">
                    📧
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-slate-400 text-sm">Email Us</p>
                    <p className="text-gray-900 dark:text-white font-semibold">hello@aadharpos.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/90 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 hover:border-purple-400/50 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-400/10 flex items-center justify-center text-2xl">
                    💬
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-slate-400 text-sm">Live Chat</p>
                    <p className="text-gray-900 dark:text-white font-semibold">Available 24/7</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-900/20 to-amber-900/20 border border-orange-400/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Aadhar?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-orange-400 text-xl mt-1">✓</div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-semibold">Quick Setup</p>
                    <p className="text-gray-600 dark:text-slate-400 text-sm">Get started in minutes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-orange-400 text-xl mt-1">✓</div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-semibold">24/7 Support</p>
                    <p className="text-gray-600 dark:text-slate-400 text-sm">Always here to help</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-orange-400 text-xl mt-1">✓</div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-semibold">Free Setup & Training</p>
                    <p className="text-gray-600 dark:text-slate-400 text-sm">We'll get you started</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-orange-400 text-xl mt-1">✓</div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-semibold">Flexible Plans</p>
                    <p className="text-gray-600 dark:text-slate-400 text-sm">Choose what works for you</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            {/* <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-white dark:from-slate-800/40 dark:to-slate-800/20 border border-gray-200 dark:border-slate-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">10,000+</p>
                  <p className="text-gray-600 dark:text-slate-400 text-sm">Businesses Trust Us</p>
                </div>
                <div className="text-5xl">🚀</div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
            >
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex justify-center mb-4"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
              </motion.div>

              <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-gray-900 text-center mb-2"
              >
                Message Sent Successfully!
              </motion.h3>

              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-center mb-6"
              >
                Thank you for reaching out! We'll get back to you soon.
              </motion.p>

              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm text-gray-500 text-center"
              >
                This window will close automatically...
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
