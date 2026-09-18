'use client';
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { BookText, Laptop, Users } from 'lucide-react';

export default function Library() {
  const statistics = [
    { number: '5000+', label: 'Physical Books' },
    { number: '500+',  label: 'E-Resources'   },
    { number: '24/7',  label: 'WiFi Access'   },
    { number: '50+',   label: 'Journals'       },
  ];

  const features = [
    {
      icon: <BookText size={28} />,
      title: 'Extensive Collection',
      desc: 'Comprehensive books across subjects — fiction, reference materials, and educational resources.',
    },
    {
      icon: <Laptop size={28} />,
      title: 'Digital Resources',
      desc: 'Online databases, e-books, and educational journals for enhanced learning through interactive portals.',
    },
    {
      icon: <Users size={28} />,
      title: 'Research Support',
      desc: 'Dedicated staff to help students find research materials and conduct effective library programmes.',
    },
  ];

  const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' as const } },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-navy text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Top grid: text + image ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">

          {/* Left — text & stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:sticky lg:top-8 lg:self-start"
          >
            {/* Label + heading */}
            <div>
              <span className="inline-block text-blue bg-blue/10 rounded-xl px-3 py-1 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
                Knowledge Hub
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                School <span className="text-gold">Library</span>
              </h2>
            </div>

            <p className="text-white/75 text-base sm:text-lg leading-relaxed font-medium max-w-lg">
              A vibrant hub of knowledge and intellectual exploration — offering a quiet sanctuary for focused study, collaborative research, and a deep dive into literature and sciences.
            </p>

            {/* Stat cards */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="grid grid-cols-2 gap-3 sm:gap-4 pt-2"
            >
              {statistics.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 lg:p-6"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-gold mb-1 leading-none">
                    {stat.number}
                  </div>
                  <p className="text-white/65 font-semibold tracking-wide text-xs sm:text-sm uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mt-2 lg:mt-0"
          >
            {/* Gold offset border — hidden on mobile to prevent overflow */}
            <div className="hidden sm:block absolute inset-0 border-4 border-gold translate-x-4 translate-y-4 rounded-3xl -z-10 pointer-events-none" />

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop"
                alt="School library"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* ── Feature cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-navy shadow-2xl border border-navy/5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-navy/10">
            {features.map((feat, i) => (
              <div key={i} className="group flex flex-col items-center text-center px-4 sm:px-6 lg:px-10 py-8 sm:py-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue/10 rounded-xl flex items-center justify-center text-blue mb-4 group-hover:scale-110 transition-transform duration-200">
                  {feat.icon}
                </div>
                <h4 className="font-heading text-base sm:text-lg font-black mb-2 sm:mb-3">
                  {feat.title}
                </h4>
                <p className="text-navy/65 text-sm font-medium leading-relaxed max-w-[22ch] sm:max-w-none">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}