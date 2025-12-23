'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowRight } from 'lucide-react';

const newsData = {
  articles: [
    {
      id: "1",
      title: "FEESOS Launches New Education Initiative in Ghana",
      titleFr: "FEESOS Lance une Nouvelle Initiative Educative au Ghana",
      date: "2024-12-15",
      excerpt: "We are excited to announce our partnership with local schools in Ghana to provide educational resources and scholarships to over 500 students.",
      excerptFr: "Nous sommes ravis d'annoncer notre partenariat avec des ecoles locales au Ghana pour fournir des ressources educatives et des bourses a plus de 500 etudiants.",
    },
    {
      id: "2",
      title: "Community Health Program Reaches Milestone",
      titleFr: "Le Programme de Sante Communautaire Atteint une Etape Importante",
      date: "2024-11-28",
      excerpt: "Our healthcare access program has now served over 10,000 individuals across 15 communities in East Africa.",
      excerptFr: "Notre programme d'acces aux soins de sante a maintenant servi plus de 10 000 personnes dans 15 communautes en Afrique de l'Est.",
    },
    {
      id: "3",
      title: "Annual Report 2024 Now Available",
      titleFr: "Rapport Annuel 2024 Maintenant Disponible",
      date: "2024-11-10",
      excerpt: "Read about our achievements, financial transparency, and plans for the coming year in our comprehensive annual report.",
      excerptFr: "Decouvrez nos realisations, notre transparence financiere et nos plans pour l'annee a venir dans notre rapport annuel complet.",
    }
  ]
};

export default function News() {
  const { t, language } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="news" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.news.title}
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.news.subtitle}</p>
        </div>

        {/* News Grid - Hidden for now
        <div className="grid md:grid-cols-3 gap-8">
          {newsData.articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all group"
            >
              <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-300" viewBox="0 0 100 100">
                  <path
                    d="M50 85 Q50 50 50 20 Q35 35 30 55 Q40 45 50 50 Q60 45 70 55 Q65 35 50 20"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <time>{formatDate(article.date)}</time>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-700 transition-colors">
                  {language === 'fr' ? article.titleFr : article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {language === 'fr' ? article.excerptFr : article.excerpt}
                </p>
                <button className="text-green-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t.news.readMore}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}
