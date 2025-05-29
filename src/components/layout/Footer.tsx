import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-light border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-white">Genesis<span className="text-primary">Launch</span></span>
            </div>
            <p className="text-text-secondary mb-4">
            </p>
           
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-text-secondary hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-text-secondary hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-text-secondary hover:text-primary transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-text-secondary hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-text-secondary hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-text-secondary hover:text-primary transition-colors">AI Automations</a></li>
              <li><a href="#services" className="text-text-secondary hover:text-primary transition-colors">Chat Agents</a></li>
              <li><a href="#services" className="text-text-secondary hover:text-primary transition-colors">Voice Agents</a></li>
              <li><a href="#services" className="text-text-secondary hover:text-primary transition-colors">Website Development</a></li>
              <li><a href="#services" className="text-text-secondary hover:text-primary transition-colors">Lead Generation</a></li>
              <li><a href="#services" className="text-text-secondary hover:text-primary transition-colors">CRM Integrations</a></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+1234567890" className="text-text-secondary hover:text-primary transition-colors">+1 (613) 862-1476</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:hello@genesislaunch.ai" className="text-text-secondary hover:text-primary transition-colors">hello@genesislaunch.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm">
            &copy; {currentYear} Genesis Launch AI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li><Link to="/privacy-policy" className="text-text-secondary hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-text-secondary hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies-policy" className="text-text-secondary hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;