import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  label?: string;
  required?: boolean;
}

/**
 * Modern Dropdown Component with sophisticated animations and accessibility
 * Features glass morphism, smooth animations, and keyboard navigation
 */
export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  placeholder = "Select an option...",
  onChange,
  disabled = false,
  error = false,
  className = "",
  label,
  required = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selectedOption = options.find(option => option.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setHighlightedIndex(prev => 
            prev < options.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setHighlightedIndex(prev => 
            prev > 0 ? prev - 1 : options.length - 1
          );
          break;
        case 'Enter':
          event.preventDefault();
          if (highlightedIndex >= 0 && !options[highlightedIndex].disabled) {
            onChange(options[highlightedIndex].value);
            setIsOpen(false);
            setHighlightedIndex(-1);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setHighlightedIndex(-1);
          buttonRef.current?.focus();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, highlightedIndex, options, onChange]);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Label */}
      {label && (
        <label className="label">
          {label}
          {required && <span className="text-error-400 ml-1">*</span>}
        </label>
      )}

      {/* Dropdown Button */}
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleDropdown}
        disabled={disabled}
        className={`
          w-full flex items-center justify-between px-4 py-3 
          bg-surface-secondary border rounded-lg
          text-left transition-all duration-200 focus-ring
          ${error 
            ? 'border-error-500 focus:ring-error-500/50' 
            : 'border-surface-tertiary focus:border-primary-500 focus:ring-primary-500/50'
          }
          ${disabled 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:border-surface-elevated cursor-pointer'
          }
          ${isOpen ? 'border-primary-500 ring-2 ring-primary-500/20' : ''}
        `}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={label ? undefined : "dropdown-label"}
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {selectedOption?.icon && (
            <div className="flex-shrink-0 text-text-tertiary">
              {selectedOption.icon}
            </div>
          )}
          <span className={`truncate ${
            selectedOption ? 'text-text-primary' : 'text-text-tertiary'
          }`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        
        <ChevronDown 
          className={`w-5 h-5 text-text-tertiary transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 right-0 mt-2 bg-surface-primary border border-surface-tertiary rounded-lg shadow-dark-xl overflow-hidden z-dropdown"
          >
            <div className="max-h-60 overflow-y-auto scrollbar-thin">
              {options.map((option, index) => (
                <motion.button
                  key={option.value}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  disabled={option.disabled}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 text-left
                    transition-colors duration-200
                    ${option.disabled
                      ? 'opacity-50 cursor-not-allowed'
                      : 'cursor-pointer'
                    }
                    ${highlightedIndex === index 
                      ? 'bg-primary-500/10 text-primary-400' 
                      : 'text-text-secondary hover:bg-surface-secondary hover:text-text-primary'
                    }
                    ${option.value === value 
                      ? 'bg-primary-500/5 text-primary-400' 
                      : ''
                    }
                  `}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  role="option"
                  aria-selected={option.value === value}
                >
                  {option.icon && (
                    <div className="flex-shrink-0">
                      {option.icon}
                    </div>
                  )}
                  
                  <span className="flex-1 truncate">
                    {option.label}
                  </span>
                  
                  {option.value === value && (
                    <Check className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;