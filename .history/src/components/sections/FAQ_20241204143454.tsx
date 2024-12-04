'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "What is Penetration Testing?",
    answer: "Penetration Testing is a controlled cybersecurity assessment that simulates real-world attacks to identify vulnerabilities in your systems, networks, and applications before malicious hackers can exploit them."
  },
  {
    question: "How often should we conduct Penetration Testing?",
    answer: "We recommend conducting penetration tests at least annually, or after significant infrastructure changes, new system deployments, or major application updates. Regular testing ensures continuous security assessment."
  },
  {
    question: "What types of Penetration Testing do you offer?",
    answer: "We offer comprehensive penetration testing services including Network Penetration Testing, Web Application Testing, Mobile App Security Testing, Cloud Security Assessment, and Social Engineering Testing."
  },
  {
    question: "How long does a Penetration Test take?",
    answer: "The duration varies depending on the scope and complexity of the systems being tested. Typically, a standard penetration test can take 1-3 weeks, including planning, testing, and reporting phases."
  },
  {
    question: "What deliverables can we expect?",
    answer: "You'll receive a detailed report including an executive summary, technical findings, risk ratings, proof-of-concept demonstrations, and specific remediation recommendations. We also provide post-test consultation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-semibold text-blue-600">FAQ</h2>
          <h3 className="mt-2 text-4xl font-bold text-gray-900">Frequently Asked Questions</h3>
          <p className="mt-4 text-xl text-gray-600">
            Common questions about our penetration testing services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6 bg-gray-50 rounded-b-lg"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 