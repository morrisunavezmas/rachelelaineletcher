import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-4 sm:mb-6 md:mb-0 text-center md:text-left">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-2">
              Rachel Elaine Letcher
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Writer & Creative Thinker
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs sm:text-sm text-center">
            <span>© 2024 Made with</span>
            <Heart className="w-3 sm:w-4 h-3 sm:h-4 text-rose-400 fill-current" />
            <span>by Rachel Elaine Letcher</span>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700 text-center text-xs sm:text-sm text-gray-400">
          <p>
            "The best stories are born from the intersection of careful observation and boundless imagination."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;