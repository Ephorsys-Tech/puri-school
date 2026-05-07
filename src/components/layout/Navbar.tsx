// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Menu, X, School } from 'lucide-react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Academics', path: '/academics' },
//     { name: 'Admissions', path: '/admissions' },
//     { name: 'Gallery', path: '/gallery' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled ? 'glass py-3' : 'bg-transparent py-5'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           <Link href="/" className="flex items-center gap-2 group">
//             <div className="bg-gradient-to-br from-gold to-amber p-2 rounded-full text-navy group-hover:scale-105 transition-transform duration-300">
//               <School size={24} />
//             </div>
//             <span className={`font-heading text-xl md:text-2xl font-bold tracking-tight ${scrolled ? 'text-navy' : 'text-navy'}`}>
//               GNO Project School
//             </span>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8 items-center">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.path}
//                 className={`font-semibold text-sm uppercase tracking-wider relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
//                   pathname === link.path ? 'text-gold after:scale-x-100' : 'text-navy'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-navy focus:outline-none"
//             >
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden absolute w-full glass transition-all duration-300 overflow-hidden ${
//           isOpen ? 'max-h-96 border-b border-gold/20' : 'max-h-0'
//         }`}
//       >
//         <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.path}
//               onClick={() => setIsOpen(false)}
//               className={`block px-3 py-2 text-base font-semibold uppercase tracking-wider ${
//                 pathname === link.path ? 'text-gold bg-navy/5 rounded-md' : 'text-navy'
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";

/* ===================== CONFIG ===================== */

const AUTO_PLAY = 5000;
const BOX_COUNT = 12;

/* ===================== TYPES ===================== */

type Slide = {
  img: string;
  heading: string;
  highlight: string;
  tail: string;
  subtext: string;
  button: string;
  link: string;
};

/* ===================== SLIDES ===================== */

const slides: Slide[] = [
  {
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80",
    heading: "Help us",
    highlight: "to save",
    tail: "The homeless people",
    subtext: "All of our effort can bring back the life",
    button: "Donate",
    link: "/donate",
  },
  {
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=80",
    heading: "Together we",
    highlight: "can feed",
    tail: "The hungry children",
    subtext: "Every contribution builds hope for tomorrow",
    button: "Donate",
    link: "/donate",
  },
  {
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80",
    heading: "Empower",
    highlight: "every child",
    tail: "With quality education",
    subtext: "Knowledge is the greatest gift we can give",
    button: "Donate",
    link: "/donate",
  },
];

/* ===================== IMAGE VARIANTS ===================== */

const imageVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 1.12,
    filter: "brightness(0.6)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "brightness(1)",
    transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    filter: "brightness(0.5)",
    transition: { duration: 0.7 },
  },
};

/* ===================== BOX REVEAL ===================== */

const boxVariants: Variants = {
  hidden: { opacity: 1, scaleY: 1 },
  visible: {
    opacity: 0,
    scaleY: 0,
    transition: { duration: 0.9, ease: [0.42, 0, 0.58, 1] }, // FIXED
  },
};

function BoxRevealOverlay({ active }: { active: boolean }) {
  return (
    <motion.div
      className="absolute inset-0 z-20 grid grid-cols-4 grid-rows-3"
      initial="hidden"
      animate={active ? "visible" : "hidden"}
    >
      {Array.from({ length: BOX_COUNT }).map((_, i) => (
        <motion.div
          key={i}
          variants={boxVariants}
          transition={{ delay: i * 0.08 }}
          className="bg-black/70 origin-bottom"
        />
      ))}
    </motion.div>
  );
}

/* ===================== TEXT ANIMATION ===================== */

const textContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] }, // FIXED
  },
};

/* ===================== MAIN COMPONENT ===================== */

export default function HeroSection() {
  const [current, setCurrent] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* IMAGE */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          <img
            src={slide.img}
            alt="hero"
            className="w-full h-full object-cover"
            draggable={false}
          />

          <BoxRevealOverlay active />
        </motion.div>
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/20 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={textContainer}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-4xl text-white"
          >
            <motion.h1
              variants={textItem}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase"
            >
              {slide.heading}{" "}
              <span className="text-[#159ABF]">{slide.highlight}</span>
            </motion.h1>

            <motion.h2
              variants={textItem}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase mt-2"
            >
              {slide.tail}
            </motion.h2>

            <motion.p
              variants={textItem}
              className="mt-6 text-lg text-white/80 max-w-2xl mx-auto"
            >
              {slide.subtext}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}