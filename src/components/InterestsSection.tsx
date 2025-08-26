import React, { useEffect, useRef, useState } from 'react';
import { Mountain, Palette, Flower, BookOpen } from 'lucide-react';

const InterestsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const interests = [
    {
      icon: Mountain,
      title: 'Hiking',
      description: 'Exploring trails and connecting with nature',
      color: 'mint'
    },
    {
      icon: Palette,
      title: 'Ceramics',
      description: 'Creating unique pieces with my own hands',
      color: 'rose'
    },
    {
      icon: Flower,
      title: 'Gardening',
      description: 'Cultivating life and beauty in my personal garden',
      color: 'primary'
    },
    {
      icon: BookOpen,
      title: 'Spanish',
      description: 'Immersing myself in a new language and culture',
      color: 'mint'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'mint':
        return 'from-mint-50 to-mint-100 border-mint-200 group-hover:from-mint-100 group-hover:to-mint-200';
      case 'rose':
        return 'from-rose-50 to-rose-100 border-rose-200 group-hover:from-rose-100 group-hover:to-rose-200';
      case 'primary':
        return 'from-primary-50 to-primary-100 border-primary-200 group-hover:from-primary-100 group-hover:to-primary-200';
      default:
        return 'from-gray-50 to-gray-100 border-gray-200 group-hover:from-gray-100 group-hover:to-gray-200';
    }
  };

  const getIconColorClasses = (color: string) => {
    switch (color) {
      case 'mint':
        return 'text-mint-500 group-hover:text-mint-600';
      case 'rose':
        return 'text-rose-400 group-hover:text-rose-500';
      case 'primary':
        return 'text-primary-500 group-hover:text-primary-600';
      default:
        return 'text-gray-500 group-hover:text-gray-600';
    }
  };

  return (
    <section
      ref={sectionRef}
      id="interests"
      className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            My <span className="text-rose-400">Interests</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            The passions that nourish my creativity and enrich my worldview
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {interests.map((interest, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${getColorClasses(interest.color)} 
                         border-2 rounded-2xl p-8 text-center 
                         hover:shadow-xl transition-all duration-300 
                         hover:scale-105 cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-white/80 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <interest.icon className={`w-6 sm:w-8 h-6 sm:h-8 ${getIconColorClasses(interest.color)} transition-colors duration-300`} />
                </div>
              </div>
              
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">
                {interest.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;