import React from 'react';
import { useTheme } from '../context/ThemeContext';

const DevOpsMarquee = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-8 px-4 border-b ${
      theme === 'dark' 
        ? 'bg-gray-900 border-gray-700' 
        : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className={`text-2xl font-bold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            🚀 DevOps Expertise
          </h2>
          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Master the tools that power modern infrastructure
          </p>
        </div>
        
        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* First Marquee Row - DevOps Tools */}
          <div className="mb-6">
            <div className="flex animate-marquee whitespace-nowrap">
              <div className="flex items-center space-x-8 text-4xl opacity-80">
                <img src="/src/assets/docker.png" alt="Docker" className="w-12 h-12" />
                <img src="/src/assets/kubernetes.png" alt="Kubernetes" className="w-12 h-12" />
                <img src="/src/assets/terraform.png" alt="Terraform" className="w-12 h-12" />
                <img src="/src/assets/aws.png" alt="AWS" className="w-12 h-12" />
                <img src="/src/assets/gcp.png" alt="GCP" className="w-12 h-12" />
                <img src="/src/assets/jenkins.png" alt="Jenkins" className="w-12 h-12" />
                <img src="/src/assets/githubactions.png" alt="GitHub Actions" className="w-12 h-12" />
                <img src="/src/assets/ansible.png" alt="Ansible" className="w-12 h-12" />
                <img src="/src/assets/packer.png" alt="Packer" className="w-12 h-12" />
                <img src="/src/assets/go.png" alt="Go" className="w-12 h-12" />
                <img src="/src/assets/py.png" alt="Python" className="w-12 h-12" />
                <img src="/src/assets/mongo.png" alt="MongoDB" className="w-12 h-12" />
                <img src="/src/assets/postgres.png" alt="PostgreSQL" className="w-12 h-12" />
                <img src="/src/assets/docker.png" alt="Docker" className="w-12 h-12" />
                <img src="/src/assets/kubernetes.png" alt="Kubernetes" className="w-12 h-12" />
                <img src="/src/assets/terraform.png" alt="Terraform" className="w-12 h-12" />
                <img src="/src/assets/aws.png" alt="AWS" className="w-12 h-12" />
                <img src="/src/assets/gcp.png" alt="GCP" className="w-12 h-12" />
                <img src="/src/assets/jenkins.png" alt="Jenkins" className="w-12 h-12" />
                <img src="/src/assets/githubactions.png" alt="GitHub Actions" className="w-12 h-12" />
                <img src="/src/assets/ansible.png" alt="Ansible" className="w-12 h-12" />
                <img src="/src/assets/packer.png" alt="Packer" className="w-12 h-12" />
                <img src="/src/assets/go.png" alt="Go" className="w-12 h-12" />
                <img src="/src/assets/py.png" alt="Python" className="w-12 h-12" />
                <img src="/src/assets/mongo.png" alt="MongoDB" className="w-12 h-12" />
                <img src="/src/assets/postgres.png" alt="PostgreSQL" className="w-12 h-12" />
              </div>
            </div>
          </div>
          
          {/* Second Marquee Row - Clickable URL */}
          <div className="mb-6">
            <div className="flex animate-marquee2 whitespace-nowrap">
              <div className="flex items-center space-x-8 text-lg font-medium">
                <span className="text-blue-600 dark:text-blue-400">📚</span>
                <span className="text-gray-700 dark:text-gray-300">Visit My DevOps Documentation</span>
                <span className="text-blue-600 dark:text-blue-400">🚀</span>
                <span className="text-gray-700 dark:text-gray-300">Master Kubernetes, Docker, Terraform</span>
                <span className="text-blue-600 dark:text-blue-400">⚙️</span>
                <span className="text-gray-700 dark:text-gray-300">CI/CD, Monitoring & More</span>
                <span className="text-blue-600 dark:text-blue-400">🌐</span>
                <a 
                  href="https://docs.ramaraju-vj.engineer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-bold"
                >
                  docs.ramaraju-vj.engineer
                </a>
                <span className="text-blue-600 dark:text-blue-400">🎯</span>
                <span className="text-gray-700 dark:text-gray-300">Master DevOps Skills</span>
                <span className="text-blue-600 dark:text-blue-400">📚</span>
                <span className="text-gray-700 dark:text-gray-300">Visit My DevOps Documentation</span>
                <span className="text-blue-600 dark:text-blue-400">🚀</span>
                <span className="text-gray-700 dark:text-gray-300">Master Kubernetes, Docker, Terraform</span>
                <span className="text-blue-600 dark:text-blue-400">⚙️</span>
                <span className="text-gray-700 dark:text-gray-300">CI/CD, Monitoring & More</span>
                <span className="text-blue-600 dark:text-blue-400">🌐</span>
                <a 
                  href="https://docs.ramaraju-vj.engineer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-bold"
                >
                  docs.ramaraju-vj.engineer
                </a>
                <span className="text-blue-600 dark:text-blue-400">🎯</span>
                <span className="text-gray-700 dark:text-gray-300">Master DevOps Skills</span>
              </div>
            </div>
          </div>
          
          {/* Third Marquee Row - Additional Tools */}
          <div>
            <div className="flex animate-marquee whitespace-nowrap">
              <div className="flex items-center space-x-8 text-4xl opacity-80">
                <img src="/src/assets/firebase.png" alt="Firebase" className="w-12 h-12" />
                <img src="/src/assets/node.png" alt="Node.js" className="w-12 h-12" />
                <img src="/src/assets/react.png" alt="React" className="w-12 h-12" />
                <img src="/src/assets/tailwind.png" alt="Tailwind CSS" className="w-12 h-12" />
                <img src="/src/assets/groovy.png" alt="Groovy" className="w-12 h-12" />
                <img src="/src/assets/postman.png" alt="Postman" className="w-12 h-12" />
                <img src="/src/assets/mysql.png" alt="MySQL" className="w-12 h-12" />
                <img src="/src/assets/PG.png" alt="PostgreSQL" className="w-12 h-12" />
                <img src="/src/assets/firebase.png" alt="Firebase" className="w-12 h-12" />
                <img src="/src/assets/node.png" alt="Node.js" className="w-12 h-12" />
                <img src="/src/assets/react.png" alt="React" className="w-12 h-12" />
                <img src="/src/assets/tailwind.png" alt="Tailwind CSS" className="w-12 h-12" />
                <img src="/src/assets/groovy.png" alt="Groovy" className="w-12 h-12" />
                <img src="/src/assets/postman.png" alt="Postman" className="w-12 h-12" />
                <img src="/src/assets/mysql.png" alt="MySQL" className="w-12 h-12" />
                <img src="/src/assets/PG.png" alt="PostgreSQL" className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsMarquee;
