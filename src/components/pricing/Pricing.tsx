'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, LineChart, PieChart, Sparkles, Shield, Users, Zap } from 'lucide-react'
import { 
  containerAnimations 
} from '@/lib/animations'

const Pricing = React.memo(function Pricing() {
  const [isAnnually, setIsAnnually] = useState(false)

  const pricingPlans = [
    {
      name: "STOCKS",
      monthlyPrice: "₹2,999",
      annualPrice: "₹29,990",
      period: isAnnually ? "/year" : "/month",
      description: "Daily Swing & Breakout Trade Ideas (Equity & Futures)",
      features: [
        "Daily Swing & Breakout Trade Ideas (Equity & Futures)",
        "Investment Ideas - Short, Medium & Long-Term Opportunities",
        "Pre-Market Watchlist + Weekly Market Outlook",
        "Exclusive Stock Screeners - Advanced Filtering Tools",
        "Monthly Webinars & Group Discussions",
        "News Events & Economic Calendars"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600",
      icon: <LineChart className="w-8 h-8" />,
      whatsappMessage: "Hello%2C%20I%20want%20to%20join%20Stocks%20plan"
    },
    {
      name: "FOREX",
      monthlyPrice: "₹4,999",
      annualPrice: "₹49,990",
      period: isAnnually ? "/year" : "/month",
      description: "20+ Weekly Setups - Forex Trade Ideas (Major & Minor Pairs)",
      features: [
        "20+ Weekly Setups - Forex Trade Ideas (Major & Minor Pairs)",
        "Complete Trade Details - Entry, Stop-Loss, and Target Prices",
        "High Win-Rate Strategies (Up to 83%) - Educational Use Only",
        "Risk Management & Lot Sizing Guidance",
        "3500+ Pips Monthly Potential (For Tracking & Study)",
        "News Trading With the Community",
        "Weekly Market Review & Watchlist"
      ],
      popular: true,
      color: "from-blue-600 to-white",
      icon: <PieChart className="w-8 h-8" />,
      whatsappMessage: "Hello%2C%20I%20want%20to%20join%20Forex%20plan"
    },
    {
      name: "CRYPTO",
      monthlyPrice: "₹3,999",
      annualPrice: "₹39,990",
      period: isAnnually ? "/year" : "/month",
      description: "20+ Crypto Setups weekly (scalping, swing, trend reversal patterns)",
      features: [
        "20+ Crypto Setups weekly (scalping, swing, trend reversal patterns)",
        "Trade Breakdown - entries, SL, and target zones",
        "Weekly Watchlists & market sentiment analysis",
        "News-Based Sessions with real-time community chat",
        "Monthly Webinars on trading strategies and market cycles",
        "Community Discussions - Q&A and trade reviews"
      ],
      popular: false,
      color: "from-white to-blue-500",
      icon: <Sparkles className="w-8 h-8" />,
      whatsappMessage: "Hello%2C%20I%20want%20to%20join%20Crypto%20plan"
    }
  ]

  return (
    <section id="pricing" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 overflow-hidden">
      {/* Enhanced Background with Glassmorphism */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnightblue-950/95 via-black/90 to-midnightblue-900/95" />
        {/* Glassmorphism orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
          className="text-center mb-8 md:mb-10"
        >
          <motion.h2 
            className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl font-black font-display leading-tight mb-2 md:mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-white font-black tracking-tight">
              Choose Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-white to-blue-400 bg-clip-text text-transparent font-black tracking-tight">
              Trading Plan
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Join thousands of successful traders with proven strategies tailored to your trading style.
          </motion.p>
        </motion.div>

        {/* Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-full p-2 border border-white/10">
            <div className="flex items-center">
              <button
                onClick={() => setIsAnnually(false)}
                className={`px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  !isAnnually
                    ? 'bg-gradient-to-r from-blue-500 to-white text-black shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Quarterly
              </button>
              <button
                onClick={() => setIsAnnually(true)}
                className={`px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 relative ${
                  isAnnually
                    ? 'bg-gradient-to-r from-blue-500 to-white text-black shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Annually
                {isAnnually && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    SAVE 30%
                  </span>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
          {...containerAnimations.cardContainer}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative group transition-all duration-500 ${
                plan.popular 
                  ? 'lg:scale-110 lg:-mt-8 lg:mb-8 z-10' 
                  : 'lg:hover:scale-105 lg:mt-8'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold z-20">
                  Most Popular
                </div>
              )}

              <div className={`relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 h-full flex flex-col ${
                plan.popular 
                  ? 'border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-white/5' 
                  : 'border-white/10 group-hover:border-white/30 group-hover:bg-white/10'
              }`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${plan.color} rounded-2xl mb-4 text-black`}>
                    {plan.icon}
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-white mr-2">{plan.name}</span>
                  </div>
                  
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-4xl font-black bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
                      {isAnnually ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button 
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-white hover:from-blue-500 hover:to-blue-100 text-black shadow-2xl'
                      : 'border-2 border-blue-500 hover:bg-blue-500/10 text-white hover:border-white'
                  }`}
                  onClick={() => {
                    window.open(`https://wa.me/917011957726?text=${plan.whatsappMessage}`, '_blank')
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.popular ? 'Start Free Trial' : 'Choose Plan'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Benefits */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <div className="flex items-center space-x-2 text-green-400">
              <Shield className="w-5 h-5" />
              <span className="text-sm">7-Day Money Back</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center space-x-2 text-blue-400">
              <Users className="w-5 h-5" />
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center space-x-2 text-white">
              <Zap className="w-5 h-5" />
              <span className="text-sm">Instant Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Pricing