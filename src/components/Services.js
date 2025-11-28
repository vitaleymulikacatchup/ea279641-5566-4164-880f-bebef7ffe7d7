import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Services = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Explore our services
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Web Development */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6">
                Custom web applications built with modern technologies and AI-powered workflows.
              </p>
              <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">💻</span>
                  </div>
                  <p className="text-blue-700 font-medium">Web Development Illustration</p>
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">MOBILE DEVELOPMENT</h3>
              <p className="text-gray-600 mb-6 text-center">
                Native and cross-platform mobile applications for iOS and Android.
              </p>
              <div className="flex justify-center">
                <div className="w-48 h-80 bg-gradient-to-b from-blue-500 to-blue-600 rounded-3xl p-4 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                    <span className="text-4xl">📱</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get the same high-quality service for a smaller task
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      {...fadeUpPreset(0.1, 0.8)}
      className="section-padding bg-gray-50"
    >
      <div className="container-custom">
        <motion.div 
          {...fadeUpPreset(0.2, 0.7)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore our services
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Web Development */}
          <motion.div {...fadeUpPreset(0.3, 0.6)}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
            <p className="text-gray-600 mb-6">
              Custom web applications built with modern technologies and AI-powered workflows.
            </p>
            <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">💻</span>
                </div>
                <p className="text-blue-700 font-medium">Web Development Illustration</p>
              </div>
            </div>
          </motion.div>

          {/* Mobile Development */}
          <motion.div {...fadeUpPreset(0.4, 0.6)}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">MOBILE DEVELOPMENT</h3>
            <p className="text-gray-600 mb-6 text-center">
              Native and cross-platform mobile applications for iOS and Android.
            </p>
            <div className="flex justify-center">
              <div className="w-48 h-80 bg-gradient-to-b from-blue-500 to-blue-600 rounded-3xl p-4 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          {...fadeUpPreset(0.5, 0.5)}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Get the same high-quality service for a smaller task
            </h3>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;