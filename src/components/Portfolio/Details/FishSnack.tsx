import Image from 'next/image'
import React from 'react'
import FishSnackImage from "../../../../public/fishsnack/cover.png"
import WhiteLogo from "../../../../public/fishsnack/white-bg-logo.png"
import BlueLogo from "../../../../public/fishsnack/blue-bg-logo.png"
import LogoSign from "../../../../public/fishsnack/logo-sign.png"
import BgPattern from "../../../../public/fishsnack/bg-pattern.png"

const FishSnack = () => {
  return (
    <section>
        <Image src={FishSnackImage} alt="FishSnack" placeholder='blur' width={1000} height={1000} className='w-full h-full object-cover'/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <Image src={WhiteLogo} alt="FishSnack" placeholder='blur' width={1000} height={1000} className='w-full h-full object-cover'/>
            <Image src={BlueLogo} alt="FishSnack" placeholder='blur' width={1000} height={1000} className='w-full h-full object-cover'/>
        </div>
        <Image src={LogoSign} alt="FishSnack" placeholder='blur' width={1000} height={1000} className='w-full h-full object-cover'/>
        <Image src={BgPattern} alt="FishSnack" placeholder='blur' width={1000} height={1000} className='w-full h-full object-cover'/>
    </section>
  )
}

export default FishSnack