'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90" />
        <div className="absolute inset-0 bg-[url('/images/cyber-bg.jpg')] bg-cover bg-center mix-blend-overlay" />
      </div>

      {/* Animated particles or grid background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              <span className="block">Secure Your Digital Assets</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                with Professional Penetration Testing
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-3xl mx-auto text-xl text-blue-100"
          >
            Comprehensive security assessment services to protect your business from cyber threats.
            Our expert team helps identify vulnerabilities before attackers do.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Get Free Consultation
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-blue-500 bg-opacity-20 hover:bg-opacity-30 transform hover:scale-105 transition-all duration-200 backdrop-blur-sm"
            >
              View Services
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            <div className="flex flex-col items-center">
              <div className="text-white text-4xl font-bold">500+</div>
              <div className="mt-2 text-blue-200">Security Audits</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-white text-4xl font-bold">99%</div>
              <div className="mt-2 text-blue-200">Success Rate</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-white text-4xl font-bold">24/7</div>
              <div className="mt-2 text-blue-200">Support</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-white text-4xl font-bold">15+</div>
              <div className="mt-2 text-blue-200">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-blue-200 text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-6 h-10 border-2 border-blue-200 rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-2 bg-blue-200 rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 