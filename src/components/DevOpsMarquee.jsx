import React from 'react';

const DevOpsMarquee = () => {
  return (
    <section className="py-4 px-4 bg-black text-white border-b border-gray-700">
      <div className="max-w-7xl mx-auto">
        {/* Marquee Container - Smaller size */}
        <div className="relative overflow-hidden">
          {/* First Marquee Row - DevOps Tools from Parallax */}
          <div className="mb-3">
            <div className="flex animate-marquee whitespace-nowrap">
              <div className="flex items-center space-x-6 text-2xl opacity-80">
                <div className="text-orange-500" title="AWS">☁️</div>
                <div className="text-blue-500" title="GCP">☁️</div>
                <div className="text-blue-600" title="Azure">☁️</div>
                <div className="text-blue-600" title="Docker">🐳</div>
                <div className="text-blue-500" title="Kubernetes">⚓</div>
                <div className="text-purple-500" title="Network">🌐</div>
                <div className="text-purple-600" title="Terraform">🏗️</div>
                <div className="text-red-600" title="Ansible">⚙️</div>
                <div className="text-blue-400" title="Packer">📦</div>
                <div className="text-red-500" title="Jenkins">🔧</div>
                <div className="text-gray-700" title="GitHub Actions">🚀</div>
                <div className="text-blue-500" title="Golang">🔵</div>
                <div className="text-yellow-500" title="Python">🐍</div>
                <div className="text-green-500" title="Shell">💻</div>
                <div className="text-gray-600" title="Server">🖥️</div>
                <div className="text-green-500" title="Database">🗄️</div>
                <div className="text-purple-500" title="Network">🌐</div>
                <div className="text-orange-500" title="Automation">⚙️</div>
                <div className="text-red-400" title="Deploy">🚀</div>
                <div className="text-blue-300" title="Cloud">☁️</div>
                <div className="text-green-400" title="CLI">💻</div>
                <div className="text-pink-500" title="Code">💻</div>
                <div className="text-orange-500" title="AWS">☁️</div>
                <div className="text-blue-500" title="GCP">☁️</div>
                <div className="text-blue-600" title="Azure">☁️</div>
                <div className="text-blue-600" title="Docker">🐳</div>
                <div className="text-blue-500" title="Kubernetes">⚓</div>
                <div className="text-purple-500" title="Network">🌐</div>
                <div className="text-purple-600" title="Terraform">🏗️</div>
                <div className="text-red-600" title="Ansible">⚙️</div>
                <div className="text-blue-400" title="Packer">📦</div>
                <div className="text-red-500" title="Jenkins">🔧</div>
                <div className="text-gray-500" title="GitHub Actions">🚀</div>
                <div className="text-blue-500" title="Golang">🔵</div>
                <div className="text-yellow-500" title="Python">🐍</div>
                <div className="text-green-500" title="Shell">💻</div>
                <div className="text-gray-600" title="Server">🖥️</div>
                <div className="text-green-500" title="Database">🗄️</div>
                <div className="text-purple-500" title="Network">🌐</div>
                <div className="text-orange-500" title="Automation">⚙️</div>
                <div className="text-red-400" title="Deploy">🚀</div>
                <div className="text-blue-300" title="Cloud">☁️</div>
                <div className="text-green-400" title="CLI">💻</div>
                <div className="text-pink-500" title="Code">💻</div>
              </div>
            </div>
          </div>
          
          {/* Second Marquee Row - Clickable URL in Middle */}
          <div className="mb-3">
            <div className="flex animate-marquee2 whitespace-nowrap">
              <div className="flex items-center space-x-6 text-sm font-medium">
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
                  className="text-blue-400 hover:text-blue-300 hover:underline font-bold text-base"
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
                  className="text-blue-400 hover:text-blue-300 hover:underline font-bold text-base"
                >
                  docs.ramaraju-vj.engineer
                </a>
                <span className="text-gray-400">🎯</span>
                <span className="text-gray-300">Master DevOps Skills</span>
              </div>
            </div>
          </div>
          
          {/* Third Marquee Row - Additional Tools */}
          <div>
            <div className="flex animate-marquee whitespace-nowrap">
              <div className="flex items-center space-x-6 text-2xl opacity-80">
                <div className="text-orange-400" title="Firebase">🔥</div>
                <div className="text-green-500" title="Node.js">🟢</div>
                <div className="text-blue-400" title="React">⚛️</div>
                <div className="text-cyan-400" title="Tailwind CSS">🎨</div>
                <div className="text-orange-500" title="Groovy">🍊</div>
                <div className="text-orange-400" title="Postman">📮</div>
                <div className="text-blue-500" title="MySQL">🐬</div>
                <div className="text-blue-600" title="PostgreSQL">🐘</div>
                <div className="text-orange-400" title="Firebase">🔥</div>
                <div className="text-green-500" title="Node.js">🟢</div>
                <div className="text-blue-400" title="React">⚛️</div>
                <div className="text-cyan-400" title="Tailwind CSS">🎨</div>
                <div className="text-orange-500" title="Groovy">🍊</div>
                <div className="text-orange-400" title="Postman">📮</div>
                <div className="text-blue-500" title="MySQL">🐬</div>
                <div className="text-blue-600" title="PostgreSQL">🐘</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsMarquee;
