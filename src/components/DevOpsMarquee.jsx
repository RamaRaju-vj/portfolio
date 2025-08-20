import React from 'react';

const DevOpsMarquee = () => {
  return (
    <section className="py-6 px-4 bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* First Marquee Row - DevOps Tools */}
          <div className="mb-4">
            <div className="flex animate-marquee whitespace-nowrap">
              <div className="flex items-center space-x-8 text-3xl opacity-90">
                <img src="/src/assets/kubernetes.png" alt="Kubernetes" className="w-10 h-10" />
                <img src="/src/assets/go.png" alt="Golang" className="w-10 h-10" />
                <img src="/src/assets/aws.png" alt="AWS" className="w-10 h-10" />
                <img src="/src/assets/gcp.png" alt="GCP" className="w-10 h-10" />
                <img src="/src/assets/jenkins.png" alt="Jenkins" className="w-10 h-10" />
                <img src="/src/assets/githubactions.png" alt="GitHub Actions" className="w-10 h-10" />
                <img src="/src/assets/docker.png" alt="Docker" className="w-10 h-10" />
                <img src="/src/assets/py.png" alt="Python" className="w-10 h-10" />
                <img src="/src/assets/ansible.png" alt="Ansible" className="w-10 h-10" />
                <img src="/src/assets/terraform.png" alt="Terraform" className="w-10 h-10" />
                <img src="/src/assets/packer.png" alt="Packer" className="w-10 h-10" />
                <img src="/src/assets/kubernetes.png" alt="Kubernetes" className="w-10 h-10" />
                <img src="/src/assets/go.png" alt="Golang" className="w-10 h-10" />
                <img src="/src/assets/aws.png" alt="AWS" className="w-10 h-10" />
                <img src="/src/assets/gcp.png" alt="GCP" className="w-10 h-10" />
                <img src="/src/assets/jenkins.png" alt="Jenkins" className="w-10 h-10" />
                <img src="/src/assets/githubactions.png" alt="GitHub Actions" className="w-10 h-10" />
                <img src="/src/assets/docker.png" alt="Docker" className="w-10 h-10" />
                <img src="/src/assets/py.png" alt="Python" className="w-10 h-10" />
                <img src="/src/assets/ansible.png" alt="Ansible" className="w-10 h-10" />
                <img src="/src/assets/terraform.png" alt="Terraform" className="w-10 h-10" />
                <img src="/src/assets/packer.png" alt="Packer" className="w-10 h-10" />
              </div>
            </div>
          </div>
          
          {/* Second Marquee Row - Clickable DevOps Documentation URL */}
          <div>
            <div className="flex animate-marquee2 whitespace-nowrap">
              <div className="flex items-center space-x-8 text-base font-medium">
                <span className="text-gray-400">📚</span>
                <span className="text-gray-300">Visit My DevOps Documentation</span>
                <span className="text-gray-400">🚀</span>
                <span className="text-gray-300">Master Kubernetes, Docker, Terraform</span>
                <span className="text-gray-400">⚙️</span>
                <span className="text-gray-300">CI/CD, Monitoring & More</span>
                <span className="text-gray-400">🌐</span>
                <a 
                  href="https://docs.ramaraju-vj.engineer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline font-bold text-lg"
                >
                  docs.ramaraju-vj.engineer
                </a>
                <span className="text-gray-400">🎯</span>
                <span className="text-gray-300">Master DevOps Skills</span>
                <span className="text-gray-400">📚</span>
                <span className="text-gray-300">Visit My DevOps Documentation</span>
                <span className="text-gray-400">🚀</span>
                <span className="text-gray-300">Master Kubernetes, Docker, Terraform</span>
                <span className="text-gray-400">⚙️</span>
                <span className="text-gray-300">CI/CD, Monitoring & More</span>
                <span className="text-gray-400">🌐</span>
                <a 
                  href="https://docs.ramaraju-vj.engineer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline font-bold text-lg"
                >
                  docs.ramaraju-vj.engineer
                </a>
                <span className="text-gray-400">🎯</span>
                <span className="text-gray-300">Master DevOps Skills</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsMarquee;
