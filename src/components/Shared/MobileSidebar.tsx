"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  const path = usePathname();
  const goToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    onClose()
  }

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[300px] bg-primaryPurple text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* Header */}
        <div className="p-6 flex justify-between items-center border-b border-white/10">
          <div className="text-white text-2xl font-bold">
            <span>B</span>OSS
            <div className="text-xs font-light mt-[-5px] ml-6">AGENCY</div>
          </div>
          <button onClick={onClose} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Navigation Links */}
        <div className="flex-1 py-8 px-6">
          <nav className="flex flex-col space-y-6">
            <Link 
              href="/" 
              className={`text-xl flex items-center ${path === '/' ? 'font-bold' : 'font-light'}`}
              onClick={onClose}
            >
              HOME
              <div className={`ml-2 w-3 h-2 bg-white rounded-l-full ${path === "/" ? "opacity-100" : "opacity-0"}`}></div>
            </Link>
            
            <Link 
              href="/about-us" 
              className={`text-xl flex items-center ${path === '/about-us' ? 'font-bold' : 'font-light'}`}
              onClick={onClose}
            >
              ABOUT US
              <div className={`ml-2 w-3 h-2 bg-white rounded-l-full ${path === "/about-us" ? "opacity-100" : "opacity-0"}`}></div>
            </Link>
            
            <button 
              onClick={goToServices} 
              className={`text-xl flex items-center w-fit ${path === '/services' ? 'font-bold' : 'font-light'}`}
            >
              SERVICES
              <div className={`ml-2 w-3 h-2 bg-white rounded-l-full ${path === "/services" ? "opacity-100" : "opacity-0"}`}></div>
            </button>
            
            <Link 
              href="/portfolio" 
              className={`text-xl flex items-center ${path === '/portfolio' ? 'font-bold' : 'font-light'}`}
              onClick={onClose}
            >
              PORTFOLIO
              <div className={`ml-2 w-3 h-2 bg-white rounded-l-full ${path === "/portfolio" ? "opacity-100" : "opacity-0"}`}></div>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar; 