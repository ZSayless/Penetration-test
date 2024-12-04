'use client';

import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <About />
      <Features />
      <Testimonials />
      <Contact />
    </main>
  );
}
