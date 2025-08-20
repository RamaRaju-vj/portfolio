import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`sticky bottom-0 w-full py-4 px-4 shadow-lg transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gray-900 text-white border-t border-gray-700' 
        : 'bg-white text-gray-800 border-t border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright Section */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium">
              © {currentYear} <span className="font-bold text-blue-600 dark:text-blue-400">RamaRaju VJ</span>. All rights reserved.
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
                className={`ml-1 font-semibold hover:underline transition-all duration-200 ${
                  theme === 'dark' 
                    ? 'text-blue-400 hover:text-blue-300' 
                    : 'text-blue-700 hover:text-blue-800'
                }`}
              >
                DevOps Documentation
              </a>
            </p>
            <p className="text-xs opacity-75">
              Learn Kubernetes, Docker, Terraform, CI/CD & more!
            </p>
          </div>
        </div>
        
        {/* Mobile Responsive Layout */}
        <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-600 sm:hidden">
          <div className="text-center space-y-2">
            <p className="text-sm font-medium">
              © {currentYear} <span className="font-bold text-blue-600 dark:text-blue-400">RamaRaju VJ</span>
            </p>
            <p className="text-xs opacity-75">
              📚 Visit my{' '}
              <a 
                href="https://docs.ramaraju-vj.engineer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`font-semibold hover:underline ${
                  theme === 'dark' 
                    ? 'text-blue-400 hover:text-blue-300' 
                    : 'text-blue-600 hover:text-blue-700'
                }`}
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
