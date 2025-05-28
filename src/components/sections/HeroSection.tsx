import React from 'react';
import { ArrowRight, Bot, Brain, Mic, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { LampContainer } from '../ui/lamp';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <LampContainer>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center lg:text-left max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary mb-6">
              <Sparkles size={16} className="mr-2" />
              <span className="text-sm font-medium">Next-Gen AI Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Practical AI Solutions that</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary glow-text">Solve Real Business Problems</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-lg mx-auto">
              Custom AI solutions built to automate, optimize, and elevate your business processes with cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="btn btn-primary w-full sm:w-auto">
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#services" className="btn btn-outline w-full sm:w-auto">
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </LampContainer>
    </section>
  );
};

export default HeroSection;