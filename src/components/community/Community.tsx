'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  entranceAnimations, 
  hoverAnimations, 
  tapAnimations, 
  containerAnimations 
} from '@/lib/animations'

const Community = React.memo(function Community() {
  return (
    <section id="community" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 overflow-hidden">
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
    Join India's Smartest
  </span>
  <br />
  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent font-black tracking-tight">
    Traders & Investors
  </span>
</motion.h2>
          <motion.p
  className="text-xl sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed px-4 mb-8 sm:mb-12"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  viewport={{ once: true }}
>
  We have pioneered and disrupted community based trading & investing format where you trade, learn and collaborate with traders across India.
</motion.p>
        </motion.div>

        {/* 3D Card with Network Image */}
        <motion.div 
          className="flex justify-center max-w-sm mx-auto"
          {...containerAnimations.cardContainer}
        >
          <motion.div
            {...entranceAnimations.scaleIn}
            transition={{ 
              ...entranceAnimations.scaleIn.transition,
              delay: 0.3
            }}
            viewport={{ once: true }}
            whileHover={hoverAnimations.cardHover}
            whileTap={tapAnimations.gentle}
            className="group relative"
          >
            {/* 3D Card with shadows */}
            <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-white/60 shadow-2xl shadow-black/10 hover:border-white/80 hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.15)] hover:bg-white transition-all duration-500 ring-1 ring-gray-100/20 transform hover:-translate-y-2">
              
              {/* Network Image */}
              <motion.div
                className="mb-3 overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/images/build_strong_network_connections.jpg" 
                  alt="Build Strong Network Connections"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                  priority
                  quality={95}
                />
              </motion.div>

              {/* Text under image */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
                  Build A Strong Network & Connections
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Our community members come from various domains such as business, law, finance, technology, sports and investment banking.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default Community