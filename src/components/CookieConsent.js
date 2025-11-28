import React from 'react';
import { X } from 'lucide-react';

const CookieConsent = ({ onClose }) => {
  const handleAccept = () => {
    onClose();
  };

  const handleDeny = () => {
    onClose();
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md bg-white rounded-lg shadow-lg border border-gray-200 p-6 z-50">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        <X className="w-5 h-5" />
      </button>
      
      <h3 className="font-semibold text-gray-900 mb-3">
        This site uses cookies
      </h3>
      
      <p className="text-gray-600 text-sm mb-4">
        We and selected third parties use cookies (or similar technologies) for technical purposes, to enhance and analyze site usage, to support our marketing efforts, and for other purposes described below.
      </p>
      
      <p className="text-gray-600 text-sm mb-6">
        By clicking "Accept all", you agree to the storing of cookies on your device for these purposes.
      </p>
      
      <div className="flex gap-3">
        <button 
          onClick={handleDeny}
          className="btn-outline flex-1 text-sm py-2"
        >
          Deny
        </button>
        <button 
          onClick={handleAccept}
          className="btn-secondary flex-1 text-sm py-2"
        >
          Accept all
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;