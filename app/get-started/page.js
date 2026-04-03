"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle, X, ArrowLeft } from "lucide-react"

export default function GetStarted() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    // Step 1 - Personal Info
    ownerName: "",
    phone: "",
    email: "",
    
    // Step 2 - Business Info
    shopName: "",
    businessType: "",
    establishedYear: "",
    
    // Step 3 - Location Info
    address: "",
    city: "",
    state: "",
    pincode: "",
    
    // Step 4 - Additional Info
    currentPOS: "",
    employees: "",
    averageTransactions: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const nextStep = () => {
    if (step < 4) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          business_name: formData.shopName,
          owner_name: formData.ownerName,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          state: formData.state,
          address: formData.address,
          business_type: formData.businessType === 'Restaurant' ? 'restaurant' : 'retail',
          notes: `Established: ${formData.establishedYear}, Current POS: ${formData.currentPOS}, Employees: ${formData.employees}, Avg Transactions: ${formData.averageTransactions}, Pincode: ${formData.pincode}`
        }),
      })

      const data = await response.json()
      
      if (response.ok) {
        setShowSuccess(true)
        setTimeout(() => {
          router.push('/')
        }, 3000)
      } else {
        alert('❌ Failed to submit: ' + (data.error || 'Unknown error'))
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('❌ Failed to submit registration. Please try again.')
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
    "Bakery",
    "Salon/Spa",
    "Jewelry",
    "Footwear",
    "Other",
  ]

  const progress = (step / 4) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300 py-12 px-4 relative overflow-hidden">
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 z-50">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 hover:bg-slate-700 text-white rounded-lg transition-all backdrop-blur-sm border border-gray-300 dark:border-slate-600 hover:border-orange-400"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Success Message Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-md w-full border border-orange-400/30 shadow-2xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-cyan-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Success! 🎉</h3>
                <p className="text-gray-700 dark:text-slate-300 text-lg mb-2">
                  Registration received!
                </p>
                <p className="text-gray-600 dark:text-slate-400 text-sm mb-6">
                  Our team will contact you soon with your license details.
                </p>
                <div className="text-orange-400 text-sm">
                  Redirecting to home page...
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.5) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-block mb-4 px-4 py-2 bg-orange-400/10 border border-orange-400/30 rounded-full"
          >
            <span className="text-orange-400 text-sm font-semibold">GET STARTED WITH AADHAR</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-600 bg-clip-text text-transparent">
              Nexus
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-400">
            Let's set up your account in just a few steps
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center">
                <motion.div
                  animate={{
                    scale: step === num ? 1.2 : 1,
                    backgroundColor: step >= num ? "rgba(34, 211, 238, 1)" : "rgba(71, 85, 105, 0.5)",
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10"
                >
                  {step > num ? "✓" : num}
                </motion.div>
                {num < 4 && (
                  <motion.div
                    className="h-1 w-full mx-2"
                    animate={{
                      backgroundColor: step > num ? "rgba(34, 211, 238, 1)" : "rgba(71, 85, 105, 0.5)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          
          <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-400 via-blue-500 to-amber-400"
              initial={{ width: "25%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Form Container */}
        <motion.div
          className="bg-white/90 dark:bg-slate-800/40 backdrop-blur-sm border border-gray-200 dark:border-slate-700/50 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* Step 1 - Personal Info */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Personal Information</h3>
                    <p className="text-gray-600 dark:text-slate-400 mb-6">Let's start with your basic details</p>
                  </div>

                  <div>
                    <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                      Your Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/90 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:bg-slate-800/70 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                      Phone Number <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/90 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:bg-slate-800/70 transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/90 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:bg-slate-800/70 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2 - Business Info */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Business Information</h3>
                    <p className="text-gray-600 dark:text-slate-400 mb-6">Tell us about your business</p>
                  </div>

                  <div>
                    <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                      Shop/Business Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="shopName"
                      value={formData.shopName}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/90 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:bg-slate-800/70 transition-all"
                      placeholder="Enter your shop name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                      Business Type <span className="text-amber-400">*</span>
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/90 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-orange-400 focus:bg-slate-800/70 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-white dark:bg-slate-800">Select your business type</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type} className="bg-white dark:bg-slate-800">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                      Established Year <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="number"
                      name="establishedYear"
                      value={formData.establishedYear}
                      onChange={handleChange}
                      required
                      min="1900"
                      max="2025"
                      className="w-full px-5 py-4 bg-white/90 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:bg-slate-800/70 transition-all"
                      placeholder="e.g., 2020"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 3 - Location Info */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Location Details</h3>
                    <p className="text-gray-600 dark:text-slate-400 mb-6">Where is your business located?</p>
                  </div>

                  <div>
                    <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                      Shop Address <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full px-5 py-4 bg-white/90 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:bg-slate-800/70 transition-all resize-none"
                      placeholder="Street address, building name, etc."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                        City <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-white/90 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:bg-slate-800/70 transition-all"
                        placeholder="Your city"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                        State <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-white/90 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:bg-slate-800/70 transition-all"
                        placeholder="Your state"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                      PIN Code <span className="text-gray-500 dark:text-slate-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      pattern="[0-9]{6}"
                      className="w-full px-5 py-4 bg-white/90 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:bg-slate-800/70 transition-all"
                      placeholder="6-digit PIN code"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 4 - Additional Info */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Almost Done!</h3>
                    <p className="text-gray-600 dark:text-slate-400 mb-6">Just a few more details to personalize your experience</p>
                  </div>

                  <div>
                    <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                      Current POS System <span className="text-gray-500 dark:text-slate-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="currentPOS"
                      value={formData.currentPOS}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/90 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:bg-slate-800/70 transition-all"
                      placeholder="e.g., Manual billing, Excel, Other software"
                    />
                  </div>

                  <div className="p-6 bg-orange-400/10 border border-orange-400/30 rounded-xl">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎉</span>
                      <div>
                        <h4 className="text-gray-900 dark:text-white font-semibold mb-1">Ready to revolutionize your business?</h4>
                        <p className="text-gray-600 dark:text-slate-400 text-sm">
                          Click submit to get started with Aadhar POS!
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <motion.button
                  type="button"
                  onClick={prevStep}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-8 py-4 border-2 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white font-bold rounded-xl hover:border-orange-400 hover:text-orange-400 transition-all"
                >
                  ← Previous
                </motion.button>
              )}

              {step < 4 ? (
                <motion.button
                  type="button"
                  onClick={nextStep}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-orange-400 via-blue-500 to-amber-400 text-slate-950 font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-400/50 transition-all"
                >
                  Next Step →
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-400 via-purple-500 to-orange-400 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-amber-400/50 transition-all"
                >
                  Get Started 🚀
                </motion.button>
              )}
            </div>
          </form>

          {/* Step Labels */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 dark:text-slate-500 text-sm">
              {step === 1 && "Step 1 of 4: Personal Information"}
              {step === 2 && "Step 2 of 4: Business Information"}
              {step === 3 && "Step 3 of 4: Location Details"}
              {step === 4 && "Step 4 of 4: Additional Information"}
            </p>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-8 items-center"
        >
          <div className="flex items-center gap-2 text-gray-600 dark:text-slate-400">
            <span className="text-green-400 text-xl">✓</span>
            <span className="text-sm">Quick Setup</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-slate-400">
            <span className="text-green-400 text-xl">✓</span>
            <span className="text-sm">Easy to Use</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-slate-400">
            <span className="text-green-400 text-xl">✓</span>
            <span className="text-sm">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-slate-400">
            <span className="text-green-400 text-xl">✓</span>
            <span className="text-sm">Secure & Reliable</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
