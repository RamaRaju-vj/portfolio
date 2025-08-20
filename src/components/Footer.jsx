import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  
  const currentYear = new Date().getFullYear();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show footer when user is near the bottom (within 100px)
      if (scrollTop + windowHeight >= documentHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <footer className={`fixed bottom-0 left-0 right-0 w-full py-4 px-4 border-t transition-all duration-500 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    } ${
      theme === 'dark' 
        ? 'bg-pink-600 text-white border-pink-500' 
        : 'bg-pink-500 text-white border-pink-400'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright Section */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium">
              © {currentYear} <span className="font-bold text-pink-200">RamaRaju VJ</span>. All rights reserved.
            </p>
          </div>
          
          {/* DevOps Docs Link Section */}
          <div className="text-center sm:text-right">
            <p className="text-sm mb-2">
              📚 Check out my 
              <a 
                href="https://docs.ramaraju-vj.engineer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 font-semibold text-pink-200 hover:text-white hover:underline transition-all duration-200"
              >
                DevOps Documentation
              </a>
            </p>
            <p className="text-xs opacity-90">
              Learn Kubernetes, Docker, Terraform, CI/CD & more!
            </p>
          </div>
        </div>
        
        {/* Mobile Responsive Layout */}
        <div className={`mt-4 pt-4 border-t sm:hidden ${
          theme === 'dark' ? 'border-pink-500' : 'border-pink-400'
        }`}>
          <div className="text-center space-y-2">
            <p className="text-sm font-medium">
              © {currentYear} <span className="font-bold text-pink-200">RamaRaju VJ</span>
            </p>
            <p className="text-xs opacity-90">
              📚 Visit my{' '}
              <a 
                href="https://docs.ramaraju-vj.engineer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-pink-200 hover:text-white hover:underline"
              >
                DevOps Docs
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
