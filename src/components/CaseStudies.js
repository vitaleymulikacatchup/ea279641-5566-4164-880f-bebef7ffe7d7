import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const CaseStudies = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
          </div>

          <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Dios</h3>
                <p className="text-blue-100 mb-6">
                  A comprehensive platform for managing digital workflows with AI integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">MongoDB</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">AI/ML</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">$2,500</div>
                    <div className="text-blue-100 text-sm">Project Value</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">120+</div>
                    <div className="text-blue-100 text-sm">Active Users</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500">Dashboard Preview</span>
                  </div>
                </div>
                <div className="text-center text-blue-100">
                  Platform Interface
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      {...fadeUpPreset(0.1, 0.8)}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <motion.div 
          {...fadeUpPreset(0.2, 0.7)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
        </motion.div>

        <motion.div 
          {...fadeUpPreset(0.3, 0.6)}
          className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Dios</h3>
              <p className="text-blue-100 mb-6">
                A comprehensive platform for managing digital workflows with AI integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">MongoDB</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">AI/ML</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">$2,500</div>
                  <div className="text-blue-100 text-sm">Project Value</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">120+</div>
                  <div className="text-blue-100 text-sm">Active Users</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500">Dashboard Preview</span>
                </div>
              </div>
              <div className="text-center text-blue-100">
                Platform Interface
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CaseStudies;