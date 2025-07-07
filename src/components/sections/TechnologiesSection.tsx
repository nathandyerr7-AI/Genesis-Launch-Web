import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Bot, Workflow, Cog, Sparkles, Database, Cloud, Code, Zap } from 'lucide-react';

/**
 * Enhanced Technologies Section with interactive tech stack showcase
 * Features detailed technology information, categories, and modern animations
 */
const TechnologiesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  const categories = [
    { id: 'all', name: 'All Technologies', count: 12 },
    { id: 'ai', name: 'AI Platforms', count: 4 },
    { id: 'automation', name: 'Automation', count: 3 },
    { id: 'development', name: 'Development', count: 3 },
    { id: 'infrastructure', name: 'Infrastructure', count: 2 },
  ];

  const technologies = [
    {
      id: 1,
      name: "OpenAI GPT",
      category: "ai",
      icon: <Sparkles className="w-8 h-8" />,
      description: "Advanced language models for natural language processing and generation",
      features: ["GPT-4 Integration", "Custom Fine-tuning", "API Optimization"],
      color: "primary",
      experience: "Expert"
    },
    {
      id: 2,
      name: "Voiceflow",
      category: "ai",
      icon: <Bot className="w-8 h-8" />,
      description: "Conversational AI platform for building sophisticated chatbots and voice agents",
      features: ["Visual Flow Builder", "Multi-channel Deployment", "Analytics Dashboard"],
      color: "accent",
      experience: "Expert"
    },
    {
      id: 3,
      name: "Vapi AI",
      category: "ai",
      icon: <Bot className="w-8 h-8" />,
      description: "Real-time voice AI infrastructure for building voice-first applications",
      features: ["Real-time Processing", "Voice Synthesis", "Speech Recognition"],
      color: "secondary",
      experience: "Advanced"
    },
    {
      id: 4,
      name: "Claude AI",
      category: "ai",
      icon: <Sparkles className="w-8 h-8" />,
      description: "Constitutional AI for safe and helpful AI assistant development",
      features: ["Constitutional Training", "Safety Measures", "Context Understanding"],
      color: "primary",
      experience: "Advanced"
    },
    {
      id: 5,
      name: "Make.com",
      category: "automation",
      icon: <Workflow className="w-8 h-8" />,
      description: "Visual automation platform for connecting apps and automating workflows",
      features: ["Visual Automation", "App Integrations", "Real-time Triggers"],
      color: "accent",
      experience: "Expert"
    },
    {
      id: 6,
      name: "n8n",
      category: "automation",
      icon: <Cog className="w-8 h-8" />,
      description: "Fair-code automation platform for technical workflows and integrations",
      features: ["Self-hosted Option", "Custom Nodes", "Workflow Templates"],
      color: "secondary",
      experience: "Advanced"
    },
    {
      id: 7,
      name: "Zapier",
      category: "automation",
      icon: <Zap className="w-8 h-8" />,
      description: "Popular automation tool for connecting and automating business processes",
      features: ["5000+ Integrations", "Multi-step Workflows", "Error Handling"],
      color: "primary",
      experience: "Expert"
    },
    {
      id: 8,
      name: "React",
      category: "development",
      icon: <Code className="w-8 h-8" />,
      description: "Modern JavaScript library for building interactive user interfaces",
      features: ["Component Architecture", "Virtual DOM", "Ecosystem"],
      color: "accent",
      experience: "Expert"
    },
    {
      id: 9,
      name: "Node.js",
      category: "development",
      icon: <Code className="w-8 h-8" />,
      description: "JavaScript runtime for building scalable backend applications",
      features: ["Event-driven", "NPM Ecosystem", "Microservices"],
      color: "secondary",
      experience: "Expert"
    },
    {
      id: 10,
      name: "Python",
      category: "development",
      icon: <Code className="w-8 h-8" />,
      description: "Versatile programming language ideal for AI and automation development",
      features: ["AI Libraries", "Data Processing", "API Development"],
      color: "primary",
      experience: "Advanced"
    },
    {
      id: 11,
      name: "Supabase",
      category: "infrastructure",
      icon: <Database className="w-8 h-8" />,
      description: "Open-source Firebase alternative with PostgreSQL database",
      features: ["Real-time Updates", "Authentication", "Auto-generated APIs"],
      color: "accent",
      experience: "Advanced"
    },
    {
      id: 12,
      name: "Airtable",
      category: "infrastructure",
      icon: <Database className="w-8 h-8" />,
      description: "Cloud-based database platform for organizing and managing business data",
      features: ["Relational Database", "API Integration", "Collaborative Workflows"],
      color: "accent",
      experience: "Expert"
    }
  ];

  const filteredTechnologies = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  const getColorClasses = (color: string) => {
    const colors = {
      primary: {
        bg: "bg-primary-500/10",
        border: "border-primary-500/20",
        text: "text-primary-400",
        hover: "hover:bg-primary-500/15 hover:border-primary-500/30"
      },
      accent: {
        bg: "bg-accent-500/10",
        border: "border-accent-500/20",
        text: "text-accent-400",
        hover: "hover:bg-accent-500/15 hover:border-accent-500/30"
      },
      secondary: {
        bg: "bg-secondary-500/10",
        border: "border-secondary-500/20",
        text: "text-secondary-400",
        hover: "hover:bg-secondary-500/15 hover:border-secondary-500/30"
      }
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  const getExperienceColor = (experience: string) => {
    switch (experience) {
      case 'Expert': return 'text-success-400 bg-success-500/10 border-success-500/20';
      case 'Advanced': return 'text-warning-400 bg-warning-500/10 border-warning-500/20';
      default: return 'text-text-tertiary bg-surface-tertiary border-surface-elevated';
    }
  };

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
    hidden: { opacity: 0, y: 20, scale: 0.95 },
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

  return (
    <section id="technologies" className="py-20 lg:py-28 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-[15%] bottom-[25%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-primary-500/6 via-primary-500/3 to-transparent blur-3xl"></div>
        <div className="absolute -right-[10%] top-[30%] w-[35%] h-[35%] rounded-full bg-gradient-radial from-accent-500/5 via-accent-500/2 to-transparent blur-3xl"></div>
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
            <span className="text-sm font-medium text-text-secondary">Technology Stack</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Cutting-Edge</span>
            <br />
            <span className="text-text-primary">Technologies</span>
          </h2>
          
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            We leverage industry-leading tools and platforms to build robust, scalable AI solutions 
            that deliver exceptional performance and reliability.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-surface-tertiary/50 text-text-secondary hover:bg-surface-tertiary hover:text-text-primary border border-surface-elevated/30'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-75">
                ({category.count})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          key={activeCategory} // Re-animate when category changes
        >
          {filteredTechnologies.map((tech) => {
            const colorClasses = getColorClasses(tech.color);
            
            return (
              <motion.div
                key={tech.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className={`card card-hover p-6 h-full bg-surface-primary/50 backdrop-blur-sm border-surface-tertiary/30 ${colorClasses.hover} transition-all duration-300`}>
                  {/* Technology Icon & Experience Level */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 ${colorClasses.bg} ${colorClasses.border} border rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <div className={colorClasses.text}>
                        {tech.icon}
                      </div>
                    </div>
                    
                    <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getExperienceColor(tech.experience)}`}>
                      {tech.experience}
                    </div>
                  </div>
                  
                  {/* Technology Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary-400 transition-colors duration-300">
                      {tech.name}
                    </h3>
                    
                    <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                      {tech.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {tech.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-text-tertiary">
                          <div className={`w-1 h-1 rounded-full ${colorClasses.bg.replace('/10', '/60')}`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Indicator */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="card p-8 bg-gradient-to-r from-surface-primary/80 to-surface-secondary/60 backdrop-blur-sm border-surface-tertiary/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Technology Partnership
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Our technology stack is carefully chosen to provide the most efficient, scalable, and 
              reliable solutions for your business needs. We stay at the forefront of technological 
              innovation to ensure you always have access to the best tools available.
            </p>
            <a href="#contact" className="btn btn-primary">
              Discuss Your Technology Needs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;