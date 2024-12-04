'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const tools = [
  {
    name: "Acunetix",
    description: "Advanced web vulnerability scanning",
    image: "/images/tools/acunetix.png"
  },
  {
    name: "Nessus",
    description: "Comprehensive vulnerability assessment",
    image: "/images/tools/nessus.png"
  },
  {
    name: "Burp Suite",
    description: "Web application security testing",
    image: "/images/tools/burp.png"
  },
  {
    name: "Metasploit",
    description: "Penetration testing framework",
    image: "/images/tools/metasploit.png"
  },
  {
    name: "Wireshark",
    description: "Network protocol analyzer",
    image: "/images/tools/wireshark.png"
  }
];

export default function Tools() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-semibold text-blue-600">Our Arsenal</h2>
          <h3 className="mt-2 text-4xl font-bold text-gray-900">Professional Tools & Technologies</h3>
          <p className="mt-4 text-xl text-gray-600">
            We use industry-leading security tools to ensure comprehensive testing
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-24 h-24 relative mb-4">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">{tool.name}</h4>
              <p className="text-sm text-gray-600 text-center mt-2">{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 