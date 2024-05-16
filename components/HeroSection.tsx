import React from 'react'
import { ImageCarousel } from './ImageCarousel'
import Navbar from './Navbar'
import HeroCard from './HeroCard'
import LOGO from '@/public/assets/images/GSI logo-depositphotos-bgremover.png'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div id='#HeroSection' className='w-full h-full relative bg-white'>
        <div className='absolute z-30 w-full'>
              <Navbar/>
        </div>
        <div className='absolute w-fit h-fit top-32 left-32  backdrop-blur-lg p-8 rounded-lg m-auto z-30 max-xl:left-20 max-md:top-0 max-md:left-0 max-md:right-0'>
          <Image src={LOGO} alt='logo' width={1000} height={1000} className='w-[30rem] max-lg:w-[17rem] max-md:w-[24rem]'/>
        </div>
        <ImageCarousel/>
        <div className='absolute z-30 m-auto top-0 right-0 -bottom-32 left-0 flex items-end justify-end w-[60%]  max-2xl:w-[90%] max-2xl:-bottom-12'> <HeroCard/> </div>
    </div>
  )
}

export default HeroSection