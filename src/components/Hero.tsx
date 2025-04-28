import React from 'react';
import { ArrowRight, Brain, Shield, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-20 md:pb-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
      
      <div className="container-custom relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-sm font-medium">
              <Sparkles size={16} className="mr-2" />
              AI-Powered Healthcare Platform
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Healthcare with <span className="text-primary">AI Assistance</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              GoGetWell.ai uses artificial intelligence to streamline patient care, 
              improve diagnoses, and enhance medical decision-making—all while saving time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="btn-primary">
                Start Free Trial
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#how-it-works" className="btn-secondary">
                How It Works
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-2 rounded-lg">
                  <Brain size={20} className="text-success" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Smart Analysis</h3>
                  <p className="mt-1 text-sm text-gray-600">Advanced AI for accurate medical insights</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
                  <Shield size={20} className="text-primary" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">HIPAA Compliant</h3>
                  <p className="mt-1 text-sm text-gray-600">Secure and private data handling</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <img 
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="AI Healthcare Platform" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/80 to-white/0 p-6">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center">
                        <Sparkles size={20} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">AI Analysis Complete</h3>
                      <p className="text-sm text-gray-600">Patient diagnosis recommendation ready</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-6 -right-6 h-24 w-24 bg-secondary/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;