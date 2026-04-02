import React from 'react';
import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="relative py-24 bg-navy text-cream diagonal-cut-bottom pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative space-y-8 animate-[fadeUp_0.8s_ease-out_forwards]">
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              A Legacy of <br />
              <span className="text-gold">Excellence</span>
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed">
              Founded under the aegis of Usthi Foundation India, GNO Project School strives to provide world-class education with deep-rooted values. We believe in an antigravity approach to learning—removing barriers so students can rise to their highest potential.
            </p>
            
            <ul className="space-y-4">
              {[
                'Holistic Development Framework',
                'Experienced & Dedicated Faculty',
                'Modern Infrastructure & Labs'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber"></div>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="inline-block mt-4 border-b-2 border-gold text-gold hover:text-amber hover:border-amber pb-1 transition-all duration-300 font-bold uppercase tracking-wider">
              Discover Our Vision
            </Link>
          </div>

          <div className="relative">
            {/* Abstract Image Placeholder Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="h-64 bg-cream/10 rounded-tl-3xl rounded-br-3xl overflow-hidden glass mix-blend-luminosity hover:mix-blend-normal transition-all duration-500">
                <div className="w-full h-full bg-gradient-to-tr from-gold/20 to-transparent"></div>
              </div>
              <div className="h-64 bg-blue rounded-tr-3xl overflow-hidden mt-8">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center opacity-50 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="h-48 bg-amber rounded-bl-3xl overflow-hidden glass shadow-2xl z-10 -mt-8 relative">
                <div className="w-full h-full flex items-center justify-center p-6 text-center">
                  <span className="font-heading font-bold text-navy text-2xl">20+ <br/> <span className="text-sm font-sans uppercase">Years of Impact</span></span>
                </div>
              </div>
              <div className="h-48 bg-cream/5 rounded-br-3xl overflow-hidden border border-gold/30">
                <div className="w-full h-full bg-gradient-to-br from-transparent to-gold/10"></div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -inset-4 border border-gold/20 -z-10 rounded-3xl rotate-3"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
