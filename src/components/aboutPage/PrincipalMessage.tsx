import React from 'react';

export default function PrincipalMessage() {
  return (
    <section className="py-24 bg-navy text-cream relative">
      <div className="absolute left-0 top-0 w-1/3 h-full bg-blue/10 diagonal-cut-bottom"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 border-2 border-gold translate-x-4 translate-y-4 rounded-2xl -z-10"></div>
            <div className="bg-cream/10 rounded-2xl overflow-hidden aspect-[4/5] p-2 glass">
              <img 
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=600&q=80" 
                alt="Principal" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-gold font-bold uppercase tracking-wider text-sm">Leadership</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">Message from the <br/><span className="text-gold">Principal</span></h2>
            <div className="w-16 h-1 bg-amber rounded-full"></div>
            
            <div className="space-y-4 text-cream/80 text-lg leading-relaxed relative">
              <span className="absolute -top-10 -left-6 text-8xl text-cream/5 font-serif leading-none select-none">"</span>
              <p>
                Welcome to GNO Project School. Education is not merely the accumulation of facts; it is the preparation for life itself. We strive to provide an environment where every child is encouraged to discover their true potential.
              </p>
              <p>
                Our philosophy revolves around an 'antigravity' approach—lifting the heavy burdens of traditional rote learning and allowing students' curiosity to take flight.
              </p>
              <p>
                Together with the support of Usthi Foundation India, we are building a legacy of excellence, compassion, and innovation.
              </p>
            </div>
            
            <div className="pt-6 border-t border-cream/10">
              <h4 className="font-heading text-2xl font-bold text-gold">Dr. A. Sharma</h4>
              <p className="text-cream/60">Principal, GNO Project School</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
