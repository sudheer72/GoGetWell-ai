import React from 'react';
import { ArrowRight, Upload, Brain, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Upload size={24} className="text-white" />,
    title: 'Upload Patient Data',
    description: 'Securely upload medical records, test results, and patient symptoms through our HIPAA-compliant platform.',
    color: 'bg-primary',
  },
  {
    number: '02',
    icon: <Brain size={24} className="text-white" />,
    title: 'AI Analysis',
    description: 'Our advanced AI analyzes the data, comparing it with millions of medical cases to identify patterns and potential diagnoses.',
    color: 'bg-secondary',
  },
  {
    number: '03',
    icon: <CheckCircle2 size={24} className="text-white" />,
    title: 'Review Insights',
    description: 'Get comprehensive insights and recommendations to support your medical decisions, all presented in an easy-to-understand format.',
    color: 'bg-accent',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How GoGetWell.ai Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform streamlines the diagnostic process, saving valuable time
            while enhancing accuracy through AI-powered analysis.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className={`${step.color} h-16 w-16 rounded-full flex items-center justify-center shadow-lg mb-6 z-10`}>
                  {step.icon}
                </div>
                <div className="absolute top-0 right-0 bg-gray-100 rounded-full px-2.5 py-1 text-xs font-bold text-gray-700">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight size={20} className="hidden md:block absolute -right-5 top-24 text-gray-400 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="btn-primary inline-flex items-center">
            See GoGetWell.ai in Action
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;