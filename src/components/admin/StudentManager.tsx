'use client';

import React, { useState, useEffect } from 'react';
import { apiAuth } from '@/lib/api';
import { Student } from '@/types';
import { Plus, Pencil, Trash2, X, GraduationCap, UploadCloud, AlertCircle } from 'lucide-react';

export default function StudentManager() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const [formData, setFormData] = useState({
    class: '',
    highlight: '',
    image: '',
    publicId: '',
  });

  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState<Student | null>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const { data } = await apiAuth.get('/api/students');
      setStudents(data.data || []);
    } catch (error) {
      console.error('Failed to fetch students', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setErrorMessage(null);
    const formDataUpload = new FormData();
    formDataUpload.append('file', file);

    try {
      const { data } = await apiAuth.post('/api/upload', formDataUpload, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setFormData(prev => ({
        ...prev,
        image: data.imageUrl,
        publicId: data.publicId || ''
      }));
    } catch (err: any) {
      console.error('Upload error', err);
      setErrorMessage(err.response?.data?.error || 'Image upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const openModal = (student: Student | null = null) => {
    setErrorMessage(null);
    if (student) {
      setEditingStudent(student);
      setFormData({
        class: student.class,
        highlight: student.highlight,
        image: student.image,
        publicId: student.publicId || '',
      });
    } else {
      if (students.length >= 4) {
        setErrorMessage('Maximum limit of 4 students reached. You must edit or delete an existing student.');
        return;
      }
      setEditingStudent(null);
      setFormData({ class: '', highlight: '', image: '', publicId: '' });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (submitting) return;
    setIsModalOpen(false);
    setEditingStudent(null);
    setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.class || !formData.highlight || !formData.image) {
      setErrorMessage('Class, highlight, and image are all required fields.');
      return;
    }

    setSubmitting(true);
    try {
      if (editingStudent) {
        await apiAuth.put(`/api/students/${editingStudent._id}`, formData);
      } else {
        await apiAuth.post('/api/students', formData);
      }
      await fetchStudents();
      closeModal();
    } catch (err: any) {
      console.error('Save student error', err);
      setErrorMessage(err.response?.data?.error || 'Failed to save student record.');
    } finally {
      setSubmitting(false);
    }
  };

  const openDeleteModal = (student: Student) => {
    setStudentToDelete(student);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!studentToDelete) return;
    setDeleting(true);
    try {
      await apiAuth.delete(`/api/students/${studentToDelete._id}`);
      setStudents(students.filter(s => s._id !== studentToDelete._id));
      setIsDeleteModalOpen(false);
      setStudentToDelete(null);
    } catch (err: any) {
      console.error('Delete student error', err);
      alert(err.response?.data?.error || 'Failed to delete student');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="space-y-10 animate-[fadeUp_0.4s_ease-out]">
      {/* Header & Counter */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1 mt-12">
          <div className="flex items-center gap-3">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight">
              Our Students
            </h1>
            <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${
              students.length >= 4 
                ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
            }`}>
              {students.length} / 4 Slots Used
            </span>
          </div>
          <p className="text-navy/40 font-medium tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue animate-pulse"></span>
            Manage highlighted star students shown on the homepage (Max 4)
          </p>
        </div>

        <button 
          onClick={() => openModal()}
          disabled={students.length >= 4}
          title={students.length >= 4 ? 'Maximum 4 students allowed' : 'Add Student'}
          className={`px-8 py-4 rounded-[1.5rem] font-bold flex items-center gap-3 transition-all shadow-xl ${
            students.length >= 4
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
              : 'bg-blue text-white hover:scale-105 active:scale-95 shadow-blue-500/20'
          }`}
        >
          <Plus size={20} /> Add New Student
        </button>
      </div>

      {/* Global Limit Banner if 4 students exist */}
      {students.length >= 4 && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center gap-3">
          <AlertCircle size={20} className="shrink-0 text-amber-600" />
          <p className="text-sm font-semibold">
            Maximum limit of 4 students reached. To add a new student, please edit or delete one of the current students.
          </p>
        </div>
      )}

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-80 rounded-3xl bg-navy/5 animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {students.map((student) => (
            <div 
              key={student._id} 
              className="group relative rounded-[2rem] overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl transition-all duration-500 bg-white flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-navy/5">
                <img 
                  src={student.image} 
                  alt={student.class}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Actions Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity bg-navy/40 backdrop-blur-xs">
                  <button 
                    onClick={() => openModal(student)} 
                    className="p-3 bg-white text-navy rounded-xl hover:bg-blue hover:text-white transition-colors shadow-lg"
                    title="Edit Student"
                  >
                    <Pencil size={20} />
                  </button>
                  <button 
                    onClick={() => openDeleteModal(student)} 
                    className="p-3 bg-white text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-colors shadow-lg"
                    title="Delete Student"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>

                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-3 py-1 bg-blue text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-sm">
                    {student.class}
                  </span>
                  <p className="mt-2 text-sm font-bold truncate text-white/90">
                    {student.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {students.length === 0 && (
            <div className="col-span-full py-32 text-center border-4 border-dashed border-navy/5 rounded-[3rem]">
              <GraduationCap size={64} className="mx-auto text-navy/10 mb-6" />
              <p className="text-navy/30 text-xl font-bold italic tracking-wide">
                No students added yet. Click &quot;Add New Student&quot; to create up to 4 student highlights.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 p-3 backdrop-blur-xl animate-[fadeIn_0.3s_ease-out] sm:p-4">
          <div className="relative flex max-h-[92dvh] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl">
            <div className="relative shrink-0 bg-navy px-5 py-5 text-white sm:px-6">
              <div className="absolute top-[-40%] right-[-18%] h-36 w-36 rounded-full bg-blue/20 blur-3xl"></div>
              <h2 className="font-heading pr-12 text-2xl font-black tracking-tight sm:text-3xl">
                {editingStudent ? 'Edit Student Details' : 'Add New Student'}
              </h2>
              <p className="mt-2 text-[10px] font-bold uppercase leading-none tracking-[0.2em] text-white/45">
                Our Students Showcase (Max 4)
              </p>
              <button 
                onClick={closeModal}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Close modal"
              >
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="min-h-0 flex-1 space-y-6 overflow-y-auto px-5 py-6 sm:px-6">
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle size={16} className="shrink-0 text-red-500" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Class Number / Title Field */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy/60">
                  Class Number / Name *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Class 8"
                  value={formData.class}
                  onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-blue focus:ring-2 focus:ring-blue/20 text-navy font-semibold text-sm outline-none transition-all"
                />
              </div>

              {/* Highlight Field */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy/60">
                  Student Highlight / Achievement *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Debate Champion / Football Captain"
                  value={formData.highlight}
                  onChange={(e) => setFormData({ ...formData, highlight: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-blue focus:ring-2 focus:ring-blue/20 text-navy font-semibold text-sm outline-none transition-all"
                />
              </div>

              {/* Image Upload Field */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy/60">
                  Student Image (Cloudinary) *
                </label>
                <div className="group relative flex min-h-52 flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border-2 border-dashed border-navy/10 bg-navy/5 p-6 text-center transition-colors hover:border-blue/40">
                  {formData.image && !uploading && (
                    <>
                      <img
                        src={formData.image}
                        alt="Selected student preview"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-navy/55"></div>
                    </>
                  )}
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform ${uploading ? 'bg-gold' : 'bg-blue group-hover:scale-110'}`}>
                    {uploading ? (
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <UploadCloud className="text-white" size={28} />
                    )}
                  </div>
                  <div className="relative z-10">
                    <p className={`text-xs font-black uppercase tracking-widest ${formData.image && !uploading ? 'text-white' : 'text-navy'}`}>
                      {uploading ? 'Uploading to Cloudinary...' : formData.image ? 'Image Uploaded' : 'Upload Student Photo'}
                    </p>
                    <p className={`mt-1 text-[10px] font-bold uppercase tracking-widest ${formData.image && !uploading ? 'text-white/70' : 'text-navy/35'}`}>
                      PNG, JPG, HEIC up to 10MB
                    </p>
                    {formData.image && !uploading && (
                      <p className="mt-2 text-xs font-bold text-gold">Click to change / replace image</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="sticky bottom-0 -mx-5 flex gap-3 border-t border-navy/10 bg-white/95 px-5 pt-4 pb-1 backdrop-blur sm:-mx-6 sm:px-6">
                <button 
                  type="button" 
                  onClick={closeModal}
                  disabled={submitting}
                  className="flex-1 rounded-xl bg-navy/5 py-4 text-xs font-black uppercase tracking-[0.18em] text-navy/45 transition-all hover:bg-navy/10 hover:text-navy disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={submitting || uploading || !formData.image || !formData.class || !formData.highlight}
                  className="flex-1 rounded-xl bg-blue py-4 text-xs font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{editingStudent ? 'Updating...' : 'Creating...'}</span>
                    </>
                  ) : (
                    <span>{editingStudent ? 'Update Student' : 'Create Student'}</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-xl animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-[2rem] w-full max-w-md shadow-2xl relative overflow-hidden border border-white/20 p-10 space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 size={32} />
              </div>
              <h2 className="font-heading text-2xl font-black text-navy mb-2">Delete Student?</h2>
              <p className="text-navy/60 text-sm">
                Are you sure you want to delete this student record ({studentToDelete?.class})? The photo will also be deleted from Cloudinary.
              </p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => setIsDeleteModalOpen(false)}
                disabled={deleting}
                className="flex-grow py-4 bg-navy/5 rounded-xl font-black text-xs uppercase tracking-[0.2em] text-navy/40 hover:bg-navy/10 hover:text-navy transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete}
                disabled={deleting}
                className="flex-grow py-4 bg-red-500 text-white rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-red-500/20 hover:bg-red-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {deleting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Deleting...</span>
                  </>
                ) : (
                  <span>Delete</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
