import React from 'react';
import { CheckCircle2, Users } from 'lucide-react';

export default function Eligibility() {
  const criteria = [
    {
      title: 'Age Requirement',
      requirement: 'Minimum 5 years for Kindergarten',
      details: 'Students should have reached the specified age by a particular date in the academic year'
    },
    {
      title: 'Previous School',
      requirement: 'Transfer Certificate from previous school',
      details: 'For students changing schools, a TC from the previous institution is required'
    },
    {
      title: 'Academic Record',
      requirement: 'Satisfactory performance',
      details: 'Previous academic record and conduct will be reviewed during the admission process'
    },
    {
      title: 'Health Requirements',
      requirement: 'Medical fitness certificate',
      details: 'Students must be in good health with no serious medical conditions affecting education'
    },
    {
      title: 'Documentation',
      requirement: 'Complete documents',
      details: 'All required documents must be submitted for verification and processing'
    },
    {
      title: 'Parent Support',
      requirement: 'Parental Involvement',
      details: 'Parents must commit to supporting the child\'s educational journey and following school policies'
    }
  ];

  return (
    <section className="py-24 bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center text-navy">
              <Users size={32} />
            </div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Eligibility <span className="text-gold">Criteria</span>
          </h2>
          <p className="text-cream/80 max-w-2xl mx-auto text-lg">
            Basic requirements for admission to GNO Project School
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {criteria.map((item, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle2 className="text-gold flex-shrink-0 mt-1" size={24} />
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-cream mb-2">{item.title}</h3>
                  <p className="text-gold text-sm font-semibold">{item.requirement}</p>
                </div>
              </div>
              <p className="text-cream/70 text-sm pl-10">{item.details}</p>
            </div>
          ))}
        </div>

        <div className="bg-gold/10 rounded-2xl p-12 border border-gold/20">
          <h3 className="font-heading text-2xl font-bold text-gold mb-6 text-center">Class-Wise Admission</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-cream mb-4 text-lg">For Nursery to Class 5</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-cream/90">Age should be appropriate for the class</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-cream/90">Basic interaction to assess readiness</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-cream/90">Previous school report card (if applicable)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-cream mb-4 text-lg">For Class 6 to 10</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-cream/90">Satisfactory academic performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-cream/90">Transfer Certificate from previous school</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-cream/90">Written assessment in relevant subjects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
