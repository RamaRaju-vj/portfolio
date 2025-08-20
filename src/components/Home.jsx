import React, { useEffect, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll'; 
import { FaGithub, FaLinkedin, FaCloud, FaServer, FaRocket, FaTerminal, FaCode, FaDatabase, FaNetworkWired, FaCogs } from 'react-icons/fa';
import { SiDocker, SiKubernetes, SiTerraform, SiJenkins, SiAmazonaws, SiGooglecloud, SiMicrosoftazure, SiGithubactions, SiGo, SiPython, SiAnsible, SiPacker } from 'react-icons/si';


const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div name='home' className='w-full min-h-screen bg-light-bg dark:bg-dark-bg flex items-center pt-16 sm:pt-20 transition-colors duration-300 relative overflow-hidden'>
      {/* Floating DevOps elements with parallax */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cloud Platforms */}
        <div 
          className="absolute top-20 left-10 text-orange-500 opacity-20 text-5xl animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.2}px) translateX(${scrollY * 0.1}px)` }}
          title="AWS"
        >
          <SiAmazonaws />
        </div>
        <div 
          className="absolute top-40 right-20 text-blue-500 opacity-20 text-5xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px) translateX(${-scrollY * 0.05}px)` }}
          title="GCP"
        >
          <SiGooglecloud />
        </div>
        <div 
          className="absolute top-60 left-20 text-blue-600 opacity-20 text-4xl animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.4}px) translateX(${scrollY * 0.08}px)` }}
          title="Azure"
        >
          <SiMicrosoftazure />
        </div>
        
        {/* Container & Orchestration */}
        <div 
          className="absolute top-32 right-32 text-blue-600 opacity-20 text-4xl animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.25}px) translateX(${scrollY * 0.08}px)` }}
          title="Docker"
        >
          <SiDocker />
        </div>
        <div 
          className="absolute top-48 left-32 text-blue-500 opacity-20 text-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.35}px) translateX(${-scrollY * 0.06}px)` }}
          title="Kubernetes"
        >
          <SiKubernetes />
        </div>
        <div 
          className="absolute top-70 right-10 text-purple-500 opacity-20 text-3xl animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.45}px) translateX(${scrollY * 0.12}px)` }}
          title="Istio"
        >
          <FaNetworkWired />
        </div>
        
        {/* Infrastructure as Code */}
        <div 
          className="absolute top-25 left-40 text-purple-600 opacity-20 text-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.28}px) translateX(${scrollY * 0.04}px)` }}
          title="Terraform"
        >
          <SiTerraform />
        </div>
        <div 
          className="absolute top-55 right-40 text-red-600 opacity-20 text-3xl animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.38}px) translateX(${-scrollY * 0.07}px)` }}
          title="Ansible"
        >
          <SiAnsible />
        </div>
        <div 
          className="absolute top-75 left-50 text-blue-400 opacity-20 text-2xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.48}px) translateX(${scrollY * 0.09}px)` }}
          title="Packer"
        >
          <SiPacker />
        </div>
        
        {/* CI/CD Tools */}
        <div 
          className="absolute top-35 right-15 text-red-500 opacity-20 text-4xl animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.32}px) translateX(${scrollY * 0.06}px)` }}
          title="Jenkins"
        >
          <SiJenkins />
        </div>
        <div 
          className="absolute top-65 left-15 text-gray-700 opacity-20 text-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.42}px) translateX(${-scrollY * 0.03}px)` }}
          title="GitHub Actions"
        >
          <SiGithubactions />
        </div>
        
        {/* Programming Languages */}
        <div 
          className="absolute top-30 left-60 text-blue-500 opacity-20 text-4xl animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.26}px) translateX(${scrollY * 0.05}px)` }}
          title="Golang"
        >
          <SiGo />
        </div>
        <div 
          className="absolute top-50 right-25 text-yellow-500 opacity-20 text-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.36}px) translateX(${-scrollY * 0.08}px)` }}
          title="Python"
        >
          <SiPython />
        </div>
        <div 
          className="absolute top-80 left-25 text-green-500 opacity-20 text-3xl animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.52}px) translateX(${scrollY * 0.11}px)` }}
          title="Shell Scripting"
        >
          <FaTerminal />
        </div>
        
        {/* Infrastructure Elements */}
        <div 
          className="absolute top-45 left-70 text-gray-600 opacity-20 text-4xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.34}px) translateX(${scrollY * 0.07}px)` }}
          title="Server"
        >
          <FaServer />
        </div>
        <div 
          className="absolute top-85 right-35 text-green-500 opacity-20 text-3xl animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.58}px) translateX(${-scrollY * 0.09}px)` }}
          title="Database"
        >
          <FaDatabase />
        </div>
        <div 
          className="absolute top-15 left-80 text-purple-500 opacity-20 text-4xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.18}px) translateX(${scrollY * 0.03}px)` }}
          title="Network"
        >
          <FaNetworkWired />
        </div>
        <div 
          className="absolute top-90 left-10 text-orange-500 opacity-20 text-3xl animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.62}px) translateX(${scrollY * 0.13}px)` }}
          title="Automation"
        >
          <FaCogs />
        </div>
        <div 
          className="absolute top-10 right-50 text-red-400 opacity-20 text-4xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.15}px) translateX(${-scrollY * 0.02}px)` }}
          title="Deploy"
        >
          <FaRocket />
        </div>
        <div 
          className="absolute top-95 right-5 text-blue-300 opacity-20 text-5xl animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.68}px) translateX(${scrollY * 0.14}px)` }}
          title="Cloud"
        >
          <FaCloud />
        </div>
        <div 
          className="absolute top-5 left-5 text-green-400 opacity-20 text-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.12}px) translateX(${scrollY * 0.01}px)` }}
          title="CLI"
        >
          <FaTerminal />
        </div>
        <div 
          className="absolute top-88 right-20 text-pink-500 opacity-20 text-3xl animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.64}px) translateX(${-scrollY * 0.10}px)` }}
          title="Code"
        >
          <FaCode />
        </div>
      </div>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center relative z-10'>
        <p className='text-pink-600 text-sm sm:text-base lg:text-lg font-medium mb-2 sm:mb-4 animate-fade-in'>👋 Hi, my name is</p>
        <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-light-text dark:text-[#ccd6f6] leading-tight mb-4 sm:mb-6 animate-slide-up'>
          V.J.Rama Raju
        </h1>
        <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-light-secondary dark:text-[#8892b0] leading-relaxed mb-4 sm:mb-6 max-w-4xl animate-slide-up-delay'>
          "Looking for Cloud & DevOps Or Site Reliability Engineering Full-time Roles"
        </h3>
        <p className='text-light-secondary dark:text-[#8892b0] py-2 sm:py-4 max-w-[700px] text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 animate-slide-up-delay-2'>
          🎓 Currently pursuing MS in software engineering systems @ Northeastern University
        </p>
        <div className='animate-slide-up-delay-3'>
          <div className='flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 my-2 sm:my-4'>
            {/* "View my projects" button */}
            <Link to='Projects' smooth={true} duration={500} className='text-light-text dark:text-white group border-2 px-4 sm:px-6 py-2 sm:py-3 inline-flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 border-pink-600 dark:border-pink-600 transition-all duration-300 rounded-lg text-sm sm:text-base font-medium hover:scale-105 transform hover:shadow-lg'>
              View my projects
              <HiArrowNarrowRight className='ml-2 group-hover:rotate-90 duration-300' />
            </Link>

            {/* Link to LinkedIn */}
            <a href='https://www.linkedin.com/in/ram-cloud-devops/' target="_blank" rel="noopener noreferrer" className='text-light-text dark:text-white group border-2 px-4 sm:px-6 py-2 sm:py-3 inline-flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 border-pink-600 dark:border-pink-600 transition-all duration-300 rounded-lg text-sm sm:text-base font-medium hover:scale-105 transform hover:shadow-lg'>
              <FaLinkedin className='text-lg sm:text-xl mr-2' />
              <span>LinkedIn</span>
            </a>

            {/* Link to GitHub */}
            <a href='https://github.com/RamaRaju-vj' target="_blank" rel="noopener noreferrer" className='text-light-text dark:text-white group border-2 px-4 py-2 sm:py-3 inline-flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 border-pink-600 dark:border-pink-600 transition-all duration-300 rounded-lg text-sm sm:text-base font-medium hover:scale-105 transform hover:shadow-lg'>
              <FaGithub className='text-lg sm:text-xl mr-2' />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* CSS animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.2s both;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 1s ease-out 0.4s both;
        }
        
        .animate-slide-up-delay-2 {
          animation: slide-up 1s ease-out 0.6s both;
        }
        
        .animate-slide-up-delay-3 {
          animation: slide-up 1s ease-out 0.8s both;
        }
      `}</style>
    </div>
  );
};

export default Home;
