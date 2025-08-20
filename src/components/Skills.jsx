import React from 'react';

import GCP from '../assets/gcp.png';
import JavaScript from '../assets/javascript.png';
import Node from '../assets/node.png';
import GitHubActions from '../assets/githubactions.png';
import Mongo from '../assets/mongo.png';
import Docker from '../assets/docker.png';
import Packer from '../assets/packer.png';
import Jenkins from '../assets/jenkins.png';
import Kubernetes from '../assets/kubernetes.png';
import Ansible from '../assets/ansible.png';
import Terraform from '../assets/terraform.png';
import AWS from '../assets/aws.png';
import Go from '../assets/go.png';
import py from  '../assets/py.png';
import mysql from  '../assets/mysql.png';
import postgres from  '../assets/postgres.png';
import groovy from  '../assets/groovy.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300 pt-16 sm:pt-20 relative overflow-hidden'>
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, index) => (
          <div
            key={`skill-particle-${index}`}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-center w-full h-full relative z-10'>
        <div className='text-center sm:text-left mb-8 sm:mb-12'>
          <p className='text-3xl sm:text-4xl lg:text-5xl font-bold inline border-b-4 border-pink-600 text-light-text dark:text-dark-text mb-4 animate-slide-up'>
            Skills
          </p>
          <p className='py-2 sm:py-4 text-light-secondary dark:text-dark-secondary text-sm sm:text-base lg:text-lg animate-slide-up-delay'>
            These are the technologies I've worked with
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6'>
          {/* Skill items without parallax effects */}
          <div className='shadow-md shadow-light-border dark:shadow-[#040c16] hover:scale-110 duration-500 bg-light-card dark:bg-dark-card p-2 sm:p-4 rounded-lg border border-light-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover-lift'>
            <img className='w-12 sm:w-16 md:w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
            <p className='my-2 sm:my-4 text-xs sm:text-sm md:text-base text-light-text dark:text-dark-text font-medium'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-light-border dark:shadow-[#040c16] hover:scale-110 duration-500 bg-light-card dark:bg-dark-card p-2 sm:p-4 rounded-lg border border-light-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover-lift'>
            <img className='w-12 sm:w-16 md:w-20 mx-auto' src={Node} alt="Node.js icon" />
            <p className='my-2 sm:my-4 text-xs sm:text-sm md:text-base text-light-text dark:text-dark-text font-medium'>NODE JS</p>
          </div>
          <div className='shadow-md shadow-light-border dark:shadow-[#040c16] hover:scale-110 duration-500 bg-light-card dark:bg-dark-card p-2 sm:p-4 rounded-lg border border-light-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover-lift'>
            <img className='w-12 sm:w-16 md:w-20 mx-auto' src={Go} alt="Golang icon" />
            <p className='my-2 sm:my-4 text-xs sm:text-sm md:text-base text-light-text dark:text-dark-text font-medium'>GOLANG</p>
          </div>
          <div className='shadow-md shadow-light-border dark:shadow-[#040c16] hover:scale-110 duration-500 bg-light-card dark:bg-dark-card p-2 sm:p-4 rounded-lg border border-light-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover-lift'>
            <img className='w-12 sm:w-16 md:w-20 mx-auto' src={py} alt="Python icon" />
            <p className='my-2 sm:my-4 text-xs sm:text-sm md:text-base text-light-text dark:text-dark-text font-medium'>PYTHON</p>
          </div>
          <div className='shadow-md shadow-light-border dark:shadow-[#040c16] hover:scale-110 duration-500 bg-light-card dark:bg-dark-card p-2 sm:p-4 rounded-lg border border-light-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover-lift'>
            <img className='w-12 sm:w-16 md:w-20 mx-auto' src={mysql} alt="MySQL icon" />
            <p className='my-2 sm:my-4 text-xs sm:text-sm md:text-base text-light-text dark:text-dark-text font-medium'>MYSQL</p>
          </div>
          <div className='shadow-md shadow-light-border dark:shadow-[#040c16] hover:scale-110 duration-500 bg-light-card dark:bg-dark-card p-2 sm:p-4 rounded-lg border border-light-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover-lift'>
            <img className='w-12 sm:w-16 md:w-20 mx-auto' src={postgres} alt="PostgreSQL icon" />
            <p className='my-2 sm:my-4 text-xs sm:text-sm md:text-base text-light-text dark:text-dark-text font-medium'>POSTGRESQL</p>
          </div>
          <div className='shadow-md shadow-light-border dark:shadow-[#040c16] hover:scale-110 duration-500 bg-light-card dark:bg-dark-card p-2 sm:p-4 rounded-lg border border-light-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover-lift'>
            <img className='w-12 sm:w-16 md:w-20 mx-auto' src={AWS} alt="AWS icon" />
            <p className='my-2 sm:my-4 text-xs sm:text-sm md:text-base text-light-text dark:text-dark-text font-medium'>AWS</p>
          </div>
          <div className='shadow-md shadow-light-border dark:shadow-[#040c16] hover:scale-110 duration-500 bg-light-card dark:bg-dark-card p-2 sm:p-4 rounded-lg border border-light-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover-lift'>
            <img className='w-12 sm:w-16 md:w-20 mx-auto' src={GCP} alt="GCP icon" />
            <p className='my-2 sm:my-4 text-xs sm:text-sm md:text-base text-light-text dark:text-dark-text font-medium'>GCP</p>
          </div>
          <div className='shadow-md shadow-light-border dark:shadow-[#040c16] hover:scale-110 duration-500 bg-light-card dark:bg-dark-card p-2 sm:p-4 rounded-lg border border-light-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover-lift'>
            <img className='w-12 sm:w-16 md:w-20 mx-auto' src={GitHubActions} alt="GitHub Actions icon" />
            <p className='my-2 sm:my-4 text-xs sm:text-sm md:text-base text-light-text dark:text-dark-text font-medium'>GITHUB ACTIONS</p>
          </div>
          <div className='shadow-md shadow-light-border dark:shadow-[#040c16] hover:scale-110 duration-500 bg-light-card dark:bg-dark-card p-2 sm:p-4 rounded-lg border border-light-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover-lift'>
            <img className='w-12 sm:w-16 md:w-20 mx-auto' src={Jenkins} alt="Jenkins icon" />
            <p className='my-2 sm:my-4 text-xs sm:text-sm md:text-base text-light-text dark:text-dark-text font-medium'>JENKINS</p>
          </div>
          <div className='shadow-md shadow-light-border dark:shadow-[#040c16] hover:scale-110 duration-500 bg-light-card dark:bg-dark-card p-2 sm:p-4 rounded-lg border border-light-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover-lift'>
            <img className='w-12 sm:w-16 md:w-20 mx-auto' src={Docker} alt="Docker icon" />
            <p className='my-2 sm:my-4 text-xs sm:text-sm md:text-base text-light-text dark:text-dark-text font-medium'>DOCKER</p>
          </div>
          <div className='shadow-md shadow-light-border dark:shadow-[#040c16] hover:scale-110 duration-500 bg-light-card dark:bg-dark-card p-2 sm:p-4 rounded-lg border border-light-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover-lift'>
            <img className='w-12 sm:w-16 md:w-20 mx-auto' src={Packer} alt="Packer icon" />
            <p className='my-2 sm:my-4 text-xs sm:text-sm md:text-base text-light-text dark:text-dark-text font-medium'>PACKER</p>
          </div>
          <div className='shadow-md shadow-light-border dark:shadow-[#040c16] hover:scale-110 duration-500 bg-light-card dark:bg-dark-card p-2 sm:p-4 rounded-lg border border-light-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover-lift'>
            <img className='w-12 sm:w-16 md:w-20 mx-auto' src={Kubernetes} alt="Kubernetes icon" />
            <p className='my-2 sm:my-4 text-xs sm:text-sm md:text-base text-light-text dark:text-dark-text font-medium'>KUBERNETES</p>
          </div>
          <div className='shadow-md shadow-light-border dark:shadow-[#040c16] hover:scale-110 duration-500 bg-light-card dark:bg-dark-card p-2 sm:p-4 rounded-lg border border-light-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover-lift'>
            <img className='w-12 sm:w-16 md:w-20 mx-auto' src={Ansible} alt="Ansible icon" />
            <p className='my-2 sm:my-4 text-xs sm:text-sm md:text-base text-light-text dark:text-dark-text font-medium'>ANSIBLE</p>
          </div>
          <div className='shadow-md shadow-light-border dark:shadow-[#040c16] hover:scale-110 duration-500 bg-light-card dark:bg-dark-card p-2 sm:p-4 rounded-lg border border-light-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover-lift'>
            <img className='w-12 sm:w-16 md:w-20 mx-auto' src={Terraform} alt="Terraform icon" />
            <p className='my-2 sm:my-4 text-xs sm:text-sm md:text-base text-light-text dark:text-dark-text font-medium'>TERRAFORM</p>
          </div>
          <div className='shadow-md shadow-light-border dark:shadow-[#040c16] hover:scale-110 duration-500 bg-light-card dark:bg-dark-card p-2 sm:p-4 rounded-lg border border-light-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover-lift'>
            <img className='w-12 sm:w-16 md:w-20 mx-auto' src={Mongo} alt="MongoDB icon" />
            <p className='my-2 sm:my-4 text-xs sm:text-sm md:text-base text-light-text dark:text-dark-text font-medium'>MONGO DB</p>
          </div>
          <div className='shadow-md shadow-light-border dark:shadow-[#040c16] hover:scale-110 duration-500 bg-light-card dark:bg-dark-card p-2 sm:p-4 rounded-lg border border-light-border dark:border-dark-border transition-all duration-300 hover:shadow-lg hover-lift'>
            <img className='w-12 sm:w-16 md:w-20 mx-auto' src={groovy} alt="Groovy icon" />
            <p className='my-2 sm:my-4 text-xs sm:text-sm md:text-base text-light-text dark:text-dark-text font-medium'>GROOVY</p>
          </div>
        </div>
      </div>
      
      {/* CSS animations */}
      <style jsx>{`
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
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.2s both;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 1s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
};

export default Skills;
