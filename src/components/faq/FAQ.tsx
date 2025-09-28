'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What is Tradewiz?",
    answer: "Tradewiz is a platform dedicated to providing educational content about swing trading in equities and stocks. We aim to empower individuals with knowledge and insights to enhance their trading skills."
  },
  {
    question: "Is Tradewiz registered with SEBI?",
    answer: "No, Tradewiz is not registered with the Securities and Exchange Board of India (SEBI). We do not provide any buy or sell recommendations or investment advisory services."
  },
  {
    question: "What kind of content does Tradewiz provide?",
    answer: "Tradewiz offers a variety of educational content including articles, videos, webinars, and community discussions focused on swing trading strategies, market analysis, and trading psychology."
  },
  {
    question: "How can I benefit from Tradewiz?",
    answer: "By utilizing Tradewiz's resources, users can deepen their understanding of trading concepts, learn from industry insights, and engage with a community of like-minded traders."
  },
  {
    question: "Are there any fees to use Tradewiz?",
    answer: "Yes, Tradewiz charges fees for access to premium educational content. These fees are strictly for educational purposes and are non-refundable."
  }
]

const FAQ = React.memo(function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-8 bg-gradient-to-br from-aliceblue-100 to-white-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight mb-2">
            <span className="text-gray-900 font-extrabold tracking-tight">
              Frequently Asked{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent font-extrabold tracking-tight">
              Questions
            </span>
          </h2>
          <p className="text-sm text-gray-700">
            Quick answers to common questions
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white border rounded-lg overflow-hidden shadow-sm transition-all duration-300 ${
                openIndex === index 
                  ? 'border-blue-500 shadow-blue-100' 
                  : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-4 py-2.5 text-left flex items-center justify-between transition-colors duration-200 border-none outline-none focus:outline-none focus:ring-0 ${
                  openIndex === index ? 'bg-transparent' : 'hover:bg-gray-50'
                }`}
              >
                <h3 className="text-sm font-bold text-gray-900 pr-3">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-4 h-4 text-gray-700" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-2">
                      <p className="text-xs text-gray-800 leading-snug">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default FAQ