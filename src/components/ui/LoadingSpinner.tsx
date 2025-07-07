import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'white';
  className?: string;
}

/**
 * Modern Loading Spinner with sophisticated animations
 */
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'primary',
  className = "",
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'w-4 h-4';
      case 'md': return 'w-6 h-6';
      case 'lg': return 'w-8 h-8';
      case 'xl': return 'w-12 h-12';
      default: return 'w-6 h-6';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary': return 'text-primary-500';
      case 'secondary': return 'text-text-secondary';
      case 'white': return 'text-white';
      default: return 'text-primary-500';
    }
  };

  return (
    <motion.div
      className={`${getSizeClasses()} ${getVariantClasses()} ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
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
    </motion.div>
  );
};

/**
 * A simple skeleton loader for sections.
 */
export const SectionSkeletonLoader: React.FC<{className?: string}> = ({ className }) => {
  return (
    <div className={`container mx-auto px-4 py-16 md:py-20 lg:py-24 ${className}`}>
      <Skeleton className="h-12 w-1/2 mx-auto mb-8" />
      <Skeleton className="h-8 w-3/4 mx-auto mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Skeleton className="h-64" />
        <Skeleton className="h-64" />
        <Skeleton className="h-64" />
        <Skeleton className="h-64 md:hidden lg:block" />
        <Skeleton className="h-64 hidden md:block" />
        <Skeleton className="h-64 hidden md:block" />
      </div>
    </div>
  );
};

interface PulseLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'white';
  className?: string;
}

/**
 * Pulse Loader with multiple dots
 */
export const PulseLoader: React.FC<PulseLoaderProps> = ({
  size = 'md',
  variant = 'primary',
  className = "",
}) => {
  const getDotSize = () => {
    switch (size) {
      case 'sm': return 'w-2 h-2';
      case 'md': return 'w-3 h-3';
      case 'lg': return 'w-4 h-4';
      default: return 'w-3 h-3';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary': return 'bg-primary-500';
      case 'secondary': return 'bg-text-secondary';
      case 'white': return 'bg-white';
      default: return 'bg-primary-500';
    }
  };

  const dotVariants = {
    initial: { scale: 0.8, opacity: 0.5 },
    animate: { 
      scale: 1.2, 
      opacity: 1,
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${getDotSize()} ${getVariantClasses()} rounded-full`}
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: index * 0.2 }}
        />
      ))}
    </div>
  );
};

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

/**
 * Skeleton Loader for content placeholders
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  className = "",
  variant = 'rectangular',
  width,
  height,
  lines = 1,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'text': return 'h-4 rounded';
      case 'rectangular': return 'rounded';
      case 'circular': return 'rounded-full';
      default: return 'rounded';
    }
  };

  const pulseVariants = {
    initial: { opacity: 1 },
    animate: { 
      opacity: 0.5,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <motion.div
            key={index}
            className={`bg-surface-tertiary ${getVariantClasses()}`}
            style={{ 
              width: index === lines - 1 ? '75%' : '100%',
              height: height || 16
            }}
            variants={pulseVariants}
            initial="initial"
            animate="animate"
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={`bg-surface-tertiary ${getVariantClasses()} ${className}`}
      style={{ width, height }}
      variants={pulseVariants}
      initial="initial"
      animate="animate"
    />
  );
};

export default LoadingSpinner;