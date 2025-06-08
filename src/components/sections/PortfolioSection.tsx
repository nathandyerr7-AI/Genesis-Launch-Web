import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  image: string;
}

const PortfolioSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const caseStudies: CaseStudy[] = [
    
    {
      title: "E-Commerce Customer Service Agent",
      category: "Chat Agents",
      description: "Designed an e-commerce chat agent that users to 24/7 support, product recommendations, and the ability to track their order.",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  return (
    <section id="portfolio" className="py-20 bg-background-light relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-[5%] bottom-[10%] w-[25%] h-[25%] rounded-full bg-primary/5 blur-[100px]"></div>
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading text-3xl md:text-4xl font-bold">
            Case Studies
          </h2>
          <p className="text-lg text-text-secondary">
            Explore how our AI solutions have helped businesses across different industries achieve remarkable results.
          </p>
        </motion.div>

        {inView && (
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {caseStudies.map((study, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="relative h-64 md:h-80 lg:h-full rounded-xl overflow-hidden">
                        <img 
                          src={study.image} 
                          alt={study.title} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                        <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {study.category}
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col">
                        <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                        <p className="text-text-secondary mb-6">{study.description}</p>
                        
                        <div className="mt-auto">
                          <a href="#contact" className="inline-flex items-center text-primary hover:underline">
                            View Full Case Study
                            <ExternalLink size={16} className="ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <div className="flex items-center">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                      index === activeIndex ? 'bg-primary scale-125' : 'bg-gray-600'
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 hover:border-primary hover:text-primary transition-colors"
                  aria-label="Previous case study"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 hover:border-primary hover:text-primary transition-colors"
                  aria-label="Next case study"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;