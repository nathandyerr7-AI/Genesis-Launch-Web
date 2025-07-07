import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollSpy } from '@/lib/useScrollSpy'; // Import the custom hook
import { cn } from '@/lib/utils'; // For conditional classes

/**
 * Enhanced Navbar with sophisticated design and micro-interactions
 * Features glass morphism, smooth animations, and improved accessibility
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  // Define navLinks at the component scope
  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/#services',
      id: 'services', // ID for scroll spy
      dropdown: [
        { name: 'AI Automations', href: '/#services' },
        { name: 'Chat Agents', href: '/#services' },
        { name: 'Voice Agents', href: '/#services' },
        { name: 'Website Development', href: '/#services' },
      ]
    },
    { name: 'Technologies', href: '/#technologies', id: 'technologies' },
    { name: 'Case Studies', href: '/#testimonials', id: 'testimonials' },
    { name: 'About', href: '/#about', id: 'about' },
  ];

  const sectionTargetIds = navLinks
    .map(link => link.id)
    .filter(id => id !== undefined) as string[];

  const activeSection = useScrollSpy({ sectionIds: sectionTargetIds, rootMargin: "-40% 0px -60% 0px" });

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      // Logic to close dropdown if click is outside.
      // This needs to be more specific to prevent conflicts if other click-outside logic exists.
      // For now, let's assume it's okay or refine later if issues arise.
      if (activeDropdown) {
          const dropdownElement = document.querySelector(`[data-dropdown-name="${activeDropdown}"]`);
          if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
            setActiveDropdown(null);
          }
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside); // Use mousedown to catch before click potentially opens new dropdown
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    if (path.startsWith('/#')) {
      const elementId = path.substring(2); // Remove '/#'
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  // Removed duplicated useEffect and navLinks definition here.
  // The correct ones are already defined above.

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background-primary/80 backdrop-blur-xl border-b border-surface-tertiary/30 shadow-dark-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div 
            onClick={() => handleNavigation('/')} 
            className="flex items-center cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <span className="text-2xl font-bold text-text-primary group-hover:text-primary-400 transition-colors duration-300">
                Genesis
              </span>
              <span className="text-2xl font-bold text-primary-500 group-hover:text-primary-400 transition-colors duration-300">
                Launch
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div key={link.name} className="relative" onClick={(e) => e.stopPropagation()}>
                {link.dropdown ? (
                  <div className="relative" data-dropdown-name={link.name}>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-surface-secondary/50",
                        activeSection === link.id ? "text-primary-400 bg-surface-secondary/50" : "text-text-secondary hover:text-primary-400"
                      )}
                    >
                      {link.name}
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-surface-primary/95 backdrop-blur-xl border border-surface-tertiary/50 rounded-xl shadow-dark-xl overflow-hidden"
                        >
                          {link.dropdown.map((item, itemIndex) => (
                            <button
                              key={item.name}
                              onClick={() => handleNavigation(item.href)}
                              className="w-full px-4 py-3 text-left text-sm text-text-secondary hover:text-text-primary hover:bg-surface-secondary/50 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                            >
                              {item.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-primary-400 transition-colors duration-200 rounded-lg hover:bg-surface-secondary/50"
                  >
                    {link.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => handleNavigation('/#contact')} 
              className="btn btn-primary"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-secondary/50 transition-colors duration-200 focus-ring" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden bg-surface-primary/95 backdrop-blur-xl border-t border-surface-tertiary/30"
          >
            <div className="container py-6">
              <nav className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {link.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface-secondary/50 rounded-lg transition-colors duration-200"
                        >
                          {link.name}
                          <ChevronDown 
                            className={`w-5 h-5 transition-transform duration-200 ${
                              activeDropdown === link.name ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-2 space-y-1"
                            >
                              {link.dropdown.map((item) => (
                                <button
                                  key={item.name}
                                  onClick={() => handleNavigation(item.href)}
                                  className="block w-full px-4 py-2 text-left text-sm text-text-tertiary hover:text-text-secondary hover:bg-surface-secondary/30 rounded-lg transition-colors duration-200"
                                >
                                  {item.name}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleNavigation(link.href)}
                        className="block w-full px-4 py-3 text-left text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface-secondary/50 rounded-lg transition-colors duration-200"
                      >
                        {link.name}
                      </button>
                    )}
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                  className="pt-4 border-t border-surface-tertiary/30"
                >
                  <button 
                    onClick={() => handleNavigation('/#contact')}
                    className="btn btn-primary w-full"
                  >
                    Get Started
                  </button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;