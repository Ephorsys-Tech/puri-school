import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import VisionMission from '@/components/aboutPage/VisionMission';
import PrincipalMessage from '@/components/aboutPage/PrincipalMessage';
import Achievements from '@/components/aboutPage/Achievements';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-cream">
        {/* About Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-navy mb-6">
              Our <span className="text-gradient-gold">Story</span>
            </h1>
            <p className="text-lg text-navy/80 leading-relaxed">
              GNO Project School is a beacon of hope and learning in Puri, backed by the Usthi Foundation India. We are dedicated to providing quality education and building character.
            </p>
          </div>
        </div>

        <VisionMission />
        <PrincipalMessage />
        <Achievements />
      </main>
      <Footer />
    </>
  );
}