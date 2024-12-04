'use client';

import { motion } from 'framer-motion';
import { 
  GlobeAltIcon, 
  ServerIcon, 
  DevicePhoneMobileIcon, 
  CloudIcon 
} from '@heroicons/react/24/outline';

const services = [
  {
    title: "Web Application Testing",
    description: "Comprehensive security assessment of web applications to identify vulnerabilities and security flaws.",
    icon: GlobeAltIcon,
    gradient: "from-purple-600 to-blue-600"
  },
  {
    title: "Network Security Testing",
    description: "In-depth analysis of network infrastructure to detect potential security weaknesses and vulnerabilities.",
    icon: ServerIcon,
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    title: "Mobile App Security",
    description: "Thorough security testing of mobile applications across different platforms and operating systems.",
    icon: DevicePhoneMobileIcon,
    gradient: "from-cyan-600 to-teal-600"
  },
  {
    title: "Cloud Security Assessment",
    description: "Evaluation of cloud infrastructure and services to ensure secure configuration and data protection.",
    icon: CloudIcon,
    gradient: "from-teal-600 to-green-600"
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-semibold text-blue-600">Our Services</h2>
          <h3 className="mt-2 text-4xl font-bold text-gray-900">Comprehensive Security Solutions</h3>
          <p className="mt-4 text-xl text-gray-600">
            Professional penetration testing services to protect your digital assets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`relative h-64 w-full bg-gradient-to-r ${service.gradient}`}>
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon className="h-24 w-24 text-white/80" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 p-6 text-white">
                <h4 className="text-2xl font-bold mb-2">{service.title}</h4>
                <p className="text-gray-200">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 