'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, BookOpen, Heart, Trophy, Users, Zap } from 'lucide-react';

export default function Achievements() {
  const milestones = [
    { year: '1992', title: 'Foundation', desc: 'Our first project school in Puri began with the aim of imparting holistic education to over 400 underprivileged children.', icon: <Heart size={24} /> },
    { year: '2000s', title: 'CBSE Curriculum', desc: 'Following the CBSE curriculum from Kindergarten to Class 10, providing essentials completely free.', icon: <BookOpen size={24} /> },
    { year: '2020', title: 'Graduate Success', desc: 'Our school has produced graduates who have secured prestigious employment opportunities.', icon: <Star size={24} /> },
    { year: '2023', title: '100% Board Results', desc: 'Achieved a perfect pass rate in Class 10 board examinations, setting new standards of excellence.', icon: <Award size={24} /> },
  ];

  const studentAchievements = [
    { category: 'Debate', title: 'Global Warming Debate', details: 'Certificate of Merit awarded to Class VI-VIII students.', icon: '🎤' },
    { category: 'Arts', title: 'District Drawing', details: 'Massive participation and top honors at the district level.', icon: '🎨' },
    { category: 'Sports', title: 'Soft Ball Tournament', details: '5 students selected to join the state event.', icon: '⚾' },
    { category: 'Gymnastics', title: 'State Competition', details: 'Selected for state-level tournament from Puri district.', icon: '🤸' },
    { category: 'Boxing', title: 'Inter-School', details: 'Represented in inter-school block level competition.', icon: '🥊' },
    { category: 'Yoga', title: 'Khelo India', details: 'Selected to participate in National Level Competition in New Delhi.', icon: '🧘' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-28 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue/5 via-cream to-cream pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-6xl font-black text-navy mb-6"
          >
            Milestones & <span className="text-gradient-blue">Glory</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1.5 bg-gradient-to-r from-blue to-gold mx-auto rounded-full"
          />
        </div>

        {/* Timeline */}
        <div className="mb-32">
          <h3 className="font-heading text-4xl font-black text-navy mb-16 text-center">Journey Since 1992</h3>
          <div className="relative">
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1.5 bg-accent -translate-x-1/2 rounded-full"></div>
            
            <div className="space-y-16">
              {milestones.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-white rounded-full border-4 border-blue flex items-center justify-center text-blue z-10 -translate-x-1/2 shadow-xl shadow-blue/20">
                    {item.icon}
                  </div>

                  <div className={`ml-20 md:ml-0 md:w-1/2 p-4 flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-navy/5 hover:border-blue/30 transition-colors w-full md:w-[90%] group hover:-translate-y-2 duration-300">
                      <span className="text-blue font-black text-2xl mb-2 block">{item.year}</span>
                      <h3 className="text-navy font-black text-2xl mb-3">{item.title}</h3>
                      <p className="text-navy/70 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Student Achievements */}
        <div className="mb-32">
          <h3 className="font-heading text-4xl font-black text-navy mb-16 text-center">Student Spotlight</h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {studentAchievements.map((achievement, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-navy/5 relative overflow-hidden group"
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue/5 rounded-full group-hover:bg-blue/10 transition-colors pointer-events-none"></div>
                <div className="text-5xl mb-6">{achievement.icon}</div>
                <span className="inline-block bg-blue/10 text-blue px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">{achievement.category}</span>
                <h4 className="font-heading text-xl font-black text-navy mb-3">{achievement.title}</h4>
                <p className="text-navy/70 text-sm leading-relaxed font-medium">{achievement.details}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Special Initiatives */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-navy to-blue rounded-[3rem] p-12 md:p-16 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-gold mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Zap size={40} />
              </div>
              <h4 className="font-heading text-2xl font-black mb-3">Holistic Education</h4>
              <p className="text-white/80 font-medium">Providing comprehensive education focusing on academic excellence and personality development.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-gold mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Users size={40} />
              </div>
              <h4 className="font-heading text-2xl font-black mb-3">Community Focus</h4>
              <p className="text-white/80 font-medium">Serving underprivileged children and focusing on the fishermen community of Penthakata village.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-gold mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Trophy size={40} />
              </div>
              <h4 className="font-heading text-2xl font-black mb-3">Skill Development</h4>
              <p className="text-white/80 font-medium">Vocational training in tailoring & computer education for sustainable living.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
