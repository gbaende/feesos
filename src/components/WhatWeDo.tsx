'use client';

import { useLanguage } from '@/context/LanguageContext';
import { GraduationCap, Briefcase, Heart, Users } from 'lucide-react';

const iconComponents = {
  GraduationCap,
  Briefcase,
  Heart,
  Users,
};

export default function WhatWeDo() {
  const { t } = useLanguage();

  return (
    <section id="what-we-do" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.whatWeDo.title}
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.whatWeDo.subtitle}</p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {t.whatWeDo.programs.map((program, index) => {
            const IconComponent = iconComponents[program.icon as keyof typeof iconComponents];
            const colors = [
              { bg: 'bg-green-700', light: 'bg-green-50', border: 'border-green-200' },
              { bg: 'bg-teal-700', light: 'bg-teal-50', border: 'border-teal-200' },
              { bg: 'bg-rose-600', light: 'bg-rose-50', border: 'border-rose-200' },
              { bg: 'bg-amber-600', light: 'bg-amber-50', border: 'border-amber-200' },
            ];
            const color = colors[index % colors.length];

            return (
              <div
                key={index}
                className={`${color.light} ${color.border} border rounded-2xl p-8 hover:shadow-lg transition-all`}
              >
                <div className={`w-16 h-16 ${color.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
            );
          })}
        </div>

        {/* Impact Statement */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-700 to-teal-700 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Creating Lasting Impact</h3>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Every program we run is designed to create sustainable change, empowering communities to thrive
            long after our direct involvement ends.
          </p>
        </div>
      </div>
    </section>
  );
}
