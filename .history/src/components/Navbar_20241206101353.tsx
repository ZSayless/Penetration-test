'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-600">SP</span>
          <span className="text-xl">SecureTest Pro</span>
        </div>
        
        <nav>
          <ul className="flex gap-6">
            <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link></li>
            <li><Link href="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 