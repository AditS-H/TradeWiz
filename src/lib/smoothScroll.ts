// Butter-smooth scrolling utilities for enhanced user experience
// Implements smooth scrolling that feels like flowing water

export interface SmoothScrollOptions {
  duration?: number
  easing?: 'ease' | 'easeInOut' | 'easeOut' | 'linear' | 'butter' | 'silk' | 'river'
  offset?: number
  callback?: () => void
}

// Premium easing functions for butter-smooth scrolling
const easingFunctions = {
  linear: (t: number) => t,
  ease: (t: number) => t * t * (3 - 2 * t),
  easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeOut: (t: number) => t * (2 - t),
  // Custom smooth easing curves
  butter: (t: number) => 1 - Math.pow(1 - t, 3), // Butter-smooth cubic
  silk: (t: number) => t * t * t * (t * (6 * t - 15) + 10), // Silk-like smoothstep
  river: (t: number) => Math.sin((t * Math.PI) / 2) // River-like sine curve
}

/**
 * Smoothly scroll to a target element or position
 * @param target - Element, selector string, or Y position number
 * @param options - Scroll options for customization
 */
export function smoothScrollTo(
  target: Element | string | number,
  options: SmoothScrollOptions = {}
): Promise<void> {
  return new Promise((resolve) => {
    const {
      duration = 800,
      easing = 'river',
      offset = 0,
      callback
    } = options

    // Get target position
    let targetY: number
    
    if (typeof target === 'number') {
      targetY = target
    } else if (typeof target === 'string') {
      const element = document.querySelector(target)
      if (!element) {
        console.warn(`Element not found: ${target}`)
        resolve()
        return
      }
      targetY = element.getBoundingClientRect().top + window.pageYOffset
    } else {
      targetY = target.getBoundingClientRect().top + window.pageYOffset
    }

    // Add offset
    targetY -= offset

    const startY = window.pageYOffset
    const distance = targetY - startY
    let startTime: number | null = null

    // Check if smooth scrolling is supported and preferred
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      window.scrollTo(0, targetY)
      callback?.()
      resolve()
      return
    }

    // Animation function
    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      
      // Apply easing function
      const easedProgress = easingFunctions[easing](progress)
      const currentY = startY + (distance * easedProgress)
      
      window.scrollTo(0, currentY)
      
      if (progress < 1) {
        requestAnimationFrame(animation)
      } else {
        callback?.()
        resolve()
      }
    }

    requestAnimationFrame(animation)
  })
}

/**
 * Smoothly scroll to top of page
 */
export function smoothScrollToTop(options?: Omit<SmoothScrollOptions, 'offset'>): Promise<void> {
  return smoothScrollTo(0, { ...options, offset: 0 })
}

/**
 * Smoothly scroll to bottom of page
 */
export function smoothScrollToBottom(options?: SmoothScrollOptions): Promise<void> {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  return smoothScrollTo(maxScroll, options)
}

/**
 * Setup smooth scrolling for navigation links
 * Automatically handles anchor links with smooth scrolling
 */
export function initSmoothScrolling(options: SmoothScrollOptions = {}): void {
  // Handle anchor links
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const link = target.closest('a[href^="#"]') as HTMLAnchorElement
    
    if (!link) return
    
    const href = link.getAttribute('href')
    if (!href || href === '#') return
    
    e.preventDefault()
    
    const targetElement = document.querySelector(href)
    if (targetElement) {
      smoothScrollTo(targetElement, {
        duration: 600,
        easing: 'river',
        offset: 80, // Account for fixed header
        ...options
      })
    }
  })
}

/**
 * Intersection Observer for smooth scroll animations
 * Adds smooth entrance animations when elements come into view
 */
export function createScrollAnimationObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '-10% 0px -10% 0px',
    threshold: 0.1,
    ...options
  }

  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry)
      }
    })
  }, defaultOptions)
}

/**
 * Smooth parallax scrolling effect
 * Creates butter-smooth parallax animations
 */
export function createParallaxEffect(
  elements: NodeListOf<Element> | Element[],
  intensity: number = 0.5
): () => void {
  let ticking = false

  function updateParallax() {
    const scrollY = window.pageYOffset

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect()
      const speed = scrollY * intensity
      
      // Only apply transform if element is in viewport
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        (element as HTMLElement).style.transform = `translate3d(0, ${speed}px, 0)`
      }
    })

    ticking = false
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateParallax)
      ticking = true
    }
  }

  // Add scroll listener
  window.addEventListener('scroll', onScroll, { passive: true })

  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', onScroll)
  }
}

/**
 * Smooth scroll reveal animation
 * Reveals elements with butter-smooth animations as they enter viewport
 */
export function initScrollReveal(
  selector: string = '.lazy-load',
  options: SmoothScrollOptions = {}
): IntersectionObserver {
  const elements = document.querySelectorAll(selector)
  
  const observer = createScrollAnimationObserver((entry) => {
    const element = entry.target as HTMLElement
    element.classList.add('loaded')
    observer.unobserve(element)
  })

  elements.forEach((element) => {
    observer.observe(element)
  })

  return observer
}

/**
 * Throttled scroll event handler for performance
 */
export function throttledScroll(callback: () => void, delay: number = 16): () => void {
  let timeoutId: number | null = null
  let lastExecTime = 0

  function throttledFunction() {
    const currentTime = Date.now()

    if (currentTime - lastExecTime > delay) {
      callback()
      lastExecTime = currentTime
    } else {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = window.setTimeout(() => {
        callback()
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }

  return throttledFunction
}

/**
 * Smooth scroll to element with butter-like easing
 * Optimized for maximum smoothness
 */
export function butterScrollTo(element: Element | string, offset: number = 80): Promise<void> {
  return smoothScrollTo(element, {
    duration: 800,
    easing: 'butter',
    offset
  })
}

/**
 * River-like smooth scrolling - perfect for long content
 */
export function riverScrollTo(element: Element | string, offset: number = 80): Promise<void> {
  return smoothScrollTo(element, {
    duration: 1000,
    easing: 'river',
    offset
  })
}

/**
 * Silk-smooth scrolling - premium feel
 */
export function silkScrollTo(element: Element | string, offset: number = 80): Promise<void> {
  return smoothScrollTo(element, {
    duration: 600,
    easing: 'silk',
    offset
  })
}