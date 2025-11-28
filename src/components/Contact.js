import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail } from 'lucide-react';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How can we help? Let's talk
            </h2>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-primary-600" />
              </div>
              <p className="text-gray-600 mb-6">
                Feel free to drop us a note:
              </p>
              <a 
                href="mailto:contact@sargas.io" 
                className="text-primary-600 hover:text-primary-700 font-semibold text-lg"
              >
                contact@sargas.io
              </a>
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
            How can we help? Let's talk
          </h2>
        </motion.div>

        <motion.div 
          {...fadeUpPreset(0.3, 0.6)}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-primary-600" />
            </div>
            <p className="text-gray-600 mb-6">
              Feel free to drop us a note:
            </p>
            <a 
              href="mailto:contact@sargas.io" 
              className="text-primary-600 hover:text-primary-700 font-semibold text-lg"
            >
              contact@sargas.io
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;