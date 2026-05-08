import React from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdSchool,
} from 'react-icons/md';
import { BsYoutube } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="bg-navy text-cream pt-16 pb-8 border-t-[6px] border-gold relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-[-50%] left-[-10%] w-96 h-96 bg-blue/20 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="bg-linear-to-br from-gold to-amber p-2 rounded-full text-navy">
                <MdSchool size={24} />
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-cream">
                Usthi Foundation India School
              </span>
            </Link>
            <p className="text-cream/80 mb-6 text-sm">
              Empowering students through holistic education and moral values,
              fostering a brighter future. Supported by Usthi Foundation India, Puri.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@usthischool-2023"
                className="w-10 h-10 rounded-full glass-navy flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-300"
              >
                <BsYoutube size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-navy flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-300"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-navy flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-300"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-gold relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Academics', 'Admissions', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '')}`}
                    className="text-cream/80 hover:text-gold transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-gold relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-gold">
              Academics
            </h3>
            <ul className="space-y-3">
              {['Curriculum', 'Facilities', 'Results', 'Staff'].map((item) => (
                <li key={item}>
                  <Link
                    href="/academics"
                    className="text-cream/80 hover:text-gold transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-gold relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-gold">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-gold mt-1 shrink-0" size={20} />
                <span className="text-cream/80 text-sm">
                  Usthi Foundation India School,Water works Road Puri, Near to Indoor Stadium, Puri, Odisha
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone className="text-gold shrink-0" size={20} />
                <span className="text-cream/80 text-sm">+91 7853822264</span>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-gold shrink-0" size={20} />
                <span className="text-cream/80 text-sm">usthischool@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center text-cream/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Usthi Foundation School Puri. All rights reserved.</p>
          <p className='font-semibold' >Powered By <span className='text-gold font-bold ' >Ephorsys</span></p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link href="/login" className="hover:text-gold transition-colors">Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}