import React, { useEffect, useState } from 'react';
import { FaCloud, FaServer, FaDatabase, FaNetworkWired, FaCogs, FaRocket, FaTerminal, FaCode } from 'react-icons/fa';
import { SiDocker, SiKubernetes, SiTerraform, SiJenkins, SiAmazonaws, SiGooglecloud, SiMicrosoftazure, SiGithubactions, SiGo, SiPython, SiAnsible, SiPacker } from 'react-icons/si';

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxElements = [
    // Cloud Platforms
    { icon: SiAmazonaws, x: 15, y: 25, speed: 0.4, size: 'text-3xl', color: 'text-orange-500', name: 'AWS' },
    { icon: SiGooglecloud, x: 80, y: 20, speed: 0.6, size: 'text-3xl', color: 'text-blue-500', name: 'GCP' },
    { icon: SiMicrosoftazure, x: 25, y: 75, speed: 0.5, size: 'text-3xl', color: 'text-blue-600', name: 'Azure' },
    
    // Container & Orchestration
    { icon: SiDocker, x: 70, y: 35, speed: 0.3, size: 'text-4xl', color: 'text-blue-600', name: 'Docker' },
    { icon: SiKubernetes, x: 20, y: 45, speed: 0.7, size: 'text-3xl', color: 'text-blue-500', name: 'K8s' },
    { icon: FaNetworkWired, x: 75, y: 65, speed: 0.4, size: 'text-2xl', color: 'text-purple-500', name: 'Istio' },
    
    // Infrastructure as Code
    { icon: SiTerraform, x: 60, y: 55, speed: 0.5, size: 'text-3xl', color: 'text-purple-600', name: 'Terraform' },
    { icon: SiAnsible, x: 35, y: 85, speed: 0.6, size: 'text-2xl', color: 'text-red-600', name: 'Ansible' },
    { icon: SiPacker, x: 85, y: 80, speed: 0.3, size: 'text-2xl', color: 'text-blue-400', name: 'Packer' },
    
    // CI/CD Tools
    { icon: SiJenkins, x: 45, y: 15, speed: 0.8, size: 'text-3xl', color: 'text-red-500', name: 'Jenkins' },
    { icon: SiGithubactions, x: 90, y: 45, speed: 0.4, size: 'text-2xl', color: 'text-gray-700', name: 'GitHub Actions' },
    
    // Programming Languages
    { icon: SiGo, x: 10, y: 60, speed: 0.6, size: 'text-3xl', color: 'text-blue-500', name: 'Golang' },
    { icon: SiPython, x: 55, y: 25, speed: 0.5, size: 'text-3xl', color: 'text-yellow-500', name: 'Python' },
    { icon: FaTerminal, x: 30, y: 35, speed: 0.7, size: 'text-2xl', color: 'text-green-500', name: 'Shell' },
    
    // Infrastructure Elements
    { icon: FaServer, x: 65, y: 75, speed: 0.4, size: 'text-3xl', color: 'text-gray-600', name: 'Server' },
    { icon: FaDatabase, x: 40, y: 65, speed: 0.6, size: 'text-2xl', color: 'text-green-500', name: 'Database' },
    { icon: FaNetworkWired, x: 85, y: 15, speed: 0.5, size: 'text-3xl', color: 'text-purple-500', name: 'Network' },
    { icon: FaCogs, x: 15, y: 85, speed: 0.4, size: 'text-2xl', color: 'text-orange-500', name: 'Automation' },
    { icon: FaRocket, x: 50, y: 90, speed: 0.8, size: 'text-3xl', color: 'text-red-400', name: 'Deploy' },
    { icon: FaCloud, x: 90, y: 70, speed: 0.3, size: 'text-4xl', color: 'text-blue-300', name: 'Cloud' },
    { icon: FaTerminal, x: 5, y: 30, speed: 0.6, size: 'text-2xl', color: 'text-green-400', name: 'CLI' },
    { icon: FaCode, x: 70, y: 90, speed: 0.5, size: 'text-2xl', color: 'text-pink-500', name: 'Code' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated background grid */}
      <div 
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      />
      
      {/* Floating DevOps icons with parallax effect */}
      {parallaxElements.map((element, index) => {
        const IconComponent = element.icon;
        const translateY = scrollY * element.speed;
        const translateX = Math.sin(scrollY * 0.001 + index) * 25;
        const rotation = scrollY * 0.005 + index * 0.1;
        
        return (
          <div
            key={index}
            className={`absolute ${element.size} ${element.color} opacity-15 hover:opacity-40 transition-all duration-500 animate-pulse group`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg)`,
              animationDelay: `${index * 0.15}s`,
              animationDuration: `${4 + index * 0.3}s`
            }}
            title={element.name}
          >
            <IconComponent className="group-hover:scale-110 transition-transform duration-300" />
          </div>
        );
      })}
      
      {/* Floating particles with DevOps colors */}
      {[...Array(25)].map((_, index) => {
        const colors = ['bg-blue-400', 'bg-green-400', 'bg-purple-400', 'bg-orange-400', 'bg-red-400', 'bg-yellow-400'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        return (
          <div
            key={`particle-${index}`}
            className={`absolute w-1 h-1 ${randomColor} rounded-full opacity-20 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.4)}px)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        );
      })}
      
      {/* Animated wave effect at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 opacity-10"
        style={{
          background: `linear-gradient(45deg, 
            transparent 30%, 
            rgba(59, 130, 246, 0.3) 50%, 
            transparent 70%
          )`,
          transform: `translateX(${scrollY * 0.05}px)`,
          backgroundSize: '200% 100%',
          animation: 'wave 8s ease-in-out infinite'
        }}
      />
      
      {/* Additional floating infrastructure elements */}
      <div 
        className="absolute top-1/4 right-10 text-blue-300 opacity-10 text-6xl animate-bounce"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <FaCloud />
      </div>
      
      <div 
        className="absolute top-3/4 left-5 text-green-300 opacity-10 text-5xl animate-pulse"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <FaServer />
      </div>
      
      {/* CSS for wave animation */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes drift {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(10px) translateY(-10px); }
          50% { transform: translateX(0px) translateY(-20px); }
          75% { transform: translateX(-10px) translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default ParallaxBackground; 