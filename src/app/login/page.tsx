import React from 'react';
import LoginForm from '@/components/admin/LoginForm';
import Link from 'next/link';
import { School, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-navy flex flex-col justify-between sm:justify-center items-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-mesh opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-72 h-72 sm:w-96 sm:h-96 bg-blue rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
      
      <div className="w-full max-w-md pt-2 sm:pt-0 sm:absolute sm:top-8 sm:left-8 z-20 flex justify-start">
        <Link href="/" className="text-cream/70 hover:text-gold flex items-center gap-2 text-sm font-medium transition-colors py-2 px-3 rounded-xl bg-white/5 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none border border-white/10 sm:border-none shadow-sm sm:shadow-none">
          <ArrowLeft size={18} /> Back to Site
        </Link>
      </div>

      <div className="w-full max-w-md z-10 flex flex-col items-center my-auto py-6 sm:py-0">
        <Link href="/" className="flex items-center gap-2.5 mb-6 sm:mb-8 group text-center">
          <div className="bg-gradient-to-br from-gold to-amber p-2.5 rounded-full text-navy shadow-lg shrink-0 group-hover:scale-105 transition-transform">
            <School size={24} />
          </div>
          <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-cream">
            Usthi Foundation India School
          </span>
        </Link>
        
        <LoginForm />
      </div>

      <div className="text-cream/40 text-xs text-center pb-2 sm:hidden z-10">
        © Usthi Foundation India
      </div>
    </div>
  );
}
