'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BookOpen, GraduationCap, Users, BrainCircuit } from 'lucide-react';

export default function AcademicsPage() {
  const stages = [
    { title: 'Pre-Primary (Nursery - KG)', subjects: 'Phonics, Basic Numeracy, Environmental Awareness, Art, Motor Skills.' },
    { title: 'Primary (Class 1 - 5)', subjects: 'English, Hindi, Odia, Mathematics, EVS, Computer Basics, Physical Education.' },
    { title: 'Middle (Class 6 - 8)', subjects: 'English, Hindi, Odia, Math, Science, Social Science, Computer Science.' },
    { title: 'Secondary (Class 9 - 10)', subjects: 'English, Math, Science, Social Science, IT/Computer, Optional Languages.' },
    { title: 'Senior Secondary (Class 11 - 12)', subjects: 'Science & Commerce streams with comprehensive subject choices.' },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-navy mb-4">Academic <span className="text-gradient-gold">Excellence</span></h1>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              Rooted in the CBSE curriculum, our academic structure is designed to foster critical thinking, creativity, and lifelong learning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className="space-y-8 animate-[fadeUp_0.8s_ease-out_forwards]">
              <h2 className="font-heading text-4xl font-bold text-navy border-l-4 border-gold pl-4">CBSE Curriculum</h2>
              <p className="text-navy/80 text-lg leading-relaxed">
                As an affiliated school, we follow the prestigious curriculum set by the Central Board of Secondary Education (CBSE), New Delhi. Our teaching methodology integrates modern educational technologies with traditional values to provide a well-rounded education.
              </p>
              
              <div className="glass p-6 rounded-xl border border-gold/20">
                <h3 className="flex items-center gap-3 font-bold text-navy text-xl mb-4">
                  <BrainCircuit className="text-gold" /> Teaching Methodology
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber mt-2"></span>
                    <span className="text-navy/80">Experiential Learning: Moving beyond rote learning to practical applications.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber mt-2"></span>
                    <span className="text-navy/80">Interactive Classrooms: Utilizing smartboards and digital content.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber mt-2"></span>
                    <span className="text-navy/80">Continuous Evaluation: Focusing on formative assessments for holistic feedback.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-heading text-4xl font-bold text-navy border-l-4 border-gold pl-4 mb-8">Class Structure</h2>
              {stages.map((stage, i) => (
                <div key={i} className="glass p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="font-bold text-xl text-navy flex items-center gap-3 mb-2">
                    <GraduationCap className="text-gold" size={20} />
                    {stage.title}
                  </h3>
                  <p className="text-navy/70 text-sm pl-8"><span className="font-semibold text-navy">Subjects:</span> {stage.subjects}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}