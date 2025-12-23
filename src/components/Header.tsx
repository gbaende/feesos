'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

interface HeaderProps {
  onDonateClick: () => void;
}

export default function Header({ onDonateClick }: HeaderProps) {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#who-we-are', label: t.nav.whoWeAre },
    { href: '#what-we-do', label: t.nav.whatWeDo },
    { href: '#our-team', label: t.nav.ourTeam },
    { href: '#news', label: t.nav.news },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/images/feesos_logo.png"
              alt="FEESOS - Rising Together"
              width={200}
              height={46}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-600 hover:text-green-700 font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <button
              onClick={onDonateClick}
              className="hidden sm:block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full font-semibold transition-colors"
            >
              {t.nav.donate}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-600 hover:text-green-700 font-medium py-2 text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onDonateClick();
                }}
                className="bg-green-700 hover:bg-green-800 text-white px-4 py-3 rounded-full font-semibold mt-2 transition-colors"
              >
                {t.nav.donate}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
