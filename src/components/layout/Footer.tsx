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
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Support Center", href: "/support" },
        { name: "Status Page", href: "/status" },
      ]
    }
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
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Ontario, Canada",
      href: null
    }
  ];

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/genesislaunch",
      icon: <Twitter className="h-5 w-5" />
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/genesislaunch",
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      name: "GitHub",
      href: "https://github.com/genesislaunch",
      icon: <Github className="h-5 w-5" />
    }
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
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-2 mb-6">
                  <span className="text-2xl font-bold text-text-primary">Genesis</span>
                  <span className="text-2xl font-bold text-primary-500">Launch</span>
                </div>

                {/* Description */}
                <p className="text-text-secondary mb-8 leading-relaxed max-w-md">
                  Transforming businesses with practical AI solutions that solve real problems 
                  and drive measurable growth. Your trusted partner in AI innovation.
                </p>

                {/* Contact Information */}
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-surface-tertiary/50 rounded-lg flex items-center justify-center text-primary-400">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-text-tertiary font-medium uppercase tracking-wider">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-text-secondary hover:text-primary-400 transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-text-secondary">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 mt-8">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-surface-tertiary/50 hover:bg-primary-500/20 text-text-secondary hover:text-primary-400 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Navigation Sections */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
                {footerSections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold text-text-primary mb-6">
                      {section.title}
                    </h3>
                    <ul className="space-y-4">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="group flex items-center gap-2 text-text-secondary hover:text-primary-400 transition-colors duration-200"
                          >
                            <span>{link.name}</span>
                            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
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
        <div className="border-t border-surface-tertiary/30 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            {/* Copyright */}
            <p className="text-text-tertiary text-sm">
              &copy; {currentYear} Genesis Launch AI. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-sm text-text-tertiary hover:text-text-secondary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Built with badge */}
            <div className="flex items-center gap-2 text-xs text-text-tertiary">
              <span>Built with</span>
              <span className="text-primary-400">❤️</span>
              <span>by Genesis Launch AI</span>
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