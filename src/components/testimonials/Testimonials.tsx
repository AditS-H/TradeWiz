'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sneha S.",
    location: "Delhi",
    rating: 5,
    text: "StoXify transformed how I view markets. The pre-market outlook gives me direction and group support keeps me disciplined.",
    date: "March 2024"
  },
  {
    name: "Alok Srivastava",
    location: "Varanashi",
    rating: 4,
    text: "I used to chase stocks randomly. After StoXify, I wait for breakout patterns with reduced risk and consistent profits.",
    date: "January 2024"
  },
  {
    name: "Mira K.", 
    location: "Chennai",
    rating: 5,
    text: "Monthly webinars are thorough—no fluff, just useful charts and setups. I learn something valuable every time.",
    date: "February 2024"
  },
  {
    name: "Vikram T.",
    location: "Hyderabad",
    rating: 5,
    text: "StoXify's sector rotation insights changed how I pick trades. I see patterns before they unfold like institutions!",
    date: "April 2024"
  },
  {
    name: "Priya N.",
    location: "Kolkata",
    rating: 4,
    text: "I felt lost before StoXify. Now I journal trades, follow SL/TP zones, and my mindset has grown stronger.",
    date: "December 2024"
  },
  {
    name: "Aditya M.",
    location: "Pune",
    rating: 5,
    text: "Community screeners saved me hours of scanning. Clean, logical setups perfect for balancing trading with full-time work.",
    date: "November 2024"
  },
  {
    name: "Tejasvi U.",
    location: "Jaipur",
    rating: 5,
    text: "I finally feel like a real trader. StoXify strategies gave me confidence to hold trades with logic, not emotion.",
    date: "October 2024"
  },
  {
    name: "Sachin V.",
    location: "Ahmedabad",
    rating: 4,
    text: "Trading used to stress me with indecision. Now StoXify ideas come with rationale—calming to follow proven structure.",
    date: "September 2024"
  },
  {
    name: "Neha G.",
    location: "Lucknow",
    rating: 5,
    text: "This community taught me to combine fundamentals with technical signals. I now enter trades with confidence.",
    date: "August 2024"
  },
  {
    name: "Rohit S.",
    location: "Noida",
    rating: 5,
    text: "StoXify's post-market recap sessions are gold. Reviewing trades against setups helped spot my mistake patterns.",
    date: "July 2024"
  },
  {
    name: "Anjali C.",
    location: "Goa",
    rating: 4,
    text: "Complete newbie to swing trading. Trade ideas explained so simply I understood chart patterns in days.",
    date: "June 2024"
  },
  {
    name: "Pranav D.",
    location: "Bhopal",
    rating: 5,
    text: "I've improved my trade execution so much. I now always wait for confirmation and I've doubled my average risk-reward ratio.",
    date: "May 2024"
  },
  {
    name: "Shweta L.",
    location: "Patna",
    rating: 5,
    text: "Economics and earnings calendars taught by StoXify make me plan better around key events. My trades feel safer and more informed.",
    date: "April 2025"
  },
  {
    name: "Amit J.",
    location: "Kochi",
    rating: 4,
    text: "StoXify helped me build consistency over chaos. I no longer flip charts aimlessly; I now follow a structured market outlook.",
    date: "March 2025"
  },
  {
    name: "Karthik A.",
    location: "Chennai",
    rating: 5,
    text: "StoXify's gold trading strategies changed the game for me. I used to fear gold volatility—now I embrace it with confidence.",
    date: "February 2025"
  },
  {
    name: "Poonam T.",
    location: "Bangalore",
    rating: 5,
    text: "The accuracy of the forex setups is unmatched. They follow a low-risk, high-reward system that actually works.",
    date: "January 2025"
  },
  {
    name: "Rishabh N.",
    location: "Delhi",
    rating: 4,
    text: "Live news trading during NFP and CPI events taught me how to stay calm and trade smart. That confidence is priceless.",
    date: "December 2024"
  },
  {
    name: "Zoya H.",
    location: "Hyderabad",
    rating: 5,
    text: "The CPI event session alone was worth the entire membership. It was like a live masterclass.",
    date: "November 2024"
  },
  {
    name: "Nitesh S.",
    location: "Mumbai",
    rating: 5,
    text: "Before StoXify, I never knew how to position myself around news events. Now I track pips and manage risk like a pro.",
    date: "October 2024"
  },
  {
    name: "Tanvi V.",
    location: "Pune",
    rating: 4,
    text: "The 3500+ pips monthly potential isn't just a claim—it's a result of well-researched, logical setups.",
    date: "September 2024"
  }
]

