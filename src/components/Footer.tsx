'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, HelpCircle, Shield, FileText, ExternalLink, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { CONTACT_INFO } from '@/lib/constants'

const navigationLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Community", href: "#community" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" }
]

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy", icon: Shield },
  { name: "Terms of Service", href: "#", icon: FileText },
  { name: "Disclaimer", href: "/disclaimer", icon: HelpCircle },
  { name: "Risk Warning", href: "#", icon: ExternalLink }
]

const contactInfo = [
  { icon: MessageCircle, text: `WhatsApp: +91 ${CONTACT_INFO.whatsapp.number}`, href: CONTACT_INFO.whatsapp.url },
  { icon: Phone, text: `Call: +91 ${CONTACT_INFO.phone}`, href: `tel:+91${CONTACT_INFO.phone}` },
  { icon: Mail, text: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { icon: MapPin, text: "Mumbai, Maharashtra, India", href: "#" }
]



const Footer = React.memo(function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnightblue-950/95 via-black/90 to-midnightblue-900/95" />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Brand & Description - Mobile: Takes full width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="col-span-2 lg:col-span-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <Image
                    src="/images/StoXifyLogo.PNG"
                    alt="StoXify Logo"
                    width={40}
                    height={40}
                    className="rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold font-display">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                   Tradewiz
                  </span>
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 lg:mb-0">
                India's premier trading education platform. Learn stocks, crypto, and forex trading with expert guidance and community support.
              </p>
            </motion.div>

            {/* Navigation Links - Mobile: Left column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="col-span-1"
            >
              <h4 className="text-white font-bold text-base lg:text-lg mb-4 lg:mb-6">Navigation</h4>
              <div className="space-y-3">
                {navigationLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Legal & Policies - Mobile: Right column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-1"
            >
              <h4 className="text-white font-bold text-base lg:text-lg mb-4 lg:mb-6">Legal</h4>
              <div className="space-y-3">
                {legalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact Information - Mobile: Full width second row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="col-span-2 lg:col-span-1"
            >
              <h4 className="text-white font-bold text-base lg:text-lg mb-4 lg:mb-6">Contact Us</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                      <contact.icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm">{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © 2024 Tradewiz. All rights reserved.
              </p>
              <div className="hidden md:block w-1 h-1 bg-gray-500 rounded-full"></div>
              <p className="text-gray-500 text-sm">
                Made with ❤️ in India
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
              <p className="text-gray-500 text-xs">
                Educational content only. Not investment advice.
              </p>
              <div className="hidden md:block w-1 h-1 bg-gray-500 rounded-full"></div>
              <p className="text-gray-500 text-xs">
                Trading involves risk of loss.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
})

export default Footer