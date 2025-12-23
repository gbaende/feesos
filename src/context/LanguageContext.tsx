'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr';

// English translations
const en = {
  nav: {
    whoWeAre: "Who We Are",
    whatWeDo: "What We Do",
    ourTeam: "Our Team",
    news: "News",
    donate: "Donate"
  },
  hero: {
    tagline: "Rising Together",
    title: "Foundation for Equal Employment and Social Services",
    subtitle: "Empowering communities across Africa through sustainable development, education, and social services.",
    cta: "Make a Difference",
    learnMore: "Learn More"
  },
  whoWeAre: {
    title: "Who We Are",
    mission: {
      title: "Our Mission",
      text: "FEESOS is a nonprofit organization based in the United States, dedicated to raising awareness and funds for organizations and individuals in Africa. We believe in creating lasting change through collaborative efforts and sustainable development initiatives."
    },
    vision: {
      title: "Our Vision",
      text: "A world where every individual in Africa has equal access to employment opportunities, education, and essential social services, enabling them to thrive and contribute to their communities."
    },
    values: {
      title: "Our Values",
      items: [
        { title: "Integrity", description: "We operate with complete transparency and accountability in all our endeavors." },
        { title: "Empowerment", description: "We believe in equipping individuals with the tools and resources they need to succeed." },
        { title: "Collaboration", description: "We work alongside local communities and organizations to create sustainable solutions." },
        { title: "Equality", description: "We are committed to ensuring fair access to opportunities for all individuals." }
      ]
    }
  },
  whatWeDo: {
    title: "What We Do",
    subtitle: "Our programs focus on creating sustainable impact across Africa through education, employment, and social services.",
    programs: [
      { title: "Education Initiatives", description: "Supporting schools, providing scholarships, and developing educational resources to empower the next generation.", icon: "GraduationCap" },
      { title: "Employment Programs", description: "Creating job opportunities, vocational training, and entrepreneurship support to foster economic independence.", icon: "Briefcase" },
      { title: "Healthcare Access", description: "Partnering with local clinics and organizations to improve healthcare accessibility in underserved communities.", icon: "Heart" },
      { title: "Community Development", description: "Building infrastructure, providing clean water access, and supporting local initiatives for sustainable growth.", icon: "Users" }
    ]
  },
  ourTeam: {
    title: "Our Team",
    subtitle: "Meet the dedicated individuals working to make a difference."
  },
  news: {
    title: "Latest News",
    subtitle: "Stay updated with our recent activities and announcements.",
    readMore: "Read More"
  },
  donation: {
    title: "Make a Donation",
    subtitle: "Your contribution helps us create lasting change in communities across Africa.",
    selectAmount: "Select Amount",
    customAmount: "Custom Amount",
    selectProcessor: "Select Payment Method",
    stripe: "Credit/Debit Card",
    paypal: "PayPal",
    proceed: "Proceed to Payment",
    cancel: "Cancel",
    taxDeductible: "Your donation is tax-deductible to the extent allowed by law.",
    secure: "Secure payment processing",
    thankYou: "Thank you for your generosity!"
  },
  footer: {
    about: "FEESOS is a 501(c)(3) nonprofit organization dedicated to supporting communities in Africa through education, employment, and social services.",
    quickLinks: "Quick Links",
    contact: "Contact Us",
    email: "info@feesos.org",
    address: "United States",
    followUs: "Follow Us",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    disclaimer: "Disclaimer",
    copyright: "Foundation for Equal Employment and Social Services. All rights reserved.",
    taxId: "Tax ID: XX-XXXXXXX",
    nonprofitDisclaimer: "FEESOS is a registered 501(c)(3) nonprofit organization. Donations are tax-deductible to the extent permitted by law."
  },
  cookie: {
    message: "We use cookies to enhance your experience on our website. By continuing to browse, you consent to our use of cookies.",
    accept: "Accept",
    decline: "Decline",
    learnMore: "Learn More"
  },
  privacy: {
    title: "Privacy Policy",
    gdprTitle: "GDPR & CCPA Compliance",
    gdprText: "We are committed to protecting your privacy and complying with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). You have the right to access, correct, or delete your personal data at any time.",
    dataCollection: "Data We Collect",
    dataCollectionText: "We collect only the information necessary to process donations and communicate with supporters. This may include your name, email address, and payment information.",
    dataUse: "How We Use Your Data",
    dataUseText: "Your data is used solely for processing donations, sending receipts, and keeping you informed about our work (with your consent).",
    contact: "For data requests, please contact us at privacy@feesos.org"
  }
};

