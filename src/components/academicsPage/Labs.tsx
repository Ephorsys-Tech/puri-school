import React from 'react';
import { Microscope, Zap } from 'lucide-react';

export default function Labs() {
  const labTypes = [
    {
      name: 'Science Laboratory',
      icon: <Microscope size={32} />,
      description: 'Fully equipped science lab for Physics, Chemistry, and Biology experiments',
      equipment: [
        'Microscopes & Magnifying Equipment',
        'Chemical Apparatus & Reagents',
        'Physics Instruments & Apparatus',
        'Safety Equipment & PPE',
        'Demonstration Boards',
        'Reference Materials'
      ]
    },
    {
      name: 'Computer Laboratory',
      icon: <Zap size={32} />,
      description: 'State-of-the-art computer lab for IT and digital literacy education',
      equipment: [
        'Computers & Workstations',
        'Internet Connectivity',
        'Software Suite',
        'Printers & Scanners',
        'Networking Equipment',
        'Educational Software'
      ]
    }
  ];

  return (
    <section className="py-24 bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Science & Computer <span className="text-gold">Labs</span>
          </h2>
          <p className="text-cream/80 max-w-2xl mx-auto text-lg">
            Modern laboratory facilities for hands-on learning and practical experiments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {labTypes.map((lab, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gold/20 rounded-xl flex items-center justify-center text-gold">
                  {lab.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold">{lab.name}</h3>
              </div>
              
              <p className="text-cream/90 mb-6 leading-relaxed">{lab.description}</p>
              
              <div className="space-y-3">
                <p className="text-gold font-bold text-sm">Equipment & Facilities:</p>
                {lab.equipment.map((item, eidx) => (
                  <div key={eidx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                    <span className="text-cream/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gold/10 rounded-2xl p-12 border border-gold/20">
          <h3 className="font-heading text-2xl font-bold text-gold mb-8 text-center">Lab Features</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">👨‍🔬</div>
              <h4 className="font-bold text-cream mb-2">Expert Guidance</h4>
              <p className="text-cream/70 text-sm">Experienced lab coordinators and teachers provide hands-on guidance and supervision</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🔬</div>
              <h4 className="font-bold text-cream mb-2">Safety First</h4>
              <p className="text-cream/70 text-sm">Strict adherence to safety protocols with proper training for all students</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="font-bold text-cream mb-2">Practical Learning</h4>
              <p className="text-cream/70 text-sm">Regular experiments and projects aligned with CBSE curriculum objectives</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-cream/80 text-lg leading-relaxed max-w-3xl mx-auto">
            Our laboratories are designed to transform theoretical concepts into practical understanding. Students conduct experiments regularly as part of their curriculum, fostering scientific temper and critical thinking.
          </p>
        </div>
      </div>
    </section>
  );
}
