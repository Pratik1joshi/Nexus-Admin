"use client"

export default function CTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-gray-50 via-orange-50/50 to-gray-50 dark:from-slate-900 dark:via-cyan-900/20 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Ready to strengthen your business foundation?</h2>
        <p className="text-lg text-gray-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Join many forward-thinking retailers already using Aadhar. Risk-free 7-day trial.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-400 to-amber-500 text-slate-950 font-bold rounded-lg hover:shadow-2xl hover:shadow-orange-400/50 transition-all transform hover:scale-105">
            Start Your Free Trial
          </button>
          <button className="px-8 py-4 border-2 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white font-bold rounded-lg hover:border-orange-400 transition-all">
            Schedule a Demo
          </button>
        </div>

        <p className="text-sm text-gray-500 dark:text-slate-500 mt-6">No credit card required ⬢ 7 days free ⬢ Cancel anytime</p>
      </div>
    </section>
  )
}
