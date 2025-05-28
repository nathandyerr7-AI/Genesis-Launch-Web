import React from 'react';
import { Award, Lightbulb, BarChart, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <Lightbulb size={24} className="text-primary" />,
      title: "Innovation Focused",
      description: "Constantly pushing the boundaries of what AI can achieve for businesses."
    },
    {
      icon: <Award size={24} className="text-primary" />,
      title: "Industry Expertise",
      description: "Specialized knowledge across multiple sectors and AI applications."
    },
    {
      icon: <BarChart size={24} className="text-primary" />,
      title: "Results Driven",
      description: "Committed to delivering measurable ROI and business outcomes."
    },
    {
      icon: <Zap size={24} className="text-primary" />,
      title: "Rapid Deployment",
      description: "Streamlined processes to get your AI solutions up and running quickly."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute -right-[10%] top-[30%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-[100px]"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading text-3xl md:text-4xl font-bold mb-6">
            About Genesis Launch
          </h2>
          <p className="text-lg text-text-secondary">
            We’re a team of AI specialists, developers, and strategists focused on solving real business challenges with practical, results-driven               solutions. By combining technical expertise with a sharp understanding of business needs, we deliver custom AI solutions that              streamline operations, boost productivity, and unlock new opportunities for growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card card-hover flex flex-col items-center text-center p-6"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 p-8 rounded-xl bg-background-light border border-gray-800 relative overflow-hidden"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to transform your business?</h3>
              <p className="text-text-secondary">Let's discuss how our AI solutions can help you achieve your goals.</p>
            </div>
            <a href="#contact" className="btn btn-primary whitespace-nowrap">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;