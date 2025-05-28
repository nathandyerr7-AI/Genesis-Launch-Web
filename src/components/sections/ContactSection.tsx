import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        service: ''
      });
      
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      content: "hello@genesislaunch.ai",
      link: "mailto:hello@genesislaunch.ai"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      content: "+1 (613) 862-1476",
      link: "tel:+16138621476"
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -left-[10%] top-[20%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute -right-[10%] bottom-[20%] w-[30%] h-[30%] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-lg text-text-secondary">
            Ready to bring your ideas to life with AI? We're here to help you get started.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center space-x-4 text-text-secondary hover:text-primary transition-colors"
                    target={item.title === "Office" ? "_blank" : undefined}
                    rel={item.title === "Office" ? "noopener noreferrer" : undefined}
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-medium text-white">{item.title}</p>
                      <p>{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="ai-automation">AI Automation</option>
                  <option value="chat-agents">Chat Agents</option>
                  <option value="voice-agents">Voice Agents</option>
                  <option value="custom-solution">Custom Solution</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-primary w-full flex items-center justify-center space-x-2"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-success/20 border border-success/30 rounded-md text-success">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-error/20 border border-error/30 rounded-md text-error">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;