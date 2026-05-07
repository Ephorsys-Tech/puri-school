'use client';

import React from 'react';
import AdmissionProcess from '@/components/admissionsPage/AdmissionProcess';
import Eligibility from '@/components/admissionsPage/Eligibility';
import RequiredDocuments from '@/components/admissionsPage/RequiredDocuments';
import FeeStructure from '@/components/admissionsPage/FeeStructure';
import AdmissionForm from '@/components/admissionsPage/AdmissionForm';

export default function AdmissionsPage() {
  return (
    <main className="flex-grow bg-cream">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 pt-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-navy mb-6">
            Join Our <span className="text-gradient-gold">Community</span>
          </h1>
          <p className="text-lg text-navy/80 leading-relaxed">
            We welcome students who are eager to learn and grow. Start your educational journey with GNO Project School today. Quality education backed by Usthi Foundation India.
          </p>
        </div>
      </div>

      {/* Components */}
      <AdmissionProcess />
      <Eligibility />
      <RequiredDocuments />
      <FeeStructure />
      <AdmissionForm />
    </main>
  );
}