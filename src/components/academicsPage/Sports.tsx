import React from 'react';
import { Trophy, Activity, Users } from 'lucide-react';

export default function Sports() {
  const sportsList = [
    { name: 'Cricket', icon: '🏏', category: 'Team Sport' },
    { name: 'Volleyball', icon: '🏐', category: 'Team Sport' },
    { name: 'Badminton', icon: '🏸', category: 'Individual Sport' },
    { name: 'Basketball', icon: '🏀', category: 'Team Sport' },
    { name: 'Soft Ball', icon: '⚾', category: 'Team Sport' },
    { name: 'Table Tennis', icon: '🏓', category: 'Individual Sport' },
    { name: 'Athletics', icon: '🏃', category: 'Individual Sport' },
    { name: 'Gymnastics', icon: '🤸', category: 'Individual Sport' },
    { name: 'Boxing', icon: '🥊', category: 'Individual Sport' },
    { name: 'Yoga', icon: '🧘', category: 'Wellness' },
    { name: 'Javelin Throw', icon: '🎯', category: 'Athletics' },
    { name: 'Physical Education', icon: '💪', category: 'Fitness' }
  ];

  const facilities = [
    { title: 'Playground', description: 'Well-maintained outdoor grounds for various sports activities' },
    { title: 'Indoor Court', description: 'Dedicated indoor facilities for badminton and table tennis' },
    { title: 'Equipment', description: 'Complete sports equipment for all sports and activities' },
    { title: 'Coaching Staff', description: 'Trained sports coaches for guidance and professional training' }
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center text-gold">
              <Trophy size={32} />
            </div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">
            Sports & <span className="text-gradient-gold">Recreation</span>
          </h2>
          <p className="text-navy/80 max-w-2xl mx-auto text-lg">
            Comprehensive sports programs to develop physical fitness, teamwork, and competitive spirit
          </p>
        </div>

        {/* Sports Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {sportsList.map((sport, idx) => (
            <div key={idx} className="glass p-6 rounded-xl hover:scale-[1.05] transition-transform text-center group">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{sport.icon}</div>
              <h3 className="font-bold text-navy mb-1">{sport.name}</h3>
              <p className="text-xs text-navy/60">{sport.category}</p>
            </div>
          ))}
        </div>

        {/* Facilities */}
        <div className="mb-16">
          <h3 className="font-heading text-3xl font-bold text-navy text-center mb-12">Sports Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border-l-4 border-gold text-center">
                <h4 className="font-bold text-navy mb-2">{facility.title}</h4>
                <p className="text-navy/70 text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs & Achievements */}
        <div className="bg-gradient-to-r from-navy to-blue rounded-2xl p-12 text-cream">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
                <Activity className="text-gold" /> Sports Programs
              </h3>
              <ul className="space-y-3 text-cream/90">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✓</span>
                  <span>Inter-school competitions and tournaments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✓</span>
                  <span>Regular coaching and training sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✓</span>
                  <span>Annual sports day with various events</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✓</span>
                  <span>Talent identification and grooming</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
                <Trophy className="text-gold" /> Student Achievements
              </h3>
              <ul className="space-y-3 text-cream/90">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✓</span>
                  <span>District and state level tournament participations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✓</span>
                  <span>National level competitions (Khelo India)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✓</span>
                  <span>Various certificates and medals awarded</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✓</span>
                  <span>Sports scholarships and recognition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-navy/80 text-lg leading-relaxed max-w-3xl mx-auto">
            We believe sports and physical education are integral to holistic development. Our comprehensive sports program aims to develop not just athletes, but also instill values of discipline, teamwork, and healthy living.
          </p>
        </div>
      </div>
    </section>
  );
}
