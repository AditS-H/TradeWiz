'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

export default function Contact() {

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp Us",
      details: `+91 ${CONTACT_INFO.whatsapp.number}`,
      description: "Quick support via WhatsApp",
      action: () => window.open(CONTACT_INFO.whatsapp.url, '_blank')
    },
    {
      icon: Phone,
      title: "Call Us",
      details: `+91 ${CONTACT_INFO.phone}`,
      description: "Mon-Fri from 9am to 6pm",
      action: () => window.open(`tel:+91${CONTACT_INFO.phone}`, '_self')
    },
    {
      icon: Mail,
      title: "Email Us",
      details: CONTACT_INFO.email,
      description: "Send us an email anytime",
      action: () => window.open(`mailto:${CONTACT_INFO.email}`, '_self')
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Mumbai, Maharashtra",
      description: "India"
    }
  ]

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 overflow-hidden">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2
  className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-black font-display leading-tight mb-3 md:mb-4"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
  viewport={{ once: true }}
>
  <span className="text-gray-900 font-black tracking-tight">
    Contact{' '}
  </span>
  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-black tracking-tight">
    Us
  </span>
</motion.h2>

         <motion.p
  className="text-xl sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed px-4"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  viewport={{ once: true }}
>
  Have questions about our educational content? We're here to help you on your trading journey.
</motion.p>
        </motion.div>

        {/* Enhanced Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -12, 
                scale: 1.05,
                rotateY: 5,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }
              }}
              className="group relative"
            >
              <div 
                className={`relative bg-white backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group-hover:border-gray-200 h-full overflow-hidden ${info.action ? 'cursor-pointer' : ''}`}
                onClick={info.action}
              >
                
                {/* Professional overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-blue-50/0 group-hover:from-blue-50/20 group-hover:to-blue-50/30 transition-all duration-500 rounded-2xl"></div>

                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  {/* Enhanced Icon */}
                  <motion.div
                    className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl relative overflow-hidden"
                    whileHover={{ rotate: 8 }}
                  >
                    <div className="absolute inset-0 bg-blue-500/10 opacity-50 blur-md group-hover:opacity-70 transition-opacity duration-300"></div>
                    <info.icon className="relative w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>

                  {/* Enhanced Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                    {info.title}
                  </h3>

                  {/* Enhanced Details */}
                  <p className="text-blue-600 font-semibold mb-2 text-sm">
                    {info.details}
                  </p>

                  {/* Enhanced Description */}
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                    {info.description}
                  </p>

                  {/* Professional bottom accent */}
                  <div className="mt-4 w-10 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}