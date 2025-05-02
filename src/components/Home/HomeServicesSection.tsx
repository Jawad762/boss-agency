import React from 'react';
import Link from 'next/link';

const HomeServicesSection = () => {
  return (
    <div id='services' className="w-full bg-primaryGreen py-16">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <h2 className="text-3xl sm:text-4xl text-white font-thin leading-none">OUR</h2>
          <h3 className="text-4xl sm:text-5xl text-white font-bold leading-none">SERVICES</h3>
        </div>
        
        <p className="text-white text-xl mb-12 max-w-2xl font-light">
          We offer a comprehensive range of services to ensure your brand achieves 
          a strong presence and impactful engagement in the market
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1 - Video Production */}
          <div className='space-y-2'>
            <div className="bg-white p-8 min-h-[300px] flex flex-col items-center rounded-xl">
              <div className="flex items-center justify-center">
                <img src="/assets/icons/film.png" alt="Video Production" className="h-36 w-36 object-contain" />
              </div>
              <h4 className="text-primaryPurple text-center text-lg font-bold mb-1">ADVERTISING &</h4>
              <h4 className="text-primaryPurple text-center text-lg font-bold">COMMERCIAL FILM PRODUCTION</h4>
            </div>
            <div className="flex flex-col space-y-2 text-white">
              <div className="flex items-start">
                <span className="mr-2">›</span>
                <p>Short and long promotional films</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2">›</span>
                <p>Professional advertising production</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2">›</span>
                <p>Documentary films and marketing videos</p>
              </div>
            </div>
          </div>
          
          <div className='space-y-2'>
            <div className="bg-white p-8 min-h-[300px] flex flex-col items-center rounded-xl">
              <div className="flex items-center justify-center">
                <img src="/assets/icons/board.png" alt="Digital Marketing" className="h-36 w-36 object-contain" />
              </div>
              <h4 className="text-primaryPurple text-center text-lg font-bold mb-1">DIGITAL MARKETING</h4>
              <h4 className="text-primaryPurple text-center text-lg font-bold">STRATEGIES</h4>
            </div>
            <div className="flex flex-col space-y-2 text-white">
              <div className="flex items-start">
                <span className="mr-2">›</span>
                <p>Planning and managing digital marketing campaigns</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2">›</span>
                <p>Managing and analyzing advertising campaigns</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2">›</span>
                <p>Enhancing brand visibility through SEO (search engine optimization)</p>
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <div className="bg-white p-8 min-h-[300px] flex flex-col items-center rounded-xl">
              <div className="flex items-center justify-center">
                <img src="/assets/icons/bullseye.png" alt="Campaign Management" className="h-36 w-36 object-contain" />
              </div>
              <h4 className="text-primaryPurple text-center text-lg font-bold mb-1">ADVERTISING CAMPAIGN</h4>
              <h4 className="text-primaryPurple text-center text-lg font-bold">MANAGEMENT</h4>
            </div>
            <div className="flex flex-col space-y-2 text-white">
              <div className="flex items-start">
                <span className="mr-2">›</span>
                <p>Ads across social media platforms</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2">›</span>
                <p>Video and interactive advertisements</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2">›</span>
                <p>Paid advertisements and performance analysis</p>
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <div className="bg-white p-8 min-h-[300px] flex flex-col items-center rounded-xl">
              <div className="flex items-center justify-center">
                <img src="/assets/icons/bulb.png" alt="Creative Content" className="h-36 w-36 object-contain" />
              </div>
              <h4 className="text-primaryPurple text-center text-lg font-bold mb-1">CREATIVE CONTENT DESIGN</h4>
              <h4 className="text-primaryPurple text-center text-lg font-bold">& PRODUCTION</h4>
            </div>
            <div className="flex flex-col space-y-2 text-white">
              <div className="flex items-start">
                <span className="mr-2">›</span>
                <p>Branding and visual identity design</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2">›</span>
                <p>Engaging content creation for social media</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2">›</span>
                <p>Professional video editing and design</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Request Quote Button */}
        <div className="flex justify-center">
          <Link href="/contact">
            <button className="bg-primaryPurple text-white px-8 py-3 rounded-full font-bold">
              REQUEST A QUOTATION
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServicesSection; 