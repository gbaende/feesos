'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Shield, Zap, Users, Scale } from 'lucide-react';

const iconMap = {
  0: Shield,
  1: Zap,
  2: Users,
  3: Scale,
};

export default function WhoWeAre() {
  const { t } = useLanguage();

  return (
    <section id="who-we-are" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.whoWeAre.title}
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto" />
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
            <div className="w-14 h-14 bg-green-700 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" viewBox="0 0 100 100">
                <path
                  d="M50 85 Q50 50 50 20 Q35 35 30 55 Q40 45 50 50 Q60 45 70 55 Q65 35 50 20"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.whoWeAre.mission.title}</h3>
            <p className="text-gray-600 leading-relaxed">{t.whoWeAre.mission.text}</p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl border border-teal-100">
            <div className="w-14 h-14 bg-teal-700 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.whoWeAre.vision.title}</h3>
            <p className="text-gray-600 leading-relaxed">{t.whoWeAre.vision.text}</p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            {t.whoWeAre.values.title}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whoWeAre.values.items.map((value, index) => {
              const Icon = iconMap[index as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors">
                    <Icon className="w-6 h-6 text-green-700 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
