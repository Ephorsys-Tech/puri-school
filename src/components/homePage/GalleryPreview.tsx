'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import api from '@/lib/api';
import { GalleryImage } from '@/types';

export default function GalleryPreview() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  // High-quality school life Unsplash images
  const unsplashPlaceholders = [
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544391682-17efd932eaad?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503676260728-1c00da07bb5e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop'
  ];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await api.get('/api/gallery');
        const imagesData = data.data || [];
        setImages(imagesData.length > 0 ? imagesData.slice(0, 6) : []);
      } catch (error) {
        console.error('Failed to fetch gallery', error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const displayImages = images.length > 0 ? images : unsplashPlaceholders.map((url, i) => ({
    _id: `temp-${i}`,
    imageUrl: url,
    category: ['activity', 'event', 'achievement'][i % 3] as any,
    createdAt: new Date().toISOString()
  }));

  return (
    <section className="py-24 bg-[#0a0f1d] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -left-40 top-40 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs">Vibrant Community</span>
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Capturing <span className="text-blue-500">Milestones</span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
          <Link href="/gallery" className="group flex items-center gap-3 text-white/80 hover:text-white font-bold transition-all px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10">
            EXPLORE FULL GALLERY 
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform text-blue-500" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayImages.map((img, i) => (
            <div 
              key={img._id} 
              className="group h-[400px] rounded-[2.5rem] overflow-hidden relative border border-white/5 shadow-2xl transition-all hover:border-blue-500/30 hover:shadow-blue-500/10"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <img 
                src={img.imageUrl} 
                alt="Gallery" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
              />
              {/* Overlay with modern blur and category */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3">
                  <span className="px-4 py-1.5 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                    {img.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
