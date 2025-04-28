import React from 'react';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Zap size={28} className="text-primary" />
              <span className="text-xl font-bold text-white">GoGetWell.ai</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming healthcare through artificial intelligence.
              We help medical professionals deliver better patient outcomes.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={20} />, href: "#" },
                { icon: <Twitter size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Instagram size={20} />, href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={`Social media link ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { text: "Features", href: "#features" },
                { text: "How It Works", href: "#how-it-works" },
                { text: "Pricing", href: "#pricing" },
                { text: "FAQ", href: "#faq" },
                { text: "Blog", href: "#" },
                { text: "About Us", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-primary transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {[
                { text: "Documentation", href: "#" },
                { text: "Research Papers", href: "#" },
                { text: "Case Studies", href: "#" },
                { text: "API Integration", href: "#" },
                { text: "Support Center", href: "#" },
                { text: "Partnership Programs", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-primary transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {[
                { 
                  icon: <Mail size={18} className="text-primary" />, 
                  text: "contact@gogetwell.ai",
                  href: "mailto:contact@gogetwell.ai"
                },
                { 
                  icon: <Phone size={18} className="text-primary" />, 
                  text: "+1 (800) 123-4567",
                  href: "tel:+18001234567"
                },
                { 
                  icon: <MapPin size={18} className="text-primary" />, 
                  text: "123 Healthcare Ave, Medical District, CA 94103",
                  href: "#"
                }
              ].map((contact, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 mt-1">{contact.icon}</span>
                  <a 
                    href={contact.href} 
                    className="ml-3 hover:text-primary transition-colors"
                  >
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white mb-4">Subscribe to our newsletter</h4>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="p-2 bg-gray-800 text-white border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary w-full"
                />
                <button 
                  type="submit" 
                  className="bg-primary text-white px-4 rounded-r-md hover:bg-primary-dark transition-colors"
                >
                  Go
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} GoGetWell.ai. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              { text: "Terms of Service", href: "#" },
              { text: "Privacy Policy", href: "#" },
              { text: "Cookie Policy", href: "#" },
              { text: "HIPAA Compliance", href: "#" }
            ].map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-sm text-gray-500 hover:text-primary transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;