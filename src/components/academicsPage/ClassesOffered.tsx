// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';
// import { BookOpen } from 'lucide-react';

// export default function ClassesOffered() {
//   const classes = [
//     {
//       level: 'Pre-Primary',
//       grades: 'Nursery - KG',
//       description: 'Foundation stage focusing on basic literacy, numeracy, and social skills.',
//       image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800&auto=format&fit=crop'
//     },
//     {
//       level: 'Primary',
//       grades: 'Class 1 - 5',
//       description: 'Building foundational knowledge in core subjects with emphasis on English and Math.',
//       image: 'https://res.cloudinary.com/dfdi9ngal/image/upload/v1789039620/WhatsApp_Image_2024-03-20_at_12.01.11_PM_xyaitw.jpg'
//     },
//     {
//       level: 'Middle School',
//       grades: 'Class 6 - 8',
//       description: 'Introduction to specialized subjects including Science and Social Science.',
//       image: 'https://res.cloudinary.com/dfdi9ngal/image/upload/v1789039948/WhatsApp_Image_2025-04-14_at_3.07.42_PM_jawmtx.jpg'
//     },
//     {
//       level: 'Secondary',
//       grades: 'Class 9 - 10',
//       description: 'Board examination preparation with comprehensive subject coverage.',
//       image: 'https://res.cloudinary.com/dfdi9ngal/image/upload/v1789037013/IMG-20260711-WA0007.jpg_u6hjgc.jpg'
//     },
//   ];

//   return (
//     <section className="py-28 bg-cream relative overflow-hidden">
//       <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] pointer-events-none" />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         <div className="text-center mb-20">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex justify-center mb-6">
//               <div className="w-20 h-20 bg-blue/10 rounded-2xl flex items-center justify-center text-blue shadow-lg">
//                 <BookOpen size={40} />
//               </div>
//             </div>
//             <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-6">
//               Classes <span className="text-gradient-blue">Offered</span>
//             </h2>
//             <p className="text-navy/70 max-w-2xl mx-auto text-lg font-medium">
//               From Nursery to Class 10, we offer comprehensive education across multiple levels, designed to foster growth at every stage.
//             </p>
//           </motion.div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {classes.map((classItem, idx) => (
//             <motion.div 
//               key={idx} 
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="group cursor-pointer"
//             >
//               <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] shadow-xl mb-6">
//                 <img 
//                   src={classItem.image} 
//                   alt={classItem.level}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
//                 <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                   <div className="text-gold font-black text-3xl mb-2">{classItem.grades}</div>
//                   <h3 className="font-heading text-xl font-bold text-white mb-3">{classItem.level}</h3>
//                   <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{classItem.description}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-20 bg-gradient-to-br from-navy to-blue rounded-[3rem] p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden"
//         >
//           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
//             <div className="group">
//               <div className="text-5xl font-black text-gold mb-4 group-hover:scale-110 transition-transform inline-block">5</div>
//               <p className="text-xl font-medium tracking-wide">Modern Classrooms</p>
//             </div>
//             <div className="group">
//               <div className="text-5xl font-black text-gold mb-4 group-hover:scale-110 transition-transform inline-block">6+</div>
//               <p className="text-xl font-medium tracking-wide">Subjects per Class</p>
//             </div>
//             <div className="group">
//               <div className="text-5xl font-black text-gold mb-4 group-hover:scale-110 transition-transform inline-block">N - 10</div>
//               <p className="text-xl font-medium tracking-wide">Complete Grade Span</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


'use client';
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export default function ClassesOffered() {
  const classes = [
    {
      level: 'Pre-Primary',
      grades: 'Nursery – KG',
      description: 'Foundation stage focusing on basic literacy, numeracy, and social skills.',
      image: 'https://res.cloudinary.com/dfdi9ngal/image/upload/v1789040220/IMG-20260910-WA0001.jpg_gjcusx.jpg',
    },
    {
      level: 'Primary',
      grades: 'Class 1 – 5',
      description: 'Building foundational knowledge in core subjects with emphasis on English and Math.',
      image: 'https://res.cloudinary.com/dfdi9ngal/image/upload/v1789039620/WhatsApp_Image_2024-03-20_at_12.01.11_PM_xyaitw.jpg',
    },
    {
      level: 'Middle School',
      grades: 'Class 6 – 8',
      description: 'Introduction to specialised subjects including Science and Social Science.',
      image: 'https://res.cloudinary.com/dfdi9ngal/image/upload/v1789039948/WhatsApp_Image_2025-04-14_at_3.07.42_PM_jawmtx.jpg',
    },
    {
      level: 'Secondary',
      grades: 'Class 9 – 10',
      description: 'Board examination preparation with comprehensive subject coverage.',
      image: 'https://res.cloudinary.com/dfdi9ngal/image/upload/v1789037013/IMG-20260711-WA0007.jpg_u6hjgc.jpg',
    },
  ];

  const stats = [
    { value: '5', label: 'Modern Classrooms' },
    { value: '6+', label: 'Subjects per Class' },
    { value: 'N – 10', label: 'Complete Grade Span' },
  ];

  const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-cream relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue/10 rounded-2xl flex items-center justify-center text-blue shadow-lg">
              <BookOpen size={36} />
            </div>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-4 leading-tight">
            Classes <span className="text-gradient-blue">Offered</span>
          </h2>
          <p className="text-navy/70 max-w-xl mx-auto text-base sm:text-lg font-medium px-2">
            From Nursery to Class 10, comprehensive education designed to foster growth at every stage.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {classes.map((classItem, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group cursor-pointer"
            >
              {/* Image card */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] aspect-[4/5] shadow-xl">
                <img
                  src={classItem.image}
                  alt={classItem.level}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Gradient overlay — always visible enough to read text */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />

                {/* Text content */}
                <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
                  <div className="text-gold font-black text-2xl sm:text-3xl mb-1 leading-none">
                    {classItem.grades}
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2">
                    {classItem.level}
                  </h3>
                  {/* Description: visible on mobile always, hover-revealed on larger screens */}
                  <p className="text-white/80 text-sm leading-relaxed
                    sm:opacity-0 sm:translate-y-2
                    sm:group-hover:opacity-100 sm:group-hover:translate-y-0
                    transition-all duration-300 delay-75">
                    {classItem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Stats panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 sm:mt-16 bg-gradient-to-br from-navy to-blue rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {stats.map((stat, i) => (
              <div key={i} className="group flex flex-col items-center text-center py-8 sm:py-0 px-4 sm:px-6 lg:px-10">
                <div className="text-4xl sm:text-5xl font-black text-gold mb-2 group-hover:scale-110 transition-transform duration-200 inline-block">
                  {stat.value}
                </div>
                <p className="text-base sm:text-lg font-medium tracking-wide text-white/90">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}