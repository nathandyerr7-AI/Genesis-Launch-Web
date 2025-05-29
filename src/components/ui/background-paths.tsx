import React from "react";
import { motion } from "framer-motion";

interface BackgroundPathsProps {
  title: string;
  subtitle?: string;
}

export function BackgroundPaths({ title, subtitle = "AI solutions for automations, lead-gen, chat agents, and business growth" }: BackgroundPathsProps) {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 md:mt-0 px-4 text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 px-4 text-center text-base sm:text-lg md:text-xl text-slate-500 dark:text-slate-300 max-w-lg mx-auto"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 md:mt-14"
        >
          <a href="#contact" className="inline-block px-6 sm:px-8 py-3 btn btn-primary text-white rounded-full font-medium hover:bg-cyan-600 transition-colors">
            Get Started
          </a>
        </motion.div>
      </div>
    </div>
  );
}