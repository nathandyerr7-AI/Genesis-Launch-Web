import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Mock logos - in a real project, you would import actual SVG or PNG files
const TechnologyItem = ({ name, logo, delay }: { name: string; logo: string; delay: number }) => {
  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 p-4 mb-3 hover:border-primary/50 transition-all duration-300">
        <img 
          src={logo} 
          alt={name} 
          className="w-full h-full object-contain"
        />
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
      name: "TensorFlow", 
      logo: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    { 
      name: "PyTorch", 
      logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    { 
      name: "OpenAI", 
      logo: "https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    { 
      name: "Hugging Face", 
      logo: "https://images.pexels.com/photos/11035534/pexels-photo-11035534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    { 
      name: "Google Cloud", 
      logo: "https://images.pexels.com/photos/11035382/pexels-photo-11035382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    { 
      name: "AWS", 
      logo: "https://images.pexels.com/photos/11035472/pexels-photo-11035472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    { 
      name: "Azure", 
      logo: "https://images.pexels.com/photos/11035516/pexels-photo-11035516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    { 
      name: "Salesforce", 
      logo: "https://images.pexels.com/photos/11035381/pexels-photo-11035381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            We work with trusted, widely-used technologies that fit right into your existing setup. Rather than pushing new or complicated systems, we focus on tools that align with what your team already knows—ensuring smooth integration, minimal disruption, and real impact from day one.
          </p>
        </motion.div>

        {inView && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10">
            {technologies.map((tech, index) => (
              <TechnologyItem 
                key={tech.name} 
                name={tech.name} 
                logo={tech.logo} 
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
            Our technology stack is continuously evolving to incorporate the latest advancements in AI and machine learning.
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