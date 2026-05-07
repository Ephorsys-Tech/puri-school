import React from 'react';
import { BookOpen, Users } from 'lucide-react';

export default function ClassesOffered() {
  const classes = [
    {
      level: 'Pre-Primary',
      grades: 'Nursery - KG',
      description: 'Foundation stage focusing on basic literacy, numeracy, and social skills',
      color: 'from-blue to-blue/50'
    },
    {
      level: 'Primary',
      grades: 'Class 1 - 5',
      description: 'Building foundational knowledge in core subjects with emphasis on English and Mathematics',
      color: 'from-indigo to-indigo/50'
    },
    {
      level: 'Middle School',
      grades: 'Class 6 - 8',
      description: 'Introduction to specialized subjects including Science and Social Science',
      color: 'from-navy to-navy/50'
    },
    {
      level: 'Secondary',
      grades: 'Class 9 - 10',
      description: 'Board examination preparation with comprehensive subject coverage and competitive focus',
      color: 'from-gold to-amber'
    },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center text-gold">
              <BookOpen size={32} />
            </div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">
            Classes <span className="text-gradient-gold">Offered</span>
          </h2>
          <p className="text-navy/80 max-w-2xl mx-auto text-lg">
            From Nursery to Class 10, we offer comprehensive education across multiple levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((classItem, idx) => (
            <div key={idx} className="group">
              <div className="glass p-8 rounded-2xl h-full hover:scale-[1.05] transition-transform duration-300 border-l-4 border-gold">
                <div className="text-4xl font-bold text-navy mb-2">{classItem.grades}</div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">{classItem.level}</h3>
                <p className="text-navy/70 text-sm leading-relaxed">{classItem.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-navy to-blue rounded-2xl p-12 text-cream">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">12</div>
              <p>Classrooms</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">6</div>
              <p>Subjects per Class</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">Nursery - 10</div>
              <p>Grade Span</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
