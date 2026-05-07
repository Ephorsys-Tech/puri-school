import React from 'react';
import { Users, Award } from 'lucide-react';

export default function Teachers() {
  const teachers = [
    {
      id: 1,
      name: 'Ms. Priya Kumar',
      subject: 'English & Literature',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
      experience: '8 years'
    },
    {
      id: 2,
      name: 'Mr. Arjun Singh',
      subject: 'Mathematics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      experience: '10 years'
    },
    {
      id: 3,
      name: 'Dr. Anjali Patel',
      subject: 'Science',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
      experience: '12 years'
    },
    {
      id: 4,
      name: 'Mr. Rahul Mishra',
      subject: 'History & Social Studies',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      experience: '7 years'
    },
  ];

  return (
    <section className="py-24 bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center text-navy">
              <Users size={32} />
            </div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our Dedicated <span className="text-gold">Teachers</span>
          </h2>
          <p className="text-cream/80 max-w-2xl mx-auto text-lg">
            Our faculty comprises experienced educators committed to nurturing young minds and fostering a love for learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-cream">
                    <p className="font-bold">{teacher.subject}</p>
                    <p className="text-gold text-sm">{teacher.experience} experience</p>
                  </div>
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-cream">{teacher.name}</h3>
              <p className="text-cream/70 text-sm mt-2">{teacher.subject}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gold/10 rounded-2xl p-12 text-center">
          <div className="flex justify-center mb-4">
            <Award size={40} className="text-gold" />
          </div>
          <h3 className="font-heading text-2xl font-bold mb-4">Teacher Excellence Program</h3>
          <p className="text-cream/80 max-w-2xl mx-auto">
            Our teachers participate in continuous professional development, workshops, and training sessions to stay updated with the latest pedagogical methods and educational innovations.
          </p>
        </div>
      </div>
    </section>
  );
}
