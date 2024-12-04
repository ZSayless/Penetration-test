'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const processes = [
  {
    id: "01",
    title: "Initial Analysis",
    description: "Understanding system architecture and identifying potential vulnerabilities. We work with clients to define testing scope and objectives.",
    image: "/images/process/analysis.svg"
  },
  {
    id: "02",
    title: "Scanning",
    description: "Using advanced tools and techniques to detect system vulnerabilities, including network port scanning, service version checks, and known vulnerability assessments.",
    image: "/images/process/scanning.svg"
  },
  {
    id: "03",
    title: "Penetration Testing",
    description: "Attacking discovered vulnerabilities from a hacker's perspective. We evaluate actual security levels and assess potential damage scope.",
    image: "/images/process/testing.svg"
  },
  {
    id: "04",
    title: "Report Generation",
    description: "Analyzing test results to create comprehensive reports. We document found vulnerabilities, potential risks, and provide specific remediation steps.",
    image: "/images/process/report.svg"
  },
  {
    id: "05",
    title: "Re-Testing",
    description: "Performing follow-up tests to verify that security measures have been properly implemented. We validate fixes and suggest additional measures if needed.",
    image: "/images/process/retest.svg"
  }
];

export default function Process() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl font-semibold text-blue-600">Our Process</h2>
          <h3 className="mt-2 text-4xl font-bold text-gray-900">Penetration Testing Process</h3>
          <p className="mt-4 text-xl text-gray-600">
            Strengthen your security with Pensecure labs' systematic approach
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={process.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-blue-600 rounded-2xl transform -rotate-6 transition-transform duration-300 group-hover:rotate-0">
                      <div className="w-full h-full flex items-center justify-center transform rotate-6 transition-transform duration-300 group-hover:rotate-0">
                        <Image
                          src={process.image}
                          alt={process.title}
                          width={40}
                          height={40}
                          className="text-white"
                        />
                      </div>
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">{process.id}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 