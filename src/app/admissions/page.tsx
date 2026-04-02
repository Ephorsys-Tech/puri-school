'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CheckCircle2, ClipboardList, CreditCard } from 'lucide-react';

export default function AdmissionsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-navy mb-6">
              Join Our <span className="text-gradient-gold">Community</span>
            </h1>
            <p className="text-lg text-navy/80">
              We welcome students who are eager to learn and grow. Start your journey with GNO Project School today.
            </p>
          </div>

          {/* Admission Process */}
          <section className="mb-24">
            <h2 className="font-heading text-3xl font-bold text-navy text-center mb-12">Step-by-Step Admission Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Registration', desc: 'Fill out the online enquiry form or visit the school office.' },
                { step: '02', title: 'Interaction', desc: 'A short interaction session with the child and parents.' },
                { step: '03', title: 'Documentation', desc: 'Submit the required documents for verification.' },
                { step: '04', title: 'Confirmation', desc: 'Pay the admission fee to secure the seat.' }
              ].map((item, idx) => (
                <div key={idx} className="glass text-center p-8 rounded-2xl relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gold text-navy font-bold flex items-center justify-center text-xl shadow-lg border-4 border-cream">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-xl text-navy mt-4 mb-2">{item.title}</h3>
                  <p className="text-navy/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Required Documents */}
            <div className="glass-navy p-10 rounded-2xl text-cream">
              <div className="flex items-center gap-4 mb-8">
                <ClipboardList className="text-gold" size={32} />
                <h2 className="font-heading text-3xl font-bold text-cream">Required Documents</h2>
              </div>
              <ul className="space-y-4">
                {[
                  'Birth Certificate (Original + Photocopy)',
                  'Aadhaar Card of the Student & Parents',
                  '4 Passport size photographs of the student',
                  '2 Passport size photographs of parents',
                  'Previous class Report Card (if applicable)',
                  'Transfer Certificate (TC) from previous school'
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-amber mt-1 shrink-0" size={20} />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fee Structure */}
            <div className="glass p-10 rounded-2xl">
              <div className="flex items-center gap-4 mb-8">
                <CreditCard className="text-navy" size={32} />
                <h2 className="font-heading text-3xl font-bold text-navy">Fee Info</h2>
              </div>
              <p className="text-navy/80 mb-6">
                Our fee structure is designed to be accessible while ensuring we provide the best facilities and educators. GNO Project School is supported by Usthi Foundation India to keep quality education affordable.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gold/40">
                      <th className="py-3 px-4 font-bold text-navy">Class Range</th>
                      <th className="py-3 px-4 font-bold text-navy">Admission Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-navy/10">
                      <td className="py-3 px-4 text-navy/80">Nursery - KG</td>
                      <td className="py-3 px-4 font-semibold text-navy">₹ X,XXX</td>
                    </tr>
                    <tr className="border-b border-navy/10">
                      <td className="py-3 px-4 text-navy/80">Class 1 - 5</td>
                      <td className="py-3 px-4 font-semibold text-navy">₹ X,XXX</td>
                    </tr>
                    <tr className="border-b border-navy/10">
                      <td className="py-3 px-4 text-navy/80">Class 6 - 8</td>
                      <td className="py-3 px-4 font-semibold text-navy">₹ X,XXX</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-navy/80">Class 9 - 12</td>
                      <td className="py-3 px-4 font-semibold text-navy">₹ X,XXX</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-navy/50 mt-4 italic">* For detailed fee breakdown including tuition and transport fees, please contact the school office.</p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}