'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function PrincipalMessage() {
  return (
    <section className="py-28 bg-cream relative overflow-hidden">
      <div className="absolute left-0 top-0 w-1/3 h-full bg-accent diagonal-cut-bottom -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute inset-0 border-4 border-blue translate-x-6 translate-y-6 rounded-[2.5rem] -z-10"></div>
            <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[4/5] p-3 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1000&auto=format&fit=crop" 
                alt="Principal" 
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
            <div className="absolute top-10 -right-10 bg-white p-4 rounded-full shadow-2xl animate-bounce hidden md:block">
              <div className="w-16 h-16 bg-gradient-to-br from-blue to-gold rounded-full flex items-center justify-center text-white">
                <Quote size={28} fill="currentColor" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <span className="text-blue font-bold uppercase tracking-widest text-sm mb-2 block">Leadership</span>
              <h2 className="font-heading text-5xl md:text-6xl font-black text-navy leading-tight">
                Message from the <br/><span className="text-gradient-blue">Principal</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-navy/80 text-lg leading-relaxed relative font-medium">
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
            
            <div className="pt-8 border-t-2 border-navy/10 flex items-center gap-6">
              <div>
                <h4 className="font-heading text-2xl font-black text-navy">Dr. A. Sharma</h4>
                <p className="text-blue font-bold tracking-wide text-sm uppercase mt-1">Principal, GNO Project School</p>
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Signature_placeholder.svg" className="h-16 opacity-50" alt="Signature" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
