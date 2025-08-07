// 文件位置: src/components/whitefire/Header.tsx

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show floating CTA after scrolling past hero section
      setShowFloatingCTA(scrollPosition > 600);
      
      // Check if header appearance should change
      setScrolled(scrollPosition > 20);
      
      // Check if near footer (within 200px of bottom)
      const distanceFromBottom = documentHeight - (scrollPosition + windowHeight);
      setNearFooter(distanceFromBottom < 200);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <>
      <li>
        <a href="#diagnostic" className="block py-2 text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
          The Diagnostic
        </a>
      </li>
      <li>
        <a href="#report" className="block py-2 text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
          The Report
        </a>
      </li>
      <li>
        {/* 修正: 更新联系邮箱地址 */}
        <a href="mailto:support@faterewrite.com" className="block py-2 text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
          Contact
        </a>
      </li>
      <li>
        <Link to="/terms" className="block py-2 text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
          Legal
        </Link>
      </li>
    </>
  );

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white/60 backdrop-blur-sm border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Enhanced logo with gradient on hover */}
            <div className="flex items-center">
              <div>
                <Link to="/" className="group">
                  <span className="font-bold text-xl text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    Z2.5 Diagnostics
                  </span>
                  <p className="hidden sm:block text-xs text-gray-500 mt-0.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                    Cognitive Optimization for Better Decisions
                  </p>
                </Link>
              </div>
            </div>
            
            {/* Desktop navigation with gradient CTA */}
            <div className="hidden md:flex items-center space-x-6">
              <nav>
                <ul className="flex items-center space-x-6">
                  {navLinks}
                </ul>
              </nav>
              {/* Gradient CTA button */}
              <a 
                href="#authorize" 
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-200"></div>
                <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-transform group-hover:scale-105">
                  Get Started – $49
                </button>
              </a>
            </div>

            {/* Mobile menu with gradient mini CTA */}
            <div className="md:hidden flex items-center space-x-3">
              <a 
                href="#authorize" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-1.5 px-3 rounded text-sm shadow-sm"
              >
                $49
              </a>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                aria-label="Toggle menu"
                className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu with glass effect */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
            <nav className="px-4 pt-2 pb-4">
              <ul className="space-y-1">
                {navLinks}
              </ul>
              <a 
                href="#authorize" 
                className="mt-4 block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg text-center shadow-lg"
              >
                Authorize Your Diagnostic – $49
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Enhanced floating CTA with smart positioning */}
      {showFloatingCTA && !nearFooter && (
        <div className={`fixed z-50 transition-all duration-300 ${
          nearFooter 
            ? 'bottom-32 opacity-50' 
            : 'bottom-6 opacity-100'
        } right-6 animate-fade-in-up`}>
          <a 
            href="#authorize" 
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-200 animate-pulse-slow"></div>
            <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-2xl flex items-center space-x-2 transition-transform group-hover:scale-105">
              <span>Get Your Report</span>
              <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-2 py-0.5 rounded">$49</span>
            </button>
          </a>
        </div>
      )}
      
      {/* Alternative: Minimized floating button when near footer */}
      {showFloatingCTA && nearFooter && (
        <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
          <a 
            href="#authorize" 
            className="relative group"
          >
            <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group-hover:w-auto group-hover:px-4">
              <span className="group-hover:hidden">$49</span>
              <span className="hidden group-hover:inline-block">Get Report – $49</span>
            </button>
          </a>
        </div>
      )}
    </>
  );
};

export default Header;