import React from 'react';

const WhyChooseBossSection = () => {
  const benefits = [
    {
      id: 1,
      text: 'Unlimited Creativity – We deliver innovative solutions that meet your marketing and media needs'
    },
    {
      id: 2,
      text: 'Uncompromising Quality – We adhere to the highest standards of production and digital marketing'
    },
    {
      id: 3,
      text: 'Professional Team – A top-tier team of marketing and media experts'
    },
    {
      id: 4,
      text: 'Strategic Partnerships – Helping you access financial and creative solutions for success'
    },
    {
      id: 5,
      text: 'Measurable Results – We track and measure campaign performance to ensure maximum impact'
    }
  ];

  return (
    <div className="w-full bg-primaryBeige py-16">
      <div className="container">
        <h2 className="text-4xl sm:text-5xl text-gray-500 font-medium text-center mb-16">WHY CHOOSE BOSS?</h2>
        
        <div className='mx-auto w-fit'>
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex items-start mb-8">
              <div className="text-primaryPurple mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                </svg>
              </div>
              <p className="text-primaryGray font-semibold text-lg">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseBossSection; 