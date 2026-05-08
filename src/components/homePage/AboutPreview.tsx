// import React from "react";
// import Link from "next/link";

// export default function AboutPreview() {
//   return (
//     <section className="relative py-24 bg-navy text-cream diagonal-cut-bottom pb-32">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div className="relative space-y-8 animate-fade-up">
//             <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
//               A Legacy of <br />
//               <span className="text-gold">Excellence</span>
//             </h2>
//             <p className="text-cream/80 text-lg leading-relaxed">
//               Founded under the aegis of Usthi Foundation India, GNO Project
//               School strives to provide world-class education with deep-rooted
//               values. We believe in an antigravity approach to learning—removing
//               barriers so students can rise to their highest potential.
//             </p>

//             <ul className="space-y-4">
//               {[
//                 "Holistic Development Framework",
//                 "Experienced & Dedicated Faculty",
//                 "Modern Infrastructure & Labs",
//               ].map((item, idx) => (
//                 <li key={idx} className="flex items-center gap-3">
//                   <div className="w-2 h-2 rounded-full bg-amber"></div>
//                   <span className="font-semibold">{item}</span>
//                 </li>
//               ))}
//             </ul>

//             <Link
//               href="/about"
//               className="inline-block mt-4 border-b-2 border-gold text-gold hover:text-amber hover:border-amber pb-1 transition-all duration-300 font-bold uppercase tracking-wider"
//             >
//               Discover Our Vision
//             </Link>
//           </div>

//           <div className="relative">
//             {/* Abstract Image Placeholder Grid */}
//             <div className="grid  gap-4">
//               <div className="h-64  rounded-tr-3xl overflow-hidden mt-8">
//                 <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center transition-opacity duration-500"></div>
//               </div>
//             </div>

//             {/* Decorative element */}
//             <div className="absolute -inset-4 border border-gold/20 -z-10 rounded-3xl rotate-3"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="relative py-20 md:py-24 bg-navy text-cream diagonal-cut-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6 animate-fade-up">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              A Legacy of <br />
              <span className="text-gold">Excellence</span>
            </h2>

            <p className="text-cream/80 text-base sm:text-lg leading-relaxed">
              Founded under the aegis of Usthi Foundation India, GNO Project
              School provides quality education with strong values. We remove
              barriers so every student can reach their full potential.
            </p>

            <ul className="space-y-3">
              {[
                "Holistic Development",
                "Expert Faculty",
                "Modern Labs & Facilities",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber"></div>
                  <span className="font-semibold text-sm sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-block mt-4 text-gold border-b-2 border-gold pb-1 hover:text-amber hover:border-amber transition duration-300 font-bold uppercase tracking-wide text-sm sm:text-base"
            >
              Discover Our Vision
            </Link>
          </div>

          <div className="relative w-full">
            
            <div className="relative w-full h-65 sm:h-80 md:h-100 lg:h-112.5 rounded-2xl overflow-hidden shadow-xl">
              
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
                alt="School"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative Border */}
            <div className="absolute -inset-3 sm:-inset-4 border border-gold/20 rounded-2xl rotate-3 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}