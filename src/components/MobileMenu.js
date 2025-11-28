import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Mail } from 'lucide-react';

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-semibold">Menu</h2>
                <h2 className="text-xl font-semibold">Services</h2>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {/* Menu */}
                <div>
                  <ul className="space-y-4">
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Case Studies</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Contacts</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <ul className="space-y-4">
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Web Development</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Mobile Development</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Support and Maintenance</a></li>
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-12">
                <p className="text-sm text-gray-600 mb-2">Feel free to drop us a note:</p>
                <a href="mailto:contact@sargas.io" className="text-primary-600 font-medium">
                  contact@sargas.io
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 mt-8">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              {/* Footer Links */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-between text-sm text-gray-500">
                  <a href="#" className="hover:text-gray-700">Privacy Policy</a>
                  <a href="#" className="hover:text-gray-700">Terms of Use</a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;