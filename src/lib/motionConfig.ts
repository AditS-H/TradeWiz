// Optimized motion configuration for better performance

// Reduced motion preferences
export const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Global motion configuration
export const motionConfig = {
  // Disable animations for users who prefer reduced motion
  transition: shouldReduceMotion() ? { duration: 0 } : undefined,
}

// Optimized animation variants - reuse these instead of creating new objects
export const optimizedAnimations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3 }
  },
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3 }
  }
}

// Optimized hover animations - lighter than the current ones
export const optimizedHovers = {
  gentle: {
    scale: 1.02,
    transition: { duration: 0.2 }
  },
  lift: {
    y: -4,
    transition: { duration: 0.2 }
  },
  glow: {
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
    transition: { duration: 0.2 }
  }
}

// Preload commonly used animations
export const preloadAnimations = () => {
  // This helps prevent animation jank by preloading transform properties
  if (typeof document !== 'undefined') {
    const style = document.createElement('style')
    style.textContent = `
      .will-change-transform { will-change: transform; }
      .will-change-opacity { will-change: opacity; }
      .will-change-auto { will-change: auto; }
    `
    document.head.appendChild(style)
  }
}