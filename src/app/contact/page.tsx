'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <>

      <main className="flex-grow pt-24 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-navy mb-4">Get in <span className="text-gradient-gold">Touch</span></h1>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              Have questions about admissions, facilities, or our curriculum? We are here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="glass p-8 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-gold shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-2">Our Location</h3>
                  <p className="text-navy/70 text-sm">GNO Project School<br/>Usthi Foundation India,<br/>Puri, Odisha, India 752002</p>
                </div>
              </div>
              
              <div className="glass p-8 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-gold shrink-0">
                  <Phone />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-2">Phone Number</h3>
                  <p className="text-navy/70 text-sm">+91 00000 00000<br/>+91 11111 11111</p>
                </div>
              </div>

              <div className="glass p-8 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-gold shrink-0">
                  <Mail />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-2">Email Address</h3>
                  <p className="text-navy/70 text-sm">info@gnoschoolpuri.org<br/>admissions@gnoschoolpuri.org</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 glass-navy p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <h2 className="font-heading text-3xl font-bold text-cream mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label className="block text-cream/80 text-sm mb-2">Full Name <span className="text-red-400">*</span></label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-cream/10 border border-cream/20 text-cream rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-cream/80 text-sm mb-2">Email Address <span className="text-red-400">*</span></label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-cream/10 border border-cream/20 text-cream rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-cream/80 text-sm mb-2">Your Message <span className="text-red-400">*</span></label>
                  <textarea 
                    required 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-cream/10 border border-cream/20 text-cream rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="bg-gold text-navy px-8 py-4 rounded-xl font-bold w-full md:w-auto hover:bg-amber transition-colors flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? 'Sending...' : <><Send size={20} /> Send Message</>}
                </button>

                {status === 'success' && <p className="text-green-400 text-sm">Message sent successfully!</p>}
              </form>
            </div>
          </div>

          {/* Map Embed */}
          <div className="mt-16 h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.40927376722!2d85.73805175!3d19.8045657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c4180256e495%3A0x496a9d8bf04d1efc!2sPuri%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}