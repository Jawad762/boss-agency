"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

const NavHero = () => {
    const path = usePathname();

    return (
        <section className='relative h-[65dvh] sm:h-[85dvh] flex flex-col text-white'>
            <img src="/assets/home/hero.jpg" alt="hero" loading='eager' className='w-full h-full absolute object-cover z-5'/>

            <div className='flex flex-1 justify-between items-center z-20 container'>
                <div className='hidden lg:block w-1/4'></div>
                <div className='flex flex-col items-center justify-center gap-6 w-full lg:w-1/2'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl text-center'>
                        <span className='font-thin'>YOUR PARTNER IN </span>
                        <span className='font-bold'>MEDIA AND MARKETING SUCCESS!</span>
                    </h1>
                    <button className='bg-primaryGreen rounded-full p-3 font-bold md:text-lg cursor-pointer'>PORTFOLIO</button>
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
                        <Link href="/services">SERVICES</Link>
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