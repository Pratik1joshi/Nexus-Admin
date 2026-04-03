"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/marketing/navbar"
import Hero from "@/components/marketing/hero"
import Features from "@/components/marketing/features"
import ProductFeatures from "@/components/marketing/how-it-works"
import Steps from "@/components/marketing/steps"
import Industries from "@/components/marketing/industries"
import Testimonials from "@/components/marketing/testimonials"
import Contact from "@/components/marketing/contact"
import Footer from "@/components/marketing/footer"
import CTA from "@/components/marketing/cta"
import LoadingScreen from "@/components/loading-screen"

function AadharScrollSection({ features }) {
  const containerRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const scrollStart = -rect.top
      const scrollEnd = rect.height - window.innerHeight
      const progress = Math.max(0, Math.min(1, scrollStart / scrollEnd))
      
      setScrollProgress(progress)
      
      const featureProgress = progress < 0.25 ? 0 : (progress - 0.25) / 0.75
      const currentIndex = Math.floor(featureProgress * features.length)
      setActiveFeatureIndex(Math.min(currentIndex, features.length - 1))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [features.length])

  const titleScale = scrollProgress < 0.15 ? 3.5 - (scrollProgress / 0.15) * 3 : 0.5
  const titleY = scrollProgress < 0.15 ? 0 : scrollProgress < 0.25 ? -((scrollProgress - 0.15) / 0.1) * 450 : -450
  const x = scrollProgress < 0.25 ? 0 : -((scrollProgress - 0.25) * features.length * 700)
  const featuresOpacity = scrollProgress < 0.25 ? 0 : Math.min(1, (scrollProgress - 0.25) / 0.05)

  return (
    <div ref={containerRef} className="h-[500vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <div
          style={{ 
            transform: `scale(${titleScale}) translateY(${titleY}px)`,
            transition: 'transform 0.1s ease-out'
          }}
          className="absolute z-20 pointer-events-none"
        >
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-bold mb-4 drop-shadow-lg bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent whitespace-nowrap">
              Aadhar
            </div>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-slate-300 whitespace-nowrap">The future of retail</p>
          </div>
        </div>

        <div style={{ opacity: featuresOpacity }} className="absolute inset-0 flex items-center overflow-hidden pt-32">
          <div style={{ transform: `translateX(${x}px)`, transition: 'transform 0.1s ease-out' }} className="flex gap-8 pl-[50vw] pr-[50vw]">
            {features.map((feature, i) => {
              const isActive = i === activeFeatureIndex
              return (
                <div
                  key={i}
                  style={{
                    opacity: isActive ? 1 : 0.3,
                    scale: isActive ? 1.05 : 0.95,
                    transition: 'opacity 0.3s ease-out, scale 0.3s ease-out'
                  }}
                  className="min-w-[600px] max-w-[600px] h-[450px] p-10 rounded-2xl bg-white/90 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 hover:border-orange-400/50 flex flex-col justify-center items-center"
                >
                  <div className="text-6xl mb-6"><video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-contain"
                >
                  <source src={feature.video} type="video/webm" />
                </video></div>
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">{feature.title}</h3>
                  <p className="text-xl text-gray-600 dark:text-slate-400 text-center">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true)
  const handleLoadingComplete = useCallback(() => setLoading(false), [])

  const features = [
    { title: "Lightning Fast", description: "Process transactions in milliseconds with zero latency. Built for speed.", video: "/Lightning VFX.webm"},
    { title: "AI-Powered Analytics", description: "Real-time insights into your sales, inventory, and customer behavior.", video: "/ai.webm" },
    { title: "Cloud Synchronized", description: "Instant sync across all devices. Your data, everywhere, always.", video: "/cloud.webm" },
    { title: "Enterprise Security", description: "Bank-level encryption. PCI-DSS compliant. Your customers are safe.", video: "/security.webm" },
    { title: "Multi-Channel", description: "Online, in-store, mobile. Sell anywhere, sync everywhere.", video: "/multichannel.webm"},
    { title: "Custom Workflows", description: "Build your perfect checkout experience. No coding required.", video: "/Work flow Gear Animation.webm"},
  ]

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <main className={`bg-gradient-to-b from-white via-gray-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300 ${loading ? "overflow-hidden h-screen" : ""}`}>
      <Navbar />
      <Hero />
      <AadharScrollSection features={features} />
      <ProductFeatures />
      <Steps />
      <Industries />
      <Testimonials />
      <Contact />
      {/* <section className="py-24 px-4 bg-gradient-to-r from-gray-50 via-orange-50/50 to-gray-50 dark:from-slate-900 dark:via-orange-900/20 dark:to-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Ready to revolutionize your retail?</h2>
          <p className="text-lg text-gray-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">Join thousands of forward-thinking retailers already using Aadhar.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-started" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 text-center">
              Get Started Now
            </a>
            <a href="/login" className="px-8 py-4 border-2 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white font-bold rounded-lg hover:border-orange-400 transition-all text-center">
              Admin Login
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-slate-500 mt-6">Quick setup {"\u2022"} Easy to use {"\u2022"} 24/7 Support</p>
        </div>
      </section> */}
      <CTA/>
      <Footer />
    </main>
    </>
  )
}
