"use client"
import React from 'react';

const PartnershipsSection = () => {
  const goToPartnerships = () => {
    document.getElementById('partnerships')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="w-full lg:w-1/3 bg-primaryBeige text-gray-700 p-8 sm:p-12 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-20 w-full">
        <div className='w-full'>
          <h2 className="text-3xl font-thin">OUR</h2>
          <h3 className="text-4xl font-bold text-primaryGray">PARTNERSHIPS</h3>
        </div>
        
        <img src="/assets/icons/partner.png" alt="partnerships" className='h-44 object-contain'/>
        
        <button onClick={goToPartnerships} className="bg-white text-primaryGray py-2 px-8 rounded-full font-semibold text-sm">
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default PartnershipsSection; 