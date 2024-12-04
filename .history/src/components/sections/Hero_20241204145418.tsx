'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ShieldCheckIcon, ChartBarIcon, ClockIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const trustItems = [
    { 
      number: "500+", 
      text: "Security Audits",
      icon: ShieldCheckIcon
    },
    { 
      number: "99%", 
      text: "Success Rate",
      icon: ChartBarIcon
    },
    { 
      number: "24/7", 
      text: "Support",
      icon: ClockIcon
    },
    { 
      number: "15+", 
      text: "Years Experience",
      icon: AcademicCapIcon
    }
  ];

  return (
    <motion.div 
      className="relative min-h-screen flex items-center"
      style={{ opacity, scale }}
    >
      {/* Background with gradient overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90" />
        <motion.div 
          className="absolute inset-0 bg-[url('/images/cyber-bg.jpg')] bg-cover bg-center mix-blend-overlay"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>

      {/* Animated grid background */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              <motion.span 
                className="block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Secure Your Digital Assets
              </motion.span>
              <motion.span 
                className="block mt-2 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                with Professional Penetration Testing
              </motion.span>
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
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
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

          {/* Trust Indicators with enhanced animations */}
          <motion.div
            variants={containerVariants}
            className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {trustItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="mb-3"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <item.icon className="h-8 w-8 text-blue-300" />
                </motion.div>
                <motion.div 
                  className="text-white text-4xl font-bold"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {item.number}
                </motion.div>
                <div className="mt-2 text-blue-200">{item.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
        >
          <motion.span 
            className="text-blue-200 text-sm mb-2"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Scroll to explore
          </motion.span>
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
            <motion.div 
              className="w-1 h-2 bg-blue-200 rounded-full mt-2"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 