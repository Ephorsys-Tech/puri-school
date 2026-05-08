'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AdmissionProcess from '@/components/admissionsPage/AdmissionProcess';
import Eligibility from '@/components/admissionsPage/Eligibility';
import RequiredDocuments from '@/components/admissionsPage/RequiredDocuments';
import FeeStructure from '@/components/admissionsPage/FeeStructure';

export default function AdmissionsPage() {
  return (
    <main className="flex-grow bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue font-bold uppercase tracking-widest text-sm mb-6 block">Admissions 2025-2026</span>
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-black text-navy mb-8 leading-tight">
              Join Our <span className="text-gradient-blue">Community</span>
            </h1>
            <p className="text-xl text-navy/70 leading-relaxed font-medium max-w-2xl mx-auto">
              We welcome students who are eager to learn and grow. Start your educational journey with GNO Project School today. Quality education backed by Usthi Foundation India.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Components */}
      <AdmissionProcess />
      <Eligibility />
      <RequiredDocuments />
      <FeeStructure />
    </main>
  );
}