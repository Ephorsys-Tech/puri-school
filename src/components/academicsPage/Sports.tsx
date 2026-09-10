'use client';
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Activity, Medal } from 'lucide-react';

export default function Sports() {
  const sportsList = [
    { name: 'Cricket',    icon: '🏏', category: 'Team Sport'       },
    { name: 'Volleyball', icon: '🏐', category: 'Team Sport'       },
    { name: 'Badminton',  icon: '🏸', category: 'Individual Sport' },
    { name: 'Basketball', icon: '🏀', category: 'Team Sport'       },
    { name: 'Athletics',  icon: '🏃', category: 'Individual Sport' },
    { name: 'Gymnastics', icon: '🤸', category: 'Individual Sport' },
    { name: 'Boxing',     icon: '🥊', category: 'Individual Sport' },
    { name: 'Yoga',       icon: '🧘', category: 'Wellness'         },
  ];

  const infoCards = [
    {
      icon: <Activity size={28} />,
      title: 'Sports Programs',
      desc: 'Inter-school competitions, annual sports days, and regular coaching sessions.',
      dark: true,
    },
    {
      icon: <Medal size={28} />,
      title: 'Student Achievements',
      desc: 'District/state level participations and national level representation.',
      dark: false,
    },
  ];

  const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-accent relative overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block text-blue bg-blue/10 rounded-xl px-3 py-1 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
            Physical Education
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-4 leading-tight">
            Sports & <span className="text-gradient-blue">Recreation</span>
          </h2>
          <p className="text-navy/70 max-w-xl mx-auto text-base sm:text-lg font-medium px-2">
            Comprehensive sports programs designed to develop physical fitness, teamwork, and competitive spirit.
          </p>
        </motion.div>

        {/* ── Hero image + info cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mb-10 sm:mb-14">

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white/10 bg-navy aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[420px]"
          >
            <img
              src="https://res.cloudinary.com/dfdi9ngal/image/upload/v1789040374/WhatsApp_Image_2023-12-28_at_2.09.50_PM_tbspbq.jpg"
              alt="Students playing sports"
              className="absolute inset-0 w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8 lg:p-10">
              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2 sm:mb-3 leading-snug">
                Championing Health & Vitality
              </h3>
              <p className="text-white/80 font-medium text-sm sm:text-base leading-relaxed max-w-lg">
                Sports are integral to holistic development — instilling discipline, teamwork, and healthy living through structured programs.
              </p>
            </div>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5"
          >
            {infoCards.map((card, i) => (
              <div
                key={i}
                className={`flex flex-col justify-center rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-lg border ${
                  card.dark
                    ? 'bg-gradient-to-br from-navy to-blue text-white border-white/10'
                    : 'bg-white text-navy border-navy/5'
                }`}
              >
                <div className={`mb-3 ${card.dark ? 'text-gold' : 'text-blue'}`}>
                  {card.icon}
                </div>
                <h4 className="font-bold text-base sm:text-lg mb-1.5">{card.title}</h4>
                <p className={`text-sm font-medium leading-relaxed ${card.dark ? 'text-white/70' : 'text-navy/65'}`}>
                  {card.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Sports grid ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5"
        >
          {sportsList.map((sport, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center border border-navy/5 p-4 sm:p-5 lg:p-6"
            >
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-200 inline-block">
                {sport.icon}
              </div>
              <h3 className="font-bold text-navy text-sm sm:text-base mb-0.5">{sport.name}</h3>
              <p className="text-xs text-navy/45 font-semibold uppercase tracking-wider leading-none">
                {sport.category}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}