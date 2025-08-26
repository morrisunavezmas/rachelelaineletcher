import React, { useEffect, useRef, useState } from 'react';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={sectionRef}
      id="about-me"
      className="py-12 sm:py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`grid md:grid-cols-2 gap-8 sm:gap-12 items-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-64 sm:w-72 h-64 sm:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-mint-100">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5e88b88999bce503300d5b33/e8664fa3-fa70-46e6-b69b-f93e557ab0c9/Screenshot+2024-12-03+at+4.43.26%E2%80%AFPM.png?format=500w"
                  alt="Rachel Elaine Letcher"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 sm:w-20 h-16 sm:h-20 bg-rose-200 rounded-full"></div>
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 sm:w-16 h-12 sm:h-16 bg-mint-200 rounded-full"></div>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              About <span className="text-mint-500">me</span>
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg">
              <p>
                With nearly ten years of experience in the nonprofit sector through development, education, marketing, and community engagement, Rachel brings strong communication skills, creative solutions, an enthusiastic and positive demeanor, and keen attention to detail to each new challenge.
              </p>
              
              <p>
                Rachel is currently a Master of Public Health candidate at the University of Alabama at Birmingham with a concentration in Health Behavior. Her expected graduation date is 2023.
              </p>
              
              <p>
               In her spare time, Rachel can be found hiking & backpacking, cooking, teaching ceramics classes, gardening, practicing her Spanish, visiting local farmers markets with a cup of coffee in hand and enjoying the great outdoors with her dogs, Clark and Birdie. 
              </p>
              
              <p className="font-medium text-mint-600 text-sm sm:text-base">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;