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
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800">
          <div className="absolute inset-0 opacity-10 hidden md:block">
            <div className="absolute top-0 -left-4 w-48 h-48 md:w-72 md:h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-48 h-48 md:w-72 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-48 h-48 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px] md:bg-[length:40px_40px]"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto">
          <div className="text-center space-y-8 sm:space-y-12">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight px-4">
                Secure Your Digital Assets
                <span className="block mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  with Professional Penetration Testing
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-blue-100 px-4">
                Safeguard your enterprise with industry-leading security assessments. 
                Our elite team of cybersecurity experts identifies vulnerabilities 
                before malicious actors can exploit them.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4 sm:gap-6 max-w-lg sm:max-w-2xl lg:max-w-4xl mx-auto px-4">
              <div className="p-4 sm:p-6 rounded-lg bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-sm sm:text-base text-blue-200">Security Audits Completed</div>
              </div>
              
              <div className="p-4 sm:p-6 rounded-lg bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">99%</div>
                <div className="text-sm sm:text-base text-blue-200">Client Satisfaction Rate</div>
              </div>
              
              <div className="p-4 sm:p-6 rounded-lg bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm sm:text-base text-blue-200">Security Monitoring</div>
              </div>
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
