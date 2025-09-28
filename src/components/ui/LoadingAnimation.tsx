'use client'

import { motion } from 'framer-motion'

interface LoadingAnimationProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

export default function LoadingAnimation({ 
  size = 'md', 
  color = '#3B82F6' 
}: LoadingAnimationProps) {
  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <motion.div
      className={`${sizeMap[size]} rounded-full border-2 border-gray-200`}
      style={{
        borderTopColor: color
      }}
      animate={{
        rotate: 360
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  )
}

// Simple pulse loading
export function PulseLoading() {
  return (
    <div className="flex items-center justify-center space-x-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-3 h-3 bg-blue-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  )
}