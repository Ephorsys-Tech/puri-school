import React from 'react';
import { Target, Eye } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="glass p-10 rounded-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-colors"></div>
            <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center text-gold mb-6">
              <Eye size={32} />
            </div>
            <h3 className="font-heading text-3xl font-bold text-navy mb-4">Our Vision</h3>
            <p className="text-navy/80 leading-relaxed text-lg">
              To be a beacon of inclusive and holistic education, nurturing young minds to become empathetic, innovative, and responsible global citizens who contribute meaningfully to society.
            </p>
          </div>

          <div className="glass-navy p-10 rounded-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue/20 rounded-full blur-2xl group-hover:bg-blue/30 transition-colors"></div>
            <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center text-navy mb-6">
              <Target size={32} />
            </div>
            <h3 className="font-heading text-3xl font-bold text-cream mb-4">Our Mission</h3>
            <p className="text-cream/80 leading-relaxed text-lg">
              To provide a nurturing environment that empowers students through quality academic programs, character building, and life skills, breaking barriers to success.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
