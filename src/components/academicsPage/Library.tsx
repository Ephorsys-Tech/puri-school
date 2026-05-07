import React from 'react';
import { BookOpen, Users } from 'lucide-react';

export default function Library() {
  const libraryFeatures = [
    {
      title: 'Extensive Collection',
      description: 'Comprehensive collection of books across subjects including fiction, reference materials, and educational resources'
    },
    {
      title: 'Digital Resources',
      description: 'Access to online databases, e-books, and educational journals for enhanced learning'
    },
    {
      title: 'Reading Zones',
      description: 'Comfortable reading areas with proper lighting and furniture for uninterrupted study'
    },
    {
      title: 'Research Support',
      description: 'Dedicated staff to assist students in finding research materials and conducting library programs'
    }
  ];

  const statistics = [
    { number: '5000+', label: 'Books' },
    { number: '500+', label: 'E-Resources' },
    { number: '24/7', label: 'Digital Access' },
    { number: '50+', label: 'Journals' }
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
            School <span className="text-gradient-gold">Library</span>
          </h2>
          <p className="text-navy/80 max-w-2xl mx-auto text-lg">
            A hub of knowledge and intellectual exploration for our students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl text-center hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-gold mb-2">{stat.number}</div>
              <p className="text-navy/70 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {libraryFeatures.map((feature, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl border-l-4 border-gold hover:shadow-lg transition-shadow">
              <h3 className="font-heading text-xl font-bold text-navy mb-3">{feature.title}</h3>
              <p className="text-navy/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-navy to-blue rounded-2xl p-12 text-cream text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">Library Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <p className="text-gold font-bold text-lg mb-2">📚 Subject Categories</p>
              <p className="text-cream/80 text-sm">Science, Mathematics, Literature, History, Geography, Art & More</p>
            </div>
            <div>
              <p className="text-gold font-bold text-lg mb-2">🖥️ Computers</p>
              <p className="text-cream/80 text-sm">Internet-enabled workstations for research and e-resource access</p>
            </div>
            <div>
              <p className="text-gold font-bold text-lg mb-2">📖 Quiet Zone</p>
              <p className="text-cream/80 text-sm">Dedicated areas for focused study and academic research</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
