import React from 'react'
import PortfolioIndex from '@/components/Portfolio/PortfolioIndex'
import type { Metadata } from 'next'
import { DOMAIN } from '@/constants';

export const metadata: Metadata = {
  title: 'Portfolio | Boss Agency - Our Work',
  description: 'Explore Boss Agency\'s portfolio of work in digital marketing, branding, and more. See how we\'ve helped businesses achieve their goals.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Boss Agency Portfolio | Our Work and Case Studies',
    description: 'Explore Boss Agency\'s portfolio showcasing our best work in digital marketing, branding, and more.',
    url: `${DOMAIN}/portfolio`,
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Boss Agency Portfolio',
      },
    ],
  },
}

const PortfolioPage = () => {
  return (
    <PortfolioIndex />
  );
};

export default PortfolioPage