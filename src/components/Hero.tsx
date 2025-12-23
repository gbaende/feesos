'use client';

import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  onDonateClick: () => void;
}

export default function Hero({ onDonateClick }: HeroProps) {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const element = document.querySelector('#who-we-are');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-teal-50 pt-16 md:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/feesos_logo.png"
              alt="FEESOS - Rising Together"
              width={400}
              height={92}
              className="h-20 md:h-28 lg:h-32 w-auto"
              priority
            />
          </div>

          {/* Full Name */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-4 font-medium max-w-4xl mx-auto">
            {t.hero.title}
          </p>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onDonateClick}
              className="group bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              {t.hero.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToAbout}
              className="text-green-700 hover:text-green-800 px-8 py-4 font-semibold text-lg transition-colors flex items-center gap-2"
            >
              {t.hero.learnMore}
            </button>
          </div>

          {/* Stats - Hidden for now
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-green-700">10K+</p>
              <p className="text-gray-600 text-sm md:text-base">Lives Impacted</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-green-700">15+</p>
              <p className="text-gray-600 text-sm md:text-base">Communities</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-green-700">5</p>
              <p className="text-gray-600 text-sm md:text-base">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-green-700">100%</p>
              <p className="text-gray-600 text-sm md:text-base">Transparent</p>
            </div>
          </div>
          */}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-gray-400 hover:text-gray-600">
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
