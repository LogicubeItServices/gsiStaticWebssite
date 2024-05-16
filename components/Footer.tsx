import React from 'react'
import FB from '@/public/assets/svgs/FBwhite.svg';
import IG from '@/public/assets/svgs/IGwhite.svg';
import TT from '@/public/assets/svgs/TTwhite.svg';
import YT from '@/public/assets/svgs/YTwhite.svg';
import LOGO from '@/public/assets/images/GSI logo-depositphotos-bgremover.png';
import Image from 'next/image';
import Arrow from '@/public/assets/svgs/double-arrow-right-svgrepo-com.svg';
import Link from 'next/link';
import Location from '@/public/assets/svgs/LocationWhite.svg';
import Phone from '@/public/assets/svgs/PhoneWhite.svg'
import Mail from '@/public/assets/svgs/mail-svgrepo-com.svg';

const data = [
    {
        title: 'Home',
        href: '/#HeroSection'
    },
    {
        title: 'Our Department',
        href: '/#OurDepartment'
    },
    {
        title: 'Our Doctors',
        href: '/#OurDoctors'
    },
    {
        title: 'Gallery',
        href: '/#Gallery'
    },
    {
        title: 'Our Team',
        href: '/#OurTeam'
    },
    {
        title: 'Testimonials',
        href: '/#Testimonials'
    },
]
const Footer = () => {
  return (
    <div className='w-full bg-[#1977CC] py-28 h-full bg-opacity-85'>
        <div className='w-[60%] m-auto max-xl:w-[90%] text-white grid grid-cols-3 gap-10 max-md:grid-cols-1 max-md:gap-10 max-lg:grid-cols-2'>
            <div className='flex flex-col gap-8'>
                <Image src={LOGO} alt='logo' width={500} height={500} className='w-[60%]'/>
            <p>
            Your health is our mission. Partner with us for exceptional healthcare. Schedule your appointment today and experience the difference of exceptional healthcare.
            </p>
            <div className='w-full flex justify-between'>
                <p>Mon–Fri</p> <p className='font-bold'>8:00am–7:00pm</p>
            </div>
            <div className='w-full flex justify-between'>
                <p>Sat-Sun</p> <p className='font-bold'>11:00am–11:00pm</p>
            </div>
            <div className='flex gap-2'> 
                <FB className='!fill-white'/> <IG className='!fill-white'/> <TT className='!fill-white'/> <YT className='!fill-white'/>
            </div>
            </div>

            <div className='flex flex-col gap-7 h-full'>
                <p className='text-2xl'>Useful Links</p>
                <hr className='bg-[#0D5CA4] w-16 border-0 h-1'/>
                <div className='grid grid-cols-2 w-full gap-3 gap-x-5'>
                    {
                        data.map((e,i)=>(
                           <div key={i} className='flex gap-1 items-center min-w-fit'> <Arrow/> <Link href={e.href} >{e.title}</Link>  </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-col gap-7'>
            <p className='text-2xl'>Contact:</p>
                <hr className='bg-[#0D5CA4] w-16 border-0 h-1'/>
                <div>
                    <p className='text-xl'>Address:</p>
                    <p className='flex gap-2'> <Location/> Civil Hospital Campus,
Asarwa, Ahmedabad-380 016.</p>
                </div>
                <div>
                    <p className='text-xl'>Phone:</p>
                    <p className='flex items-center gap-2'> <Phone/> 079-22684258</p>
                    <p className='flex items-center gap-2'> <Phone/> 079-22684211</p>
                </div>
                <div>
                    <p className='text-xl'>e-mail:</p>
                    <p className='flex items-center gap-2'> <Mail/> example@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer