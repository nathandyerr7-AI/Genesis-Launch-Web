import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ArrowRight, ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';

/**
 * Enhanced Testimonials Section with case studies, metrics, and interactive elements
 * Features client success stories, project details, and measurable outcomes
 */
const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  const caseStudies = [
    {
      id: 1,
      client: "Ilias and Sons",
      industry: "E-Commerce",
      project: "AI Customer Service Agent",
      description: "We designed and implemented a comprehensive e-commerce chat agent that provides customers with 24/7 support, intelligent product recommendations, and real-time order tracking capabilities. The solution streamlines customer service operations while significantly enhancing the shopping experience.",
      image: "/images/AI Chat Agent Image.png",
      category: "Chat Agents",
      testimonial: "The AI chat agent has transformed our customer service. We've seen a 60% reduction in response times and our customer satisfaction scores have never been higher. Genesis Launch delivered exactly what they promised.",
      author: "Sarah Johnson",
      role: "Customer Experience Director",
      rating: 5,
      metrics: [
        { label: "Response Time Reduction", value: "60%", icon: <CheckCircle className="w-4 h-4" /> },
        { label: "Customer Satisfaction", value: "94%", icon: <CheckCircle className="w-4 h-4" /> },
        { label: "Support Tickets Resolved", value: "85%", icon: <CheckCircle className="w-4 h-4" /> },
        { label: "Implementation Time", value: "2 weeks", icon: <CheckCircle className="w-4 h-4" /> }
      ],
      features: [
        "24/7 Customer Support",
        "Product Recommendations", 
        "Order Tracking",
        "Multi-language Support",
        "Analytics Dashboard",
        "CRM Integration"
      ],
      technologies: ["Voiceflow", "OpenAI", "Shopify API", "Analytics"],
      timeline: "2 weeks",
      roi: "300%"
    },
    // Add more case studies here as they become available
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const activeCase = caseStudies[activeIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-[15%] top-[25%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-accent-500/6 via-accent-500/3 to-transparent blur-3xl"></div>
        <div className="absolute -right-[10%] bottom-[20%] w-[35%] h-[35%] rounded-full bg-gradient-radial from-primary-500/5 via-primary-500/2 to-transparent blur-3xl"></div>
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
            <span className="text-sm font-medium text-text-secondary">Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Client Success</span>
            <br />
            <span className="text-text-primary">Stories</span>
          </h2>
          
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Discover how our AI solutions have transformed businesses, enhanced customer experiences, 
            and delivered measurable results across diverse industries.
          </p>
        </motion.div>

        {/* Case Study Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
            >
              {/* Project Image & Details */}
              <motion.div variants={itemVariants} className="space-y-6">
                {/* Main Image */}
                <div className="relative group">
                  <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden">
                    <img 
                      src={activeCase.image} 
                      alt={`${activeCase.client} project`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-primary/60 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-500/90 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                        {activeCase.category}
                      </span>
                    </div>
                    
                    {/* Rating */}
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-1 bg-background-primary/80 backdrop-blur-sm px-3 py-2 rounded-full">
                        {[...Array(activeCase.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {activeCase.metrics.map((metric, index) => (
                    <div key={index} className="card p-4 bg-surface-primary/50 backdrop-blur-sm border-surface-tertiary/30">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-success-400">
                          {metric.icon}
                        </div>
                        <span className="text-text-tertiary text-xs font-medium">
                          {metric.label}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-primary-400">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies Used */}
                <div className="card p-6 bg-surface-primary/50 backdrop-blur-sm border-surface-tertiary/30">
                  <h4 className="text-lg font-semibold text-text-primary mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeCase.technologies.map((tech, index) => (
                      <span key={index} className="badge badge-secondary text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Project Information */}
              <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-8">
                {/* Project Header */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary-400 font-semibold text-lg">{activeCase.client}</span>
                    <span className="text-text-tertiary">•</span>
                    <span className="text-text-secondary">{activeCase.industry}</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                    {activeCase.project}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {activeCase.description}
                  </p>
                </div>

                {/* Testimonial Quote */}
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-8 h-8 text-primary-500/20">
                    <Quote className="w-full h-full" />
                  </div>
                  
                  <blockquote className="text-xl lg:text-2xl font-medium text-text-primary leading-relaxed pl-6 border-l-4 border-primary-500/30">
                    "{activeCase.testimonial}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                      {activeCase.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary">
                        {activeCase.author}
                      </div>
                      <div className="text-text-secondary text-sm">
                        {activeCase.role}, {activeCase.client}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-text-primary">Key Features:</h4>
                    <div className="space-y-2">
                      {activeCase.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-text-primary">Project Stats:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-text-secondary">Timeline:</span>
                        <span className="text-sm font-medium text-text-primary">{activeCase.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-text-secondary">ROI:</span>
                        <span className="text-sm font-medium text-success-400">{activeCase.roi}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors duration-200 group"
                  >
                    <span>Start Your Success Story</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {caseStudies.length > 1 && (
            <motion.div 
              className="flex justify-center items-center gap-6 mt-12"
              variants={itemVariants}
            >
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-surface-secondary hover:bg-surface-tertiary border border-surface-tertiary hover:border-surface-elevated text-text-secondary hover:text-text-primary transition-all duration-200 flex items-center justify-center focus-ring"
                aria-label="Previous case study"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-2">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-primary-500 scale-125' 
                        : 'bg-surface-tertiary hover:bg-surface-elevated'
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to case study ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-surface-secondary hover:bg-surface-tertiary border border-surface-tertiary hover:border-surface-elevated text-text-secondary hover:text-text-primary transition-all duration-200 flex items-center justify-center focus-ring"
                aria-label="Next case study"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="card p-8 bg-gradient-to-r from-surface-primary/80 to-surface-secondary/60 backdrop-blur-sm border-surface-tertiary/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Join our growing list of satisfied clients who have transformed their businesses with our AI solutions.
            </p>
            <a href="#contact" className="btn btn-primary btn-lg">
              Start Your Project Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;