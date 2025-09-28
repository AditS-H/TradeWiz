'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Lock, Eye, Database, Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import PageTransition from '@/components/ui/PageTransition'

const privacyPolicyData = [
  {
    title: "Information We Collect",
    content: "We collect information you provide directly to us, such as when you create an account, subscribe to our services, or contact us for support. This includes personal information like your name, email address, phone number, and payment information."
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotional offers."
  },
  {
    title: "Information Sharing and Disclosure",
    content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted service providers who assist us in operating our platform."
  },
  {
    title: "Data Security",
    content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure."
  },
  {
    title: "Cookies and Tracking Technologies",
    content: "We use cookies and similar tracking technologies to collect and use personal information about you. You can control the use of cookies at the individual browser level, but disabling cookies may limit your use of certain features."
  },
  {
    title: "Data Retention",
    content: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law."
  },
  {
    title: "Your Rights and Choices",
    content: "You have the right to access, update, or delete your personal information. You may also opt-out of certain communications from us. Contact us if you wish to exercise any of these rights."
  },
  {
    title: "International Data Transfers",
    content: "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your personal information in accordance with this privacy policy."
  },
  {
    title: "Children's Privacy",
    content: "Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If we learn that we have collected such information, we will take steps to delete it."
  },
  {
    title: "Changes to Privacy Policy",
    content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the effective date."
  }
]

export default function PrivacyPolicyPage() {
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
              <Lock className="w-4 h-4 text-green-400" />
              <span className="text-white text-sm font-medium">Privacy Protection</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display leading-tight mb-2">
              <span className="text-white font-extrabold tracking-tight">PRIVACY POLICY</span>
            </h1>

            <p className="text-sm text-gray-300 max-w-2xl mx-auto">
              Last updated: January 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compact Privacy Policy Content */}
      <section className="relative py-8 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Compact Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-green-900 mb-1">Your Privacy Matters</h3>
                  <p className="text-sm text-green-800 leading-snug">
                    We are committed to protecting your privacy and ensuring the security of your personal information.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Compact Privacy Policy Sections */}
          <div className="space-y-4">
            {privacyPolicyData.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-lg p-5 shadow-md border border-gray-200/60 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-700 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-gray-900 mb-2 leading-tight">
                        {section.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Data Protection Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-purple-900 mb-1">Data Protection Commitment</h3>
                  <p className="text-sm text-purple-800 leading-snug">
                    We comply with applicable data protection laws and follow industry best practices to safeguard your information. Your trust is our priority.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact for Privacy Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 text-center">
              <Mail className="w-6 h-6 text-blue-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Questions About Your Privacy?
              </h3>
              <p className="text-sm text-blue-800 leading-snug mb-4">
                If you have questions about this privacy policy or how we handle your data, please don't hesitate to contact us.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Privacy Team
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