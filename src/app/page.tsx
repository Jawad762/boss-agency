import AboutSection from '@/components/Home/AboutSection';
import CompanySummary from '@/components/Home/CompanySummary';
import ConceptToScreenSection from '@/components/Home/ConceptToScreenSection';
import FoundersSection from '@/components/Contact/FoundersSection';
import HomeServicesSection from '@/components/Home/HomeServicesSection';
import PartnershipsFullSection from '@/components/Home/PartnershipsFullSection';
import PartnershipsSection from '@/components/Home/PartnershipsSection';
import PortfolioSection from '@/components/Home/PortfolioSection';
import ServicesSection from '@/components/Home/ServicesSection';
import WhyChooseBossSection from '@/components/Home/WhyChooseBossSection';
import React from 'react';

const HomeSections = () => {
  return (
    <div className="w-full">
      {/* Main three-column section */}
      <div className="flex flex-col lg:flex-row w-full">
        <AboutSection />
        <ServicesSection />
        <PartnershipsSection />
      </div>
      
      {/* Company summary section */}
      <CompanySummary />
      
      {/* Concept to Screen section */}
      <ConceptToScreenSection />
      
      {/* Portfolio section */}
      <PortfolioSection />
      
      {/* Full Services section */}
      <HomeServicesSection />
      
      {/* Full Partnerships section */}
      <PartnershipsFullSection />
      
      {/* Why Choose BOSS section */}
      <WhyChooseBossSection />
    </div>
  );
};

export default HomeSections; 