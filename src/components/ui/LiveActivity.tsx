'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, TrendingDown, Users, DollarSign } from 'lucide-react'

interface ActivityItem {
  id: string
  type: 'trade' | 'join' | 'profit'
  user: string
  amount?: string
  stock?: string
  time: string
  profit?: boolean
}

const activities: ActivityItem[] = [
  { id: '1', type: 'trade', user: 'Rajesh M.', stock: 'RELIANCE', amount: '₹2.3L', time: '2m ago', profit: true },
  { id: '2', type: 'join', user: 'Priya S.', time: '3m ago' },
  { id: '3', type: 'profit', user: 'Amit P.', amount: '₹87K', time: '5m ago', profit: true },
  { id: '4', type: 'trade', user: 'Sneha R.', stock: 'TCS', amount: '₹1.6L', time: '7m ago', profit: true },
  { id: '5', type: 'join', user: 'Vikram K.', time: '8m ago' },
  { id: '6', type: 'profit', user: 'Kavya N.', amount: '₹43K', time: '12m ago', profit: true },
  { id: '7', type: 'trade', user: 'Rohit B.', stock: 'HDFC', amount: '₹95K', time: '15m ago', profit: true },
  { id: '8', type: 'join', user: 'Ananya T.', time: '18m ago' },
]

export default function LiveActivity() {
  const [currentActivities, setCurrentActivities] = useState<ActivityItem[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Initialize with first few activities
    setCurrentActivities(activities.slice(0, 3))

    // Cycle through activities every 4 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % activities.length
        setCurrentActivities(activities.slice(nextIndex, nextIndex + 3))
        return nextIndex
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const getActivityIcon = (type: string, profit?: boolean) => {
    switch (type) {
      case 'trade':
        return profit ? TrendingUp : TrendingDown
      case 'join':
        return Users
      case 'profit':
        return DollarSign
      default:
        return TrendingUp
    }
  }

  const getActivityColor = (type: string, profit?: boolean) => {
    switch (type) {
      case 'trade':
        return profit ? 'text-green-500' : 'text-red-500'
      case 'join':
        return 'text-blue-500'
      case 'profit':
        return 'text-green-500'
      default:
        return 'text-green-500'
    }
  }

  const getActivityMessage = (activity: ActivityItem) => {
    switch (activity.type) {
      case 'trade':
        return `${activity.user} made ${activity.amount} on ${activity.stock}`
      case 'join':
        return `${activity.user} joined the community`
      case 'profit':
        return `${activity.user} booked profit of ${activity.amount}`
      default:
        return ''
    }
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 w-80 max-w-sm">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">Live Activity</span>
        </div>
        
        <div className="space-y-3">
          <AnimatePresence mode="wait">
            {currentActivities.map((activity, index) => {
              const Icon = getActivityIcon(activity.type, activity.profit)
              const colorClass = getActivityColor(activity.type, activity.profit)
              
              return (
                <motion.div
                  key={`${activity.id}-${currentIndex}`}
                  initial={{ opacity: 0, x: -20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center ${colorClass}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800 font-medium truncate">
                      {getActivityMessage(activity)}
                    </p>
                    <p className="text-xs text-gray-500">
                      {activity.time}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-200/50">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>2,847 traders online</span>
            <span>₹12.3L made today</span>
          </div>
        </div>
      </div>
    </div>
  )
}