import React from 'react'
import Image1 from '@/public/assets/Team/team-1.jpg';
import Image2 from '@/public/assets/Team/team-2.jpg';
import Image3 from '@/public/assets/Team/team-3.jpg';
import Image4 from '@/public/assets/Team/team-4.jpg';
import Image from 'next/image';

const data = [
    {
        userImage: Image1,
        Name: "William Walter",
        Profession: "Chief Medical Officer"
    },
    {
        userImage: Image2,
        Name: "Candice Cromwell",
        Profession: "Anesthesiologist"
    },
    {
        userImage: Image3,
        Name: "Tran Nhur",
        Profession: "Cardiology"
    },
    {
        userImage: Image4,
        Name: "Jina Wilsson",
        Profession: "Neurosurgeon"
    },
]
const OurTeam = () => {
  return (
    <div className='w-full bg-[#f7f7f7] bg-opacity-85 py-20'>
        <div className="w-[60%] m-auto flex flex-col items-center max-xl:w-[90%]">
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold mb-2">OUR TEAM</h2>
                 <p className="font-extralight text-[#1977CC]">
                 OUR TEAM OF EXPERIENCED PROFESSIONALS IS COMMITTED TO
                </p>
                <p className="font-extralight text-[#1977CC]">
                UNDERSTANDING YOUR HEALTH PROBLEMS
                </p>
            </div>

            <div className='grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1'>
                {
                    data.map((e,i)=>(
                        <div key={i} className='flex flex-col bg-white rounded-lg p-3 items-center gap-4'>
                            <Image src={e.userImage} alt='image' width={500} height={500} className='rounded-lg w-full' />
                            <p className='text-[#1977CC] text-2xl'>{e.Name}</p>
                            <p className='font-light'>{e.Profession}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default OurTeam