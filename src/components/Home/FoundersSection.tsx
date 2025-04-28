import React from 'react';

const FoundersSection = () => {
  const founders = [
    {
      id: 1,
      name: 'Ali Zain',
      description: 'Founder and Marketing and media production expert, with extensive experience in brand strategy development and creative content production.',
      photo: '/assets/team/founder1.jpg'
    },
    {
      id: 2,
      name: 'Mohammed Alsalami',
      description: 'Co-founder and technology expert, with a strategic investment and technology vision that supports innovation in media and marketing.',
      photo: '/assets/team/founder2.jpg'
    },
    {
      id: 3,
      name: 'Our Team',
      description: 'The BOSS team includes more than 66 experts from 22 countries, specializing in media production, marketing, design, and digital analytics, working together to bring our clients\' ideas to life.',
      photo: '/assets/team/team.jpg'
    }
  ];

  return (
    <div className="w-full bg-white pb-16">
      <div className="container px-4">
        <h2 className="text-4xl sm:text-5xl text-primaryGray font-bold mb-16">FOUNDERS</h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {founders.map((founder) => (
            <div key={founder.id} className="flex flex-col items-center text-center max-w-xs">
              <div className="w-44 h-44 rounded-full bg-primaryPurple overflow-hidden mb-6"></div>
              <h3 className="text-xl font-bold text-primaryPurple mb-3">{founder.name}</h3>
              <p className="text-gray-600 leading-relaxed">{founder.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoundersSection; 