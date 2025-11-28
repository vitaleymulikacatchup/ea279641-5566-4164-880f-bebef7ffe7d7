import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section className="pt-24 pb-16 hero-gradient">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-primary-600">AI-powered</span>
              <br />
              <span className="text-gray-900">web and mobile</span>
              <br />
              <span className="text-primary-600">in 12 weeks</span>
            </h1>
            
            <div className="flex items-center space-x-2 mb-8">
              <span className="text-gray-700 font-medium">Powered by</span>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-accent-pink rounded-full"></div>
                  <div className="w-2 h-2 bg-accent-red rounded-full"></div>
                  <div className="w-2 h-2 bg-accent-pink rounded-full"></div>
                </div>
                <span className="font-semibold text-gray-900">n8n</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary flex items-center space-x-2">
                <span>Start Discovery</span>
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <ArrowRight className="w-5 h-5" />
                <span>Portfolio Showcase</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <span className="tech-tag nestjs">#nestjs</span>
              <span className="tech-tag mysql">#mysql</span>
              <span className="tech-tag mongodb">#mongodb</span>
              <span className="tech-tag nginx">#nginx</span>
              <span className="tech-tag redis">#redis</span>
              <span className="tech-tag typescript">#typescript</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      {...fadeUpPreset(0.1, 0.8)}
      className="pt-24 pb-16 hero-gradient"
    >
      <div className="container-custom">
        <div className="max-w-4xl">
          <motion.h1 
            {...fadeUpPreset(0.2, 0.9)}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-primary-600">AI-powered</span>
            <br />
            <span className="text-gray-900">web and mobile</span>
            <br />
            <span className="text-primary-600">in 12 weeks</span>
          </motion.h1>
          
          <motion.div 
            {...fadeUpPreset(0.3, 0.7)}
            className="flex items-center space-x-2 mb-8"
          >
            <span className="text-gray-700 font-medium">Powered by</span>
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-accent-pink rounded-full"></div>
                <div className="w-2 h-2 bg-accent-red rounded-full"></div>
                <div className="w-2 h-2 bg-accent-pink rounded-full"></div>
              </div>
              <span className="font-semibold text-gray-900">n8n</span>
            </div>
          </motion.div>

          <motion.div 
            {...fadeUpPreset(0.4, 0.6)}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <button className="btn-primary flex items-center space-x-2">
              <span>Start Discovery</span>
            </button>
            <button className="btn-secondary flex items-center space-x-2">
              <ArrowRight className="w-5 h-5" />
              <span>Portfolio Showcase</span>
            </button>
          </motion.div>

          <motion.div 
            {...fadeUpPreset(0.5, 0.5)}
            className="flex flex-wrap gap-4 mb-8"
          >
            <span className="tech-tag nestjs">#nestjs</span>
            <span className="tech-tag mysql">#mysql</span>
            <span className="tech-tag mongodb">#mongodb</span>
            <span className="tech-tag nginx">#nginx</span>
            <span className="tech-tag redis">#redis</span>
            <span className="tech-tag typescript">#typescript</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;