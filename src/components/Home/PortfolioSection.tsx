"use client"
import React, { useCallback } from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { portfolioItems } from '@/constants';

const PortfolioSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false,
    containScroll: 'trimSnaps',
    dragFree: true,
    slidesToScroll: 3
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-gray-500 font-bold mb-8">PORTFOLIO</h2>
        
        {/* Portfolio Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {portfolioItems.map(item => (
                <div 
                  key={item.id} 
                  className="flex-[0_0_70%] md:flex-[0_0_33.333%] min-w-0 px-3"
                >
                  <div className={`aspect-square overflow-hidden flex items-center justify-center relative`}>
                    {item.logo && (
                      <img 
                        src={item.logo} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="absolute left-0 top-1/2 transform bg-white rounded-full h-12 w-12 shadow hidden md:grid place-items-center -translate-y-1/2 text-gray-400 z-10 hover:text-primaryPurple transition-colors"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            className="absolute right-0 top-1/2 transform bg-white rounded-full h-12 w-12 shadow hidden md:grid place-items-center -translate-y-1/2 text-gray-400 z-10 hover:text-primaryPurple transition-colors"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        {/* More Button */}
        <div className="flex justify-end">
          <Link href="/portfolio">
            <button className="bg-primaryPurple text-white px-5 py-2 rounded-full text-sm font-medium">
              MORE ›
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection; 