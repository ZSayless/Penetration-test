'use client';

import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Features />
      <Testimonials />
      <Contact />
    </main>
  );
}
