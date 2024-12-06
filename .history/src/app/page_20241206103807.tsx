'use client';

import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import WhyPentest from '@/components/sections/WhyPentest';
import FAQ from '@/components/sections/FAQ';
import Tools from '@/components/sections/Tools';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <Process />
      <WhyPentest />
      <Tools />
      <About />
      <FAQ />
      <Testimonials />
      <Contact />
    </main>
  );
}
