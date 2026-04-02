import React from 'react';
import { Award, Star, BookOpen, Heart } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    { year: '2010', title: 'Foundation Laid', desc: 'Usthi Foundation inaugurated the school to serve the community.', icon: <Heart size={24} /> },
    { year: '2015', title: 'CBSE Affiliation', desc: 'Officially recognized and affiliated with CBSE up to Class 10.', icon: <BookOpen size={24} /> },
    { year: '2019', title: 'Excellence Award', desc: 'Awarded the Best Emerging School in Odisha for holistic education.', icon: <Star size={24} /> },
    { year: '2023', title: '100% Board Results', desc: 'Achieved a perfect pass rate in the Class 10 board examinations.', icon: <Award size={24} /> },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">Our Journey</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gold/30 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {achievements.map((item, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-navy rounded-full border-4 border-cream flex items-center justify-center text-gold z-10 -translate-x-1/2 shadow-lg">
                  {item.icon}
                </div>

                <div className="ml-20 md:ml-0 md:w-1/2 p-4">
                  <div className={`glass p-6 rounded-2xl ${idx % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    <span className="text-gold font-bold text-xl mb-2 block font-heading">{item.year}</span>
                    <h3 className="text-navy font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-navy/70">{item.desc}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
