import React from 'react';
import AboutUs from '@/components/About/AboutUs';
import OurVision from '@/components/About/OurVision';
import OurMission from '@/components/About/OurMission';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutUs />
      <OurVision />
      <OurMission />
    </main>
  );
} 