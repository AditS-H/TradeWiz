export interface Feature {
  title: string
  description: string
  icon: string
  color: string
}

export interface PricingPlan {
  name: string
  duration: string
  price: number
  originalPrice: number
  popular: boolean
  features: string[]
}

export interface Testimonial {
  name: string
  role: string
  location: string
  image: string
  content: string
  profit: string
  duration: string
}

export interface Statistic {
  number: string
  label: string
  icon: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface FooterLink {
  title: string
  links: {
    name: string
    url: string
  }[]
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export interface CardProps {
  className?: string
  children: React.ReactNode
  variant?: 'default' | 'glass' | 'gradient'
}

export interface BadgeProps {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}