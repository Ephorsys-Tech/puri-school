import React from "react";
import {
  BookOpen,
  FlaskConical,
  Trophy,
  Bus,
  Home,
  Coffee,
  Monitor,
  Utensils,
  Shirt,
} from "lucide-react";

export default function Facilities() {
  // const facilities = [
  //   {
  //     icon: <BookOpen size={32} />,
  //     title: "Digital Library",
  //     desc: "Extensive collection with e-resources",
  //   },
  //   {
  //     icon: <FlaskConical size={32} />,
  //     title: "Modern Labs",
  //     desc: "State-of-the-art Science & Computer labs",
  //   },
  //   {
  //     icon: <Trophy size={32} />,
  //     title: "Sports Arena",
  //     desc: "Indoor & outdoor sporting facilities",
  //   },
  //   {
  //     icon: <Bus size={32} />,
  //     title: "Bus Facilities",
  //     desc: "GPS enabled bus network",
  //   },
  //   // { icon: <Home size={32} />, title: 'Hostel', desc: 'Comfortable & secure boarding' },
  //   {
  //     icon: <Coffee size={32} />,
  //     title: "Cafeteria",
  //     desc: "Hygienic and nutritious meals",
  //   },
  //   // { icon: <Coffee size={32} />, title: 'Cafeteria', desc: 'Hygienic and nutritious meals' },
  // ];

  const facilities = [
    {
      icon: <BookOpen size={32} />,
      title: "Library",
      desc: "Well-maintained library with educational books for students",
    },
    {
      icon: <Monitor size={32} />,
      title: "Computer Lab",
      desc: "Basic computer education with dedicated computer lab",
    },
    {
      icon: <FlaskConical size={32} />,
      title: "Science Lab",
      desc: "Practical science learning environment for students",
    },
    {
      icon: <Bus size={32} />,
      title: "School Transport",
      desc: "Bus facility available for student transportation",
    },
    {
      icon: <Utensils size={32} />,
      title: "Mid-Day Meal",
      desc: "Nutritious meals provided for students daily",
    },
    {
      icon: <Shirt size={32} />,
      title: "Uniform & Books",
      desc: "School supports students with books and uniforms",
    },
  ];

  return (
    <section className="py-24 bg-cream relative">
      {/* Decorative Dots */}
      <div
        className="absolute top-20 right-10 w-32 h-32 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-navy) 2px, transparent 2px)",
          backgroundSize: "16px 16px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold font-bold uppercase tracking-wider text-sm mb-2 block">
            Infrastructure
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">
            World-Class Facilities
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl bg-navy text-cream flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-navy transition-colors duration-300 shadow-lg">
                {fac.icon}
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-3">
                {fac.title}
              </h3>
              <p className="text-navy/70">{fac.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
