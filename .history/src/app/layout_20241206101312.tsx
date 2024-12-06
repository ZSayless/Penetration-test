import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';

export const metadata: Metadata = {
  title: 'SecureTest Pro - Professional Penetration Testing Services',
  description: 'Comprehensive security assessment services to protect your business from cyber threats.',
};

function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">SP</span>
        <span className="text-xl">SecureTest Pro</span>
      </div>
      
      <nav>
        <ul className="flex gap-6">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
