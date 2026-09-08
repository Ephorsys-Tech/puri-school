"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, TrophyIcon } from "lucide-react";
import { Student } from "@/types";

const fallbackStudents = [
  {
    _id: "default-1",
    class: "Class 8",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800",
    highlight: "Debate Champion",
  },
  {
    _id: "default-2",
    class: "Class 10",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800",
    highlight: "Football Team Captain",
  },
  {
    _id: "default-3",
    class: "Class 9",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800",
    highlight: "Art & Painting",
  },
  {
    _id: "default-4",
    class: "Class 7",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800",
    highlight: "Science Fair Winner",
  },
];

export default function Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await fetch("/api/students");
      const data = await res.json();
      if (data.data && Array.isArray(data.data) && data.data.length > 0) {
        setStudents(data.data);
      } else {
        setStudents(fallbackStudents as Student[]);
      }
    } catch (err) {
      console.error("Failed to fetch dynamic students:", err);
      setStudents(fallbackStudents as Student[]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-15 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mt-4">
            Bright <span className="text-gradient-blue">Young Minds</span>
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto text-lg mt-4">
            Our students shine in academics, sports, and creative fields,
            building confidence and leadership for the future.
          </p>
        </div>

        {/* Cards */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-4/5 rounded-3xl bg-navy/5 animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {students.map((student) => (
              <motion.div
                key={student._id}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-4/5 shadow-xl bg-navy/10">
                  <img
                    src={student.image}
                    alt={student.class}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent"></div>

                  {/* Highlight text overlay on bottom of card */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 mb-1">
                      <TrophyIcon className="text-amber-400 shrink-0" size={14} />
                      <span className="text-xs font-semibold text-amber-300 truncate">
                        {student.highlight}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center mt-4">
                  <p className="text-blue text-sm font-semibold uppercase tracking-wider">
                    {student.class}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom Highlight Section */}
        <div className="mt-12 bg-white rounded-3xl p-10 text-center shadow-xl">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue/10 flex items-center justify-center rounded-xl">
              <Users className="text-blue" size={30} />
            </div>
          </div>

          <h3 className="text-3xl font-bold text-navy mb-4">
            Student Growth & Activities
          </h3>

          <p className="text-navy/70 max-w-2xl mx-auto">
            Our students actively participate in sports, arts, debates, and
            national-level programs, helping them grow with confidence,
            creativity, and leadership skills.
          </p>
        </div>
      </div>
    </section>
  );
}
