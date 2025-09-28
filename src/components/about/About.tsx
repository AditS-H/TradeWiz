'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { TrendingUp, BarChart3 } from 'lucide-react'

const About = React.memo(function About() {
  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 overflow-hidden">
      {/* Background - Same as Hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnightblue-950/95 via-black/90 to-midnightblue-900/95" />
      </div>


      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-center">
            {/* Center Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 text-center max-w-4xl"
            >
              {/* Main Heading */}
          <motion.h1
  className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl font-black text-white leading-tight"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  viewport={{ once: true }}
>
  Why Trade Alone When You Can{' '}
  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
    Learn And Grow
  </span>{' '}
  With Top Traders?
</motion.h1>

              {/* Description Text */}
            <motion.div
  className="space-y-4 text-gray-300"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  viewport={{ once: true }}
>
  <p className="text-xl leading-relaxed">
    Join our exclusive member's club and transform your trading journey. Learn proven strategies,
    get market insights, and connect with successful traders who share their expertise.
  </p>

  <p className="text-xl leading-relaxed">
    Stop trading in isolation. Start building wealth with a community that supports your growth
    and helps you make smarter trading decisions every day.
  </p>
</motion.div>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-xl border border-blue-500/30 hover:border-blue-400/60 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-500 shadow-2xl hover:shadow-blue-500/60 group text-sm sm:text-base
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:w-full before:h-full before:translate-x-[-200%] before:skew-x-12 hover:before:translate-x-[200%] before:transition-transform before:duration-[1800ms] before:ease-out
                  after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-400/0 after:via-blue-300/30 after:to-blue-400/0 after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-[1500ms] after:delay-300"
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing')
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    BECOME A MEMBER
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <TrendingUp className="w-4 h-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                    </motion.div>
                  </span>
                </motion.button>

                <motion.button
                  className="w-full sm:w-auto relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-xl border border-blue-500/30 hover:border-blue-400/60 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-500 shadow-2xl hover:shadow-blue-500/60 group text-sm sm:text-base
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:w-full before:h-full before:translate-x-[-200%] before:skew-x-12 hover:before:translate-x-[200%] before:transition-transform before:duration-[1800ms] before:ease-out
                  after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-400/0 after:via-blue-300/30 after:to-blue-400/0 after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-[1500ms] after:delay-300"
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing')
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    LEARN MORE
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <BarChart3 className="w-4 h-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                    </motion.div>
                  </span>
                </motion.button>

              </motion.div>

              {/* Social Proof */}
              <motion.div
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Profile Images - Real member avatars */}
                <div className="flex -space-x-3">
                  {[
                    { name: 'Arjun', image: '/images/man.jpeg' },
                    { name: 'Kavya', image: '/images/women.jpeg' },
                    { name: 'Rohit', image: '/images/owner.jpeg' },
                    { name: 'Ananya', image: '/images/Untitled.jpeg' }
                  ].map((member, i) => (
                    <div key={i} className="w-14 h-14 rounded-full border-3 border-white overflow-hidden shadow-lg hover:scale-110 transition-transform duration-200">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="text-white">
                  <span className="font-bold text-xl">10k+</span> <span className="text-gray-300">Active Members</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default About