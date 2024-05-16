'use client'
import React from 'react'
import Image1 from '@/public/assets/images/product-1.jpg';
import Image2 from '@/public/assets/images/product-2.jpg';
import Image3 from '@/public/assets/images/product-3.jpg';
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Image from 'next/image';
import Star from '@/public/assets/svgs/star-filled-rate-rating-bookmark-favourite-save-priority-important-svgrepo-com.svg'

const data = [
    {
        image: Image1,
        name: "Sara William",
        desc: "Wow Very Nice Team, I'm so happy with your service. You managed to exceed my expectations! You guys are very efficient and I will refer more people and my social media to your company!",
    },
    {
        image: Image2,
        name: "Elizabeth Will",
        desc: "Thank you very much. Awesome Template, Highly recommended. I’m impressed with your service. I’ve already told my friends about your template and your quick response, thanks again!",
    },
    {
        image: Image3,
        name: "William Hoy",
        desc: "Great Support, I would just like to say thank you for your prompt and effective service, for your friendly and professional support staff! I will recommend your expert company to all my friends.",
    },
    {
        image: Image1,
        name: "Sara William",
        desc: "Wow Very Nice Team, I'm so happy with your service. You managed to exceed my expectations! You guys are very efficient and I will refer more people and my social media to your company!",
    },
    {
        image: Image3,
        name: "William Hoy",
        desc: "Great Support, I would just like to say thank you for your prompt and effective service, for your friendly and professional support staff! I will recommend your expert company to all my friends.",
    },
]
const Testimonials = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 1000, stopOnInteraction: false })
      );
  return (
    <div id='Testimonials' className="w-full bg-white py-28 h-full">
    <div className='w-[60%] m-auto max-xl:w-[90%]'>
        <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-2">Testimonials</h2>
        <p className="font-extralight text-[#1977CC]">
        PEOPLE LOVE US. REAL VOICES, REAL EXPERIENCES: INSIGHTS
        </p>
        <p className="font-extralight text-[#1977CC]">
        FROM OUR PATIENTS
        </p>
      </div>
      <div>
      <Carousel 
      plugins={[plugin.current]}
      className="w-full h-full relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    > 
    <div className='w-fit h-fit absolute top-0 right-12'>
    <CarouselPrevious className="rounded-[0]"/>
      <CarouselNext className="rounded-[0]"/>
      </div>
    <CarouselContent className='py-10'>
        {
            data.map((e,i)=>(
                <CarouselItem key={i} className='flex flex-col items-center h-full gap-3 md:basis-1/3'>
                    <div className='w-24 aspect-square rounded-full overflow-hidden'>
                    <Image src={e.image} alt='img' width={500} height={500} className='w-full' />
                    </div>
                    <div className='rounded-lg bg-[#1977CC] text-white text-base p-5 '>{e.desc}</div>
                    <div className='text-xl'>{e.name}</div>
                    <div className='flex gap-1'>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    </div>
                </CarouselItem>
            ))
        }
    </CarouselContent>
    </Carousel>
      </div>
    </div>
    </div>
  )
}

export default Testimonials