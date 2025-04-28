import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="section bg-gradient-to-r from-primary/90 to-secondary/90 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      <div className="absolute -bottom-24 -left-24 h-64 w-64 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute -top-24 -right-24 h-48 w-48 bg-white/10 rounded-full blur-2xl"></div>
      
      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Healthcare Practice?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of healthcare professionals already using GoGetWell.ai to improve patient outcomes and streamline their practice.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <CheckCircle2 size={20} />, text: "30-day free trial" },
              { icon: <CheckCircle2 size={20} />, text: "No credit card required" },
              { icon: <CheckCircle2 size={20} />, text: "Full access to all features" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center">
                <span className="flex items-center text-white">
                  {item.icon}
                  <span className="ml-2 font-medium">{item.text}</span>
                </span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="btn bg-white text-primary hover:bg-gray-100 transition-colors"
            >
              Start Your Free Trial
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="#" 
              className="btn bg-transparent border border-white text-white hover:bg-white/10 transition-colors"
            >
              Schedule a Demo
            </a>
          </div>
          
          <p className="mt-8 text-sm text-white/80">
            Have questions? <a href="#" className="underline hover:text-white">Contact our team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;