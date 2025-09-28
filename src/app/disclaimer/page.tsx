'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, AlertTriangle, Info, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import PageTransition from '@/components/ui/PageTransition'
import { 
  hoverAnimations, 
  tapAnimations 
} from '@/lib/animations'

const disclaimerPoints = [
  "Investments in securities market are subject to market risks. Read all the related documents carefully before investing.",
  "Certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.",
  "The fees is paid for educational purposes only and is not refundable or cancellable under any circumstances.",
  "We do not provide any guaranteed profit or fixed returns or any other services. We charge fixed fees and do not operate on any profit sharing model.",
  "Images shared are for illustration purposes only.",
  "We are not responsible for any financial loss or any other loss incurred by the client.",
  "Please be fully informed about the risk and costs involved in trading and investing. Please consult your investment advisor before trading. Trade only as per your risk appetite and risk profile.",
  "Trading in options is risky due to its volatile nature. Upon accepting our service, you hereby accept that you fully understand the risks involved in trading.",
  "We advise the viewers to apply own discretion while referring testimonials shared by the client. Past performances and results are no guarantee of future performance.",
  "All recommendations shared are confidential and for the reference of paid members only."
]

export default function DisclaimerPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      {/* Navigation Header */}
      <nav className="relative bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/images/StoXifyLogo.PNG"
                  alt="StoXify Logo"
                  width={32}
                  height={32}
                  className="rounded-lg group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <span className="text-xl font-bold font-display bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                StoXify
              </span>
            </Link>

            {/* Home Button */}
            <Link href="/">
              <motion.div
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg transition-all duration-200 group"
                whileHover={hoverAnimations.scaleHover}
                whileTap={tapAnimations.gentle}
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
                <span className="text-sm font-medium">Back to Home</span>
              </motion.div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Compact Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-midnightblue-950/95 via-black/90 to-midnightblue-900/95" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-white text-sm font-medium">Legal Document</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display leading-tight mb-2">
              <span className="text-white font-extrabold tracking-tight">DISCLAIMER</span>
            </h1>

            <p className="text-sm text-gray-300 max-w-2xl mx-auto">
              Please read the following very carefully
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compact Disclaimer Content */}
      <section className="relative py-8 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Compact Warning Alert */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-amber-900 mb-1">Important Notice</h3>
                  <p className="text-sm text-amber-800 leading-snug">
                    This disclaimer contains crucial information about the risks and limitations of our services.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Compact Disclaimer Points */}
          <div className="space-y-3">
            {disclaimerPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200/60 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">{index + 1}</span>
                    </div>
                    <p className="text-gray-800 leading-snug text-sm">
                      {point}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Compact Final Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 text-center">
              <Info className="w-6 h-6 text-blue-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Questions About This Disclaimer?
              </h3>
              <p className="text-sm text-blue-800 leading-snug mb-4">
                Contact our support team if you need clarification on any point.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Support
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      </div>
    </PageTransition>
  )
}