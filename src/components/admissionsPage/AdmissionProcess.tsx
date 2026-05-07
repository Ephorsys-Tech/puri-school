import React from 'react';
import { ClipboardList } from 'lucide-react';

export default function AdmissionProcess() {
  const steps = [
    {
      step: '01',
      title: 'Registration',
      desc: 'Fill out the online enquiry form or visit the school office'
    },
    {
      step: '02',
      title: 'Interaction',
      desc: 'A short interaction session with the child and parents'
    },
    {
      step: '03',
      title: 'Documentation',
      desc: 'Submit the required documents for verification'
    },
    {
      step: '04',
      title: 'Confirmation',
      desc: 'Pay the admission fee to secure the seat'
    }
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center text-gold">
              <ClipboardList size={32} />
            </div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">
            Admission <span className="text-gradient-gold">Process</span>
          </h2>
          <p className="text-navy/80 max-w-2xl mx-auto text-lg">
            Four simple steps to enroll your child in GNO Project School
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div key={idx} className="relative">
              <div className="glass p-8 rounded-2xl h-full text-center hover:scale-[1.05] transition-transform">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gold text-navy font-bold flex items-center justify-center text-xl shadow-lg border-4 border-cream">
                  {item.step}
                </div>
                <h3 className="font-bold text-xl text-navy mt-4 mb-3">{item.title}</h3>
                <p className="text-navy/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
              
              {/* Connector Arrow */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-1 bg-gold rounded-full"></div>
                  <div className="w-2 h-2 bg-gold rounded-full absolute -right-1 top-1/2 transform -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-navy to-blue rounded-2xl p-12 text-cream text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">Quick Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-gold font-bold text-lg mb-2">📅 Admission Period</p>
              <p className="text-cream/80">Started till June end</p>
            </div>
            <div>
              <p className="text-gold font-bold text-lg mb-2">⏱️ Processing Time</p>
              <p className="text-cream/80">3-5 working days</p>
            </div>
            <div>
              <p className="text-gold font-bold text-lg mb-2">✅ Confirmation</p>
              <p className="text-cream/80">Upon document verification and fee payment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
