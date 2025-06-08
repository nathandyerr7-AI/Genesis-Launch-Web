import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const testimonials = [
    {
      client: "Ilias and Sons",
      industry: "E-Commerce",
      project: "Customer Service Chat Agent",
      description: "We designed a comprehensive e-commerce chat agent that provides customers with 24/7 support, intelligent product recommendations, and real-time order tracking capabilities. The solution streamlines customer service operations and enhances the shopping experience.",
      image: "https://sdmntprwestus2.oaiusercontent.com/files/00000000-4920-61f8-900c-b303d2677ccb/raw?se=2025-06-08T20%3A03%3A23Z&sp=r&sv=2024-08-04&sr=b&scid=3aa68df0-e327-5866-9ec9-87f1a310b877&skoid=1e6af1bf-6b08-4a04-8919-15773e7e7024&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-08T10%3A58%3A16Z&ske=2025-06-09T10%3A58%3A16Z&sks=b&skv=2024-08-04&sig=/Z1wkwODpRP6YkHHRzq51TQ%2Bs4%2BNPpaAtz8vqCqVAjw%3D",
      category: "Chat Agents",
      features: [
        "24/7 Customer Support",
        "Product Recommendations", 
        "Order Tracking",
        "Automated Responses"
      ]
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-[10%] top-[30%] w-[30%] h-[30%] rounded-full bg-accent/5 blur-[100px]"></div>
        <div className="absolute -right-[5%] bottom-[20%] w-[25%] h-[25%] rounded-full bg-primary/5 blur-[100px]"></div>
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading text-3xl md:text-4xl font-bold">
            Client Success Stories
          </h2>
          <p className="text-lg text-text-secondary">
            See how our AI solutions are transforming businesses and driving real results for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card card-hover relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image Side */}
                <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.client} project`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {testimonial.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-6 flex flex-col justify-center">
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{testimonial.project}</h3>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-primary font-semibold">{testimonial.client}</span>
                      <span className="text-text-secondary">•</span>
                      <span className="text-text-secondary">{testimonial.industry}</span>
                    </div>
                  </div>

                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {testimonial.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {testimonial.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      Learn about our solutions
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                <Quote className="w-full h-full text-primary" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-text-secondary mb-6">
            Ready to transform your business with AI? Let's discuss your project.
          </p>
          <a href="#contact" className="btn btn-primary">
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;