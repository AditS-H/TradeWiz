'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, CheckCircle, TrendingUp } from 'lucide-react'

interface Notification {
  id: number
  name: string
  action: string
  location: string
  timestamp: number
}

const SAMPLE_USERS = [
  { name: "Rohit Sharma", location: "Mumbai" },
  { name: "Priya Patel", location: "Delhi" },
  { name: "Arjun Singh", location: "Bangalore" },
  { name: "Sneha Gupta", location: "Pune" },
  { name: "Vikash Kumar", location: "Hyderabad" },
  { name: "Anita Rao", location: "Chennai" },
  { name: "Rajesh Mehta", location: "Ahmedabad" },
  { name: "Pooja Sharma", location: "Kolkata" },
  { name: "Amit Agarwal", location: "Jaipur" },
  { name: "Kavya Nair", location: "Kochi" },
  { name: "Suresh Reddy", location: "Vijayawada" },
  { name: "Meera Joshi", location: "Indore" },
  { name: "Karan Malhotra", location: "Chandigarh" },
  { name: "Ritu Verma", location: "Lucknow" },
  { name: "Deepak Soni", location: "Surat" },
  { name: "Nisha Agrawal", location: "Nagpur" },
  { name: "Manish Goel", location: "Gurgaon" },
  { name: "Shruti Desai", location: "Vadodara" },
  { name: "Arun Tiwari", location: "Bhopal" },
  { name: "Divya Saxena", location: "Noida" }
]

const ACTIONS = [
  "just became a member",
  "joined the community",
  "upgraded to Pro plan", 
  "started learning with us",
  "joined our trading program",
  "became a premium member"
]

const JoinNotifications = React.memo(function JoinNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [notificationId, setNotificationId] = useState(0)

  const generateRandomNotification = (): Notification => {
    const randomUser = SAMPLE_USERS[Math.floor(Math.random() * SAMPLE_USERS.length)]
    const randomAction = ACTIONS[Math.floor(Math.random() * ACTIONS.length)]
    
    return {
      id: notificationId,
      name: randomUser.name,
      action: randomAction,
      location: randomUser.location,
      timestamp: Date.now()
    }
  }

  useEffect(() => {
    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(() => {
      const newNotification = generateRandomNotification()
      setNotifications([newNotification])
      setNotificationId(prev => prev + 1)
    }, 3000)

    // Then show notifications every 5 seconds
    const interval = setInterval(() => {
      const newNotification = generateRandomNotification()
      setNotifications(prev => {
        // Keep only the latest notification
        return [newNotification]
      })
      setNotificationId(prev => prev + 1)
    }, 5000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [notificationId])

  // Auto remove notifications after 4 seconds
  useEffect(() => {
    if (notifications.length > 0) {
      const timeoutId = setTimeout(() => {
        setNotifications([])
      }, 4000)

      return () => clearTimeout(timeoutId)
    }
  }, [notifications])

  return (
    <div className="fixed bottom-6 left-6 z-[9999] pointer-events-none">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ 
              opacity: 0, 
              x: -100, 
              scale: 0.8 
            }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              scale: 1 
            }}
            exit={{ 
              opacity: 0, 
              x: -100, 
              scale: 0.8 
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              duration: 0.4
            }}
            className="mb-3"
          >
            <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-xl shadow-xl shadow-gray-900/10 p-4 max-w-sm">
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-gray-900 text-sm truncate">
                      {notification.name}
                    </p>
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                  </div>
                  
                  <p className="text-gray-600 text-xs mb-2 leading-relaxed">
                    {notification.action}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Users className="w-3 h-3" />
                      <span className="text-xs">{notification.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-green-600">
                      <TrendingUp className="w-3 h-3" />
                      <span className="text-xs font-medium">+1</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <motion.div
                className="mt-3 h-1 bg-gray-100 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
})

export default JoinNotifications