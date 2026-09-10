// // 'use client';
// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Microscope, Monitor, Beaker, Cpu } from 'lucide-react';

// // export default function Labs() {
// //   const labFeatures = [
// //     { icon: <Beaker size={28} />, title: 'Chemistry & Biology', desc: 'Advanced microscopes, chemical apparatus, and safety equipment.' },
// //     { icon: <Monitor size={28} />, title: 'Computer Lab', desc: 'Modern workstations, high-speed internet, and educational software.' },
// //     { icon: <Cpu size={28} />, title: 'Physics Lab', desc: 'Apparatus for mechanics, optics, and electrical experiments.' },
// //     { icon: <Microscope size={28} />, title: 'Research Focused', desc: 'Encouraging practical learning beyond standard curriculum.' },
// //   ];

// //   return (
// //     <section className="py-28 bg-cream relative overflow-hidden">
// //       <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue/10 via-cream to-cream pointer-events-none -z-10"></div>
      
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
// //         <div className="text-center mb-24">
// //           <motion.div 
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <div className="flex justify-center mb-6">
// //               <div className="w-20 h-20 bg-blue/10 rounded-2xl flex items-center justify-center text-blue shadow-lg">
// //                 <Microscope size={40} />
// //               </div>
// //             </div>
// //             <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-6">
// //               Advanced <span className="text-gradient-blue">Laboratories</span>
// //             </h2>
// //             <p className="text-navy/70 max-w-2xl mx-auto text-lg font-medium">
// //               Modern laboratory facilities for hands-on learning and practical experiments, transforming theoretical concepts into practical understanding.
// //             </p>
// //           </motion.div>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
// //           <motion.div 
// //             initial={{ opacity: 0, x: -40 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             className="relative rounded-[2rem] overflow-hidden aspect-video shadow-2xl group border-4 border-white"
// //           >
// //             <img 
// //               src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop" 
// //               alt="Science Lab" 
// //               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"></div>
// //             <div className="absolute bottom-0 left-0 p-8">
// //               <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 inline-flex items-center gap-3">
// //                 <Beaker className="text-gold" size={24} />
// //                 <span className="text-white font-bold text-lg tracking-wide">Science Laboratory</span>
// //               </div>
// //             </div>
// //           </motion.div>

// //           <motion.div 
// //             initial={{ opacity: 0, x: 40 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             className="relative rounded-[2rem] overflow-hidden aspect-video shadow-2xl group border-4 border-white"
// //           >
// //             <img 
// //               src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop" 
// //               alt="Computer Lab" 
// //               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"></div>
// //             <div className="absolute bottom-0 left-0 p-8">
// //               <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 inline-flex items-center gap-3">
// //                 <Monitor className="text-gold" size={24} />
// //                 <span className="text-white font-bold text-lg tracking-wide">Computer Laboratory</span>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>

// //         <motion.div 
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
// //         >
// //           {labFeatures.map((feat, idx) => (
// //             <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-xl border border-navy/5 hover:-translate-y-2 transition-transform duration-300">
// //               <div className="w-14 h-14 bg-blue/10 rounded-xl flex items-center justify-center text-blue mb-6">
// //                 {feat.icon}
// //               </div>
// //               <h4 className="font-heading text-xl font-black text-navy mb-3">{feat.title}</h4>
// //               <p className="text-navy/70 text-sm font-medium leading-relaxed">{feat.desc}</p>
// //             </div>
// //           ))}
// //         </motion.div>

// //       </div>
// //     </section>
// //   );
// // }


// 'use client';
// import React from 'react';
// import { motion, type Variants } from 'framer-motion';
// import { Microscope, Monitor, Beaker, Cpu } from 'lucide-react';

// export default function Labs() {
//   const labFeatures = [
//     { icon: <Beaker size={26} />,     title: 'Chemistry & Biology', desc: 'Advanced microscopes, chemical apparatus, and safety equipment.' },
//     { icon: <Monitor size={26} />,    title: 'Computer Lab',        desc: 'Modern workstations, high-speed internet, and educational software.' },
//     { icon: <Cpu size={26} />,        title: 'Physics Lab',         desc: 'Apparatus for mechanics, optics, and electrical experiments.' },
//     { icon: <Microscope size={26} />, title: 'Research Focused',    desc: 'Encouraging practical learning beyond the standard curriculum.' },
//   ];

//   const images = [
//     {
//       src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop',
//       alt: 'Science Lab',
//       label: 'Science Laboratory',
//       icon: <Beaker size={20} />,
//     },
//     {
//       src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
//       alt: 'Computer Lab',
//       label: 'Computer Laboratory',
//       icon: <Monitor size={20} />,
//     },
//   ];

