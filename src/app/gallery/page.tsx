'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import api from '@/lib/api';
import { GalleryImage, GalleryCategory } from '@/types';

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<GalleryCategory | 'all'>('all');

  const categories: { id: GalleryCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Memories' },
    { id: 'event', label: 'Events' },
    { id: 'activity', label: 'Activities' },
    { id: 'achievement', label: 'Achievements' },
  ];

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const url = activeTab === 'all' ? '/api/gallery' : `/api/gallery?category=${activeTab}`;
        const { data } = await api.get(url);
        setImages(data.data || []);
      } catch (error) {
        console.error('Failed to fetch gallery', error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [activeTab]);

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 bg-cream min-h-screen relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-20 left-[-10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <span className="text-blue font-black uppercase tracking-[0.4em] text-xs">A Visual Legacy</span>
            <h1 className="font-heading text-5xl md:text-7xl font-black text-navy leading-tight">
              School <span className="text-blue">Archives</span>
            </h1>
            <p className="text-xl text-navy/40 max-w-2xl mx-auto font-medium">
              Documenting the milestones, community impact, and the vibrant life of our students.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-8 py-3 rounded-full font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-300 border-2 ${
                  activeTab === cat.id 
                    ? 'bg-blue text-white border-blue shadow-xl shadow-blue-500/20' 
                    : 'bg-white text-navy/40 border-transparent hover:bg-navy/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <GalleryGrid images={images} loading={loading} />
        </div>
      </main>
      <Footer />
    </>
  );
}