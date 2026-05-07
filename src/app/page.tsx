import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/homePage/Hero';
import AboutPreview from '@/components/homePage/AboutPreview';
import Facilities from '@/components/homePage/Facilities';
import GalleryPreview from '@/components/homePage/GalleryPreview';
import HeroSection from '@/components/homePage/heroSection';

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="flex-grow">
        <HeroSection />
        <AboutPreview />
        <Facilities />
        <GalleryPreview />
      </main>
      <Footer />
    </>
  );
}
