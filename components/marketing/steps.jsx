"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function Steps() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  const steps = [
    {
      number: 1,
      title: "Install AADHAR Hisab",
      description: "Download and set up in under a minute. No complex configuration needed.",
    },
    {
      number: 2,
      title: "Add products or scan barcodes",
      description: "Import your catalog or simply scan items to build your inventory instantly.",
    },
    {
      number: 3,
      title: "Start billing immediately",
      description: "You're ready to go. Create invoices and accept payments right away.",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowH = window.innerHeight
      const sectionH = rect.height

      // progress 0 → 1 as the section scrolls through
      const scrolled = windowH * 0.6 - rect.top
      const total = sectionH
      const p = Math.max(0, Math.min(1, scrolled / total))
      setProgress(p)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Map progress to which step is "reached"
  // 0–0.33 → step 1, 0.33–0.66 → step 2, 0.66–1 → step 3
  const getStepProgress = (stepIndex) => {
    const segmentSize = 1 / steps.length
    const start = stepIndex * segmentSize
    const p = (progress - start) / segmentSize
    return Math.max(0, Math.min(1, p))
  }

  // Line progress between steps (0–1 for line after step i)
  const getLineProgress = (lineIndex) => {
    const segmentSize = 1 / steps.length
    const start = (lineIndex + 0.5) * segmentSize
    const end = (lineIndex + 1) * segmentSize
    const p = (progress - start) / (end - start)
    return Math.max(0, Math.min(1, p))
  }

  return (
    <section
      ref={sectionRef}
      className="py-28 px-4 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Get started in{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              minutes.
            </span>
          </h2>
        </motion.div>

        {/* Steps with connecting lines */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-16 md:gap-0">
          {steps.map((step, i) => {
            const reached = getStepProgress(i) > 0.3
            const lineP = i < steps.length - 1 ? getLineProgress(i) : 0

            return (
              <div key={step.number} className="relative flex-1 flex flex-col items-center">
                {/* Connecting line to next step (horizontal on desktop, vertical on mobile) */}
                {i < steps.length - 1 && (
                  <>
                    {/* Desktop horizontal line */}
                    <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-[3px]">
                      {/* Track */}
                      <div className="absolute inset-0 bg-gray-200 dark:bg-slate-700 rounded-full" />
                      {/* Filled */}
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${lineP * 100}%` }}
                      />
                      {/* Glow dot at end of line */}
                      {lineP > 0 && lineP < 1 && (
                        <div
                          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50"
                          style={{ left: `${lineP * 100}%` }}
                        />
                      )}
                    </div>

                    {/* Mobile vertical line */}
                    <div className="md:hidden absolute top-[72px] left-7 w-[3px] h-[calc(100%+32px)]">
                      <div className="absolute inset-0 bg-gray-200 dark:bg-slate-700 rounded-full" />
                      <div
                        className="absolute inset-x-0 top-0 bg-gradient-to-b from-orange-400 to-amber-500 rounded-full transition-all duration-300 ease-out"
                        style={{ height: `${lineP * 100}%` }}
                      />
                    </div>
                  </>
                )}

                {/* Step circle */}
                <div
                  className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-500 ${
                    reached
                      ? "bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-lg shadow-orange-400/30 scale-110"
                      : "bg-gray-200 dark:bg-slate-700 text-gray-400 dark:text-slate-500"
                  }`}
                >
                  {reached ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>

                {/* Text */}
                <div
                  className={`mt-6 text-center transition-all duration-500 max-w-[220px] ${
                    reached ? "opacity-100 translate-y-0" : "opacity-40 translate-y-2"
                  }`}
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
