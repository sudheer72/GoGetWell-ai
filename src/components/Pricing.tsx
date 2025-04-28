import React from 'react';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    description: 'For small healthcare practices',
    price: '$99',
    period: 'per month',
    features: [
      'AI diagnostic assistance',
      'Basic patient management',
      'HIPAA compliant storage',
      'Email support',
      '5 user accounts',
    ],
    notIncluded: [
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
    ],
    buttonText: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'For growing medical clinics',
    price: '$249',
    period: 'per month',
    features: [
      'Everything in Basic',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'Unlimited user accounts',
      'API access',
    ],
    notIncluded: [
      'Enterprise SSO',
    ],
    buttonText: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For hospitals and large organizations',
    price: 'Custom',
    period: 'pricing',
    features: [
      'Everything in Professional',
      'Enterprise SSO',
      'Dedicated account manager',
      'Custom AI model training',
      'On-premise deployment option',
      'SLA guarantees',
    ],
    notIncluded: [],
    buttonText: 'Contact Sales',
    highlighted: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="section">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for your healthcare practice. 
            All plans include our core AI technology.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${
                plan.highlighted 
                  ? 'pricing-card-featured' 
                  : 'pricing-card'
              } relative`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 inset-x-0 -translate-y-1/2">
                  <div className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full inline-block shadow-sm">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{' '}{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="text-success flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                  
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-400">
                      <X size={18} className="flex-shrink-0 mt-0.5" />
                      <span className="ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto p-6 pt-0">
                <a 
                  href="#" 
                  className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                    plan.highlighted 
                      ? 'bg-primary hover:bg-primary-dark text-white' 
                      : 'bg-white border border-gray-300 hover:border-primary hover:text-primary text-gray-700'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need a custom solution? <a href="#" className="text-primary font-medium hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;