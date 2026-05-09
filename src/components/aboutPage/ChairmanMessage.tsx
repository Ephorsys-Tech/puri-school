'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function ChairmanMessage() {
  return (
    <section className="py-28 bg-navy text-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-blue/10 diagonal-cut-bottom pointer-events-none"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-blue bg-blue/10 rounded-2xl px-2 py-1 font-bold uppercase tracking-widest text-sm mb-2">Visionary Leadership</span>
              <h2 className="font-heading text-5xl md:text-6xl font-black leading-tight">
                Message from the <br/><span className="text-gold">Chairman</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-white/80 text-lg leading-relaxed relative font-medium">
              <Quote className="absolute -top-6 -left-8 w-20 h-20 text-white/5 -z-10 rotate-180" fill="currentColor" />
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
            
            <div className="pt-8 border-t-2 border-white/10 flex items-center gap-6">
              <div>
                <h4 className="font-heading text-2xl font-black text-white">Mr. Rajesh Verma</h4>
                <p className="text-gold font-bold tracking-wide text-sm uppercase mt-1">Chairman, Usthi Foundation India</p>
              </div>
              
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 border-4 border-gold translate-x-6 -translate-y-6 rounded-[2.5rem] -z-10"></div>
            <div className="bg-navy/50 rounded-[2.5rem] overflow-hidden aspect-[4/5] p-3 shadow-2xl backdrop-blur-xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                alt="Chairman" 
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
