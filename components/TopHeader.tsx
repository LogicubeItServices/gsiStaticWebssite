'use client'
import React from 'react'
import Facebook from '@/public/assets/svgs/facebook-svgrepo-com.svg'
import Instagram from '@/public/assets/svgs/instagram-svgrepo-com.svg'
import Twitter from '@/public/assets/svgs/twitter-154-svgrepo-com.svg'
import Youtube from '@/public/assets/svgs/youtube-168-svgrepo-com.svg'
import Location from '@/public/assets/svgs/address-location-map-svgrepo-com.svg'
import Phone from '@/public/assets/svgs/phone-svgrepo-com.svg'
import {motion} from 'framer-motion'

const TopHeader = () => {
  return (
    <motion.div initial={{translateY:-20,opacity:0}} whileInView={{translateY:0,opacity:1}} transition={{ease:"linear" , duration:0.2}}>
    <div className='w-full flex justify-between py-3'>
      
        <div className='flex gap-2'>
            <Facebook/>
            <Instagram/>
            <Twitter/>
            <Youtube/>
        </div>
        <div className='flex gap-4 items-center'>
            <Location/> Civil Hospital Campus,
Asarwa, Ahmedabad-380 016.
            <Phone/> 079-22684258 / 22684211
        </div>
        
    </div>
    </motion.div>
  )
}

export default TopHeader