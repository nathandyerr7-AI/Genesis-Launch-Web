import React from 'react';
import { Award, Lightbulb, BarChart, Zap, Users, Target, Shield, Rocket } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

/**
 * Enhanced About Section with sophisticated design and comprehensive information
 * Features modern layout, statistics, team highlights, and company values
 */
const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  const statistics = [
    {
      value: "95%",
      label: "Client Satisfaction",
      description: "Happy customers worldwide"
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance"
    },
    {
      value: "99%",
      label: "Uptime Guarantee",
      description: "Reliable service you can count on"
    },
    {
      value: "3+",
      label: "Years Experience",
      description: "In AI development"
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      primary: {
        icon: "text-primary-400",
        bg: "bg-primary-500/10",
        border: "border-primary-500/20"
      },
      accent: {
        icon: "text-accent-400",
        bg: "bg-accent-500/10",
        border: "border-accent-500/20"
      },
      secondary: {
        icon: "text-secondary-400",
        bg: "bg-secondary-500/10",
        border: "border-secondary-500/20"
      }
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -right-[15%] top-[20%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-primary-500/6 via-primary-500/3 to-transparent blur-3xl"></div>
        <div className="absolute -left-[10%] bottom-[30%] w-[35%] h-[35%] rounded-full bg-gradient-radial from-accent-500/5 via-accent-500/2 to-transparent blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-secondary/50 border border-surface-tertiary/50 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-text-secondary">About Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-text-primary">Pioneering the Future of</span>
            <br />
            <span className="text-gradient-primary">Business Intelligence</span>
          </h2>
          
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            We're a dedicated team of AI specialists, developers, and strategists committed to solving real business 
            challenges with practical, results-driven solutions that transform operations and unlock growth.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card text-center p-6 bg-surface-primary/50 backdrop-blur-sm border-surface-tertiary/30"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-text-primary font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-text-tertiary">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-20">

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card p-8 bg-gradient-to-br from-surface-primary/80 to-surface-secondary/60 backdrop-blur-sm border-surface-tertiary/30"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6">
              Our Mission
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              To empower businesses with practical AI solutions that solve real problems, drive 
              measurable results, and create sustainable competitive advantages in an increasingly 
              digital world.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-text-primary">What Sets Us Apart:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-text-secondary">Practical, business-focused AI implementations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-text-secondary">Rapid deployment with proven methodologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-text-secondary">Ongoing support and continuous optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-text-secondary">Transparent communication and collaboration</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Company Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Our Values
            </h3>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and shape how we approach every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const colorClasses = getColorClasses(value.color);
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card card-hover p-6 lg:p-8 bg-surface-primary/50 backdrop-blur-sm border-surface-tertiary/30 group"
                >
                  <div className={`w-12 h-12 ${colorClasses.bg} ${colorClasses.border} border rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                    <div className={colorClasses.icon}>
                      {value.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {value.title}
                  </h4>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can help you achieve your goals and drive sustainable growth.
          </p>
          <a href="#contact" className="btn btn-primary btn-lg">
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;