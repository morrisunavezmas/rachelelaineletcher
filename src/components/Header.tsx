import React from 'react';
import { ChevronDown, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 via-mint-50 to-rose-50 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-mint-100/20 to-rose-100/20"></div>
      
      {/* Navigation menu */}
      <nav className="absolute top-4 left-4 z-20">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
          <button
            onClick={() => scrollToSection('interests')}
            className="text-gray-700 hover:text-mint-500 font-medium transition-colors duration-300 text-sm sm:text-base bg-white/80 sm:bg-transparent px-3 py-1 sm:px-0 sm:py-0 rounded-full sm:rounded-none backdrop-blur-sm sm:backdrop-blur-none"
          >
            My Interests
          </button>
          <button
            onClick={() => scrollToSection('timeline')}
            className="text-gray-700 hover:text-mint-500 font-medium transition-colors duration-300 text-sm sm:text-base bg-white/80 sm:bg-transparent px-3 py-1 sm:px-0 sm:py-0 rounded-full sm:rounded-none backdrop-blur-sm sm:backdrop-blur-none"
          >
            My Journey
          </button>
          <button
            onClick={() => scrollToSection('resume')}
            className="text-gray-700 hover:text-mint-500 font-medium transition-colors duration-300 text-sm sm:text-base bg-white/80 sm:bg-transparent px-3 py-1 sm:px-0 sm:py-0 rounded-full sm:rounded-none backdrop-blur-sm sm:backdrop-blur-none"
          >
            Professional Experience
          </button>
        </div>
      </nav>
      
      {/* Contact buttons in top right */}
      <div className="absolute top-4 right-4 flex space-x-2 z-20">
        <a
          href="https://www.linkedin.com/in/rachel-letcher-971b1941/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a
          href="mailto:reletcher@gmail.com"
          className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-mint-600 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Send Email"
        >
          <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>
      
      <div className="text-center z-10 px-4 animate-fade-in mt-16 sm:mt-0">
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
          Rachel Elaine
          <span className="block text-mint-500">Letcher</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light mb-6 sm:mb-8 max-w-2xl mx-auto">
          Writer & Creative Thinker
        </p>
        
        <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed">
          Exploring the world through words, nature, and creativity
        </p>
        
        <button
          onClick={() => scrollToSection('about-me')}
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-mint-400 hover:bg-mint-500 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
        >
          Discover my story
          <ChevronDown className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
      </div>
    </header>
  );
};

export default Header;