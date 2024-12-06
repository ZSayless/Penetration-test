'use client';

import { useState } from 'react';

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

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-lg font-medium text-left flex items-center justify-between"
              >
                <span>{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-blue-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 