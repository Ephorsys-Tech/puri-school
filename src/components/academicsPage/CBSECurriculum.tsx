'use client';
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Award, Target, BookOpen, Layers } from 'lucide-react';

export default function CBSECurriculum() {
  const features = [
    { icon: <Target size={28} />, title: 'Standardized Framework', desc: 'Following the prestigious CBSE framework designed by New Delhi.' },
    { icon: <Award size={28} />, title: 'Global Recognition', desc: 'Full affiliation ensuring recognized certificates and seamless transitions.' },
    { icon: <Layers size={28} />, title: 'Holistic Development', desc: 'Beyond academics — emphasis on co-curricular activities and sports.' },
    { icon: <BookOpen size={28} />, title: 'Competitive Edge', desc: 'Curriculum designed to prepare students for entrance tests.' },
  ];

  const methodology = [
    'Experiential Learning: Moving beyond rote learning',
    'Interactive Classrooms: Utilizing digital content',
    'Continuous Evaluation: Formative assessments',
    'Student-Centric Approach: Personalised paths',
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
      {/* Background accent */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-blue/10 diagonal-cut-bottom pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left column ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-7"
          >
            {/* Label + heading */}
            <div>
              <span className="inline-block text-blue bg-blue/10 rounded-xl px-3 py-1 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
                Academic Standards
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                CBSE <span className="text-gold">Curriculum</span>
              </h2>
            </div>

            <p className="text-white/75 text-base sm:text-lg leading-relaxed font-medium max-w-lg">
              Our education follows the Central Board of Secondary Education standards with modern teaching methodologies — equipping students with knowledge that transcends textbooks.
            </p>

            {/* Feature cards */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feat, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 rounded-2xl p-5 sm:p-6 transition-colors duration-200"
                >
                  <div className="text-gold mb-3 group-hover:scale-110 transition-transform duration-200 inline-block">
                    {feat.icon}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-1.5 leading-snug">{feat.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mt-4 lg:mt-0"
          >
            {/* Gold border offset — hidden on mobile to prevent overflow */}
            <div className="hidden sm:block absolute inset-0 border-4 border-gold translate-x-5 translate-y-5 rounded-3xl -z-10 pointer-events-none" />

            {/* Image */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden w-full aspect-[4/3] sm:aspect-square shadow-2xl">
              <img
                src="images/ncert.webp"
                alt="Classroom learning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />

              {/* Methodology overlay — scrolls inside on small screens */}
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 lg:p-8">
                <div className="bg-white/10 backdrop-blur-xl p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-gold mb-3">
                    Teaching Methodology
                  </h3>
                  <ul className="space-y-2.5">
                    {methodology.map((m, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                        <span className="text-white/90 text-xs sm:text-sm font-medium leading-snug">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}