import React from 'react'
import { ImageCarousel } from './ImageCarousel'
import Navbar from './Navbar'
import HeroCard from './HeroCard'

const HeroSection = () => {
  return (
    <div className='w-full h-full relative'>
        <div className='absolute z-30 w-full'>
              <Navbar/>
        </div>
        <ImageCarousel/>
        <div className='absolute z-30 m-auto top-0 right-0 -bottom-32 left-0 flex items-end justify-end w-[60%] max-2xl:w-[85%] max-2xl:-bottom-12'> <HeroCard/> </div>
    </div>
  )
}

export default HeroSection