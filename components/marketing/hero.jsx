"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import POSMock from "./pos-mock"

export default function Hero() {
  return (
    <section className="relative pt-10 pb-20 px-4 overflow-hidden bg-gradient-to-b from-orange-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 min-h-screen flex items-center transition-colors duration-300">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 dark:opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 dark:opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            > */}
              {/* Full logo with name */}
              {/* <Image 
                src="/FULL_LOGO_NAME+ICON.png" 
                alt="Aadhar POS" 
                width={240} 
                height={80} 
                className="w-60 h-auto mb-4 drop-shadow-2xl" 
              />
            </motion.div> */}

            <div className="inline-block mb-6 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
              <span className="text-orange-500 dark:text-orange-400 text-sm font-semibold">TRANSFORM YOUR RETAIL</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              The foundation for 
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                your business
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-slate-400 mb-8 leading-relaxed">
              Aadhar POS is the most powerful, beautiful, and intuitive point-of-sale system built for the modern retail
              revolution. Lightning-fast transactions, stunning UI, and complete control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/get-started" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 text-center">
                Get Started →
              </Link>
              <button className="px-8 py-4 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-white font-bold rounded-lg hover:border-orange-400 hover:text-orange-500 dark:hover:text-orange-400 transition-all">
                Watch Demo
              </button>
            </div>

            {/* <div className="flex gap-8 pt-12 flex-wrap">
              <div>
                <div className="text-2xl font-bold text-orange-500 dark:text-orange-400">10M+</div>
                <div className="text-sm text-gray-500 dark:text-slate-400">Transactions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-500 dark:text-amber-400">99.9%</div>
                <div className="text-sm text-gray-500 dark:text-slate-400">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-500 dark:text-orange-400">500+</div>
                <div className="text-sm text-gray-500 dark:text-slate-400">Integrations</div>
              </div>
            </div> */}
          </div>

          {/* Right Column - Interactive POS System Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center md:min-h-[550px] lg:min-h-[650px]"
          >
            <POSMock />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
