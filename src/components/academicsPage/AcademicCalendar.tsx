'use client';
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function AcademicCalendar() {
  const calendarEvents = [
    { month: 'June – July',       event: 'Academic Session Begins',   details: 'New academic year 2025–2026 commences.' },
    { month: 'Aug – September',   event: 'Mid-Term Assessments',      details: 'First term examinations and progress reviews.' },
    { month: 'Oct – November',    event: 'Autumn Break & Festivals',  details: 'School celebrations and cultural events.' },
    { month: 'December',          event: 'Pre-Board Examinations',    details: 'Mock examinations for Classes 9 & 10.' },
    { month: 'Jan – February',    event: 'Board Examinations',        details: 'CBSE board examinations for Class 10.' },
    { month: 'March – April',     event: 'Final Assessments',         details: 'Completion of session and final evaluations.' },
  ];

  const importantDates = [
    { label: 'Admission Open', value: 'Till June End' },
    { label: 'Summer Break',   value: 'May – June'    },
  ];

  const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' as const } },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* ── Left column ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 lg:sticky lg:top-8"
          >
            {/* Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue/10 rounded-2xl flex items-center justify-center text-blue mb-5">
              <Calendar size={30} />
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-4 leading-tight">
              Academic <span className="text-gradient-blue">Calendar</span>
            </h2>

            {/* Sub-text */}
            <p className="text-navy/70 text-base sm:text-lg font-medium mb-7 max-w-xs">
              Stay updated with our academic schedule for the session 2025–2026.
            </p>

            {/* Important dates card */}
            <div className="bg-white rounded-2xl sm:rounded-[2rem] p-5 sm:p-7 shadow-lg border border-navy/5">
              <h3 className="font-heading text-lg sm:text-xl font-black text-navy mb-4">
                Important Dates
              </h3>
              <div className="space-y-3">
                {importantDates.map((d, i) => (
                  <div key={i} className="p-3 sm:p-4 bg-accent rounded-xl">
                    <p className="text-blue font-bold text-xs uppercase tracking-wider mb-0.5">{d.label}</p>
                    <p className="text-navy font-semibold text-sm sm:text-base">{d.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right column ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            {/* Banner image — hidden on mobile, shown md+ */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[21/9] shadow-xl mb-8 hidden md:block border-4 border-white">
              <img
                src="/images/calander.png"
                alt="Academic calendar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event cards */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
            >
              {calendarEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="group bg-white rounded-2xl sm:rounded-[2rem] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-navy/5 p-5 sm:p-6 lg:p-7"
                >
                  <div className="flex items-start gap-3 mb-3">
                    {/* Icon */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 bg-blue/10 rounded-xl flex items-center justify-center text-blue flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <Calendar size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-gold font-black text-xs uppercase tracking-wider leading-none mb-1">
                        {event.month}
                      </p>
                      <h3 className="font-heading text-base sm:text-lg font-bold text-navy leading-snug">
                        {event.event}
                      </h3>
                    </div>
                  </div>
                  <p className="text-navy/65 text-sm font-medium leading-relaxed pl-[52px] sm:pl-14">
                    {event.details}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}