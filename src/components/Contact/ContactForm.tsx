'use client';

import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import Toast from './Toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success' as 'success' | 'error'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: any = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setShowConfirmation(true);
    }
  };

  const handleConfirmSubmit = async () => {
    setShowConfirmation(false);
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      // Show success message
      setToast({
        show: true,
        message: 'Your message has been sent successfully!',
        type: 'success'
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setToast({
        show: true,
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-semibold text-primaryPurple mb-4">CONTACT <span className='font-light'>US</span></h1>
        <p className="text-2xl text-primaryPurple">Say hello, we're just a click away</p>
      </div>
      
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label htmlFor="name" className="block text-xl font-semibold text-primaryPurple">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border-b-2 ${errors.name ? 'border-red-500' : 'border-gray-200 focus:border-primaryPurple'} outline-none py-2 text-gray-800`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div className="space-y-1">
          <label htmlFor="email" className="block text-xl font-semibold text-primaryPurple">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-primaryPurple'} outline-none py-2 text-gray-800`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        
        <div className="space-y-1">
          <label htmlFor="phone" className="block text-xl font-semibold text-primaryPurple">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-200 focus:border-primaryPurple outline-none py-2 text-gray-800"
          />
        </div>
        
        <div className="space-y-1">
          <label htmlFor="message" className="block text-xl font-semibold text-primaryPurple">Your Message</label>
          <textarea 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full border-b-2 ${errors.message ? 'border-red-500' : 'border-gray-200 focus:border-primaryPurple'} outline-none py-2 text-gray-800 resize-none`}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        
        <div className="pt-4">
          <button 
            type="submit" 
            className="px-12 py-3 bg-green-300 hover:bg-green-400 text-white font-medium rounded-full transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'SENDING...' : 'SUBMIT'}
          </button>
        </div>
      </form>

      {/* Confirmation Modal */}
      <ConfirmationModal 
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleConfirmSubmit}
        formData={formData}
      />

      {/* Toast Notification */}
      <Toast 
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={() => setToast(prev => ({ ...prev, show: false }))}
      />
    </div>
  );
};

export default ContactForm; 