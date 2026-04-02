import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/outlet/navbar/navbar';
import Footer from '@/components/outlet/footer/foooter';

export const metadata: Metadata = {
  title: 'Your App',
  description: 'Your description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body
        // className={`${syne.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        {/* <Preloader /> */}
        <Navbar />

        <main className="flex-1">
          {children}
          {/* <ScrollToTop /> */}
          {/* <FloatingWhatsApp /> */}
        </main>

        <Footer />
      </body>
      </html>
  );
}
