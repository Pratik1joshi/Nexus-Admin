"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "@/components/theme-provider"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            {/* Full logo on desktop, icon + text on mobile */}
            <Image 
              src="/LOGO_Icon_only.png" 
              alt="Aadhar" 
              width={200} 
              height={100} 
              className="hidden md:block h-10 w-auto" 
            />
            <Image src="/LOGO_NAME_ONLY.png" alt="Aadhar" width={200} height={466} className="hidden md:block h-10 w-auto " />
            <div className="flex items-center gap-2 md:hidden">
              <Image src="/LOGO_Icon_only.png" alt="Aadhar" width={36} height={36} className="w-9 h-9" />
              {/* <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                AADHAR
              </span> */}
              <Image src="/LOGO_NAME_ONLY.png" alt="Aadhar" width={36} height={36} className="w-12 h-10" />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/features" className="text-gray-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-medium">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-medium">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/careers" className="text-gray-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-medium">
              Careers
            </Link>
            <Link href="/docs" className="text-gray-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-medium">
              Docs
            </Link>


            <Link href="/get-started" className="px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/40 transition-all">
              Get Started
            </Link>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {/* Sun icon */}
              <svg
                className="w-5 h-5 text-amber-500 absolute transition-all duration-300 scale-0 dark:scale-100 rotate-90 dark:rotate-0"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {/* Moon icon */}
              <svg
                className="w-5 h-5 text-slate-700 absolute transition-all duration-300 scale-100 dark:scale-0 rotate-0 dark:rotate-90"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="relative w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              <svg className="w-4 h-4 text-amber-500 absolute transition-all duration-300 scale-0 dark:scale-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg className="w-4 h-4 text-slate-700 absolute transition-all duration-300 scale-100 dark:scale-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 px-4 py-4 space-y-2 transition-colors">
          <Link href="/" className="block text-gray-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 py-2 font-medium">
            Home
          </Link>
          <Link href="/features" className="block text-gray-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 py-2 font-medium">
            Features
          </Link>
          <Link href="/pricing" className="block text-gray-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 py-2 font-medium">
            Pricing
          </Link>
          <Link href="/blog" className="block text-gray-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 py-2 font-medium">
            Blog
          </Link>
          <Link href="/careers" className="block text-gray-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 py-2 font-medium">
            Careers
          </Link>
          <Link href="/docs" className="block text-gray-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 py-2 font-medium">
            Docs
          </Link>
          <Link href="/get-started" className="w-full px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full block text-center">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
