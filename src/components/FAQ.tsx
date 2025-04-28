import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How accurate is the AI diagnostic assistance?',
    answer: 'Our AI diagnostic system has demonstrated over 92% accuracy in clinical trials when comparing its suggestions to final diagnoses from medical professionals. However, GoGetWell.ai is designed as a support tool for healthcare professionals, not a replacement for medical expertise. All AI suggestions should be reviewed by qualified medical personnel.'
  },
  {
    question: 'Is patient data secure on your platform?',
    answer: 'Yes, security is our top priority. GoGetWell.ai is fully HIPAA compliant with end-to-end encryption for all data. We employ multiple layers of security including data encryption at rest and in transit, strict access controls, regular security audits, and continuous monitoring for potential threats.'
  },
  {
    question: 'Can GoGetWell.ai integrate with our existing EHR system?',
    answer: 'Yes, GoGetWell.ai is designed to integrate seamlessly with most major Electronic Health Record (EHR) systems. We provide APIs and pre-built integrations for systems like Epic, Cerner, Allscripts, and many others. Our team can also develop custom integrations for specialized systems.'
  },
  {
    question: 'How long does implementation take?',
    answer: 'The typical implementation timeline ranges from 2-6 weeks, depending on the complexity of your existing systems and integration requirements. Our Professional and Enterprise plans include dedicated implementation specialists who work with your team to ensure a smooth transition.'
  },
  {
    question: 'Do you offer training for our staff?',
    answer: 'Yes, all plans include comprehensive training resources including documentation, video tutorials, and webinars. Professional and Enterprise plans also include personalized training sessions conducted by our healthcare IT specialists. We ensure your team is comfortable and proficient with the platform before full deployment.'
  },
  {
    question: 'What types of healthcare providers can benefit from GoGetWell.ai?',
    answer: 'GoGetWell.ai is designed to benefit a wide range of healthcare providers including primary care practices, specialist clinics, hospitals, urgent care centers, telehealth providers, and research institutions. Our platform is customizable to address the specific needs of different medical specialties and practice sizes.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about GoGetWell.ai and how it can 
            benefit your healthcare practice.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="rounded-xl bg-white shadow-sm divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6">
                <button
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="ml-6 flex-shrink-0 text-gray-500">
                    {openIndex === index ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="mt-4 text-gray-600 prose-sm">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700">
            Still have questions? 
            <a href="#" className="text-primary font-medium ml-2 hover:underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;