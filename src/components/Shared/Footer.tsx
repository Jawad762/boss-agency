"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {

  const path = usePathname();


  const locations = [
    {
      id: 1,
      city: 'SAUDI ARABIA',
      details: [
        'info@boss.sa',
        'www.boss.sa',
        '+966 01 XXXXX'
      ]
    },
    {
      id: 2,
      city: 'FRANCE',
      details: [
        'BOSS ET PAVILLON',
        'SIRBSISFG12007',
        '5 ALLE DE DERRIÈRE LES JARDINS',
        'VILLERS-LILE-MARNE 94510 FRANCE'
      ]
    },
    {
      id: 3,
      city: 'LONDON',
      details: [
        '2 MUNDEN ST, TEMPLE',
        'LONDON WC2R 4EA',
        'UNITED KINGDOM'
      ]
    },
    {
      id: 4,
      city: 'DUBAI',
      details: [
        'CITY OF ARABIA - DUBAI',
        '- UNITED ARAB EMIRATES'
      ]
    }
  ];

  const socialLinks = [
    { id: 1, icon: 'facebook', url: '#' },
    { id: 2, icon: 'instagram', url: '#' },
    { id: 3, icon: 'twitter', url: '#' },
    { id: 4, icon: 'youtube', url: '#' },
    { id: 5, icon: 'linkedin', url: '#' }
  ];

  const goToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
}

  return (
    <div className="w-full bg-primaryPurple py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-light">
            WHERE <span className="font-bold">IDEAS</span> BECOME <span className="font-bold">REALITY!</span>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row w-full mx-auto max-w-[1000px] gap-12 md:gap-20 mb-12">
            <div className="flex flex-col gap-4">
              <Link href="/" className={`${path === '/' ? 'font-bold' : 'font-light'} text-xl`}>HOME</Link>
              <Link href="/about-us" className={`${path === '/about-us' ? 'font-bold' : 'font-light'} text-xl`}>ABOUT US</Link>
              <button onClick={goToServices} className={`${path === '/services' ? 'font-bold' : 'font-light'} w-fit text-xl`}>SERVICES</button>
              <Link href="/portfolio" className={`${path === '/portfolio' ? 'font-bold' : 'font-light'} text-xl`}>PORFOLIO</Link>
            </div>
          
          <div className='w-full'>
            <h3 className="text-xl font-bold mb-8">CONTACT US</h3>
            
            <div className="flex justify-between gap-4 flex-wrap md:flex-nowrap">
              {locations.map((location) => (
                <div key={location.id} className="mb-6">
                  <h4 className="font-bold mb-2 flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 inline-block mr-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    {location.city}
                  </h4>
                  {location.details.map((detail, index) => (
                    <p key={index} className="text-sm font-light mb-2">{detail}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 w-full mx-auto max-w-[1000px]">
              <p className="text-sm mb-2">FOLLOW US</p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <Link key={link.id} href={link.url} className="text-white hover:text-gray-200">
                    <span className="sr-only">{link.icon}</span>
                    {link.icon === 'facebook' && (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    )}
                    {link.icon === 'instagram' && (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    )}
                    {link.icon === 'twitter' && (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    )}
                    {link.icon === 'youtube' && (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                      </svg>
                    )}
                    {link.icon === 'linkedin' && (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
                      </svg>
                    )}
                  </Link>
                ))}
              </div>
            </div>
      </div>
    </div>
  );
};

export default Footer; 