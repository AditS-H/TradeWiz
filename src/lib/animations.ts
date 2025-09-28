// Unified Animation System for Premium UX
// Consistent timing, easing, and transitions across the entire app

export const ANIMATION_DURATIONS = {
  // Optimized durations for butter-smooth performance
  instant: 0.1,
  fast: 0.2,
  normal: 0.3,
  smooth: 0.4,
  slow: 0.6,
  slower: 0.8,
  slowest: 1.0 // Reduced for better UX
} as const

export const EASING = {
  // Premium easing curves optimized for smoothness
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  
  // Custom butter-smooth curves
  premium: [0.16, 1, 0.3, 1], // Ultra-smooth premium feel
  butter: [0.4, 0, 0.2, 1], // Butter-smooth easing
  silk: [0.25, 0.46, 0.45, 0.94], // Silk-like smoothness
  river: [0.4, 0.0, 0.2, 1], // Flowing like a river
  bouncy: [0.68, -0.55, 0.265, 1.55], // Subtle bounce
  anticipate: [0.175, 0.885, 0.32, 1.275], // Anticipation
  elastic: [0.68, -0.6, 0.32, 1.6] // Elastic feel
} as const

export const STAGGER = {
  // Optimized stagger timings for smooth cascading effects
  instant: 0.02,
  children: 0.08,
  cards: 0.12,
  items: 0.04,
  sections: 0.15,
  smooth: 0.1
} as const

// ===========================================
// ENTRANCE ANIMATIONS - Premium entrance patterns
// ===========================================

export const entranceAnimations = {
  // Butter-smooth fade entrance with scale
  fadeInScale: {
    initial: { opacity: 0, scale: 0.96, y: 15 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: {
      duration: ANIMATION_DURATIONS.smooth,
      ease: EASING.butter,
      type: "spring" as const,
      stiffness: 140,
      damping: 20
    }
  },

  // River-like slide from bottom
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: ANIMATION_DURATIONS.smooth,
      ease: EASING.river,
      type: "spring" as const,
      stiffness: 150,
      damping: 22
    }
  },

  // Silk-smooth slide from left
  slideInLeft: {
    initial: { opacity: 0, x: -25 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASING.silk,
      type: "spring" as const,
      stiffness: 160,
      damping: 22
    }
  },

  // Silk-smooth slide from right
  slideInRight: {
    initial: { opacity: 0, x: 25 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASING.silk,
      type: "spring" as const,
      stiffness: 160,
      damping: 22
    }
  },

  // Butter-smooth scale entrance for cards
  scaleIn: {
    initial: { opacity: 0, scale: 0.94 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASING.butter,
      type: "spring" as const,
      stiffness: 170,
      damping: 25
    }
  },

  // Majestic hero title animation
  heroTitle: {
    initial: { opacity: 0, y: 25, scale: 0.92 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: EASING.premium,
      type: "spring" as const,
      stiffness: 120,
      damping: 18
    }
  }
}

// ===========================================
// HOVER ANIMATIONS - Premium hover states
// ===========================================

export const hoverAnimations = {
  // Butter-smooth lift for cards
  cardHover: {
    y: -6,
    scale: 1.015,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASING.butter,
      type: "spring" as const,
      stiffness: 450,
      damping: 28
    }
  },

  // River-smooth button hover
  buttonHover: {
    scale: 1.03,
    y: -1.5,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASING.river,
      type: "spring" as const,
      stiffness: 420,
      damping: 30
    }
  },

  // Silk-smooth icon rotation
  iconHover: {
    rotate: 360,
    transition: {
      duration: ANIMATION_DURATIONS.smooth,
      ease: EASING.silk
    }
  },

  // Gentle scale for interactive elements
  scaleHover: {
    scale: 1.05,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASING.butter,
      type: "spring" as const,
      stiffness: 350,
      damping: 25
    }
  },

  // Enhanced glow effect
  glowHover: {
    boxShadow: "0 0 25px rgba(31, 105, 255, 0.4)",
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASING.silk
    }
  }
}

// ===========================================
// TAP ANIMATIONS - Premium tap feedback
// ===========================================

export const tapAnimations = {
  scale: {
    scale: 0.95,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASING.premium
    }
  },

  gentle: {
    scale: 0.98,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASING.premium
    }
  }
}

// ===========================================
// CONTAINER ANIMATIONS - For staggered children
// ===========================================

export const containerAnimations = {
  // Standard container with stagger
  staggerContainer: {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: STAGGER.children,
        delayChildren: 0.1
      }
    }
  },

  // Premium staggered cards
  cardContainer: {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: STAGGER.cards,
        delayChildren: 0.2
      }
    }
  },

  // Fast stagger for items
  itemContainer: {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: STAGGER.items,
        delayChildren: 0.1
      }
    }
  }
}

// ===========================================
// PAGE TRANSITIONS - Smooth page changes
// ===========================================

export const pageTransitions = {
  fadeSlide: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASING.premium
    }
  }
}

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

// Create staggered animation with custom delay
export const createStagger = (baseAnimation: Record<string, unknown>, delay: number) => ({
  ...baseAnimation,
  transition: {
    ...(baseAnimation.transition as Record<string, unknown>),
    delay
  }
})

// Create responsive animation that adapts to screen size
export const createResponsiveAnimation = (desktop: Record<string, unknown>, mobile: Record<string, unknown>) => {
  return {
    ...desktop,
    "@media (max-width: 768px)": mobile
  }
}

// Premium loading animation
export const loadingAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASING.premium,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
}