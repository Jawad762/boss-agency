"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import HeroImage from "../../../public/assets/home/hero.jpg"

const NavHero = () => {
    const path = usePathname();

    const goToServices = () => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section className='relative h-[80vh] sm:h-[85vh] flex flex-col text-white'>
            <Image width={2000} height={2000} priority={true} quality={80} placeholder='blur' src={HeroImage} alt="hero" loading='eager' className='w-full h-full absolute brightness-90 object-cover z-5'/>

            <div className='flex flex-1 justify-between items-center z-20 container'>
                <div className='hidden lg:block w-1/4'></div>
                <div className='flex flex-col items-center justify-center gap-6 w-full lg:w-1/2'>
                    <h1 className='text-5xl md:text-6xl text-center'>
                        <span className='font-thin'>YOUR PARTNER IN </span>
                        <span className='font-bold'>MEDIA AND MARKETING SUCCESS!</span>
                    </h1>
                    <Link href="/portfolio" className='block bg-primaryGreen rounded-full p-3 font-bold md:text-lg cursor-pointer'>PORTFOLIO</Link>
                </div>
                <div className='hidden lg:flex flex-col items-end gap-6 w-1/4 font-bold text-lg'>
                    <div className='flex items-center justify-center gap-2'>
                        <Link href="/">HOME</Link>
                        <div className={`w-3 h-2 bg-white rounded-l-full ${path === "/" ? "opacity-100" : "opacity-0"}`}></div>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <Link href="/about-us">ABOUT US</Link>
                        <div className={`w-3 h-2 bg-white rounded-l-full ${path === "/about-us" ? "opacity-100" : "opacity-0"}`}></div>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <button onClick={goToServices}>SERVICES</button>
                        <div className={`w-3 h-2 bg-white rounded-l-full ${path === "/services" ? "opacity-100" : "opacity-0"}`}></div>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <Link href="/portfolio">PORTFOLIO</Link>
                        <div className={`w-3 h-2 bg-white rounded-l-full ${path === "/portfolio" ? "opacity-100" : "opacity-0"}`}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NavHero