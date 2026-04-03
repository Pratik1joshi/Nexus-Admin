"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Industries from "@/components/industries"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

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
      
      // Calculate active feature index
      const featureProgress = progress < 0.25 ? 0 : (progress - 0.25) / 0.75
      const currentIndex = Math.floor(featureProgress * features.length)
      setActiveFeatureIndex(Math.min(currentIndex, features.length - 1))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [features.length])

  // Calculate scale: starts at 3.5 (HUGE), shrinks to 0.5
  const titleScale = scrollProgress < 0.15 ? 3.5 - (scrollProgress / 0.15) * 3 : 0.5
  
  // Calculate Y position: moves up after shrinking
  const titleY = scrollProgress < 0.15 ? 0 : scrollProgress < 0.25 ? -((scrollProgress - 0.15) / 0.1) * 450 : -450
  
  // Calculate horizontal scroll for features
  const x = scrollProgress < 0.25 ? 0 : -((scrollProgress - 0.25) * features.length * 700)
  
  // Features opacity
  const featuresOpacity = scrollProgress < 0.25 ? 0 : Math.min(1, (scrollProgress - 0.25) / 0.05)

  // Background effects based on active feature
  const getBackgroundEffect = () => {
    const activeFeature = features[activeFeatureIndex]
    if (!activeFeature) return {}
    
    switch(activeFeature.icon) {
      case "⚡": // Lightning Fast
        return {
          background: 'radial-gradient(circle at center, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
          boxShadow: '0 0 200px rgba(14, 165, 233, 0.3) inset',
          animation: 'pulse 2s ease-in-out infinite'
        }
      case "🧠": // AI-Powered
        return {
          background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
          boxShadow: '0 0 200px rgba(168, 85, 247, 0.3) inset'
        }
      case "☁️": // Cloud
        return {
          background: 'radial-gradient(circle at center, rgba(20, 184, 166, 0.15) 0%, transparent 70%)',
          boxShadow: '0 0 200px rgba(20, 184, 166, 0.3) inset'
        }
      case "🔒": // Security
        return {
          background: 'radial-gradient(circle at center, rgba(251, 191, 36, 0.15) 0%, transparent 70%)',
          boxShadow: '0 0 200px rgba(251, 146, 60, 0.3) inset'
        }
      case "🌐": // Multi-Channel
        return {
          background: 'radial-gradient(circle at center, rgba(244, 63, 94, 0.15) 0%, transparent 70%)',
          boxShadow: '0 0 200px rgba(244, 63, 94, 0.3) inset'
        }
      case "🎯": // Custom Workflows
        return {
          background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          boxShadow: '0 0 200px rgba(99, 102, 241, 0.3) inset'
        }
      default:
        return {}
    }
  }

  return (
    <div ref={containerRef} className="h-[500vh] relative">
      <div 
        className="sticky top-0 h-screen overflow-hidden flex items-center justify-center transition-all duration-700"
        style={getBackgroundEffect()}
      >
        {/* Title Section */}
        <div
          style={{ 
            transform: `scale(${titleScale}) translateY(${titleY}px)`,
            transition: 'transform 0.1s ease-out'
          }}
          className="absolute z-20 pointer-events-none"
        >
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent whitespace-nowrap">
              Aadhar
            </div>
            <p className="text-xl md:text-2xl text-slate-300 whitespace-nowrap">The future of retail</p>
          </div>
        </div>

        {/* Horizontal Scrolling Features */}
        <div 
          style={{ opacity: featuresOpacity }}
          className="absolute inset-0 flex items-center overflow-hidden pt-32"
        >
          <div style={{ transform: `translateX(${x}px)`, transition: 'transform 0.1s ease-out' }} className="flex gap-8 pl-[50vw] pr-[50vw]">
            {features.map((feature, i) => {
              // Calculate which feature should be highlighted based on scroll
              const featureProgress = scrollProgress < 0.25 ? 0 : (scrollProgress - 0.25) / 0.75
              const currentFeatureIndex = Math.floor(featureProgress * features.length)
              const isActive = i === currentFeatureIndex
              
              return (
                <div
                  key={i}
                  style={{
                    opacity: isActive ? 1 : 0.3,
                    scale: isActive ? 1.05 : 0.95,
                    transition: 'opacity 0.3s ease-out, scale 0.3s ease-out'
                  }}
                  className="min-w-[600px] max-w-[600px] h-[450px] p-10 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-orange-400/50 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-orange-400/10 flex flex-col justify-center items-center"
                >
                  <div className="w-48 h-48 mb-6 flex items-center justify-center">
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
                  <h3 className="text-4xl font-bold text-white mb-4 text-center">{feature.title}</h3>
                  <p className="text-xl text-slate-400 text-center">{feature.description}</p>
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
  const containerRef = useRef(null)

  const features = [
    {
      title: "Lightning Fast",
      description: "Process transactions in milliseconds with zero latency. Built for speed.",
      icon: "⚡",
      video: "/Lightning VFX.webm",
      gradient: "from-orange-400 to-blue-600",
    },
    {
      title: "AI-Powered Analytics",
      description: "Real-time insights into your sales, inventory, and customer behavior.",
      icon: "🧠",
      video: "/ai.webm",
      gradient: "from-pink-400 to-purple-600",
    },
    {
      title: "Cloud Synchronized",
      description: "Instant sync across all devices. Your data, everywhere, always.",
      icon: "☁️",
      video: "/cloud.webm",
      gradient: "from-orange-400 to-teal-600",
    },
    {
      title: "Enterprise Security",
      description: "Bank-level encryption. PCI-DSS compliant. Your customers are safe.",
      icon: "🔒",
      video: "/security.webm",
      gradient: "from-yellow-400 to-orange-600",
    },
    {
      title: "Multi-Channel",
      description: "Online, in-store, mobile. Sell anywhere, sync everywhere.",
      icon: "🌐",
      video: "/multichannel.webm",
      gradient: "from-pink-400 to-rose-600",
    },
    {
      title: "Custom Workflows",
      description: "Build your perfect checkout experience. No coding required.",
      icon: "🎯",
      video: "/Work flow Gear Animation.webm",
      gradient: "from-orange-400 to-indigo-600",
    },
  ]

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <Hero />
      
      {/* Aadhar Section with Horizontal Scroll */}
      <AadharScrollSection features={features} />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Industries We Serve Section */}
      <Industries />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      {/* CTA Section - Simple without animation */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-900 via-orange-900/20 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to revolutionize your retail?
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Join thousands of forward-thinking retailers already using Aadhar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-started" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 text-center">
              Get Started Now
            </a>
            <button className="px-8 py-4 border-2 border-slate-600 text-white font-bold rounded-lg hover:border-orange-400 transition-all">
              Schedule a Demo
            </button>
          </div>

          <p className="text-sm text-slate-500 mt-6">
            Quick setup • Easy to use • 24/7 Support
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
