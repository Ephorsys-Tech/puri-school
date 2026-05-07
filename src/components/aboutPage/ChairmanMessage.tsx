import React from 'react';

export default function ChairmanMessage() {
  return (
    <section className="py-24 bg-cream relative">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gold/10 diagonal-cut-bottom"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute inset-0 border-2 border-navy translate-x-4 translate-y-4 rounded-2xl -z-10"></div>
            <div className="bg-navy/5 rounded-2xl overflow-hidden aspect-[4/5] p-2 glass">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" 
                alt="Chairman" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-gold font-bold uppercase tracking-wider text-sm">Leadership</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">Message from the <br/><span className="text-gold">Chairman</span></h2>
            <div className="w-16 h-1 bg-gold rounded-full"></div>
            
            <div className="space-y-4 text-navy/80 text-lg leading-relaxed relative">
              <span className="absolute -top-10 -left-6 text-8xl text-navy/5 font-serif leading-none select-none">"</span>
              <p>
                At Usthi Foundation India, we believe that quality education is the cornerstone of societal transformation. GNO Project School exemplifies our commitment to creating inclusive, holistic learning experiences.
              </p>
              <p>
                Our vision extends beyond academic excellence. We are committed to developing young minds that are not only intellectually sharp but also morally upright and socially conscious.
              </p>
              <p>
                I am proud of the progress we have made and look forward to a future where every child in Puri has access to world-class education and opportunities.
              </p>
            </div>
            
            <div className="pt-6 border-t border-navy/10">
              <h4 className="font-heading text-2xl font-bold text-navy">Mr. Rajesh Verma</h4>
              <p className="text-navy/60">Chairman, Usthi Foundation India</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
