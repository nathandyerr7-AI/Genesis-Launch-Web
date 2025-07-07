import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Enhanced Footer with sophisticated design and improved information architecture
 * Features modern styling, better organization, and subtle animations
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI Automations", href: "/#services" },
        { name: "Chat Agents", href: "/#services" },
        { name: "Voice Agents", href: "/#services" },
        { name: "Website Development", href: "/#services" },
        { name: "Lead Generation", href: "/#services" },
        { name: "CRM Integrations", href: "/#services" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/#about" },
        { name: "Case Studies", href: "/#testimonials" },
        { name: "Technologies", href: "/#technologies" },
        { name: "Contact", href: "/#contact" },
      ]
    },
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+1 (613) 862-1476",
      href: "tel:+16138621476"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "info@genesislaunch.com",
      href: "mailto:info@genesislaunch.com"
    },
  ];


  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/cookies-policy" },
  ];

  return (
    <footer className="bg-background-secondary border-t border-surface-tertiary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-[10%] bottom-[20%] w-[30%] h-[30%] rounded-full bg-gradient-radial from-primary-500/5 via-primary-500/2 to-transparent blur-3xl"></div>
        <div className="absolute -right-[5%] top-[30%] w-[25%] h-[25%] rounded-full bg-gradient-radial from-accent-500/4 via-accent-500/2 to-transparent blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Main Footer Content */}
        <div className="py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-8">
                  <span className="text-2xl font-bold text-text-primary">Genesis</span>
                  <span className="text-2xl font-bold text-primary-500">Launch</span>
                </div>

                {/* Description */}
                <p className="text-text-secondary mb-10 leading-relaxed max-w-md text-lg">
                  Transforming businesses with practical AI solutions that solve real problems 
                  and drive measurable growth. Your trusted partner in AI innovation.
                </p>

                {/* Contact Information */}
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-surface-tertiary/50 rounded-xl flex items-center justify-center text-primary-400">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-text-tertiary font-medium uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-text-primary hover:text-primary-400 transition-colors duration-200 font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-text-primary font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Navigation Sections */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">
                {footerSections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-semibold text-text-primary mb-8">
                      {section.title}
                    </h3>
                    <ul className="space-y-5">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="group flex items-center gap-3 text-text-secondary hover:text-primary-400 transition-colors duration-200 text-base"
                          >
                            <span>{link.name}</span>
                            <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-surface-tertiary/30 py-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-8"
          >
            {/* Copyright */}
            <p className="text-text-tertiary text-base">
              &copy; {currentYear} Genesis Launch AI. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-8">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-base text-text-tertiary hover:text-text-secondary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;