// 文件位置: src/components/whitefire/Hero.tsx
// Step 2: Visual Psychology Implementation with Deep Blue to Purple Gradients

import BackgroundPatterns from './BackgroundPatterns';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Neural network background pattern */}
      <BackgroundPatterns />
      
      {/* Main content with enhanced visual hierarchy */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Two-column layout on larger screens */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          
          {/* Left column: All critical conversion elements */}
          <div className="text-center lg:text-left relative z-10">
            {/* Enhanced category badge with gradient */}
            <div className="mb-3">
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-700 text-sm font-semibold rounded-full uppercase tracking-wide border border-blue-200/50 shadow-sm">
                Cognitive Optimization System
              </span>
            </div>
            
            {/* Main headline with gradient text effect */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
                Discover Your Thinking Blindspots,
              </span>
              <span className="block mt-1 bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-800 bg-clip-text text-transparent">
                Upgrade Your Decision-Making
              </span>
            </h1>
            
            {/* Subtitle with refined styling */}
            <h2 className="mt-3 text-lg sm:text-xl text-gray-700 font-medium">
              A Personalized Cognitive Pattern Diagnostic Tool.
            </h2>
            
            {/* Target audience with cognitive color accent */}
            <p className="mt-2 text-base sm:text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Designed for Entrepreneurs, Executives, and High-Performance Professionals
            </p>
            
            {/* Description with improved readability */}
            <p className="mt-3 text-base sm:text-lg text-gray-600">
              Our proprietary online sequence helps you identify and understand the core recurring patterns in your decision-making, providing a structured framework for profound self-awareness.
            </p>
            
            {/* Enhanced value points with gradient icons */}
            <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-3 text-sm text-gray-700">
              <div className="flex items-center group">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mr-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="group-hover:text-blue-600 transition-colors">15-Minute Assessment</span>
              </div>
              <div className="flex items-center group">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center mr-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="group-hover:text-purple-600 transition-colors">Science-Based Analysis</span>
              </div>
              <div className="flex items-center group">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mr-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="group-hover:text-purple-600 transition-colors">Instant PDF Report</span>
              </div>
            </div>
            
            {/* Premium CTA button with gradient and glow effect */}
            <div className="mt-6">
              <a 
                href="#authorize" 
                className="inline-block relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <button className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg leading-none flex items-center">
                  <span className="text-white font-bold">Authorize Your Diagnostic – $49 One-Time Fee</span>
                </button>
              </a>
            </div>
            
            {/* Trust indicator with subtle animation */}
            <div className="mt-3 text-sm text-gray-500">
              Trusted by <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">10,000+</span> professionals to improve their decision-making
            </div>
            
            {/* Urgency element with pulsing effect */}
            <div className="mt-2 text-sm font-medium">
              <span className="inline-flex items-center">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="text-amber-600">Limited-time launch price (Regular $97)</span>
              </span>
            </div>
          </div>
          
          {/* Right column: Enhanced visual with glass effect */}
          <div className="hidden lg:block mt-8 lg:mt-0">
            <div className="relative">
              {/* Glass morphism container */}
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm"></div>
                <div className="relative p-8">
                  {/* Placeholder for cognitive visualization */}
                  <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-md shadow-2xl border border-white/20">
                    <img 
                      src="/images/diagnostic-visual.webp" 
                      alt="Visual representation of a cognitive diagnostic process" 
                      className="rounded-lg object-cover"
                      loading="lazy"
                    />
                    {/* Overlay gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating badge with gradient border */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-xl p-3 border-2 border-transparent bg-clip-padding"
                   style={{ backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #3B82F6, #7C3AED)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box' }}>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">4.9/5 Rating</span>
                </div>
              </div>
              
              {/* Floating neural nodes */}
              <div className="absolute top-10 left-10 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse"></div>
              <div className="absolute top-20 right-20 w-2 h-2 bg-purple-400/30 rounded-full animate-ping"></div>
              <div className="absolute bottom-20 left-20 w-4 h-4 bg-indigo-400/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Mobile-only image with glass effect */}
        <div className="lg:hidden mt-8">
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
            <img 
              src="/images/diagnostic-visual.webp" 
              alt="Visual representation of a cognitive diagnostic process" 
              className="w-full max-w-md mx-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
        
        {/* Enhanced stats section with gradient accents */}
        <div className="mt-12 pt-8 border-t border-gradient-to-r from-transparent via-purple-200 to-transparent">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="group hover:scale-105 transition-transform">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">10,000+</div>
              <div className="text-sm text-gray-600 mt-1 group-hover:text-blue-600 transition-colors">Professionals Analyzed</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">97%</div>
              <div className="text-sm text-gray-600 mt-1 group-hover:text-purple-600 transition-colors">Report Satisfaction Rate</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">15 min</div>
              <div className="text-sm text-gray-600 mt-1 group-hover:text-blue-600 transition-colors">Average Completion Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;