const Testimonials = React.memo(function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnightblue-950/95 via-black/90 to-midnightblue-900/95" />
      </div>

      {/* Premium Header - Contained */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
         <motion.h2 
  className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-black font-display leading-tight mb-2 md:mb-3"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
  viewport={{ once: true }}
>
  <span className="text-white font-black tracking-tight">
    Success{' '}
  </span>
  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-black tracking-tight">
    Stories
  </span>
</motion.h2>
          
         <motion.p 
  className="text-xl sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  viewport={{ once: true }}
>
  Real traders, real results. See how our community members have transformed their trading journey.
</motion.p>
        </motion.div>
      </div>

      {/* Full Width Scrolling Testimonials */}
      <div className="relative max-w-full overflow-hidden">
        {/* Desktop: Double Row Layout */}
        <div className="hidden sm:block space-y-6">
          {/* First Row - Left to Right */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 min-w-fit"
              animate={{
                x: [100, -100 * testimonials.slice(0, 10).length - 100]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: testimonials.slice(0, 10).length * 1.5,
                  ease: "linear"
                }
              }}
            >
              {/* First half testimonials */}
              {[...testimonials.slice(0, 10), ...testimonials.slice(0, 10)].map((testimonial, index) => (
                <motion.div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-72 sm:w-80"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-black/90 backdrop-blur-sm rounded-lg p-5 border border-slate-700/50 shadow-xl shadow-black/20 hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-500 min-h-[200px] flex flex-col">
                    
                    {/* Header with name and location */}
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-base font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-blue-400 font-medium">
                        {testimonial.location}
                      </p>
                    </div>

                    {/* Star Rating and Date */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${
                              i < testimonial.rating 
                                ? 'text-blue-400 fill-blue-400' 
                                : 'text-gray-600'
                            }`} 
                          />
                        ))}
                      </div>
                      <div className="text-xs text-gray-400 font-medium">
                        {testimonial.date}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-300 text-xs leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 min-w-fit"
              animate={{
                x: [-100 * testimonials.slice(10).length - 100, 100]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: testimonials.slice(10).length * 1.5,
                  ease: "linear"
                }
              }}
            >
              {/* Second half testimonials */}
              {[...testimonials.slice(10), ...testimonials.slice(10)].map((testimonial, index) => (
                <motion.div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-72 sm:w-80"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-black/90 backdrop-blur-sm rounded-lg p-5 border border-slate-700/50 shadow-xl shadow-black/20 hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-500 min-h-[200px] flex flex-col">
                    
                    {/* Header with name and location */}
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-base font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-blue-400 font-medium">
                        {testimonial.location}
                      </p>
                    </div>

                    {/* Star Rating and Date */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${
                              i < testimonial.rating 
                                ? 'text-blue-400 fill-blue-400' 
                                : 'text-gray-600'
                            }`} 
                          />
                        ))}
                      </div>
                      <div className="text-xs text-gray-400 font-medium">
                        {testimonial.date}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-300 text-xs leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile: Single Row Layout with Taller Cards */}
        <div className="block sm:hidden">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6 min-w-fit"
              animate={{
                x: [50, -100 * testimonials.length - 50]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: testimonials.length * 2,
                  ease: "linear"
                }
              }}
            >
              {/* All testimonials in single row for mobile */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={`mobile-${index}`}
                  className="flex-shrink-0 w-80"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.02 }}
                  viewport={{ once: true }}
                >
                  <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-black/90 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 shadow-xl shadow-black/20 hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-500 min-h-[280px] flex flex-col">
                    
                    {/* Header with name and location */}
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-blue-400 font-medium">
                        {testimonial.location}
                      </p>
                    </div>

                    {/* Star Rating and Date */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < testimonial.rating 
                                ? 'text-blue-400 fill-blue-400' 
                                : 'text-gray-600'
                            }`} 
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-400 font-medium">
                        {testimonial.date}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-300 text-sm leading-relaxed italic flex-grow">
                      "{testimonial.text}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Testimonials