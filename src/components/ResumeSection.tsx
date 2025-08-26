import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, Users, Award, MapPin, Calendar } from 'lucide-react';

const ResumeSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Si llegamos por #resume, mostrar la sección inmediatamente (evita quedar oculta en mobile)
    if (typeof window !== 'undefined' && window.location.hash === '#resume') {
      setIsVisible(true);
    }

    // IntersectionObserver más permisivo para pantallas chicas.
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setIsVisible(true);
        },
        {
          threshold: 0.05,          // antes 0.1
          rootMargin: '0px 0px -20% 0px' // compensa header fijo y dispara antes
        }
      );

      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => observer.disconnect();
    } else {
      // Fallback por si no existe IO
      setIsVisible(true);
    }
  }, []);

  const experiences = [
    {
      title: 'Director of Development',
      organization: 'Railroad Park Foundation',
      location: 'Birmingham, AL',
      period: 'March 2022-present',
      description:
        'Nonprofit organization that manages a 19-acre greenspace by offering free community events including health and wellness programs, financial literacy and conservation of the Park.',
      achievements: [
        'Exceeded goal of more than $500,000 in individual, foundation and corporate gifts in 2022',
        'Establishes and nurtures relationships with key stakeholders including political officials, foundations, corporations and individuals',
        'Develops rapport with 19 board of directors to assist in fundraising efforts; including leading a Development Committee of 8 members and assisting with nearly $170,000 in donations for annual fundraiser event',
        'Coordinates a grant portfolio totaling to $225,000 in funding',
        'Manages two full-time staff members: Senior Development Specialist and Special Projects Coordinator'
      ]
    },
    {
      title: 'Program Director',
      organization: 'Girls on the Run Birmingham',
      location: 'Birmingham, AL',
      period: 'April 2018-October 2020',
      description:
        'Nonprofit organization that provides girls with tools of empowerment, equipping them with a greater sense of self-awareness, achievement, and a foundation in team building to help them become strong, confident, positive contributors to our community.',
      achievements: [
        'Recruited 37 schools and organized 135 volunteers for an after-school program for girls in 3rd-8th grade',
        'Met and exceeded program goals for the Spring 2020 season which increased program numbers by 10%',
        'Facilitated the collection of qualitative and quantitative data from program sites and participants as required for program reporting, fundraising, and promotion',
        'Supervised and led seasonal training of 20-30 volunteers',
        'Supported the Executive Director on direct fundraising efforts',
        'Observed and maintained program quality control'
      ]
    },
    {
      title: 'Development Coordinator',
      organization: 'Georgia Center for Nonprofits',
      location: 'Atlanta, GA',
      period: '2015-2017',
      description:
        'Nonprofit resource center providing nonprofits, board members, and donors with the tools they need to strengthen organizations that make a different on important causes throughout Georgia.',
      achievements: [
        'Wrote grant proposals to generate $100,000 in program funding, and assisted with outcomes reporting',
        'Assisted the Development Manager in executing a joint program between GNC and The Home Depot Foundation called Building Community Network',
        "Coordinated the event programming, planning, execution, and recruitment for GCN’s quarterly donor cocktail events, the Annual Donor Breakfast, and all other donor sponsored events",
        'Fostered donor relationships through regular meetings to discuss programming in order to secure funding for initiatives',
        'Researched and compiled previous donor records to identify high priority donor groups in order to enable better targeting for GCN donor engagement campaigns',
        'Created and maintained a stewardship calendar to enable open and timely communication with all donors'
      ]
    },
    {
      title: 'Outreach Coordinator',
      organization: 'Urban Trans',
      location: 'Atlanta, GA',
      period: '2013 – 2015',
      description:
        'A woman operated and owned urban and transportation planning and social marketing firm.',
      achievements: [
        "Served as lead outreach specialist for Atlantic Station’s 3,500 employees and 100+ employers and managed an active calendar of outreach events, employer meetings and engagement, and site wide events for clean commuting programs"
      ]
    },
    {
      title: 'Community Nutrition Education',
      organization: 'University of Tennessee',
      location: 'Nashville, TN',
      period: '2010-2012',
      description:
        'Nutrition education program conducted by the University of Tennessee Extension targeting families and youth with limited income.',
      achievements: [
        'Recruited and developed a network of area teachers, community leaders and nonprofit organizations to promote the Expanded Food and Nutrition Education Program (EFNEP) and positive life changes for participants',
        'Taught nutrition and healthy meal planning to youth in 15 Nashville Metropolitan schools and community centers'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Public Health Candidate',
      concentration: 'Health Behavior Concentration',
      institution: 'University of Alabama at Birmingham',
      period: 'Expected graduation: Fall 2023',
      note: 'Remote'
    },
    {
      degree: 'Bachelor of Arts in Mass Communications',
      concentration: 'Print-Journalism Concentration',
      institution: 'University of North Carolina, Asheville, NC',
      period: '2009'
    },
    {
      degree: 'Teaching English as a Second Language (TESL) Certification',
      institution: 'Tennessee Foreign Language Institute, Nashville, TN',
      period: '2010'
    }
  ];

  const volunteerExperience = [
    'Committee Member / Highland Park Community Garden',
    '30 Under 30 Awards Committee Member / Young Nonprofit Professionals Network of Atlanta',
    'Farm Volunteer / Truly Living Well Center for Natural Agriculture',
    'Farm Workshare Member / Love is Love Organic Farm at Gaia Gardens',
    'Annual Fundraiser Committee Member / Nashville Food Project'
  ];

  return (
    <section
      ref={sectionRef}
      id="resume"
      className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 min-h-screen
                 scroll-mt-28 md:scroll-mt-36"  // offset para ancla en mobile/desktop
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-8 sm:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Professional <span className="text-primary-500">Experience</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            A comprehensive overview of my career in nonprofit development and community engagement
          </p>
        </div>

        {/* Professional Experience */}
        <div className={`mb-8 sm:mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8 flex items-center justify-center sm:justify-start">
            <Briefcase className="w-6 sm:w-8 h-6 sm:h-8 text-mint-500 mr-2 sm:mr-3" />
            Relevant Community Engagement Experience
          </h3>

          <div className="space-y-4 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 w-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                  <div className="mb-3 sm:mb-0">
                    <h4 className="font-display text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                      {exp.title}
                    </h4>
                    <p className="text-lg sm:text-xl text-mint-600 font-medium mb-2">
                      {exp.organization}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center">
                        <MapPin className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  {exp.description}
                </p>

                <div className="space-y-1 sm:space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-mint-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className={`mb-8 sm:mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8 flex items-center justify-center sm:justify-start">
            <GraduationCap className="w-6 sm:w-8 h-6 sm:h-8 text-rose-400 mr-2 sm:mr-3" />
            Education
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 w-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-display text-base sm:text-lg font-semibold text-gray-800 mb-2">
                  {edu.degree}
                </h4>
                {edu.concentration && (
                  <p className="text-mint-600 font-medium mb-2 text-sm sm:text-base">{edu.concentration}</p>
                )}
                <p className="text-gray-600 mb-2 text-sm sm:text-base">{edu.institution}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
                  {edu.period}
                </div>
                {edu.note && <p className="text-xs sm:text-sm text-gray-500 mt-2 italic">{edu.note}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Experience */}
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8 flex items-center justify-center sm:justify-start">
            <Users className="w-6 sm:w-8 h-6 sm:h-8 text-primary-500 mr-2 sm:mr-3" />
            Volunteer Experience
          </h3>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 border border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {volunteerExperience.map((volunteer, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300 w-full"
                >
                  <Award className="w-4 sm:w-5 h-4 sm:h-5 text-primary-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm sm:text-base">{volunteer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

