import React from 'react';
import Link from 'next/link';

const ServicesSection = () => {
  return (
    <div className="w-full lg:w-1/3 bg-primaryGreen text-white p-12 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-20 w-full">
      <div className='w-full'>
          <h2 className="text-3xl font-thin">OUR</h2>
          <h3 className="text-4xl font-bold">SERVICES</h3>
        </div>

        <img src="/assets/icons/services.png" alt="services" className='h-44 object-contain'/>
        
        <Link href="/services">
          <button className="bg-white text-primaryGray py-2 px-8 rounded-full font-semibold text-sm">
            EXPLORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesSection; 