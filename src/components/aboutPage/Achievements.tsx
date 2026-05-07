import React from 'react';
import { Award, Star, BookOpen, Heart, Trophy, Users, Zap } from 'lucide-react';

export default function Achievements() {
  const milestones = [
    { year: '1992', title: 'Foundation', desc: 'Our first project school in Puri began with the aim of imparting holistic education to over 400 underprivileged children from the fishermen community in Penthakata village.', icon: <Heart size={24} /> },
    { year: '2000s', title: 'CBSE Curriculum', desc: 'Following the CBSE curriculum from Kindergarten to Class 10, providing mid-day meals, uniforms, study materials, and other essentials - all completely free.', icon: <BookOpen size={24} /> },
    { year: '2000-2023', title: 'Graduate Success', desc: 'Over the years, our school has produced a sizeable number of graduates who have secured prestigious employment opportunities in various sectors.', icon: <Star size={24} /> },
    { year: '2023', title: '100% Board Results', desc: 'Achieved a perfect pass rate in Class 10 board examinations, setting new standards of excellence.', icon: <Award size={24} /> },
  ];

  const studentAchievements = [
    {
      category: 'Debate Competition',
      title: 'Global Warming Debate',
      details: 'Students from Class VI, VII & VIII participated and were awarded Certificate of Merit',
      icon: '🎤'
    },
    {
      category: 'Arts',
      title: 'District Level Drawing Competition',
      details: 'Held at school campus with participation from lower to higher classes in large numbers',
      icon: '🎨'
    },
    {
      category: 'Sports - Soft Ball',
      title: 'District Level Tournament',
      details: '5 students selected in district level tournament to join the state event',
      icon: '⚾'
    },
    {
      category: 'Gymnastics',
      title: 'State Level Competition',
      details: 'Sri S. Lalit Kumar Reddy (Std. VII) selected in district level tournament to participate at state level',
      icon: '🤸'
    },
    {
      category: 'Boxing',
      title: 'Inter-School Block Level',
      details: 'Two students from Std. VI & VII represented in inter-school block level competition',
      icon: '🥊'
    },
    {
      category: 'Javelin Throw',
      title: 'Inter-School Block Level',
      details: 'One Std. VI student participated in inter-school block level competition',
      icon: '🎯'
    },
    {
      category: 'Yoga - National Level',
      title: 'Khelo India Competition',
      details: 'Sri S. Lalit Kumar Reddy (Std. VII) selected to participate in NATIONAL LEVEL COMPETITION at NEW DELHI (14th-20th December, 2023). One girl student from Std. II also participated at district level.',
      icon: '🧘'
    },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">
            Our <span className="text-gold">Achievements & Milestones</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-24">
          <h3 className="font-heading text-3xl font-bold text-navy mb-12 text-center">Our Journey Since 1992</h3>
          
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gold/30 -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {milestones.map((item, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-navy rounded-full border-4 border-cream flex items-center justify-center text-gold z-10 -translate-x-1/2 shadow-lg">
                    {item.icon}
                  </div>

                  <div className="ml-20 md:ml-0 md:w-1/2 p-4">
                    <div className={`glass p-6 rounded-2xl ${idx % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                      <span className="text-gold font-bold text-xl mb-2 block font-heading">{item.year}</span>
                      <h3 className="text-navy font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-navy/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Student Achievements */}
        <div className="mb-20">
          <h3 className="font-heading text-3xl font-bold text-navy mb-12 text-center">Student Achievements & Participation</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentAchievements.map((achievement, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <span className="inline-block bg-gold/20 text-navy px-3 py-1 rounded-full text-xs font-bold mb-2">{achievement.category}</span>
                <h4 className="font-heading text-lg font-bold text-navy mb-2">{achievement.title}</h4>
                <p className="text-navy/70 text-sm leading-relaxed">{achievement.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Initiatives */}
        <div className="bg-gradient-to-r from-navy to-blue rounded-2xl p-8 md:p-12 text-cream">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center text-navy mb-4 mx-auto">
                <Zap size={32} />
              </div>
              <h4 className="font-heading text-xl font-bold mb-2">Holistic Education</h4>
              <p className="text-cream/80">Providing comprehensive education focusing on academic excellence and personality development</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center text-navy mb-4 mx-auto">
                <Users size={32} />
              </div>
              <h4 className="font-heading text-xl font-bold mb-2">Community Focus</h4>
              <p className="text-cream/80">Serving underprivileged children and focusing on the fishermen community of Penthakata village</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center text-navy mb-4 mx-auto">
                <Trophy size={32} />
              </div>
              <h4 className="font-heading text-xl font-bold mb-2">Skill Development</h4>
              <p className="text-cream/80">Vocational training in tailoring & computer education for sustainable living and demographic dividend</p>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-navy/80 text-lg leading-relaxed italic">
            "We believe that each child is unique with inherent potential to develop their personality. Through our commitment to sustainable education, skill development, and community service, we strive to uplift society as a whole."
          </p>
        </div>
      </div>
    </section>
  );
}
