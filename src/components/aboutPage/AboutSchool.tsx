'use client';
import React from 'react';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSchool() {
  const stats = [
    { label: 'Teachers', value: '50+' },
    { label: 'Students', value: '800+' },
    { label: 'Years', value: '15+' },
    { label: 'Excellence', value: '100%' },
  ];

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue/10 text-blue font-bold text-sm tracking-widest uppercase">
              <BookOpen size={18} />
              <span>GNO Project School</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-black text-navy leading-tight">
              A Legacy of <br/><span className="text-gradient-blue">Education & Hope</span>
            </h1>
            <p className="text-lg text-navy/70 leading-relaxed">
              Situated in the heart of Puri, we are dedicated to uplifting the community by providing free, high-quality education to underprivileged children. Backed by the Usthi Foundation India, we don't just teach; we transform lives.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                  className="bg-white p-6 rounded-2xl border border-navy/5 hover:border-blue/30 transition-colors shadow-sm hover:shadow-xl"
                >
                  <p className="text-4xl font-black text-navy mb-1">{stat.value}</p>
                  <p className="text-navy/60 font-medium uppercase tracking-wider text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue to-gold rounded-[2rem] transform rotate-3 scale-105 opacity-20 blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop" 
              alt="Students learning" 
              className="relative w-full h-[600px] object-cover rounded-[2rem] shadow-2xl border-4 border-white"
            />
            <div className="absolute -bottom-8 -left-8 bg-white/90 p-6 rounded-2xl shadow-xl border border-white/50 backdrop-blur-md max-w-xs hidden md:block">
              <p className="text-navy font-bold italic text-lg leading-snug">"Education is the most powerful weapon which you can use to change the world."</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
