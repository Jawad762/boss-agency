import React from 'react';
import AboutUs from '@/components/About/AboutUs';
import OurVision from '@/components/About/OurVision';
import OurMission from '@/components/About/OurMission';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Boss Agency - Digital Marketing',
  description: 'Learn about Boss Agency, our vision, mission and the dedicated team behind our full-service marketing agency specializing in digital marketing.',
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: 'About Boss Agency | Our Story & Mission',
    description: 'Learn about Boss Agency, our vision, mission and the dedicated team behind our full-service marketing agency.',
    url: 'https://bossagency.com/about-us',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'About Boss Agency',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutUs />
      <OurVision />
      <OurMission />
    </main>
  );
} 