// French translations
const fr = {
  nav: {
    whoWeAre: "Qui Sommes-Nous",
    whatWeDo: "Ce Que Nous Faisons",
    ourTeam: "Notre Equipe",
    news: "Actualites",
    donate: "Faire un Don"
  },
  hero: {
    tagline: "Rising Together",
    title: "Fondation pour l'Emploi Egal et les Services Sociaux",
    subtitle: "Autonomiser les communautes africaines grace au developpement durable, a l'education et aux services sociaux.",
    cta: "Faire la Difference",
    learnMore: "En Savoir Plus"
  },
  whoWeAre: {
    title: "Qui Sommes-Nous",
    mission: {
      title: "Notre Mission",
      text: "FEESOS est une organisation a but non lucratif basee aux Etats-Unis, dediee a sensibiliser et collecter des fonds pour les organisations et les individus en Afrique. Nous croyons en la creation d'un changement durable grace a des efforts collaboratifs et des initiatives de developpement durable."
    },
    vision: {
      title: "Notre Vision",
      text: "Un monde ou chaque individu en Afrique a un acces egal aux opportunites d'emploi, a l'education et aux services sociaux essentiels, leur permettant de s'epanouir et de contribuer a leurs communautes."
    },
    values: {
      title: "Nos Valeurs",
      items: [
        { title: "Integrite", description: "Nous operons avec une transparence et une responsabilite totales dans toutes nos activites." },
        { title: "Autonomisation", description: "Nous croyons en l'equipement des individus avec les outils et ressources dont ils ont besoin pour reussir." },
        { title: "Collaboration", description: "Nous travaillons aux cotes des communautes locales et des organisations pour creer des solutions durables." },
        { title: "Egalite", description: "Nous nous engageons a assurer un acces equitable aux opportunites pour tous les individus." }
      ]
    }
  },
  whatWeDo: {
    title: "Ce Que Nous Faisons",
    subtitle: "Nos programmes se concentrent sur la creation d'un impact durable a travers l'Afrique grace a l'education, l'emploi et les services sociaux.",
    programs: [
      { title: "Initiatives Educatives", description: "Soutenir les ecoles, fournir des bourses et developper des ressources educatives pour autonomiser la prochaine generation.", icon: "GraduationCap" },
      { title: "Programmes d'Emploi", description: "Creer des opportunites d'emploi, des formations professionnelles et un soutien a l'entrepreneuriat pour favoriser l'independance economique.", icon: "Briefcase" },
      { title: "Acces aux Soins de Sante", description: "Partenariat avec des cliniques locales et des organisations pour ameliorer l'accessibilite aux soins de sante dans les communautes mal desservies.", icon: "Heart" },
      { title: "Developpement Communautaire", description: "Construire des infrastructures, fournir un acces a l'eau potable et soutenir les initiatives locales pour une croissance durable.", icon: "Users" }
    ]
  },
  ourTeam: {
    title: "Notre Equipe",
    subtitle: "Rencontrez les personnes dediees qui travaillent pour faire la difference."
  },
  news: {
    title: "Dernieres Actualites",
    subtitle: "Restez informe de nos activites recentes et annonces.",
    readMore: "Lire la Suite"
  },
  donation: {
    title: "Faire un Don",
    subtitle: "Votre contribution nous aide a creer un changement durable dans les communautes a travers l'Afrique.",
    selectAmount: "Selectionner le Montant",
    customAmount: "Montant Personnalise",
    selectProcessor: "Selectionner le Mode de Paiement",
    stripe: "Carte de Credit/Debit",
    paypal: "PayPal",
    proceed: "Proceder au Paiement",
    cancel: "Annuler",
    taxDeductible: "Votre don est deductible des impots dans la mesure permise par la loi.",
    secure: "Traitement securise des paiements",
    thankYou: "Merci pour votre generosite!"
  },
  footer: {
    about: "FEESOS est une organisation a but non lucratif 501(c)(3) dediee au soutien des communautes en Afrique a travers l'education, l'emploi et les services sociaux.",
    quickLinks: "Liens Rapides",
    contact: "Nous Contacter",
    email: "info@feesos.org",
    address: "Etats-Unis",
    followUs: "Suivez-Nous",
    legal: "Mentions Legales",
    privacy: "Politique de Confidentialite",
    terms: "Conditions d'Utilisation",
    disclaimer: "Avertissement",
    copyright: "Fondation pour l'Emploi Egal et les Services Sociaux. Tous droits reserves.",
    taxId: "Numero Fiscal: XX-XXXXXXX",
    nonprofitDisclaimer: "FEESOS est une organisation a but non lucratif 501(c)(3) enregistree. Les dons sont deductibles des impots dans la mesure permise par la loi."
  },
  cookie: {
    message: "Nous utilisons des cookies pour ameliorer votre experience sur notre site. En continuant a naviguer, vous consentez a notre utilisation des cookies.",
    accept: "Accepter",
    decline: "Refuser",
    learnMore: "En Savoir Plus"
  },
  privacy: {
    title: "Politique de Confidentialite",
    gdprTitle: "Conformite RGPD & CCPA",
    gdprText: "Nous nous engageons a proteger votre vie privee et a nous conformer au Reglement General sur la Protection des Donnees (RGPD) et au California Consumer Privacy Act (CCPA). Vous avez le droit d'acceder, de corriger ou de supprimer vos donnees personnelles a tout moment.",
    dataCollection: "Donnees Collectees",
    dataCollectionText: "Nous collectons uniquement les informations necessaires pour traiter les dons et communiquer avec les supporters. Cela peut inclure votre nom, adresse e-mail et informations de paiement.",
    dataUse: "Comment Nous Utilisons Vos Donnees",
    dataUseText: "Vos donnees sont utilisees uniquement pour traiter les dons, envoyer des recus et vous tenir informe de notre travail (avec votre consentement).",
    contact: "Pour les demandes de donnees, veuillez nous contacter a privacy@feesos.org"
  }
};

type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const translations: Record<Language, Translations> = { en, fr };

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('feesos-language') as Language;
    if (saved && (saved === 'en' || saved === 'fr')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('feesos-language', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
}
