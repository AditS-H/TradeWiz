'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { pageTransitions } from '@/lib/animations'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      {...pageTransitions.fadeSlide}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  )
}