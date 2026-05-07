'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    childName: '',
    dob: '',
    class: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    address: '',
    previousSchool: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        childName: '',
        dob: '',
        class: '',
        parentName: '',
        parentEmail: '',
        parentPhone: '',
        address: '',
        previousSchool: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">
            Admission <span className="text-gradient-gold">Application</span>
          </h2>
          <p className="text-navy/80 max-w-2xl mx-auto text-lg">
            Fill out the form below to begin your child's admission process
          </p>
        </div>

        {submitted ? (
          <div className="glass p-12 rounded-2xl text-center animate-fadeIn">
            <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold text-navy mb-2">Thank You!</h3>
            <p className="text-navy/80 mb-4">Your application has been received successfully.</p>
            <p className="text-navy/70 text-sm">We will contact you within 24-48 hours to schedule an interaction session.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
              {/* Child's Name */}
              <div>
                <label className="block text-navy font-semibold mb-2">Child's Full Name *</label>
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-navy/20 rounded-lg focus:border-gold focus:outline-none transition-colors bg-cream/50"
                  placeholder="Enter child's name"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-navy font-semibold mb-2">Date of Birth *</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-navy/20 rounded-lg focus:border-gold focus:outline-none transition-colors bg-cream/50"
                />
              </div>

              {/* Class Applying For */}
              <div>
                <label className="block text-navy font-semibold mb-2">Class Applying For *</label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-navy/20 rounded-lg focus:border-gold focus:outline-none transition-colors bg-cream/50"
                >
                  <option value="">Select Class</option>
                  <option value="nursery">Nursery</option>
                  <option value="kg">KG</option>
                  <option value="class-1">Class 1</option>
                  <option value="class-2">Class 2</option>
                  <option value="class-3">Class 3</option>
                  <option value="class-4">Class 4</option>
                  <option value="class-5">Class 5</option>
                  <option value="class-6">Class 6</option>
                  <option value="class-7">Class 7</option>
                  <option value="class-8">Class 8</option>
                  <option value="class-9">Class 9</option>
                  <option value="class-10">Class 10</option>
                </select>
              </div>

              {/* Parent's Name */}
              <div>
                <label className="block text-navy font-semibold mb-2">Parent/Guardian Name *</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-navy/20 rounded-lg focus:border-gold focus:outline-none transition-colors bg-cream/50"
                  placeholder="Enter parent's name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-navy font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-navy/20 rounded-lg focus:border-gold focus:outline-none transition-colors bg-cream/50"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-navy font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="parentPhone"
                  value={formData.parentPhone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-navy/20 rounded-lg focus:border-gold focus:outline-none transition-colors bg-cream/50"
                  placeholder="10-digit phone number"
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-navy font-semibold mb-2">Residential Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-navy/20 rounded-lg focus:border-gold focus:outline-none transition-colors bg-cream/50"
                  placeholder="Enter complete address"
                />
              </div>

              {/* Previous School */}
              <div className="md:col-span-2">
                <label className="block text-navy font-semibold mb-2">Previous School (if any)</label>
                <input
                  type="text"
                  name="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-navy/20 rounded-lg focus:border-gold focus:outline-none transition-colors bg-cream/50"
                  placeholder="School name and location"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-navy font-semibold mb-2">Additional Information</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-navy/20 rounded-lg focus:border-gold focus:outline-none transition-colors bg-cream/50"
                  placeholder="Any specific information or questions?"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 justify-center md:justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-3 bg-navy text-cream font-bold rounded-lg hover:bg-navy/90 transition-colors"
              >
                <Send size={20} />
                Submit Application
              </button>
            </div>

            <p className="text-navy/60 text-xs mt-4 text-center">
              * Required fields. We'll contact you within 24-48 hours to schedule an interaction session.
            </p>
          </form>
        )}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-xl text-center">
            <p className="text-gold font-bold text-lg mb-2">📧 Email</p>
            <p className="text-navy/70">uthischool@gmail.com</p>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <p className="text-gold font-bold text-lg mb-2">📞 Phone</p>
            <p className="text-navy/70">7853822264</p>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <p className="text-gold font-bold text-lg mb-2">📍 Address</p>
            <p className="text-navy/70">Water works roade Puri, near indoor stadium</p>
          </div>
        </div>
      </div>
    </section>
  );
}
