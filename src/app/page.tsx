import React from 'react';
import Hero from '@/components/homePage/Hero';
import AboutPreview from '@/components/homePage/AboutPreview';
import Facilities from '@/components/homePage/Facilities';
import GalleryPreview from '@/components/homePage/GalleryPreview';
import HeroSection from '@/components/homePage/heroSection';

export default function Home() {
  return (
    <>
      <main className="grow">
        <HeroSection />
        <AboutPreview />
        <Facilities />
        <GalleryPreview />
      </main>
    </>
  );
}
