'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, BookOpen } from 'lucide-react';

export default function Teachers() {
  const teachers = [
    {
      id: 1,
      name: 'Ms. Priya Kumar',
      subject: 'English & Literature',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=800&auto=format&fit=crop',
      experience: '8 Years'
    },
    {
      id: 2,
      name: 'Mr. Arjun Singh',
      subject: 'Mathematics',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800&auto=format&fit=crop',
      experience: '10 Years'
    },
    {
      id: 3,
      name: 'Dr. Anjali Patel',
      subject: 'Science',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
      experience: '12 Years'
    },
    {
      id: 4,
      name: 'Mr. Rahul Mishra',
      subject: 'History & Social',
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=800&auto=format&fit=crop',
      experience: '7 Years'
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
      <div className="absolute -left-40 top-40 w-96 h-96 bg-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue font-bold uppercase tracking-widest text-sm mb-4 block">Mentors & Guides</span>
            <h2 className="font-heading text-5xl md:text-6xl font-black text-navy mb-6">
              Our Dedicated <span className="text-gradient-blue">Educators</span>
            </h2>
            <p className="text-navy/70 max-w-2xl mx-auto text-lg font-medium">
              Our faculty comprises experienced educators committed to nurturing young minds and fostering a lifelong love for learning.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teachers.map((teacher) => (
            <motion.div key={teacher.id} variants={itemVariants} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-[4/5] shadow-xl">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 border border-white/20">
                    <BookOpen size={20} className="text-gold" />
                    <span className="text-white font-bold text-sm tracking-wide">{teacher.subject}</span>
                  </div>
                </div>
              </div>
              <div className="px-2 text-center">
                <h3 className="font-heading text-2xl font-black text-navy">{teacher.name}</h3>
                <p className="text-blue font-bold text-sm mt-1 uppercase tracking-wider">{teacher.experience} Experience</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-white rounded-[3rem] p-12 lg:p-16 text-center shadow-2xl border border-navy/5 relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-gold/10 rounded-full blur-[80px]"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-blue/10 rounded-2xl flex items-center justify-center text-blue mb-8">
              <Award size={40} />
            </div>
            <h3 className="font-heading text-3xl md:text-4xl font-black text-navy mb-6">Teacher Excellence Program</h3>
            <p className="text-navy/70 max-w-3xl mx-auto text-lg font-medium leading-relaxed">
              Our teachers participate in continuous professional development, workshops, and training sessions to stay updated with the latest pedagogical methods and educational innovations, ensuring the highest standards of teaching.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
