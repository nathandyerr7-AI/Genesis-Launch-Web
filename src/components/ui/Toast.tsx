import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastContextType {
  showToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

/**
 * Toast Provider Component for managing toast notifications
 */
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (toastData: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const toast: Toast = {
      id,
      duration: 5000,
      ...toastData,
    };

    setToasts(prev => [...prev, toast]);

    // Auto remove toast after duration
    if (toast.duration && toast.duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, toast.duration);
    }
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const getToastIcon = (type: Toast['type']) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-5 h-5" />;
      case 'error': return <AlertCircle className="w-5 h-5" />;
      case 'warning': return <AlertTriangle className="w-5 h-5" />;
      case 'info': return <Info className="w-5 h-5" />;
    }
  };

  const getToastClasses = (type: Toast['type']) => {
    switch (type) {
      case 'success':
        return 'bg-success-500/10 border-success-500/30 text-success-400';
      case 'error':
        return 'bg-error-500/10 border-error-500/30 text-error-400';
      case 'warning':
        return 'bg-warning-500/10 border-warning-500/30 text-warning-400';
      case 'info':
        return 'bg-primary-500/10 border-primary-500/30 text-primary-400';
    }
  };

  const toastVariants = {
    hidden: { 
      opacity: 0, 
      x: 300, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      x: 300, 
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      
      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-toast space-y-3 max-w-sm w-full">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              variants={toastVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`
                relative p-4 rounded-xl border backdrop-blur-md shadow-dark-lg
                ${getToastClasses(toast.type)}
              `}
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className="flex-shrink-0 mt-0.5">
                  {getToastIcon(toast.type)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-text-primary text-sm mb-1">
                    {toast.title}
                  </h4>
                  {toast.message && (
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {toast.message}
                    </p>
                  )}
                  
                  {/* Action Button */}
                  {toast.action && (
                    <button
                      onClick={toast.action.onClick}
                      className="mt-2 text-sm font-medium hover:underline transition-colors duration-200"
                    >
                      {toast.action.label}
                    </button>
                  )}
                </div>

                {/* Close Button */}
                <button
                  onClick={() => removeToast(toast.id)}
                  className="flex-shrink-0 text-text-tertiary hover:text-text-primary transition-colors duration-200 p-1 rounded-md hover:bg-surface-secondary"
                  aria-label="Close notification"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Progress Bar */}
              {toast.duration && toast.duration > 0 && (
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-current opacity-30 rounded-b-xl"
                  initial={{ width: '100%' }}
                  animate={{ width: '0%' }}
                  transition={{ duration: toast.duration / 1000, ease: 'linear' }}
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

/**
 * Hook to use toast notifications
 */
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

/**
 * Convenience toast functions
 */
export const toast = {
  success: (title: string, message?: string, options?: Partial<Toast>) => {
    const context = useContext(ToastContext);
    if (context) {
      context.showToast({ type: 'success', title, message, ...options });
    }
  },
  error: (title: string, message?: string, options?: Partial<Toast>) => {
    const context = useContext(ToastContext);
    if (context) {
      context.showToast({ type: 'error', title, message, ...options });
    }
  },
  warning: (title: string, message?: string, options?: Partial<Toast>) => {
    const context = useContext(ToastContext);
    if (context) {
      context.showToast({ type: 'warning', title, message, ...options });
    }
  },
  info: (title: string, message?: string, options?: Partial<Toast>) => {
    const context = useContext(ToastContext);
    if (context) {
      context.showToast({ type: 'info', title, message, ...options });
    }
  },
};

export default ToastProvider;