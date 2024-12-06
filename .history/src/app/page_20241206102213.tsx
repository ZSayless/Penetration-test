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
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Secure Your Digital Assets
            <span className="block mt-4 text-blue-200">
              with Professional Penetration Testing
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Safeguard your enterprise with industry-leading security assessments. 
            Our elite team of cybersecurity experts identifies vulnerabilities 
            before malicious actors can exploit them.
          </p>
        </div>
      </section>
      <Services />
      <Process />
      <WhyPentest />
      <Tools />
      <About />
      <Features />
      <FAQ />
      <Testimonials />
      <Contact />
    </main>
  );
}
