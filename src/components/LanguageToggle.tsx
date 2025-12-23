'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle language"
      >
        <Globe className="w-5 h-5 text-gray-600" />
        <span className="text-sm font-medium text-gray-700 uppercase">{language}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          <button
            onClick={() => {
              setLanguage('en');
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${
              language === 'en' ? 'text-green-700 font-semibold bg-green-50' : 'text-gray-700'
            }`}
          >
            English
          </button>
          <button
            onClick={() => {
              setLanguage('fr');
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${
              language === 'fr' ? 'text-green-700 font-semibold bg-green-50' : 'text-gray-700'
            }`}
          >
            Francais
          </button>
        </div>
      )}
    </div>
  );
}
