'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, TrendingUp, Shield, Star } from 'lucide-react'
import { 
  entranceAnimations
} from '@/lib/animations'

const CTA = React.memo(function CTA() {
  const handleJoinNow = () => {
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWatchStories = () => {
    const testimonialsSection = document.getElementById('testimonials')
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Blue Orbs Only */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          {...entranceAnimations.fadeInScale}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          {/* Hero-style Title */}
         <motion.h2
  className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-black font-display leading-tight mb-3 md:mb-4"
  {...entranceAnimations.heroTitle}
  transition={{ ...entranceAnimations.heroTitle.transition, delay: 0.2 }}
  viewport={{ once: true }}
>
  <span className="text-gray-900 font-black tracking-tight">
    Let's Grow and{' '}
  </span>
  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent font-black tracking-tight">
    Win Together
  </span>
</motion.h2>

         <motion.p
  className="text-xl sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed px-4 mb-8"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  viewport={{ once: true }}
>
  Ready to transform your trading journey? Join thousands of successful traders who've already 
  elevated their skills and profits with our proven strategies and supportive community.
</motion.p>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-gray-700">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-sm sm:text-base">10,000+ Active Members</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-sm sm:text-base">95% Success Rate</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-sm sm:text-base">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-sm sm:text-base">100% Educational</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Join Now Button */}
          <motion.button
            onClick={handleJoinNow}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-xl border border-blue-500/30 hover:border-blue-400/60 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-500 shadow-2xl hover:shadow-blue-500/60 flex items-center justify-center gap-3
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:w-full before:h-full before:translate-x-[-200%] before:skew-x-12 hover:before:translate-x-[200%] before:transition-transform before:duration-[1800ms] before:ease-out
            after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-400/0 after:via-blue-300/30 after:to-blue-400/0 after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-[1500ms] after:delay-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <Users className="w-5 h-5" />
              <span>Become a Member</span>
            </span>
          </motion.button>

          {/* Watch Members Stories Button */}
          <motion.button
            onClick={handleWatchStories}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-xl border border-blue-500/30 hover:border-blue-400/60 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-500 shadow-2xl hover:shadow-blue-500/60 flex items-center justify-center gap-3
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:w-full before:h-full before:translate-x-[-200%] before:skew-x-12 hover:before:translate-x-[200%] before:transition-transform before:duration-[1800ms] before:ease-out
            after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-400/0 after:via-blue-300/30 after:to-blue-400/0 after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-[1500ms] after:delay-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span>Watch Members Stories</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
})

export default CTA