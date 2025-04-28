import React from 'react';
import { 
  Brain, 
  Shield, 
  Clock, 
  LineChart, 
  Users, 
  FileText 
} from 'lucide-react';

const features = [
  {
    icon: <Brain size={24} className="text-primary" />,
    title: 'AI-Powered Diagnostics',
    description: 'Leverage advanced machine learning algorithms to assist in analyzing patient symptoms and medical data for more accurate diagnoses.',
  },
  {
    icon: <Shield size={24} className="text-primary" />,
    title: 'HIPAA Compliant Security',
    description: 'Enterprise-grade security with end-to-end encryption ensures all patient data remains confidential and compliant with healthcare regulations.',
  },
  {
    icon: <Clock size={24} className="text-primary" />,
    title: 'Time-Saving Automation',
    description: 'Automate routine administrative tasks so healthcare professionals can focus more time on patient care and less on paperwork.',
  },
  {
    icon: <LineChart size={24} className="text-primary" />,
    title: 'Predictive Analytics',
    description: 'Identify trends and patterns in patient data to predict potential health issues before they become serious problems.',
  },
  {
    icon: <Users size={24} className="text-primary" />,
    title: 'Collaborative Care',
    description: 'Enable seamless collaboration between healthcare providers, specialists, and patients for better coordinated care.',
  },
  {
    icon: <FileText size={24} className="text-primary" />,
    title: 'Smart Documentation',
    description: 'Automatically generate and organize clinical notes, prescriptions, and patient records with AI assistance.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="section bg-gray-50">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Powerful Features for Modern Healthcare
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            GoGetWell.ai provides a comprehensive suite of AI-powered tools designed 
            specifically for healthcare professionals to improve patient outcomes.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card group hover:border-primary hover:border-opacity-50 hover:translate-y-[-4px]"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-dark/10 group-hover:bg-primary/20 transition-colors mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;