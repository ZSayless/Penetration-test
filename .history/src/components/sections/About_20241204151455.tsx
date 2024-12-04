'use client';

import { motion } from 'framer-motion';
import { 
  UserGroupIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  DocumentCheckIcon 
} from '@heroicons/react/24/outline';

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Team Members" },
  { number: "100%", label: "Client Satisfaction" }
];

const features = [
  {
    icon: UserGroupIcon,
    text: "Expert team of certified security professionals"
  },
  {
    icon: DocumentCheckIcon,
    text: "Comprehensive reporting with actionable recommendations"
  },
  {
    icon: ShieldCheckIcon,
    text: "Industry-leading tools and methodologies"
  },
  {
    icon: ClockIcon,
    text: "24/7 support and consultation"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">About Us</h2>
              <h3 className="mt-2 text-4xl font-bold text-gray-900">Expert Security Team</h3>
            </div>
            
            <p className="text-lg text-gray-600">
              With over a decade of experience in cybersecurity, our team of certified security professionals 
              is dedicated to protecting your digital assets through comprehensive penetration testing and 
              security assessments.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-gray-600">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 p-1"
          >
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
            <div className="relative h-full w-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 flex flex-col justify-center">
              <div className="space-y-6 text-white">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-blue-100">
                  We are committed to providing top-tier cybersecurity services that help organizations 
                  identify and address security vulnerabilities before they can be exploited by malicious actors.
                </p>
                <div className="pt-4">
                  <h4 className="text-xl font-semibold mb-4">Our Core Values</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-300">→</span>
                      <span>Excellence in Security Testing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-300">→</span>
                      <span>Client Data Protection</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-300">→</span>
                      <span>Continuous Innovation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-300">→</span>
                      <span>Professional Integrity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 