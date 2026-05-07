import type { Metadata } from 'next';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import Navbar from '@/components/outlet/navbar/navbar';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'GNO Project School - Puri',
  description: 'Usthi Foundation India, Puri School',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="antialiased min-h-screen bg-cream text-navy flex flex-col font-sans">
        <Navbar />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
