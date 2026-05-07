import React from 'react';
import { BookMarked } from 'lucide-react';

export default function Subjects() {
  const classSubjects = [
    {
      level: 'Nursery & KG',
      subjects: ['English', 'Mathematics', 'Environmental Awareness', 'Art & Craft', 'Music', 'Physical Education']
    },
    {
      level: 'Class 1 - 5',
      subjects: ['English', 'Hindi', 'Odia', 'Mathematics', 'EVS', 'Computer Basics', 'Physical Education']
    },
    {
      level: 'Class 6 - 8',
      subjects: ['English', 'Hindi', 'Odia', 'Mathematics', 'Science', 'Social Science', 'Computer Science']
    },
    {
      level: 'Class 9 - 10',
      subjects: ['English', 'Mathematics', 'Science', 'Social Science', 'IT/Computer', 'Optional Languages']
    }
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center text-gold">
              <BookMarked size={32} />
            </div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">
            Subject <span className="text-gradient-gold">Offerings</span>
          </h2>
          <p className="text-navy/80 max-w-2xl mx-auto text-lg">
            Comprehensive subject coverage designed for each academic level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classSubjects.map((classItem, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl border-l-4 border-gold hover:shadow-lg transition-shadow">
              <h3 className="font-heading text-2xl font-bold text-navy mb-6">{classItem.level}</h3>
              <div className="space-y-3">
                {classItem.subjects.map((subject, sidx) => (
                  <div key={sidx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                    <span className="text-navy/80">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-navy to-blue rounded-2xl p-8 md:p-12 text-cream text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">Balanced Curriculum</h3>
          <p className="text-cream/90 max-w-2xl mx-auto">
            Each subject is designed to develop critical thinking, creativity, and practical skills. We emphasize both theoretical knowledge and hands-on learning experiences through laboratory work, projects, and field studies.
          </p>
        </div>
      </div>
    </section>
  );
}
