import React from 'react';
import { CreditCard, TrendingDown } from 'lucide-react';

export default function FeeStructure() {
  const feeStructure = [
    {
      class: 'Nursery - KG',
      tuition: '₹ 1,500',
      otherFees: 'Books, uniforms included',
      monthly: 'Affordable & Accessible'
    },
    {
      class: 'Class 1 - 5',
      tuition: '₹ 2,000',
      otherFees: 'Stationery, mid-day meals',
      monthly: 'Affordable & Accessible'
    },
    {
      class: 'Class 6 - 8',
      tuition: '₹ 2,500',
      otherFees: 'Lab fees, activity fees',
      monthly: 'Affordable & Accessible'
    },
    {
      class: 'Class 9 - 10',
      tuition: '₹ 3,000',
      otherFees: 'Board exam fees included',
      monthly: 'Affordable & Accessible'
    }
  ];

  return (
    <section className="py-24 bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center text-navy">
              <CreditCard size={32} />
            </div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Fee <span className="text-gold">Structure</span>
          </h2>
          <p className="text-cream/80 max-w-2xl mx-auto text-lg">
            Quality education at affordable prices, supported by Usthi Foundation India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {feeStructure.map((item, idx) => (
            <div key={idx} className=" rounded-2xl hover:scale-[1.02] transition-transform">
              <h3 className="font-heading text-lg font-bold text-cream mb-4">{item.class}</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-cream/60 text-sm mb-1">Monthly Tuition</p>
                  <p className="text-3xl font-bold text-gold">{item.tuition}</p>
                </div>
                
                <div className="border-t border-cream/20 pt-4">
                  <p className="text-cream/60 text-sm mb-1">Includes</p>
                  <p className="text-cream/90 text-sm">{item.otherFees}</p>
                </div>
                
                <div>
                  <p className="text-gold text-xs font-bold">{item.monthly}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gold/10 rounded-2xl p-12 border border-gold/20 mb-16">
          <h3 className="font-heading text-2xl font-bold text-gold mb-8 text-center">Fee Breakdown & Benefits</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-cream mb-6 flex items-center gap-2">
                <span className="text-gold">📋</span> What's Included
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-cream/90">Tuition and academic classes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-cream/90">Mid-day nutritious meals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-cream/90">School uniforms (2-3 sets)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-cream/90">Books and study materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-cream/90">Laboratory facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-cream/90">Sports and extracurricular activities</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-cream mb-6 flex items-center gap-2">
                <span className="text-gold">💰</span> Special Provisions
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-cream/90">Sibling discount of 10% available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-cream/90">Scholarship for merit students</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-cream/90">Financial aid for underprivileged children</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-cream/90">Payment plans available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-cream/90">Flexible payment options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">✓</span>
                  <span className="text-cream/90">One-time admission fee with first payment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-navy to-blue rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">Our Commitment</h3>
          <p className="text-cream/90 max-w-2xl mx-auto leading-relaxed">
            Backed by Usthi Foundation India, we ensure that quality education is accessible to all, especially underprivileged children. No child is turned away due to inability to pay. Contact the office for scholarship and financial assistance programs.
          </p>
        </div>
      </div>
    </section>
  );
}
