'use client';

import React, { useState, useEffect } from 'react';
import { apiAuth } from '@/lib/api';
import { Trash2, Mail, User, Clock, Inbox, Phone, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

interface Message {
  _id: string;
  name: string;
  email?: string;
  phone: string;
  message: string;
  createdAt: string;
}

export default function MessageManager() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Custom Delete Modal State
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState<Message | null>(null);
  const [deleting, setDeleting] = useState(false);

  // Pagination state (20 per page)
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalMessages, setTotalMessages] = useState(0);
  const limit = 20;

  useEffect(() => {
    fetchMessages(page);
  }, [page]);

  const fetchMessages = async (currentPage: number) => {
    setLoading(true);
    try {
      const { data } = await apiAuth.get(`/api/messages?page=${currentPage}&limit=${limit}`);
      setMessages(data.data || []);
      if (data.pagination) {
        setTotalPages(data.pagination.totalPages || 1);
        setTotalMessages(data.pagination.total || 0);
      }
    } catch (error) {
      console.error('Failed to fetch messages', error);
    } finally {
      setLoading(false);
    }
  };

  const openDeleteModal = (msg: Message) => {
    setMessageToDelete(msg);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!messageToDelete) return;
    setDeleting(true);
    try {
      await apiAuth.delete(`/api/messages/${messageToDelete._id}`);
      setMessages(prev => prev.filter(msg => msg._id !== messageToDelete._id));
      setTotalMessages(prev => Math.max(0, prev - 1));
      setIsDeleteModalOpen(false);
      setMessageToDelete(null);
      
      // Re-fetch if current page becomes empty
      if (messages.length === 1 && page > 1) {
        setPage(prev => prev - 1);
      }
    } catch (error) {
      console.error('Delete error', error);
      alert('Failed to delete message');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-10 animate-[fadeUp_0.4s_ease-out]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-navy tracking-tight">
              Contact Messages
            </h1>
            <span className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest bg-gold/15 text-gold border border-gold/30">
              {totalMessages} Messages Total
            </span>
          </div>
          <p className="text-navy/60 text-xs sm:text-sm font-medium tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse shrink-0"></span>
            View and manage inquiry messages (20 per page limit)
          </p>
        </div>
      </div>

      {/* Grid of Compact Cards */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-60 sm:h-64 rounded-3xl bg-navy/5 animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {messages.map((msg) => (
              <div 
                key={msg._id} 
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-navy/5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Header Info & Delete Button */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-blue/10 text-blue flex items-center justify-center font-bold shrink-0">
                        <User size={18} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-navy text-sm sm:text-base truncate" title={msg.name}>
                          {msg.name}
                        </h3>
                        <p className="text-[10px] sm:text-[11px] text-navy/50 font-semibold flex items-center gap-1 mt-0.5">
                          <Clock size={12} /> {new Date(msg.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                      </div>
                    </div>

                    <button 
                      onClick={() => openDeleteModal(msg)}
                      className="p-2 sm:p-2.5 rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors shrink-0 active:scale-95"
                      title="Delete message"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  {/* Contact Badges */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs">
                    <a 
                      href={`tel:${msg.phone}`}
                      className="px-2.5 py-1.5 rounded-xl bg-navy/5 text-navy/70 font-semibold flex items-center gap-1.5 hover:bg-blue/10 hover:text-blue transition-colors text-xs max-w-full truncate"
                    >
                      <Phone size={13} className="text-blue shrink-0" />
                      <span className="truncate">{msg.phone}</span>
                    </a>

                    {msg.email && (
                      <a 
                        href={`mailto:${msg.email}`}
                        className="px-2.5 py-1.5 rounded-xl bg-navy/5 text-navy/70 font-semibold flex items-center gap-1.5 hover:bg-blue/10 hover:text-blue transition-colors text-xs max-w-full sm:max-w-[200px] truncate"
                        title={msg.email}
                      >
                        <Mail size={13} className="text-gold shrink-0" />
                        <span className="truncate">{msg.email}</span>
                      </a>
                    )}
                  </div>

                  {/* Message Content Bubble */}
                  <div className="mt-3 sm:mt-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-cream/50 border border-navy/5 text-navy/80 text-xs leading-relaxed max-h-40 overflow-y-auto whitespace-pre-wrap">
                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-navy/40 mb-1.5">
                      <MessageSquare size={12} />
                      <span>Inquiry Message</span>
                    </div>
                    {msg.message}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {messages.length === 0 && (
            <div className="py-20 sm:py-28 text-center border-2 sm:border-4 border-dashed border-navy/10 rounded-2xl sm:rounded-[3rem] px-4">
              <Inbox size={56} className="mx-auto text-navy/15 mb-4 sm:mb-6" />
              <p className="text-navy/40 text-base sm:text-xl font-bold italic tracking-wide">No contact messages received yet.</p>
            </div>
          )}

          {/* Pagination Controls (20 per page) */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-navy/10">
              <p className="text-xs font-bold uppercase tracking-widest text-navy/50 text-center sm:text-left">
                Page {page} of {totalPages} ({totalMessages} Total Messages)
              </p>

              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1 || loading}
                  className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-navy/10 bg-white font-bold text-xs text-navy hover:bg-navy/5 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 transition-all"
                >
                  <ChevronLeft size={16} />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-1 overflow-x-auto max-w-[160px] sm:max-w-none">
                  {[...Array(totalPages)].map((_, index) => {
                    const pNum = index + 1;
                    return (
                      <button
                        key={pNum}
                        onClick={() => setPage(pNum)}
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl font-bold text-xs transition-all shrink-0 ${
                          page === pNum
                            ? 'bg-navy text-gold shadow-md'
                            : 'bg-white border border-navy/10 text-navy hover:bg-navy/5'
                        }`}
                      >
                        {pNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages || loading}
                  className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-navy/10 bg-white font-bold text-xs text-navy hover:bg-navy/5 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 transition-all"
                >
                  <span>Next</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Custom Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-xl animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-[2rem] w-full max-w-md shadow-2xl relative overflow-hidden border border-white/20 p-8 sm:p-10 space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 size={32} />
              </div>
              <h2 className="font-heading text-2xl font-black text-navy mb-2">Delete Message?</h2>
              <p className="text-navy/60 text-sm">
                Are you sure you want to delete this message from <span className="font-bold text-navy">{messageToDelete?.name}</span>? This action cannot be undone.
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
