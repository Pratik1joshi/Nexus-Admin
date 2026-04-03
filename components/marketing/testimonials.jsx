"use client"

import { motion } from "framer-motion"
import { TestimonialCard } from "@/components/ui/testimonial-card"

export default function Testimonials() {
  const testimonials = [
    {
      author: {
        name: "Ramesh Shrestha",
        handle: "Owner, Shrestha Pasal",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      },
      text: "My store profit increased by 17% in just 3 months! The inventory management is a game changer.",
    },
    {
      author: {
        name: "Sita Gurung",
        handle: "Manager, Beauty Corner",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      },
      text: "Inventory management became super easy. No more stock-outs! The low stock alerts are perfect.",
    },
    {
      author: {
        name: "Bikash Thapa",
        handle: "Owner, Mobile Galaxy",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      },
      text: "The AI insights actually help in buying the right stock. Game changer for my mobile shop!",
    },
    {
      author: {
        name: "Anjali Rai",
        handle: "Owner, Fashion Hub",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      },
      text: "Billing is 10x faster. My customers love the speed! Queue time reduced dramatically.",
    },
    {
      author: {
        name: "Sunil Tamang",
        handle: "Owner, Tamang Electronics",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      },
      text: "Cloud sync means I can manage my 3 stores from anywhere. Absolutely brilliant feature!",
    },
    {
      author: {
        name: "Dr. Maya Karki",
        handle: "Owner, HealthPlus Pharmacy",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      },
      text: "Best decision for my pharmacy. Reports are crystal clear and help me make better decisions!",
    },
    {
      author: {
        name: "Binod Adhikari",
        handle: "Owner, Hardware Corner",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      },
      text: "The support team is amazing. They helped me set up in 1 day! Very responsive and helpful.",
    },
    {
      author: {
        name: "Kamala Basnet",
        handle: "Owner, Gift Gallery",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      },
      text: "Multi-channel sales made easy. Online + offline in one place! Perfect for modern retail.",
    },
  ]

  return (
    <section className="py-12 sm:py-24 md:py-32 px-0 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 sm:gap-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 px-4 sm:gap-8 text-center"
        >
          <div className="inline-block mb-2 px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full">
            <span className="text-amber-400 text-sm font-semibold">TESTIMONIALS</span>
          </div>
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight text-gray-900 dark:text-white">
            Loved by{" "}
            <span className="bg-gradient-to-r from-amber-400 to-purple-600 bg-clip-text text-transparent">
              Many
            </span>{" "}
            Retailers
          </h2>
          <p className="text-md max-w-[600px] font-medium text-gray-600 dark:text-slate-400 sm:text-xl">
            Real stories from real businesses that transformed with Aadhar POS
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            {/* Duplicate the marquee content for seamless infinite loop */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={`set1-${i}`} {...testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={`set2-${i}`} {...testimonial} />
              ))}
            </div>
          </div>

          {/* Gradient overlays - reduced from w-1/3 to w-1/6 */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/6 bg-gradient-to-r from-white dark:from-slate-950 sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/6 bg-gradient-to-l from-white dark:from-slate-950 sm:block" />
        </div>

        {/* Bottom stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
        >
          <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-slate-800/30 border border-gray-200 dark:border-slate-700/50">
            <div className="text-4xl font-bold text-amber-400 mb-2">4.9/5</div>
            <div className="text-gray-600 dark:text-slate-400">Average Rating</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-slate-800/30 border border-gray-200 dark:border-slate-700/50">
            <div className="text-4xl font-bold text-orange-400 mb-2">98%</div>
            <div className="text-gray-600 dark:text-slate-400">Customer Satisfaction</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-slate-800/30 border border-gray-200 dark:border-slate-700/50">
            <div className="text-4xl font-bold text-purple-400 mb-2">10K+</div>
            <div className="text-gray-600 dark:text-slate-400">Happy Retailers</div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
