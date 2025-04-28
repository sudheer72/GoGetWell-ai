import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

interface NavbarProps {
  onLoginClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" onClick={() => window.location.reload()}>
            <Zap size={28} className="text-primary" />
            <span className="text-xl font-bold text-gray-900">GoGetWell.ai</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              FAQ
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button 
              onClick={onLoginClick}
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              Login
            </button>
            <a href="#pricing" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#testimonials" 
                className="text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#pricing" 
                className="text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#faq" 
                className="text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              <div className="pt-4 flex flex-col space-y-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onLoginClick();
                  }}
                  className="text-base font-medium text-gray-700 hover:text-primary"
                >
                  Login
                </button>
                <a href="#pricing" className="btn-primary w-full text-center">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;