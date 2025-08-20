import React from 'react';
import phoenixGlobalLogo from '../assets/PG.png'; // Import the logo image
import MaitsysLogo from '../assets/maitsys.png';

const Experience = () => {
  const experiences = [
    {
      company: "Maitsys",
      role: "Cloud DevOps Engineer Co-Op",
      duration: "Jan 2025 - Apr 2025",
      details: [
          // write your Experience according to your needs
      ],
      companyLogo: MaitsysLogo, // Add the company logo here
    },
    // Add more experiences as needed
    {
      company: "Phoenix Global",
      role: "Devops Engineer intern",
      duration: "Jan 2023 - Aug 2023",
      details: [
        // write your Experience according to your needs
      ],
      companyLogo: phoenixGlobalLogo, // Add the company logo here
    },
  ];

  return (
    <div name='Experience' className='w-full min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300 pt-16 sm:pt-20'>
      <div className='max-w-[1000px] mx-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-center min-h-screen'>
        <div className='pb-6 sm:pb-8 text-center sm:text-left mb-8 sm:mb-12'>
          <p className='text-3xl sm:text-4xl lg:text-5xl font-bold inline border-b-4 text-light-text dark:text-dark-text border-pink-600 mb-4'>
            Experience
          </p>
        </div>
        <div className='space-y-4 sm:space-y-6 lg:space-y-8'>
          {experiences.map((experience, index) => (
            <div key={index} className='p-4 sm:p-6 lg:p-8 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02] transform'>
              <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4'>
                <img src={experience.companyLogo} alt={`${experience.company} Logo`} className='w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0' />
                <div className='flex-1'>
                  <h4 className='text-lg sm:text-xl lg:text-2xl italic text-light-text dark:text-dark-text font-semibold'>{experience.company}</h4>
                  <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-light-text dark:text-dark-text mt-1'>{experience.role}</h3>
                  <p className='text-light-secondary dark:text-dark-secondary text-sm sm:text-base mt-1'>{experience.duration}</p>
                </div>
              </div>
              {experience.details.length > 0 && (
                <ul className='list-disc list-inside text-light-secondary dark:text-dark-secondary text-sm sm:text-base lg:text-lg space-y-1 sm:space-y-2'>
                  {experience.details.map((detail, idx) => (
                    <li key={idx} className='mt-2 sm:mt-3'>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
