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
    ],
    gradient: "from-purple-600 to-blue-600"
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
    ],
    gradient: "from-blue-600 to-cyan-600"
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
    ],
    gradient: "from-cyan-600 to-teal-600"
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
    ],
    gradient: "from-teal-600 to-green-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className={`p-6 bg-gradient-to-r ${service.gradient}`}>
                <h4 className="text-2xl font-bold text-white mb-2">{service.title}</h4>
                <p className="text-white/90">{service.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                      className="flex items-center space-x-3 text-gray-600"
                    >
                      <CheckIcon className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
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