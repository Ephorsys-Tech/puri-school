import React from 'react';
import Hero from '@/components/homePage/Hero';
import AboutPreview from '@/components/homePage/AboutPreview';
import Facilities from '@/components/homePage/Facilities';
import GalleryPreview from '@/components/homePage/GalleryPreview';
import HeroSection from '@/components/homePage/heroSection';
import WhyChooseUs from '@/components/homePage/whyChooseUs';

export default function Home() {
  return (
    <>
      <main className="grow">
        <HeroSection />
        <AboutPreview />
        <WhyChooseUs/>
        <Facilities />
        <GalleryPreview />
      </main>
    </>
  );
}
