'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Facebook, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

interface FooterProps {
  onPrivacyClick: () => void;
}

export default function Footer({ onPrivacyClick }: FooterProps) {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/feesos_logo.png"
                alt="FEESOS - Rising Together"
                width={160}
                height={37}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{t.footer.about}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#who-we-are')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t.nav.whoWeAre}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#what-we-do')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t.nav.whatWeDo}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#our-team')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t.nav.ourTeam}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#news')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t.news.title}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@feesos.org" className="hover:text-white transition-colors">
                  {t.footer.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{t.footer.address}</span>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.followUs}</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <h4 className="font-semibold mb-3">{t.footer.legal}</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onPrivacyClick}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t.footer.privacy}
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t.footer.terms}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>&copy; {currentYear} {t.footer.copyright}</p>
              <p className="mt-1">{t.footer.taxId}</p>
            </div>
            <p className="text-xs text-gray-500 text-center md:text-right max-w-md">
              {t.footer.nonprofitDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
