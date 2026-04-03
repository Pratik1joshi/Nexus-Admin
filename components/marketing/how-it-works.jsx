"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ProductFeatures() {
  const containerRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  const categories = [
    {
      number: 1,
      title: "Billing",
      description: "Lightning-fast invoicing with complete print support",
      video: "/Scan Matrix.webm",
      items: ["Barcode scanning", "Fast invoice", "Print support"],
    },
    {
      number: 2,
      title: "Inventory",
      description: "Full stock control with smart alerts and supplier tracking",
      video: "/Inventory.webm",
      items: ["Stock tracking", "Low stock alerts", "Supplier management"],
    },
    {
      number: 3,
      title: "Reports",
      description: "Crystal-clear insights into your business performance",
      video: "/Chart Grow Up.webm",
      items: ["Daily sales", "Monthly summary", "Profit overview"],
    },
    {
      number: 4,
      title: "Backup & Security",
      description: "Your data is encrypted, backed up, and always protected",
      video: "/security.webm",
      items: ["Encrypted cloud backup", "Easy restore", "License protection"],
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height

      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight * 0.5 - sectionTop) / sectionHeight))
        const stepIndex = Math.floor(scrollProgress * categories.length)
        setActiveStep(Math.max(0, Math.min(stepIndex, categories.length - 1)))
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [categories.length])

  return (
    <section ref={containerRef} className="min-h-[400vh] relative bg-white dark:bg-slate-950">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 opacity-50" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(251, 146, 60, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.06) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: activeStep >= 0 ? 1 : 0, y: activeStep >= 0 ? 0 : -50 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Everything your business needs.
            </h2>
            <p className="text-lg mt-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent font-semibold">
              Nothing it doesn&apos;t.
            </p>
          </motion.div>

          {/* Animated Steps */}
          <AnimatePresence mode="wait">
            {categories.map(
              (cat, index) =>
                activeStep === index && (
                  <motion.div
                    key={cat.number}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -50 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-amber-500/20 to-orange-600/20 blur-3xl rounded-full scale-150" />

                      <div className="relative flex flex-col items-center justify-center min-w-[500px]">
                        {/* Step Number */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                          className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg mb-4"
                        >
                          {cat.number}
                        </motion.div>

                        {/* Video Animation */}
                        <motion.div
                          initial={{ y: 50, opacity: 0, scale: 0.5 }}
                          animate={{ y: 0, opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          className="w-48 h-48 mb-6 flex items-center justify-center opacity-60"
                        >
                          <video autoPlay loop muted playsInline className="w-full h-full object-contain">
                            <source src={cat.video} type="video/webm" />
                          </video>
                        </motion.div>

                        {/* Title */}
                        <motion.h3
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                          className="text-4xl font-bold mb-3 text-center bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent"
                        >
                          {cat.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.45, duration: 0.5 }}
                          className="text-lg text-gray-700 dark:text-slate-300 text-center max-w-xl mb-6"
                        >
                          {cat.description}
                        </motion.p>

                        {/* Feature items */}
                        <div className="flex flex-wrap gap-3 justify-center">
                          {cat.items.map((item, j) => (
                            <motion.div
                              key={j}
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 + j * 0.1, duration: 0.4 }}
                              className="flex items-center gap-2 px-4 py-2 bg-orange-50 dark:bg-slate-800/80 border border-orange-200 dark:border-slate-600 rounded-full"
                            >
                              <svg
                                className="w-4 h-4 text-orange-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm font-medium text-gray-700 dark:text-slate-300">{item}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Progress dots */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className="flex gap-2 mt-8"
                        >
                          {categories.map((_, i) => (
                            <div
                              key={i}
                              className={`h-1 rounded-full transition-all duration-300 ${
                                i === activeStep ? "bg-orange-400 w-8" : "bg-gray-300 dark:bg-slate-600 w-6"
                              }`}
                            />
                          ))}
                        </motion.div>
                      </div>

                      {/* Floating particles */}
                      <motion.div
                        animate={{
                          y: [0, -30, 0],
                          x: [0, 20, 0],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-20 -right-20 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl"
                      />
                      <motion.div
                        animate={{
                          y: [0, 30, 0],
                          x: [0, -20, 0],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute -bottom-20 -left-20 w-28 h-28 bg-amber-500/20 rounded-full blur-2xl"
                      />
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
