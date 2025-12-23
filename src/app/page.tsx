'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeDo from '@/components/WhatWeDo';
import OurTeam from '@/components/OurTeam';
import News from '@/components/News';
import Footer from '@/components/Footer';
import DonationModal from '@/components/DonationModal';
import CookieConsent from '@/components/CookieConsent';
import PrivacyModal from '@/components/PrivacyModal';

export default function Home() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <>
      <Header onDonateClick={() => setIsDonationModalOpen(true)} />

      <main>
        <Hero onDonateClick={() => setIsDonationModalOpen(true)} />
        <WhoWeAre />
        <WhatWeDo />
        <OurTeam />
        {/* <News /> - Hidden for now */}

        {/* Donation CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-green-700 to-teal-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
              Your support helps us continue our mission of empowering communities across Africa.
              Every donation, big or small, creates lasting impact.
            </p>
            <button
              onClick={() => setIsDonationModalOpen(true)}
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg"
            >
              Donate Now
            </button>
          </div>
        </section>
      </main>

      <Footer onPrivacyClick={() => setIsPrivacyModalOpen(true)} />

      {/* Modals */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      {/* Cookie Consent */}
      <CookieConsent onLearnMore={() => setIsPrivacyModalOpen(true)} />
    </>
  );
}
