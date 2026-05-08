'use client';
import React from 'react';
import { Target, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VisionMission() {
  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-navy/5"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-colors duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-navy to-blue rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Eye size={40} />
              </div>
              <h3 className="font-heading text-4xl font-black text-navy mb-6">Our Vision</h3>
              <p className="text-navy/70 leading-relaxed text-lg font-medium">
                To be a beacon of inclusive and holistic education, nurturing young minds to become empathetic, innovative, and responsible global citizens who contribute meaningfully to society.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-navy p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue/20 rounded-full blur-3xl group-hover:bg-blue/30 transition-colors duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-blue rounded-2xl flex items-center justify-center text-navy mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Target size={40} />
              </div>
              <h3 className="font-heading text-4xl font-black text-white mb-6">Our Mission</h3>
              <p className="text-white/80 leading-relaxed text-lg font-medium">
                To provide a nurturing environment that empowers students through quality academic programs, character building, and life skills, breaking barriers to success.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
