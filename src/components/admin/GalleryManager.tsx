'use client';

import React, { useState, useEffect } from 'react';
import { apiAuth } from '@/lib/api';
import { GalleryImage, GalleryCategory } from '@/types';
import { Plus, Pencil, Trash2, X, Image as ImageIcon, Filter, UploadCloud } from 'lucide-react';

export default function GalleryManager() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  
  const [formData, setFormData] = useState({
    imageUrl: '',
    category: 'activity' as GalleryCategory
  });

  const [activeFilter, setActiveFilter] = useState<GalleryCategory | 'all'>('all');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const { data } = await apiAuth.get('/api/gallery');
      setImages(data.data || data);
    } catch (error) {
      console.error('Failed to fetch gallery', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingImage) {
        await apiAuth.put(`/api/gallery/${editingImage._id}`, formData);
      } else {
        await apiAuth.post('/api/gallery', formData);
      }
      fetchImages();
      closeModal();
    } catch (error) {
      alert('Failed to save gallery item');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;
    try {
      await apiAuth.delete(`/api/gallery/${id}`);
      setImages(images.filter(img => img._id !== id));
    } catch (error) {
      alert('Failed to delete');
    }
  };

  const openModal = (image: GalleryImage | null = null) => {
    if (image) {
      setEditingImage(image);
      setFormData({
        imageUrl: image.imageUrl,
        category: image.category
      });
    } else {
      setEditingImage(null);
      setFormData({ imageUrl: '', category: 'activity' });
    }
    setIsModalOpen(true);
  };

  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formDataUpload = new FormData();
    formDataUpload.append('file', file);

    try {
      const { data } = await apiAuth.post('/api/upload', formDataUpload, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setFormData({ ...formData, imageUrl: data.imageUrl });
    } catch (error) {
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingImage(null);
  };

  const filteredImages = images.filter(img => {
    return activeFilter === 'all' || img.category === activeFilter;
  });

  return (
    <div className="space-y-10 animate-[fadeUp_0.4s_ease-out]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="font-heading text-4xl font-black text-navy tracking-tight">Gallery Manager</h1>
          <p className="text-navy/40 font-medium tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue animate-pulse"></span>
            Manage school memories across all pages
          </p>
        </div>
        <button 
          onClick={() => openModal()}
          className="bg-blue text-white px-8 py-4 rounded-[1.5rem] font-bold flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/20"
        >
          <Plus size={20} /> Add New Memory
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 pb-2 border-b border-navy/5">
        {(['all', 'event', 'activity', 'achievement'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all ${
              activeFilter === cat 
                ? 'bg-blue text-white shadow-lg' 
                : 'bg-navy/5 text-navy/40 hover:bg-navy/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-64 rounded-3xl bg-navy/5 animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(Array.isArray(filteredImages) ? filteredImages : []).map((img) => (
            <div key={img._id} className="group relative aspect-square rounded-[2rem] overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src={img.imageUrl} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <div className="flex gap-2">
                  <button onClick={() => openModal(img)} className="flex-grow py-3 bg-white/20 backdrop-blur-md text-white rounded-xl flex items-center justify-center hover:bg-blue transition-colors">
                    <Pencil size={18} />
                  </button>
                  <button onClick={() => handleDelete(img._id)} className="flex-grow py-3 bg-white/20 backdrop-blur-md text-red-400 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-navy text-[8px] font-black uppercase tracking-[0.2em] rounded-full shadow-sm">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
          {filteredImages.length === 0 && (
            <div className="col-span-full py-32 text-center border-4 border-dashed border-navy/5 rounded-[3rem]">
              <ImageIcon size={64} className="mx-auto text-navy/10 mb-6" />
              <p className="text-navy/20 text-xl font-bold italic tracking-wide">No memories captured in this category yet.</p>
            </div>
          )}
        </div>
      )}

      {/* Modern Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-xl animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-[3rem] w-full max-w-lg shadow-2xl relative overflow-hidden border border-white/20">
            <div className="bg-navy p-10 text-white relative">
               <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-blue/20 rounded-full blur-3xl"></div>
               <h2 className="font-heading text-3xl font-black tracking-tight mb-2">
                {editingImage ? 'Edit Memory' : 'Capture New Memory'}
              </h2>
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest leading-none">Puri School Digital Archive</p>
              <button 
                onClick={closeModal}
                className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-10 space-y-8">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] ml-2">Select Category</label>
                <div className="flex gap-2">
                  {(['event', 'activity', 'achievement'] as const).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setFormData({...formData, category: cat})}
                      className={`flex-grow py-3 rounded-2xl font-bold text-xs uppercase tracking-widest border-2 transition-all ${
                        formData.category === cat 
                          ? 'bg-blue border-blue text-white shadow-lg' 
                          : 'border-navy/5 text-navy/40 hover:border-navy/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] ml-2">Visual Source</label>
                <div className="p-8 border-2 border-dashed border-navy/10 rounded-[2rem] bg-navy/5 flex flex-col items-center justify-center gap-4 group hover:border-blue/30 transition-colors relative">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform ${uploading ? 'bg-gold' : 'bg-blue group-hover:scale-110'}`}>
                      {uploading ? (
                        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <UploadCloud className="text-white" size={32} />
                      )}
                    </div>
                    <div className="text-center">
                      <p className="text-navy font-black text-sm uppercase tracking-widest">{uploading ? 'Processing Visual...' : 'Upload from Local'}</p>
                      <p className="text-navy/30 text-[10px] font-bold uppercase tracking-widest mt-1">PNG, JPG, HEIC up to 10MB</p>
                    </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-navy/20">
                    <ImageIcon size={18} />
                  </div>
                  <input 
                    required
                    type="url" 
                    value={formData.imageUrl}
                    onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                    className="w-full pl-12 pr-6 py-4 bg-navy/5 border-2 border-transparent rounded-2xl focus:outline-none focus:border-blue/30 focus:bg-white transition-all text-sm font-bold text-navy"
                    placeholder="Visual URL (populated automatically on upload)"
                  />
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <button 
                  type="button" 
                  onClick={closeModal}
                  className="flex-grow py-5 bg-navy/5 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] text-navy/40 hover:bg-navy/10 hover:text-navy transition-all"
                >
                  Discard
                </button>
                <button 
                  type="submit" 
                  disabled={uploading || !formData.imageUrl}
                  className="flex-grow py-5 bg-blue text-white rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-30 disabled:grayscale"
                >
                  {editingImage ? 'Verify & Update' : 'Archive Memory'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
