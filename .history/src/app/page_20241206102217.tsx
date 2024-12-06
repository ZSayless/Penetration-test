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
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:40px_40px]"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Secure Your Digital Assets
            <span className="block mt-4 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              with Professional Penetration Testing
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 mb-12">
            Safeguard your enterprise with industry-leading security assessments. 
            Our elite team of cybersecurity experts identifies vulnerabilities 
            before malicious actors can exploit them.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200">Security Audits Completed</div>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-blue-200">Client Satisfaction Rate</div>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200">Security Monitoring</div>
            </div>
          </div>
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
