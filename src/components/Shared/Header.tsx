"use client"
import React, { useState } from 'react'
import MobileSidebar from './MobileSidebar'

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className='absolute top-0 inset-x-0 z-30 h-20 py-4'>
        <div className='container flex justify-between items-center'>
            <div className="text-white text-3xl font-bold">
                <span>B</span>OSS
                <div className="text-xs font-light mt-[-5px] ml-6">AGENCY</div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white z-50" 
              onClick={toggleSidebar}
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
        </div>

        {/* Mobile Sidebar */}
        <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  )
}

export default Header