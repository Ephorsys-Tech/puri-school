'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Calculator, FlaskConical, Globe2, Languages, Palette, Dumbbell } from 'lucide-react';

export default function Teachers() {
  const teachers = [
    {
      id: 1,
      subject: 'English Teacher',
      focus: 'Reading, writing, grammar, and confident communication',
      icon: <Languages size={28} />,
    },
    {
      id: 2,
      subject: 'Mathematics Teacher',
      focus: 'Concept clarity, problem solving, and logical thinking',
      icon: <Calculator size={28} />,
    },
    {
      id: 3,
      subject: 'Science Teacher',
      focus: 'Observation, experiments, and curiosity-led learning',
      icon: <FlaskConical size={28} />,
    },
    {
      id: 4,
      subject: 'Social Studies Teacher',
      focus: 'History, civics, geography, and community awareness',
      icon: <Globe2 size={28} />,
    },
    {
      id: 5,
      subject: 'Computer Teacher',
      focus: 'Digital basics, practical skills, and responsible technology use',
      icon: <BookOpen size={28} />,
    },
    {
      id: 6,
      subject: 'Art Teacher',
      focus: 'Creative expression, drawing, craft, and visual confidence',
      icon: <Palette size={28} />,
    },
    {
      id: 7,
      subject: 'Physical Education Teacher',
      focus: 'Fitness, teamwork, discipline, and sports participation',
      icon: <Dumbbell size={28} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-28 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(8,26,46,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(8,26,46,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue bg-blue/10 rounded-md px-3 py-2 font-bold uppercase tracking-widest text-sm mb-4 inline-block">Subject Teachers</span>
            <h2 className="font-heading text-5xl md:text-6xl font-black text-navy mb-6">
              Guided by <span className="text-gradient-blue">Every Subject</span>
            </h2>
            <p className="text-navy/70 max-w-2xl mx-auto text-lg font-medium">
              Our learning team supports students across core academics, creative development, digital skills, and physical education.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-lg border border-navy/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index === 0 ? 'lg:col-span-2 bg-navy text-cream' : ''
              }`}
            >
              <div className={`absolute left-0 top-0 h-full w-1 ${index === 0 ? 'bg-gold' : 'bg-blue'}`}></div>
              <div className="flex min-h-44 flex-col justify-between gap-8">
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-md ${
                    index === 0 ? 'bg-white/10 text-gold' : 'bg-blue/10 text-blue'
                  }`}>
                    {teacher.icon}
                  </div>
                  <span className={`text-xs font-black uppercase tracking-[0.22em] ${
                    index === 0 ? 'text-gold' : 'text-blue'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div>
                  <h3 className={`font-heading text-2xl md:text-3xl font-black ${
                    index === 0 ? 'text-navy' : 'text-navy'
                  }`}>
                    {teacher.subject}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed font-medium ${
                    index === 0 ? 'text-navy/75' : 'text-navy/65'
                  }`}>
                    {teacher.focus}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-white rounded-lg p-8 lg:p-12 shadow-2xl border border-navy/5 relative overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue via-gold to-blue"></div>
          <div className="relative z-10 grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="w-20 h-20 bg-blue/10 rounded-md flex items-center justify-center text-blue mx-auto lg:mx-0">
              <Award size={40} />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="font-heading text-3xl md:text-4xl font-black text-navy mb-4">Teacher Excellence Program</h3>
              <p className="text-navy/70 max-w-4xl text-lg font-medium leading-relaxed">
                Our subject teachers participate in continuous professional development, workshops, and training sessions to stay updated with effective classroom methods and child-centered learning practices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
