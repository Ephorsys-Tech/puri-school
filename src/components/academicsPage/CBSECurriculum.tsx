import React from 'react';
import { Award, Target } from 'lucide-react';

export default function CBSECurriculum() {
  const features = [
    {
      icon: <Target size={28} />,
      title: 'Standardized Curriculum',
      description: 'Following the prestigious CBSE framework designed by Central Board of Secondary Education, New Delhi'
    },
    {
      icon: <Award size={28} />,
      title: 'Board Recognition',
      description: 'Full affiliation ensuring recognized certificates and seamless transitions for higher studies'
    },
    {
      icon: <Target size={28} />,
      title: 'Holistic Development',
      description: 'Beyond academics - emphasis on co-curricular activities, sports, and life skills'
    },
    {
      icon: <Award size={28} />,
      title: 'Competitive Preparation',
      description: 'Curriculum designed to prepare students for competitive examinations and entrance tests'
    }
  ];

  const methodology = [
    'Experiential Learning: Moving beyond rote learning to practical applications',
    'Interactive Classrooms: Utilizing smartboards and digital content',
    'Continuous Evaluation: Focusing on formative assessments for holistic feedback',
    'Student-Centric Approach: Personalized learning paths for different learning styles',
    'Integration of Technology: Incorporating digital tools and online resources',
    'Regular Assessments: Periodic tests and evaluations for progress tracking'
  ];

  return (
    <section className="py-24 bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            CBSE <span className="text-gold">Curriculum</span>
          </h2>
          <p className="text-cream/80 max-w-2xl mx-auto text-lg">
            Our education follows the Central Board of Secondary Education standards with modern teaching methodologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl hover:scale-[1.02] transition-transform">
              <div className="text-gold mb-4">{feature.icon}</div>
              <h3 className="font-heading text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-cream/80">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gold/10 rounded-2xl p-12 border border-gold/20">
          <h3 className="font-heading text-2xl font-bold text-gold mb-8">Our Teaching Methodology</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {methodology.map((method, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <p className="text-cream/90">{method}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
