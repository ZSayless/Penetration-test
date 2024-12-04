import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import './globals.css';
import Navigation from '@/components/Navigation';

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
      <body>
        <Navigation />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
