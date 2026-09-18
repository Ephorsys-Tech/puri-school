"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, TrophyIcon } from "lucide-react";
import { Student } from "@/types";

export default function Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await fetch("/api/students");
      const data = await res.json();
      if (data.data && Array.isArray(data.data) && data.data.length > 0) {
        setStudents(data.data);
        setHasData(true);
      } else {
        setHasData(false);
      }
    } catch (err) {
      console.error("Failed to fetch dynamic students:", err);
      setHasData(false);
    } finally {
      setLoading(false);
    }
  };

  // Don't render anything while loading or if no real backend data
  if (loading || !hasData) return null;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mt-4">
            Bright{" "}
            <span className="text-gradient-blue">Young Minds</span>
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto text-base sm:text-lg mt-4 px-2">
            Our students shine in academics, sports, and creative fields,
            building confidence and leadership for the future.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {students.map((student) => (
            <motion.div
              key={student._id}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/5] shadow-lg bg-navy/10">
                <img
                  src={student.image}
                  alt={student.class}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />

                {/* Bottom label */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <TrophyIcon
                      className="text-amber-400 shrink-0"
                      size={12}
                      strokeWidth={2.5}
                    />
                    <span className="text-[10px] sm:text-xs font-semibold text-amber-300 truncate leading-tight">
                      {student.highlight}
                    </span>
                  </div>
                </div>
              </div>

              {/* Class label */}
              <div className="text-center mt-3 sm:mt-4">
                <p className="text-blue text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  {student.class}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight Section */}
        <div className="mt-10 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center shadow-xl">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue/10 flex items-center justify-center rounded-xl">
              <Users className="text-blue" size={28} />
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mb-3 sm:mb-4">
            Student Growth & Activities
          </h3>

          <p className="text-navy/70 max-w-2xl mx-auto text-sm sm:text-base">
            Our students actively participate in sports, arts, debates, and
            national-level programs, helping them grow with confidence,
            creativity, and leadership skills.
          </p>
        </div>
      </div>
    </section>
  );
}