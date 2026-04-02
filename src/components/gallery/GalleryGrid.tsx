'use client';

import React, { useState } from 'react';
import { GalleryImage } from '@/types';
import GalleryCard from './GalleryCard';
import { X } from 'lucide-react';

interface GalleryGridProps {
  images: GalleryImage[];
  loading: boolean;
}

export default function GalleryGrid({ images, loading }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-72 bg-cream/50 rounded-2xl animate-pulse"></div>
        ))}
      </div>
    );
  }

  if (!Array.isArray(images) || images.length === 0) {
    return (
      <div className="text-center py-24 glass rounded-3xl max-w-2xl mx-auto">
        <p className="text-navy/50 text-xl font-bold">No images found for this category.</p>
      </div>
    );
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {(Array.isArray(images) ? images : []).map((img) => (
          <div key={img._id} className="break-inside-avoid">
            <GalleryCard image={img} onClick={setSelectedImage} />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/95 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
          <button 
            className="absolute top-6 right-6 w-12 h-12 bg-cream/10 hover:bg-gold hover:text-navy text-cream rounded-full flex items-center justify-center transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          
          <div className="max-w-5xl w-full bg-navy rounded-[3rem] overflow-hidden shadow-2xl relative border border-white/10" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage.imageUrl} 
              alt="Gallery Preview" 
              className="w-full max-h-[80vh] object-contain bg-black/20"
            />
            <div className="p-8 md:p-12 bg-gradient-to-b from-navy/50 to-navy backdrop-blur-md flex justify-between items-center">
              <span className="inline-block px-6 py-2 bg-blue text-white text-xs font-black uppercase tracking-[0.3em] rounded-full">
                {selectedImage.category}
              </span>
              <p className="text-white/40 text-xs font-medium uppercase tracking-widest leading-none">
                Puri School Memorial • {new Date(selectedImage.createdAt).getFullYear()}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
