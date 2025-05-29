import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookieConsentProps {
  onAccept: () => void;
  onClose: () => void;
}

const CookieConsent = ({ onAccept, onClose }: CookieConsentProps) => {
  return (
    <div className="fixed bottom-4 left-4 max-w-sm bg-background-light rounded-lg shadow-lg p-4 z-50 flex items-start gap-3 border border-gray-800">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="var(--primary)"/>
          </svg>
          <span className="font-medium text-white">Cookie Consent</span>
          <span className="ml-auto text-xs text-text-secondary">FR</span>
        </div>
        <p className="text-sm text-text-secondary mb-3">
          We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
        </p>
        <div className="flex items-center justify-between">
          <Link to="/cookies-policy" className="text-primary hover:text-primary/80 text-sm">
            Privacy Policy
          </Link>
          <div className="flex gap-2">
            <button
              onClick={onAccept}
              className="bg-primary text-white px-4 py-1.5 rounded text-sm hover:bg-primary/90 transition-colors"
            >
              Accept
            </button>
            <button
              onClick={onClose}
              className="text-text-secondary hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;