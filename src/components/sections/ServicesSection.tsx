import React from 'react';
import { Bot, Mic, Code, Globe, Target, Database } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

/**
 * Enhanced Services Section with modern design system
 * Features refined typography, sophisticated animations, and improved accessibility
 */
const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  const services = [
    {
      icon: <Bot size={28} />,
      title: "AI Automations",
      description: "Streamline operations with intelligent workflows and process automation powered by advanced machine learning algorithms.",
      features: ["Workflow Optimization", "Process Intelligence", "Smart Routing"],
      color: "primary"
    },
    {
      icon: <Bot size={28} />,
      title: "Chat Agents",
      description: "Deploy sophisticated conversational agents that provide exceptional customer experiences with natural language understanding.",
      features: ["24/7 Support", "Multi-language", "Context Awareness"],
      color: "accent"
    },
    {
      icon: <Mic size={28} />,
      title: "Voice Agents",
      description: "Create natural-sounding voice assistants with advanced speech recognition and human-like conversation capabilities.",
      features: ["Natural Speech", "Voice Recognition", "Real-time Processing"],
      color: "secondary"
    },
    {
      icon: <Globe size={28} />,
      title: "Website Development",
      description: "Build intelligent, responsive websites with integrated AI features that adapt to user behavior and preferences.",
      features: ["Responsive Design", "AI Integration", "Performance Optimized"],
      color: "primary"
    },
    {
      icon: <Target size={28} />,
      title: "Lead Generation",
      description: "Leverage AI-powered analytics to identify, qualify, and nurture high-potential leads with precision targeting.",
      features: ["Smart Targeting", "Lead Scoring", "Automated Nurturing"],
      color: "accent"
    },
    {
      icon: <Database size={28} />,
      title: "CRM Integrations",
      description: "Seamlessly connect your customer data ecosystem with AI tools to enhance relationships and drive revenue growth.",
      features: ["Data Synchronization", "Workflow Automation", "Analytics Dashboard"],
      color: "secondary"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      primary: {
        icon: "text-primary-400 group-hover:text-primary-300",
        bg: "bg-primary-500/10 group-hover:bg-primary-500/15",
        glow: "group-hover:shadow-primary-500/20",
        accent: "text-primary-400",
        border: "border-primary-500/50"
      },
      accent: {
        icon: "text-accent-400 group-hover:text-accent-300",
        bg: "bg-accent-500/10 group-hover:bg-accent-500/15",
        glow: "group-hover:shadow-accent-500/20",
        accent: "text-accent-400",
        border: "border-accent-500/50"
      },
      secondary: {
        icon: "text-secondary-400 group-hover:text-secondary-300",
        bg: "bg-secondary-500/10 group-hover:bg-secondary-500/15",
        glow: "group-hover:shadow-secondary-500/20",
        accent: "text-secondary-400",
        border: "border-secondary-500/50"
      }
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section 
      id="services" 
      className="py-20 lg:py-28 bg-background relative overflow-hidden" 
      ref={ref}
    >
      {/* Enhanced background elements with subtle gradients */}
      <div className="absolute inset-0">
        <div className="absolute -left-[15%] top-[25%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-primary-500/8 via-primary-500/4 to-transparent blur-3xl"></div>
        <div className="absolute -right-[10%] bottom-[15%] w-[35%] h-[35%] rounded-full bg-gradient-radial from-accent-500/6 via-accent-500/3 to-transparent blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-secondary/50 border
                  border-surface-tertiary/50 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-text-secondary">Our Expertise</span>
          </div>

          <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-1 mt-7">
            <span className="text-text-secondary text-2xl md:text-3xl lg:text-4xl font-medium block mb-2">Our Expertise</span>
            <span className="text-gradient-primary block">Comprehensive AI</span>
            <br />
            <span className="text-text-primary">Solutions</span>
          </h2>
          

          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            We deliver end-to-end AI solutions designed to transform your business operations, 
            enhance customer experiences, and unlock sustainable growth opportunities.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            
            return (
              <motion.article
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className={`card card-hover h-full p-6 lg:p-8 flex flex-col bg-surface-primary/50 backdrop-blur-sm border-surface-tertiary/30 hover:${colorClasses.border} transition-all duration-500`}>
                  {/* Service Icon */}
                  <div className={`w-16 h-16 lg:w-18 lg:h-18 rounded-xl ${colorClasses.bg} 
                    flex items-center justify-center mb-6 transition-all duration-500 
                    ${colorClasses.glow} group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-3 group-hover:-translate-y-2`}>
                    <div className={`${colorClasses.icon} transition-colors duration-300`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-text-primary group-hover:text-primary-300 transition-all duration-300 group-hover:translate-x-1">
                      {service.title}
                    </h3>
                    
                    <p className="text-text-secondary mb-6 leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Feature List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-sm text-text-secondary group-hover:text-text-primary transition-all duration-300 group-hover:translate-x-2" style={{ transitionDelay: `${featureIndex * 50}ms` }}>
                          <div className={`w-1.5 h-1.5 rounded-full ${colorClasses.bg.replace('/10', '/60').replace('/15', '/60')} flex-shrink-0 transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg`}></div>
                          <span className="transition-all duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Call to Action */}
                  <div className="mt-auto">
                    <a 
                      href="#contact" 
                      className={`inline-flex items-center gap-2 ${colorClasses.accent} hover:underline font-medium transition-all duration-300 group/link group-hover:translate-x-2 group-hover:font-semibold`}
                    >
                      Learn more
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-all duration-500 pointer-events-none group-hover:scale-125 group-hover:rotate-12">
                    <div className={`w-full h-full ${colorClasses.icon.split(' ')[0]}`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl bg-gradient-to-br from-primary-500/20 via-transparent to-accent-500/20 pointer-events-none"></div>
                  
                  {/* Subtle glow effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl ${colorClasses.glow} blur-xl pointer-events-none`}></div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="flex flex-col items-center justify-center text-center mt-16 lg:mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-text-secondary mb-6 text-lg">
            Ready to transform your business with AI? Let's discuss your specific needs.
          </p>
          <a href="#contact" className="btn btn-primary btn-lg">
            Start Your AI Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;