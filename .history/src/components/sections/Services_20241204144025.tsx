'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: "Web Application Testing",
    description: "Comprehensive security assessment of web applications to identify vulnerabilities and security flaws.",
    image: "/images/services/web-app.jpg"
  },
  {
    title: "Network Security Testing",
    description: "In-depth analysis of network infrastructure to detect potential security weaknesses and vulnerabilities.",
    image: "/images/services/network.jpg"
  },
  {
    title: "Mobile App Security",
    description: "Thorough security testing of mobile applications across different platforms and operating systems.",
    image: "/images/services/mobile.jpg"
  },
  {
    title: "Cloud Security Assessment",
    description: "Evaluation of cloud infrastructure and services to ensure secure configuration and data protection.",
    image: "/images/services/cloud.jpg"
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
              <div className="relative h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
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