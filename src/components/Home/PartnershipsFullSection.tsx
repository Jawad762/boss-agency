import React from 'react';

const PartnershipsFullSection = () => {
  const partners = [
    {
      id: 1,
      name: 'MBC Group',
      logo: '/assets/partners/mbc.png',
      description: 'A leader in media & entertainment'
    },
    {
      id: 2,
      name: 'Obeikan Group',
      logo: '/assets/partners/obeikan.png',
      description: 'Experts in printing, media & marketing'
    },
    {
      id: 3,
      name: 'Al Hokair Group',
      logo: '/assets/partners/alhokair.png',
      description: 'Managing tourism events & projects'
    },
    {
      id: 4,
      name: 'Thmanyah',
      logo: '/assets/partners/thmanyah.png',
      description: 'A media and journalism content production company'
    }
  ];

  return (
    <div id='partnerships' className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <h2 className="text-3xl sm:text-4xl text-primaryGray font-thin leading-none">OUR</h2>
          <h3 className="text-4xl sm:text-5xl text-primaryGray font-bold leading-none">PARTNERSHIPS</h3>
        </div>
        
        <p className="text-primaryGray text-xl mb-12 max-w-3xl">
          BOSS proudly partners with more than 80 organizations and companies across Saudi Arabia and 
          the Gulf region, enhancing our ability to deliver comprehensive and outstanding marketing and 
          media solutions to our clients Key Partnerships :
        </p>
        
        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partners.map((partner) => (
            <div key={partner.id} className="bg-primaryBeige p-4 flex flex-col items-center justify-between rounded-xl">
              <div className="flex items-center justify-center h-32 mb-6">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
              <div className='w-full'>
                <h4 className="font-bold text-primaryPurple mb-2 text-lg">{partner.name}</h4>
                <p className="text-black text-sm">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnershipsFullSection; 