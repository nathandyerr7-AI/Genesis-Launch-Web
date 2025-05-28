import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Bot, Workflow, Cog, Sparkles } from 'lucide-react';

const TechnologyItem = ({ name, icon: Icon, delay }: { name: string; icon: React.ElementType; delay: number }) => {
  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 p-4 mb-3 hover:border-primary/50 transition-all duration-300">
        <Icon className="w-12 h-12 text-primary" />
      </div>
      <span className="text-sm text-text-secondary">{name}</span>
    </motion.div>
  );
};

const TechnologiesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const technologies = [
    { 
      name: "Voiceflow", 
      icon: Bot
    },
    { 
      name: "n8n", 
      icon: Workflow
    },
    { 
      name: "Make.com", 
      icon: Cog
    },
    { 
      name: "OpenAI", 
      icon: Sparkles
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      {/* Background gradient elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading text-3xl md:text-4xl font-bold">
            Our Tech Stack
          </h2>
          <p className="text-lg text-text-secondary">
            We leverage industry-leading tools and platforms to deliver powerful AI solutions that drive real business results.
          </p>
        </motion.div>

        {inView && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10">
            {technologies.map((tech, index) => (
              <TechnologyItem 
                key={tech.name} 
                name={tech.name} 
                icon={tech.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        )}

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-text-secondary mb-6">
            Our technology stack is carefully chosen to provide the most efficient and effective solutions for your business needs.
          </p>
          <a href="#contact" className="btn btn-outline">
            Discuss Your Technology Needs
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;