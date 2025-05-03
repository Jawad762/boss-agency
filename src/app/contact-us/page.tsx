import React from 'react';
import ContactForm from '@/components/Contact/ContactForm';
import ContactInfo from '@/components/Contact/ContactInfo';

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 py-10 container">
      <ContactForm />
      <ContactInfo />
    </div>
  );
} 