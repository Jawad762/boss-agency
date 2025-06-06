import React from 'react';
import ContactForm from '@/components/Contact/ContactForm';
import ContactInfo from '@/components/Contact/ContactInfo';
import type { Metadata } from 'next';
import { DOMAIN } from '@/constants';
import FoundersSection from '@/components/Contact/FoundersSection';

export const metadata: Metadata = {
  title: 'Contact Us | Boss Agency - Get in Touch',
  description: 'Contact Boss Agency for digital marketing, branding, and other marketing services. Get in touch with our team for a consultation.',
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    title: 'Contact Boss Agency | Get in Touch With Our Team',
    description: 'Contact Boss Agency for digital marketing, branding, and other marketing services. Get in touch with our team.',
    url: `${DOMAIN}/contact-us`,
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Contact Boss Agency',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <section className='w-full min-h-screen bg-white py-10 container'>
      <FoundersSection />
      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
} 