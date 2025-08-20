import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 px-4 bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright Section */}
          <div className="text-center md:text-left">
            <p className="text-sm font-medium">
              © {currentYear} <span className="font-bold text-blue-400">RamaRaju VJ</span>. All rights reserved.
            </p>
          </div>
          
          {/* DevOps Documentation Link */}
          <div className="text-center md:text-right">
            <a 
              href="https://docs.ramaraju-vj.engineer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              📚 Check out my DevOps Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
