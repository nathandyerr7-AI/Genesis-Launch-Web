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

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "We continuously push boundaries to deliver cutting-edge AI solutions that transform businesses.",
      color: "primary"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Security",
      description: "Your data security and privacy are our top priorities in every solution we develop.",
      color: "accent"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that directly impact your business success.",
      color: "secondary"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring solutions that truly fit their needs.",
      color: "primary"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Efficiency",
      description: "We streamline processes and eliminate bottlenecks to maximize your operational efficiency.",
      color: "accent"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Growth",
      description: "Every solution we build is designed to scale with your business and drive sustainable growth.",
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
          
          <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
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