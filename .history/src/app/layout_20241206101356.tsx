import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';

export const metadata: Metadata = {
  title: 'SecureTest Pro - Professional Penetration Testing Services',
  description: 'Comprehensive security assessment services to protect your business from cyber threats.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pt-16">
        <Navbar />
        <main>
          {children}
        </main>
        <ScrollToTop />
      </body>
    </html>
  );
}
