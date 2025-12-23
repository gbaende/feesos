'use client';

import { useLanguage } from '@/context/LanguageContext';

const teamData = {
  members: [
    {
      id: "1",
      name: "Dr. Amara Okonkwo",
      title: "Executive Director",
      titleFr: "Directrice Executive",
      bio: "With over 15 years of experience in nonprofit leadership, Dr. Okonkwo leads FEESOS's strategic vision and operations.",
      bioFr: "Avec plus de 15 ans d'experience dans le leadership associatif, Dr. Okonkwo dirige la vision strategique et les operations de FEESOS.",
    },
    {
      id: "2",
      name: "Michael Thompson",
      title: "Director of Programs",
      titleFr: "Directeur des Programmes",
      bio: "Michael oversees all FEESOS programs, ensuring they create meaningful and sustainable impact across Africa.",
      bioFr: "Michael supervise tous les programmes de FEESOS, s'assurant qu'ils creent un impact significatif et durable a travers l'Afrique.",
    },
    {
      id: "3",
      name: "Fatou Diallo",
      title: "Community Outreach Manager",
      titleFr: "Responsable de la Sensibilisation Communautaire",
      bio: "Fatou builds bridges between FEESOS and communities across Africa, fostering partnerships and local engagement.",
      bioFr: "Fatou cree des liens entre FEESOS et les communautes a travers l'Afrique, favorisant les partenariats et l'engagement local.",
    },
    {
      id: "4",
      name: "James Mensah",
      title: "Finance & Operations",
      titleFr: "Finances et Operations",
      bio: "James ensures FEESOS operates with financial integrity and efficiency, maximizing the impact of every donation.",
      bioFr: "James veille a ce que FEESOS fonctionne avec integrite financiere et efficacite, maximisant l'impact de chaque don.",
    }
  ]
};

export default function OurTeam() {
  const { t, language } = useLanguage();

  return (
    <section id="our-team" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.ourTeam.title}
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.ourTeam.subtitle}</p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all group"
            >
              {/* Avatar */}
              <div className="aspect-square bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-700 to-teal-700 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-700 font-medium text-sm mb-3">
                  {language === 'fr' ? member.titleFr : member.title}
                </p>
                <p className="text-gray-600 text-sm">
                  {language === 'fr' ? member.bioFr : member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
