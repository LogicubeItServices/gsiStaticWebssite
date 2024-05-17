'use client';
import React from 'react'
import {motion} from 'framer-motion';

type props = {
    title: string
}
const HeroDescription = (props:props) => {
  return (
    <div className='flex flex-col text-right gap-3 w-fit m-auto mb-5 max-md:text-center max-lg:scale-75 max-md:items-center'>
      <motion.div initial={{translateX:-200, opacity:0}} whileInView={{translateX:0,opacity:1}} transition={{ease: 'linear',duration:'0.5'}}>
        <h2 className='text-3xl font-semibold uppercase '>Experience the Difference</h2>
        <h1 className='text-5xl font-extrabold'>{props.title}</h1>
        <h3 className='text-xl font-light'>Your health is our priority. Embark on a journey of wellness <br></br> with our expert care. Schedule your appointment.</h3>
        <h2 className='text-3xl font-bold'>+1 234 56 780</h2>
        <button className='bg-[#41464B] rounded-full px-10 py-4 m-auto mr-5 w-fit text-white  max-md:m-0'>Contact Us</button>
        </motion.div>
    </div>
  )
}

export default HeroDescription