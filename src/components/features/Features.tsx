'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Target, Video, ClipboardList, Search, Zap, MessageCircle, BarChart3, Brain, Users } from 'lucide-react'
import { 
  entranceAnimations, 
  hoverAnimations, 
  tapAnimations, 
  containerAnimations 
} from '@/lib/animations'

const features = [
  {
    icon: TrendingUp,
    title: "Proven Trading Strategies",
    description: "Access to the same strategies I use to generate asymmetric returns with low risk",
    iconColor: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    icon: Target,
    title: "Fast-Moving Identification",
    description: "Learn to spot explosive stocks and perfect entry timing",
    iconColor: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    icon: Video,
    title: "Video Lessons",
    description: "Step-by-step breakdowns of real trades and execution",
    iconColor: "text-gray-700",
    bgColor: "bg-gray-100"
  },
  {
    icon: ClipboardList,
    title: "Exclusive Watchlist",
    description: "Get curated updates to stay ahead of the market",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: Search,
    title: "Scanning Techniques",
    description: "Build your personalized watchlist with expert filters",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Zap,
    title: "Swing Trading",
    description: "Master short-term profits while keeping your day job",
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-50"
  },
  {
    icon: MessageCircle,
    title: "Live Monthly Q&As",
    description: "Get your questions answered in interactive sessions",
    iconColor: "text-gray-600",
    bgColor: "bg-gray-50"
  },
  {
    icon: BarChart3,
    title: "Technical Analysis",
    description: "Learn to spot key setups and read charts effectively",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Brain,
    title: "Mindset & Discipline",
    description: "Build psychological resilience for long-term success",
    iconColor: "text-pink-500",
    bgColor: "bg-pink-50"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with like-minded traders to grow together",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Target,
    title: "Market Analysis",
    description: "Master market conditions for optimal strategy selection",
    iconColor: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    icon: BarChart3,
    title: "Technical Analysis",
    description: "Learn to spot key setups and read charts effectively",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50"
  }
]

const Features = React.memo(function Features() {
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
        {/* Consistent Header */}
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
    Why Choose{' '}
  </span>
  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent font-black tracking-tight">
    Tradewiz
  </span>
</motion.h2>

         <motion.p
  className="text-xl sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed px-4 mb-8 sm:mb-12"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  viewport={{ once: true }}
>
  Get ready to level up your trading game.
</motion.p>
        </motion.div>

        {/* Premium card grid with unified animations */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8 max-w-4xl mx-auto px-4 sm:px-0"
          {...containerAnimations.cardContainer}
        >
          {features.slice(0, 12).map((feature, index) => (
            <motion.div
              key={index}
              {...entranceAnimations.scaleIn}
              transition={{ 
                ...entranceAnimations.scaleIn.transition,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              whileHover={hoverAnimations.cardHover}
              whileTap={tapAnimations.gentle}
              className="group relative"
            >
              {/* Responsive cards with better mobile layout */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-[88px] p-3 sm:p-4 border border-white/60 shadow-2xl shadow-black/5 hover:border-white/80 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] hover:bg-white transition-all duration-500 h-full min-h-[140px] sm:min-h-[120px] sm:aspect-square ring-1 ring-gray-100/20">

                <div className="flex flex-col items-center text-center h-full justify-center space-y-1 sm:space-y-2">
                  {/* Mini icon container */}
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${feature.bgColor} flex items-center justify-center mb-1 sm:mb-2 transition-all duration-200 group-hover:scale-105`}>
                    <feature.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${feature.iconColor}`} />
                  </div>

                  {/* Title with better mobile responsiveness */}
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1 sm:mb-2 leading-tight px-1">
                    {feature.title}
                  </h3>

                  {/* Description with better mobile sizing */}
                  <p className="text-[10px] sm:text-xs text-gray-600 leading-tight text-center px-1 line-clamp-3">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
})

export default Features