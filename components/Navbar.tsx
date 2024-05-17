'use client'
import React from "react";
import TopHeader from "./TopHeader";
import Image from "next/image";
import GSI from '@/public/assets/images/image-asset__1_-removebg-preview.png'
import Link from "next/link";
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <div className="w-[60%] m-auto flex flex-col max-2xl:w-[90%] max-lg:hidden">
      <TopHeader />
      <motion.div initial={{translateY:-50,opacity:0}} whileInView={{translateY:0, opacity:1}} transition={{ease:"linear" , duration:0.8}}>
      <div className="bg-[#1977CC] p-3 m-auto mr-0 text-white gap-20 flex w-fit justify-end items-center rounded-lg"> 
        {/* <div>
            <Image src={GSI} alt="GSI" width={500} height={500} className="w-[15%] max-2xl:w-[25%]" />
        </div> */}
        {/* <div className="text-white flex min-w-fit  pr-5"> */}
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>Our Departments</Link>
            <Link href={'#'}>Blogs</Link>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>Login</Link>
        {/* </div> */}
      </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
