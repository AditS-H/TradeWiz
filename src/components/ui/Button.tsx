'use client'

import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium font-display transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mediumslateblue-100/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-mediumslateblue-100 via-royalblue-200 to-royalblue-800 hover:from-mediumslateblue-300 hover:via-royalblue-400 hover:to-royalblue-700 text-white-100 shadow-lg shadow-mediumslateblue-100/25 hover:shadow-mediumslateblue-100/40 border border-mediumslateblue-100/20 transform hover:scale-105',
        secondary: 'bg-glass-dark border border-mediumslateblue-100/20 text-white-100 hover:bg-mediumslateblue-100/10 hover:border-mediumslateblue-100/40 backdrop-blur-xl',
        outline: 'border-2 border-white-300 text-white-100 hover:bg-white-100/10 hover:border-white-100/50 backdrop-blur-sm',
        ghost: 'text-white-100 hover:bg-mediumslateblue-100/10 hover:text-mediumslateblue-100',
        destructive: 'bg-gradient-to-r from-royalblue-200 to-mediumslateblue-300 text-white-100 hover:from-royalblue-400 hover:to-mediumslateblue-400 shadow-lg',
      },
      size: {
        sm: 'h-9 rounded-lg px-4 text-xs',
        md: 'h-11 px-6 py-3 text-sm',
        lg: 'h-14 rounded-xl px-8 py-4 text-base',
        xl: 'h-16 rounded-2xl px-12 py-5 text-lg',
        icon: 'h-11 w-11 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }