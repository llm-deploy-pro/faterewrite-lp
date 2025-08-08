// 文件位置: src/components/whitefire/WhatYouReceive.tsx

import { CheckCircle2, FileText, Brain, Target, TrendingUp, Shield, Clock } from 'lucide-react';

const WhatYouReceive = () => {
  const deliverables = [
    {
      icon: FileText,
      title: "Comprehensive PDF Report",
      description: "A multi-page PDF report analyzing your unique cognitive patterns with actionable insights you can implement immediately.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Brain,
      title: "Your Decision-Making Profile",
      description: "Identification of your primary decision-making style and its potential blind spots that may be limiting your success.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Target,
      title: "3 Core Thinking Blindspots",
      description: "Identify the three primary cognitive biases that most impact your professional and personal decisions.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Personal Growth Framework",
      description: "A structured framework for self-reflection and personal growth planning tailored to your cognitive profile.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Personalized Optimization Strategies",
      description: "Specific techniques and exercises designed for your cognitive profile to enhance decision quality.",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: Clock,
      title: "Instant & Secure Delivery",
      description: "Immediate email delivery. One-time fee, no recurring charges or hidden costs.",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="report" className="relative bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Enhanced category context */}
        <p className="text-center font-semibold uppercase tracking-wide text-sm mb-3">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your Cognitive Analysis Results
          </span>
        </p>
        
        {/* Main heading with gradient */}
        <h3 className="text-3xl font-bold text-center">
          <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Your Personalized Diagnostic Report Includes:
          </span>
        </h3>
        
        {/* Value summary */}
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          A comprehensive analysis designed to transform how you understand and improve your decision-making process
        </p>
        
        {/* Enhanced grid with glass cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {deliverables.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ 
                       background: `linear-gradient(135deg, transparent, transparent)`,
                       padding: '1px',
                       WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                       WebkitMaskComposite: 'xor',
                       maskComposite: 'exclude'
                     }}>
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.gradient} opacity-20`}></div>
                </div>
                
                <div className="relative flex items-start space-x-3">
                  {/* Icon with gradient background */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} p-2 shadow-sm group-hover:shadow-md transition-shadow`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-900 font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                      {item.title}
                    </span>
                    <span className="text-gray-600 block mt-1 text-sm">
                      {item.description}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Enhanced sample report preview with glass effect */}
        <div className="mt-10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 rounded-lg"></div>
          <div className="relative bg-white/50 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-gray-100 shadow-sm">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide mb-2">
                <span className="bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent">
                  Sample Report Preview
                </span>
              </p>
              <div className="flex justify-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center group">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mr-1">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                  <span className="group-hover:text-blue-600 transition-colors">25+ Page Analysis</span>
                </span>
                <span className="flex items-center group">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center mr-1">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                  <span className="group-hover:text-purple-600 transition-colors">Visual Charts</span>
                </span>
                <span className="flex items-center group">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mr-1">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                  <span className="group-hover:text-purple-600 transition-colors">Action Plans</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced CTA with gradient and glow */}
        <div className="mt-8 text-center">
          {/* 精准修改: href="#authorize" -> "https://secure.faterewrite.com" */}
          <a 
            href="https://secure.faterewrite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-200"></div>
            <button className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-bold shadow-lg transition-transform group-hover:scale-105">
              Get Your Personalized Report Now – $49
            </button>
          </a>
          <p className="mt-3 text-sm text-gray-500">
            Join thousands of professionals who've gained clarity on their decision-making patterns
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYouReceive;