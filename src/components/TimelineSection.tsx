import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Briefcase, Award, BookOpen } from 'lucide-react';

const TimelineSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const timeline = [
    {
      year: '2024',
      title: 'Independent Writer',
      description: 'Starting my career as a freelance writer, focusing on creative narratives and cultural content.',
      icon: BookOpen,
      color: 'mint'
    },
    {
      year: '2023',
      title: 'Creative Writing Certification',
      description: 'Completed an intensive creative writing program, perfecting my narrative skills.',
      icon: Award,
      color: 'rose'
    },
    {
      year: '2022',
      title: 'Editorial Experience',
      description: 'Worked as assistant editor at a local literary magazine, gaining experience in the editorial world.',
      icon: Briefcase,
      color: 'primary'
    },
    {
      year: '2020',
      title: 'Bachelor\'s in Literature',
      description: 'Graduated with honors in English Literature, developing a solid foundation for my writing career.',
      icon: GraduationCap,
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
        return 'bg-mint-500 border-mint-300 text-mint-600';
      case 'rose':
        return 'bg-rose-400 border-rose-300 text-rose-500';
      case 'primary':
        return 'bg-primary-500 border-primary-300 text-primary-600';
      default:
        return 'bg-gray-500 border-gray-300 text-gray-600';
    }
  };

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="py-12 sm:py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            My <span className="text-primary-500">Journey</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            A journey through the most important milestones of my education and professional career
          </p>
        </div>

        <div className="relative px-4 sm:px-0">
          {/* Línea vertical */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-mint-200 via-rose-200 to-primary-200"></div>

          <div className="space-y-8 sm:space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'sm:flex-row flex-col' : 'sm:flex-row-reverse flex-col'
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Contenido */}
                <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'} text-center sm:text-left mb-4 sm:mb-0`}>
                  <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-center sm:justify-between mb-3 sm:mb-4">
                      <span className={`font-display text-3xl font-bold ${
                        item.color === 'mint' ? 'text-mint-500' :
                        item.color === 'rose' ? 'text-rose-400' :
                        'text-primary-500'
                      }`}>
                        {item.year}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Ícono central */}
                <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-12 sm:w-16 h-12 sm:h-16 rounded-full ${getColorClasses(item.color).split(' ')[0]} 
                                  border-4 border-white shadow-lg flex items-center justify-center`}>
                    <item.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>
                </div>

                {/* Ícono móvil */}
                <div className="sm:hidden flex justify-center mb-4">
                  <div className={`w-12 h-12 rounded-full ${getColorClasses(item.color).split(' ')[0]} 
                                  border-4 border-white shadow-lg flex items-center justify-center`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Espacio vacío del otro lado */}
                <div className="hidden sm:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;