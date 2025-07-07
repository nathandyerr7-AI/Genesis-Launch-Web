import React, { useState } from 'react';
import { Mail, Phone, Send, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Enhanced Contact Section with modern design system
 * Features improved form UX, better visual hierarchy, and sophisticated animations
 */
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://hook.us2.make.com/g1hdwy9bvlphehtmp52mwuuds7yr4n7m", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Network response was not ok');
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Webhook error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      content: "info@genesislaunch.com",
      link: "mailto:info@genesislaunch.com",
      description: "Send us a message anytime"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      content: "+1 (613) 862-1476",
      link: "tel:+16138621476",
      description: "Daily, 9am-12pm EST"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute -left-[20%] top-[30%] w-[50%] h-[50%] rounded-full bg-gradient-radial from-primary-500/6 via-primary-500/3 to-transparent blur-3xl" />
        <div className="absolute -right-[15%] bottom-[25%] w-[45%] h-[45%] rounded-full bg-gradient-radial from-accent-500/5 via-accent-500/2 to-transparent blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-secondary/50 border border-surface-tertiary/50 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-text-secondary">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-text-primary">Let's Build Something</span>
            <br />
            <span className="text-gradient-primary">Amazing Together</span>
          </h2>
          
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Ready to launch your business forward with AI? We're here to help you get started on your journey 
            to intelligent automation and growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  {item.link ? (
                    <a
                      href={item.link}
                      className="card p-6 flex items-start gap-4 hover:border-primary-500/30 hover:bg-surface-secondary/50 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-400 group-hover:text-primary-300 group-hover:bg-primary-500/15 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-text-primary mb-1 group-hover:text-primary-300 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-text-primary text-lg font-medium mb-1">
                          {item.content}
                        </p>
                        <p className="text-sm text-text-tertiary">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="card p-6 flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-400">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-text-primary mb-1">
                          {item.title}
                        </h3>
                        <p className="text-text-primary text-lg font-medium mb-1">
                          {item.content}
                        </p>
                        <p className="text-sm text-text-tertiary">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Additional Info Card */}
            <motion.div variants={itemVariants} className="card p-6 bg-gradient-to-r from-primary-500/5 to-accent-500/5 border-primary-500/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-400">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Response Time</h3>
                  <p className="text-text-secondary mb-2">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                  <p className="text-sm text-text-tertiary">
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="card p-8 space-y-6 bg-surface-primary/80 backdrop-blur-sm">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-text-primary mb-2">Send us a message</h3>
                <p className="text-text-secondary">Tell us about your project and we'll get back to you soon.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="label">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="input"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label htmlFor="message" className="label">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="textarea"
                  placeholder="Tell us about your project, goals, and how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-primary w-full btn-lg"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="loading-spinner" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card p-4 bg-success-500/10 border-success-500/30 text-success-400"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm text-success-300">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card p-4 bg-error-500/10 border-error-500/30 text-error-400"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-error-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Oops! Something went wrong.</p>
                      <p className="text-sm text-error-300">Please try again or contact us directly.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              <p className="text-xs text-text-tertiary text-center">
                By submitting this form, you agree to our privacy policy. We'll never share your information.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;