import React from 'react';
import { BookOpen } from 'lucide-react';

export default function AboutSchool() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center text-gold">
              <BookOpen size={32} />
            </div>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-navy mb-6">
            Our <span className="text-gradient-gold">Story</span>
          </h1>
          <p className="text-lg text-navy/80 leading-relaxed mb-8">
            GNO Project School is a beacon of hope and learning in Puri, backed by the Usthi Foundation India. We are dedicated to providing quality education and building character.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="glass p-6 rounded-xl hover:scale-105 transition-transform">
              <p className="text-3xl font-bold text-navy">50+</p>
              <p className="text-navy/60 text-sm mt-2">Teachers</p>
            </div>
            <div className="glass p-6 rounded-xl hover:scale-105 transition-transform">
              <p className="text-3xl font-bold text-navy">800+</p>
              <p className="text-navy/60 text-sm mt-2">Students</p>
            </div>
            <div className="glass p-6 rounded-xl hover:scale-105 transition-transform">
              <p className="text-3xl font-bold text-navy">15+</p>
              <p className="text-navy/60 text-sm mt-2">Years</p>
            </div>
            <div className="glass p-6 rounded-xl hover:scale-105 transition-transform">
              <p className="text-3xl font-bold text-navy">100%</p>
              <p className="text-navy/60 text-sm mt-2">Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
