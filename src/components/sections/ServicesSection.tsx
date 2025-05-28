import React from 'react';
import { Bot, Mic, Code, Globe, Target, Database } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Bot size={32} />,
      title: "AI Automations",
      description: "Streamline operations with intelligent workflows and process automation powered by machine learning."
    },
    {
      icon: <Bot size={32} />,
      title: "Chat Agents",
      description: "Deploy sophisticated conversational agents to handle customer inquiries and provide 24/7 support."
    },
    {
      icon: <Mic size={32} />,
      title: "Voice Agents",
      description: "Create natural-sounding voice assistants that can understand and respond to spoken language."
    },
    {
      icon: <Globe size={32} />,
      title: "Website Development",
      description: "Build intelligent, responsive websites with integrated AI features for enhanced user experiences."
    },
    {
      icon: <Target size={32} />,
      title: "Lead Generation",
      description: "Leverage AI to identify, qualify, and nurture high-potential leads for your business."
    },
    {
      icon: <Database size={32} />,
      title: "CRM Integrations",
      description: "Seamlessly connect your customer data with AI tools to improve relationships and drive sales."
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20 bg-background-light relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-[10%] top-[20%] w-[30%] h-[30%] rounded-full bg-accent/5 blur-[100px]"></div>
        <div className="absolute -right-[5%] bottom-[10%] w-[20%] h-[20%] rounded-full bg-primary/5 blur-[100px]"></div>
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading text-3xl md:text-4xl font-bold">
            Our Services
          </h2>
          <p className="text-lg text-text-secondary">
            We deliver comprehensive AI solutions designed to transform your business operations, 
            enhance customer experiences, and drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card card-hover group relative p-8 flex flex-col"
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Service icon with glow effect */}
              <div className="w-16 h-16 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:shadow-glow-primary transition-all duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-text-secondary mb-6 flex-grow">
                {service.description}
              </p>
              
              <a href="#contact" className="text-primary hover:underline inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Decorative corner effect */}
              <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 right-0 w-8 h-1 bg-primary"></div>
                <div className="absolute top-0 right-0 w-1 h-8 bg-primary"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;