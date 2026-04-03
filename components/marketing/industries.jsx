"use client"

import { motion } from "framer-motion"

export default function Industries() {
  const industries = [
    { name: "Kirana Stores", icon: "🏪" },
    { name: "Cosmetic Shops", icon: "💄" },
    { name: "Mobile Shops", icon: "📱" },
    { name: "Hardware Stores", icon: "🔧" },
    { name: "Stationery Shops", icon: "📝" },
    { name: "Wholesale", icon: "📦" },
    { name: "Pharmacy", icon: "💊", badge: "Coming Soon" },
    { name: "Clothing Stores", icon: "👕" },
    { name: "Electronics", icon: "💻" },
    { name: "Footwear", icon: "👟" },
    { name: "Jewelry", icon: "💎" },
    { name: "Liquor Shops", icon: "🍷" },
    { name: "Restaurants", icon: "🍽️" },
    { name: "Bakeries", icon: "🍰" },
    { name: "Salons & Spas", icon: "💇" },
    { name: "Automobile Parts", icon: "🚗" },
    { name: "Sports Goods", icon: "⚽" },
    { name: "Pet Stores", icon: "🐾" },
    { name: "Gift Shops", icon: "🎁" },
    { name: "Book Stores", icon: "📚" },
    { name: "Toys & Games", icon: "🧸" },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
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
            <span className="text-orange-400 text-sm font-semibold">INDUSTRIES WE SERVE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Built for Every Business
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            From corner stores to enterprise chains, Aadhar POS adapts to your industry needs with
            specialized features and workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="p-6 rounded-xl bg-gray-50 dark:bg-slate-800/30 border border-gray-200 dark:border-slate-700/50 hover:border-orange-400/50 hover:bg-gray-50 dark:hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-all duration-300 backdrop-blur-sm">
                {industry.badge && (
                  <div className="absolute -top-2 -right-2 px-2 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold rounded-full">
                    {industry.badge}
                  </div>
                )}
                
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                
                <h3 className="text-gray-900 dark:text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">
                  {industry.name}
                </h3>
                
                <div className="mt-2 flex items-center text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs">✓ Optimized</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-slate-400 text-lg">
            ...and many more! Don't see your industry?{" "}
            <button className="text-orange-400 hover:text-cyan-300 font-semibold underline">
              Contact us
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
