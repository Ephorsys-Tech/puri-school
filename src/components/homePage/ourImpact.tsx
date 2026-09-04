"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Free Quality Education",
    desc: "Providing complete education support for underprivileged children.",
    icon: "🎓",
  },
  {
    title: "Holistic Development",
    desc: "Focus on academics, sports, arts, and personality growth.",
    icon: "🌱",
  },
  {
    title: "Experienced Faculty",
    desc: "Dedicated teachers guiding students towards success.",
    icon: "👩‍🏫",
  },
  {
    title: "Modern Facilities",
    desc: "Well-equipped classrooms, labs, and learning spaces.",
    icon: "🏫",
  },
  {
    title: "Community Impact",
    desc: "Empowering families and uplifting society since 1992.",
    icon: "🤝",
  },
  {
    title: "Student Achievements",
    desc: "Participation in district, state & national level events.",
    icon: "🏆",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white/80 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Our <span className="text-gold">Impact</span>
          </h2>
          {/* <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are committed to transforming lives through education, care, and opportunity.
          </p> */}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid:col-3 lg:grid-cols-3 gap-8 ">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-gray-50 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}