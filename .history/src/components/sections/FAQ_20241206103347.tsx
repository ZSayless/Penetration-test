'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "What is Penetration Testing?",
    answer: "Penetration Testing is a systematic process of probing for vulnerabilities in your applications and networks. It's essentially a controlled form of security testing where we attempt to breach your systems to identify potential security gaps."
  },
  {
    question: "How often should we conduct Penetration Testing?",
    answer: "We recommend conducting penetration tests at least annually, or after any major infrastructure or application changes. Regular testing helps ensure continuous security posture."
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

  const answerVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-xl text-gray-600">
              Common questions about our penetration testing services
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          </div>
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
                className="w-full flex justify-between items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDownIcon className="w-5 h-5 text-blue-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-50 rounded-b-lg">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 