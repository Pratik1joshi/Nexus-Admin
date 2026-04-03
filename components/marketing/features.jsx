"use client"

import { useEffect, useRef, useState } from "react"

export default function Features({ scrollProgress }) {
  const [visibleFeatures, setVisibleFeatures] = useState(0)
  const featuresRef = useRef(null)

  const features = [
    {
      title: "Lightning Fast",
      description: "Process transactions in milliseconds with zero latency. Built for speed.",
      video: "/Lightning VFX.webm",
      gradient: "from-orange-400 to-blue-600",
    },
    {
      title: "AI-Powered Analytics",
      description: "Real-time insights into your sales, inventory, and customer behavior.",
      video: "/ai.webm",
      gradient: "from-pink-400 to-purple-600",
    },
    {
      title: "Cloud Synchronized",
      description: "Instant sync across all devices. Your data, everywhere, always.",
      video: "/cloud.webm",
      gradient: "from-orange-400 to-teal-600",
    },
    {
      title: "Enterprise Security",
      description: "Bank-level encryption. PCI-DSS compliant. Your customers are safe.",
      video: "/security.webm",
      gradient: "from-yellow-400 to-orange-600",
    },
    {
      title: "Multi-Channel",
      description: "Online, in-store, mobile. Sell anywhere, sync everywhere.",
      video: "/multichannel.webm",
      gradient: "from-pink-400 to-rose-600",
    },
    {
      title: "Custom Workflows",
      description: "Build your perfect checkout experience. No coding required.",
      video: "/Work flow Gear Animation.webm",
      gradient: "from-orange-400 to-indigo-600",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (featuresRef.current) {
        const rect = featuresRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const sectionTop = rect.top

        // Start showing features when section comes into view
        if (sectionTop < windowHeight * 0.8) {
          const scrollIntoSection = Math.max(0, windowHeight * 0.8 - sectionTop)
          const featureInterval = 150 // pixels to scroll before showing next feature
          const newVisibleCount = Math.min(features.length, Math.floor(scrollIntoSection / featureInterval) + 1)
          setVisibleFeatures(newVisibleCount)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [features.length])

  return (
    <section id="features" ref={featuresRef} className="py-24 px-4 bg-gray-50 dark:bg-slate-900/50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Unstoppable Features</h2>
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
            Everything you need to dominate your market. Built by retail experts, for retail experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group p-8 rounded-2xl bg-white/90 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 hover:border-orange-400/50 transition-all hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-orange-400/10 ${
                i < visibleFeatures ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              }`}
              style={{
                transition: `opacity 0.6s ease-out ${i * 0.1}s, transform 0.6s ease-out ${i * 0.1}s`,
              }}
            >
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-contain"
                >
                  <source src={feature.video} type="video/webm" />
                </video>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
