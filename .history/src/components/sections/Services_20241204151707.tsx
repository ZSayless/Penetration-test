'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: "Web Application Penetration Testing",
    description: "Comprehensive security assessment of web applications including OWASP Top 10 vulnerabilities, custom business logic testing, and API security testing.",
    features: [
      "OWASP Top 10 vulnerability assessment",
      "Business logic testing",
      "API security testing",
      "Authentication and authorization testing",
      "Session management testing"
    ]
  },
  {
    title: "Network Penetration Testing",
    description: "In-depth evaluation of network infrastructure security including internal and external network testing, wireless security assessment.",
    features: [
      "External network testing",
      "Internal network assessment",
      "Wireless network security",
      "Network device configuration review",
      "Vulnerability scanning and analysis"
    ]
  },
  {
    title: "Mobile Application Security",
    description: "Complete security assessment of mobile applications across iOS and Android platforms.",
    features: [
      "Static and dynamic analysis",
      "Data storage security testing",
      "Network communication testing",
      "Authentication mechanism review",
      "Platform-specific security checks"
    ]
  },
  {
    title: "Cloud Security Assessment",
    description: "Comprehensive evaluation of cloud infrastructure and services security.",
    features: [
      "Cloud configuration review",
      "Access control assessment",
      "Data protection evaluation",
      "Compliance verification",
      "Security monitoring review"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Professional Security Solutions
          </h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-xl text-gray-600">
              Comprehensive security assessment services to protect your business from cyber threats
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 