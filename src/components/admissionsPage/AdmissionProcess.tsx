'use client';
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ClipboardList } from 'lucide-react';

export default function AdmissionProcess() {
  const steps = [
    {
      step: '01',
      title: 'Registration',
      desc: 'Fill out the online enquiry form or visit the school office.',
    },
    {
      step: '02',
      title: 'Interaction',
      desc: 'A short interaction session with the child and parents.',
    },
    {
      step: '03',
      title: 'Documentation',
      desc: 'Submit the required documents for verification.',
    },
    {
      step: '04',
      title: 'Confirmation',
      desc: 'Pay the admission fee to secure the seat.',
    },
  ];

  const highlights = [
    { icon: '📅', label: 'Admission Period', value: 'Started till June end' },
    { icon: '⏱️', label: 'Processing Time', value: '3–5 working days' },
    { icon: '✅', label: 'Confirmation', value: 'Upon doc verification & fee' },
  ];

  const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-cream relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-blue/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue/10 rounded-2xl flex items-center justify-center text-blue shadow-lg">
              <ClipboardList size={36} />
            </div>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-4 leading-tight">
            Admission <span className="text-gradient-blue">Process</span>
          </h2>
          <p className="text-navy/70 max-w-xl mx-auto text-base sm:text-lg font-medium px-2">
            Four simple steps to enroll your child and begin their journey with us.
          </p>
        </motion.div>

        {/* ── Steps ── */}
        <div className="relative mb-14 sm:mb-20">
          {/* Connector line — only on large screens */}
          <div className="hidden lg:block absolute top-[calc(2rem+1px)] left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-gradient-to-r from-blue/20 via-blue to-blue/20 z-0" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-y-12 relative z-10"
          >
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group flex flex-col items-center"
              >
                {/* Number badge */}
                <div className="w-16 h-16 rounded-2xl bg-blue text-white font-black flex items-center justify-center text-2xl shadow-lg border-4 border-cream group-hover:bg-navy transition-colors duration-300 mb-6 flex-shrink-0">
                  {item.step}
                </div>

                {/* Card */}
                <div className="bg-white w-full rounded-2xl shadow-md border border-navy/5 px-6 py-7 text-center group-hover:-translate-y-1 transition-transform duration-300 flex-1 flex flex-col justify-center">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-navy/65 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Highlights panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-navy to-blue rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Subtle texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-0"
              >
                <span className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform duration-200 inline-block">
                  {h.icon}
                </span>
                <p className="text-gold font-bold text-sm sm:text-base uppercase tracking-wider mb-1">
                  {h.label}
                </p>
                <p className="text-white/80 text-sm sm:text-base font-medium">{h.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}