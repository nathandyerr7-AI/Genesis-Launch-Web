import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Enhanced button variants with sophisticated design system
 * Supports multiple visual styles, sizes, and interaction states
 */
const buttonVariants = cva(
  // Base styles - common to all button variants
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary disabled:pointer-events-none disabled:opacity-50 select-none transform-origin-center",
  {
    variants: {
      variant: {
        // Primary - Main call-to-action button
        default: "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-lg hover:shadow-xl hover:shadow-primary-500/25 focus-visible:ring-primary-500/50 hover:-translate-y-0.5 active:translate-y-0",
        
        // Destructive - For dangerous actions
        destructive: "bg-error-500 text-white hover:bg-error-600 active:bg-error-700 shadow-lg hover:shadow-xl hover:shadow-error-500/25 focus-visible:ring-error-500/50 hover:-translate-y-0.5 active:translate-y-0",
        
        // Outline - Secondary actions with borders
        outline: "border-2 border-surface-tertiary text-text-secondary hover:border-primary-500 hover:text-primary-400 hover:bg-primary-500/5 active:bg-primary-500/10 focus-visible:ring-primary-500/50",
        
        // Secondary - Alternative to primary
        secondary: "bg-surface-secondary text-text-primary hover:bg-surface-tertiary border border-surface-tertiary hover:border-surface-elevated shadow-md hover:shadow-lg focus-visible:ring-surface-elevated hover:-translate-y-0.5 active:translate-y-0",
        
        // Ghost - Minimal button for subtle actions
        ghost: "text-text-secondary hover:text-text-primary hover:bg-surface-secondary active:bg-surface-tertiary focus-visible:ring-surface-tertiary",
        
        // Link - Text-only button
        link: "text-primary-400 underline-offset-4 hover:underline hover:text-primary-300 focus-visible:ring-primary-500/50",
        
        // Gradient - Eye-catching gradient button
        gradient: "bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:from-primary-600 hover:to-accent-600 shadow-lg hover:shadow-xl hover:shadow-primary-500/20 focus-visible:ring-primary-500/50 hover:-translate-y-0.5 active:translate-y-0",
        
        // Glass - Sophisticated glass morphism effect
        glass: "backdrop-blur-md bg-white/5 border border-white/10 text-text-primary hover:bg-white/10 hover:border-white/20 shadow-lg hover:shadow-xl focus-visible:ring-white/30",
      },
      size: {
        // Size variants with consistent proportions
        sm: "h-9 px-4 py-2 text-sm gap-1.5",
        default: "h-11 px-6 py-3 text-sm gap-2",
        lg: "h-12 px-8 py-4 text-base gap-2.5",
        xl: "h-14 px-10 py-5 text-lg gap-3",
        
        // Icon-only buttons
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-8 w-8 p-0",
        "icon-lg": "h-12 w-12 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * If true, the button will render as a child component
   * This is useful for rendering the button as a link or other element
   */
  asChild?: boolean
  
  /**
   * Loading state - shows spinner and disables interaction
   */
  loading?: boolean
  
  /**
   * Icon to display before the button text
   */
  leftIcon?: React.ReactNode
  
  /**
   * Icon to display after the button text
   */
  rightIcon?: React.ReactNode
}

/**
 * Enhanced Button component with comprehensive design system support
 * 
 * Features:
 * - Multiple visual variants (primary, secondary, outline, ghost, etc.)
 * - Size variants (sm, default, lg, xl, icon sizes)
 * - Loading states with spinner
 * - Icon support (left/right positioning)
 * - Accessibility features (focus rings, screen reader support)
 * - Smooth animations and micro-interactions
 * 
 * @example
 * ```tsx
 * <Button variant="default" size="lg" loading={isLoading}>
 *   Save Changes
 * </Button>
 * 
 * <Button variant="outline" leftIcon={<Plus />}>
 *   Add Item
 * </Button>
 * 
 * <Button variant="ghost" size="icon">
 *   <X />
 * </Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Combine disabled state with loading state
    const isDisabled = disabled || loading
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading}
        {...props}
      >
        {/* Left icon or loading spinner */}
        {loading ? (
          <svg 
            className="w-4 h-4 animate-spin" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : leftIcon ? (
          <span className="flex-shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        ) : null}
        
        {/* Button content */}
        {children && (
          <span className={cn(
            "flex-1",
            // Hide text when loading and no explicit children spacing needed
            loading && !leftIcon && !rightIcon && "sr-only"
          )}>
            {children}
          </span>
        )}
        
        {/* Right icon */}
        {rightIcon && !loading && (
          <span className="flex-shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
        
        {/* Screen reader text for loading state */}
        {loading && (
          <span className="sr-only">Loading...</span>
        )}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
export type { ButtonProps }