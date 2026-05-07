'use client';

import React from 'react';
import ClassesOffered from '@/components/academicsPage/ClassesOffered';
import CBSECurriculum from '@/components/academicsPage/CBSECurriculum';
import Subjects from '@/components/academicsPage/Subjects';
import AcademicCalendar from '@/components/academicsPage/AcademicCalendar';
import Library from '@/components/academicsPage/Library';
import Labs from '@/components/academicsPage/Labs';
import Sports from '@/components/academicsPage/Sports';

export default function AcademicsPage() {
  return (
    <main className="flex-grow bg-cream">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 pt-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-navy mb-6">
            Academic <span className="text-gradient-gold">Excellence</span>
          </h1>
          <p className="text-navy/70 text-lg leading-relaxed">
            Rooted in the CBSE curriculum, our academic structure is designed to foster critical thinking, creativity, and lifelong learning. We provide comprehensive education from Nursery to Class 10.
          </p>
        </div>
      </div>

      {/* Components */}
      <ClassesOffered />
      <CBSECurriculum />
      <Subjects />
      <AcademicCalendar />
      <Library />
      <Labs />
      <Sports />
    </main>
  );
}