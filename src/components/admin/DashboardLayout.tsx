'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { tokenStorage } from '@/lib/api';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Image as ImageIcon,
  LogOut,
  User,
  Menu,
  X,
  School,
  Mail,
  GraduationCap
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: 'gallery' | 'messages' | 'students';
  setActiveTab: (tab: 'gallery' | 'messages' | 'students') => void;
}

export default function DashboardLayout({
  children,
  activeTab,
  setActiveTab,
}: DashboardLayoutProps) {
  const { user, logout, isLoading } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const router = useRouter();

  React.useEffect(() => {
    if (!isLoading && !user && !tokenStorage.getTokens()) {
      router.push('/login');
    }
  }, [isLoading, user, router]);

  // Loading
  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Not authenticated
  if (!user && !tokenStorage.getTokens()) {
    return null;
  }

  const handleTabChange = (tab: 'gallery' | 'messages' | 'students') => {
    if (setActiveTab) {
      setActiveTab(tab);
    }
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col lg:flex-row relative">

      {/* ================= MOBILE & TABLET TOP HEADER BAR ================= */}
      <header className="lg:hidden sticky top-0 z-[60] bg-navy text-cream px-4 py-3 flex items-center justify-between shadow-md border-b border-white/10">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="bg-gradient-to-br from-gold to-amber p-1.5 rounded-full text-navy">
            <School size={18} />
          </div>
          <span className="font-heading text-base font-bold text-cream">
            Admin Portal
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-gold/15 text-gold border border-gold/30">
            {activeTab === 'students' ? 'Students' : activeTab === 'gallery' ? 'Gallery' : 'Messages'}
          </span>
          <button
            type="button"
            className="bg-white/10 hover:bg-white/20 text-gold p-2 rounded-xl transition-colors"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 sm:w-80 lg:w-64 bg-navy transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 flex flex-col justify-between ${
          isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col p-6 overflow-y-auto">

          {/* ================= SIDEBAR HEADER LOGO ================= */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-2.5 group"
            >
              <div className="bg-gradient-to-br from-gold to-amber p-2 rounded-full text-navy group-hover:scale-105 transition-transform shrink-0">
                <School size={20} />
              </div>
              <span className="font-heading text-lg font-bold text-cream tracking-tight">
                Admin Portal
              </span>
            </Link>

            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-cream/40 hover:text-cream p-1 rounded-lg"
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>

          {/* ================= NAVIGATION ================= */}
          <div className="flex-grow space-y-2">

            {/* STUDENTS */}
            <button
              type="button"
              onClick={() => handleTabChange('students')}
              className={`w-full p-3.5 rounded-xl flex items-center gap-3 transition-all ${
                activeTab === 'students'
                  ? 'bg-gold/15 text-gold font-bold shadow-sm border border-gold/20'
                  : 'text-cream/60 hover:bg-white/5 hover:text-cream'
              }`}
            >
              <GraduationCap size={20} />
              <span className="font-bold text-sm">Our Students</span>
            </button>

            {/* GALLERY */}
            <button
              type="button"
              onClick={() => handleTabChange('gallery')}
              className={`w-full p-3.5 rounded-xl flex items-center gap-3 transition-all ${
                activeTab === 'gallery'
                  ? 'bg-gold/15 text-gold font-bold shadow-sm border border-gold/20'
                  : 'text-cream/60 hover:bg-white/5 hover:text-cream'
              }`}
            >
              <ImageIcon size={20} />
              <span className="font-bold text-sm">Gallery Manager</span>
            </button>

            {/* MESSAGES */}
            <button
              type="button"
              onClick={() => handleTabChange('messages')}
              className={`w-full p-3.5 rounded-xl flex items-center gap-3 transition-all ${
                activeTab === 'messages'
                  ? 'bg-gold/15 text-gold font-bold shadow-sm border border-gold/20'
                  : 'text-cream/60 hover:bg-white/5 hover:text-cream'
              }`}
            >
              <Mail size={20} />
              <span className="font-bold text-sm">Messages</span>
            </button>

            <div className="pt-4 mt-4 border-t border-white/10">
              <Link
                href="/"
                onClick={() => setIsSidebarOpen(false)}
                className="w-full p-3.5 rounded-xl flex items-center gap-3 transition-all text-cream/60 hover:bg-white/5 hover:text-cream"
              >
                <School size={20} />
                <span className="font-bold text-sm">Go to Website</span>
              </Link>
            </div>

          </div>

          {/* ================= USER SECTION ================= */}
          <div className="mt-auto pt-6 border-t border-white/10">

            <div className="flex items-center gap-3 p-3 mb-4 rounded-xl bg-white/5">

              {/* USER ICON */}
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0">
                <User size={20} />
              </div>

              {/* USER INFO */}
              <div className="overflow-hidden min-w-0">
                <p className="text-xs sm:text-sm font-bold text-cream truncate" title={user?.email || 'Administrator'}>
                  {user?.email || 'Administrator'}
                </p>

                <p className="text-[10px] text-cream/40 uppercase tracking-widest font-semibold mt-0.5">
                  Administrator
                </p>
              </div>

            </div>

            {/* LOGOUT */}
            <button
              type="button"
              onClick={logout}
              className="flex items-center gap-3 w-full text-red-400 hover:bg-red-400/10 p-3 rounded-xl transition-all group text-sm font-medium"
            >
              <LogOut
                size={20}
                className="group-hover:-translate-x-1 transition-transform shrink-0"
              />
              <span>Log out</span>
            </button>

          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-grow p-4 sm:p-6 md:p-8 lg:p-10 min-h-[calc(100vh-60px)] lg:min-h-screen overflow-y-auto">
        {children}
      </main>

      {/* ================= MOBILE OVERLAY ================= */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-navy/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}