//   const stagger: Variants = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.09 } },
//   };

//   const fadeUp: Variants = {
//     hidden: { opacity: 0, y: 22 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' as const } },
//   };

//   return (
//     <section className="py-5 sm:py-7 lg:py-16 bg-cream relative overflow-hidden">
//       <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue/10 via-cream to-cream pointer-events-none -z-10" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

//         {/* ── Header ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12 sm:mb-16"
//         >
//           <div className="flex justify-center mb-5">
//             <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue/10 rounded-2xl flex items-center justify-center text-blue shadow-md">
//               <Microscope size={30} />
//             </div>
//           </div>
//           <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-4 leading-tight">
//             Advanced <span className="text-gradient-blue">Laboratories</span>
//           </h2>
//           <p className="text-navy/70 max-w-xl mx-auto text-base sm:text-lg font-medium px-2">
//             Modern laboratory facilities for hands-on learning and practical experiments, transforming theory into understanding.
//           </p>
//         </motion.div>

//         {/* ── Lab images ── */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-5 sm:mb-14">
//           {images.map((img, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden aspect-video shadow-xl group border-4 border-white"
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
//               <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-8">
//                 <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-5 py-2.5 border border-white/20 inline-flex items-center gap-2.5">
//                   <span className="text-gold flex-shrink-0">{img.icon}</span>
//                   <span className="text-white font-bold text-sm sm:text-base tracking-wide">{img.label}</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* ── Feature cards ── */}
//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: '-50px' }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
//         >
//           {labFeatures.map((feat, idx) => (
//             <motion.div
//               key={idx}
//               variants={fadeUp}
//               className="bg-white rounded-2xl sm:rounded-[2rem] shadow-md border border-navy/5 p-5 sm:p-6 lg:p-7 hover:-translate-y-1 transition-transform duration-300"
//             >
//               <div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue/10 rounded-xl flex items-center justify-center text-blue mb-4">
//                 {feat.icon}
//               </div>
//               <h4 className="font-heading text-base sm:text-lg lg:text-xl font-black text-navy mb-2">
//                 {feat.title}
//               </h4>
//               <p className="text-navy/65 text-sm font-medium leading-relaxed">{feat.desc}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// }

'use client';
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Microscope, Monitor, Beaker, Cpu } from 'lucide-react';

export default function Labs() {
  const labFeatures = [
    { icon: <Beaker size={26} />,     title: 'Chemistry & Biology', desc: 'Advanced microscopes, chemical apparatus, and safety equipment.' },
    { icon: <Monitor size={26} />,    title: 'Computer Lab',        desc: 'Modern workstations, high-speed internet, and educational software.' },
    { icon: <Cpu size={26} />,        title: 'Physics Lab',         desc: 'Apparatus for mechanics, optics, and electrical experiments.' },
    { icon: <Microscope size={26} />, title: 'Research Focused',    desc: 'Encouraging practical learning beyond the standard curriculum.' },
  ];

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop',
      alt: 'Science Lab',
      label: 'Science Laboratory',
      icon: <Beaker size={20} />,
    },
    {
      src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
      alt: 'Computer Lab',
      label: 'Computer Laboratory',
      icon: <Monitor size={20} />,
    },
  ];

  const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' as const } },
  };

  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 pb-4 sm:pb-6 lg:pb-6 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue/10 via-cream to-cream pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue/10 rounded-2xl flex items-center justify-center text-blue shadow-md">
              <Microscope size={28} />
            </div>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-3 leading-tight">
            Advanced <span className="text-gradient-blue">Laboratories</span>
          </h2>
          <p className="text-navy/70 max-w-xl mx-auto text-base sm:text-lg font-medium px-2">
            Modern laboratory facilities for hands-on learning and practical experiments, transforming theory into understanding.
          </p>
        </motion.div>

        {/* ── Lab images ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden aspect-video shadow-xl group border-4 border-white"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-8">
                <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-5 py-2.5 border border-white/20 inline-flex items-center gap-2.5">
                  <span className="text-gold flex-shrink-0">{img.icon}</span>
                  <span className="text-white font-bold text-sm sm:text-base tracking-wide">{img.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Feature cards ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {labFeatures.map((feat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white rounded-2xl sm:rounded-[2rem] shadow-md border border-navy/5 p-5 sm:p-6 lg:p-7 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue/10 rounded-xl flex items-center justify-center text-blue mb-4">
                {feat.icon}
              </div>
              <h4 className="font-heading text-base sm:text-lg lg:text-xl font-black text-navy mb-2">
                {feat.title}
              </h4>
              <p className="text-navy/65 text-sm font-medium leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}