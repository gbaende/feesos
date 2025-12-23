'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Cookie, X } from 'lucide-react';

interface CookieConsentProps {
  onLearnMore: () => void;
}

export default function CookieConsent({ onLearnMore }: CookieConsentProps) {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('feesos-cookie-consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('feesos-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('feesos-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Icon */}
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Cookie className="w-6 h-6 text-green-700" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="text-gray-700 text-sm md:text-base">
              {t.cookie.message}{' '}
              <button
                onClick={onLearnMore}
                className="text-green-700 hover:text-green-800 font-medium underline"
              >
                {t.cookie.learnMore}
              </button>
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 md:flex-none px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm"
            >
              {t.cookie.decline}
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 md:flex-none px-6 py-2 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg transition-colors text-sm"
            >
              {t.cookie.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
