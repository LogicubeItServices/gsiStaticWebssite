"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image1 from '@/public/assets/images/product-1.jpg';
import Image2 from '@/public/assets/images/product-2.jpg';
import Image3 from '@/public/assets/images/product-3.jpg';
import Image4 from '@/public/assets/images/product-4.jpg';
import Image from "next/image";


const data = [
  {
    userImage: Image1,
    Name: "Doctor Name",
    Desc: "Gynecologist, Fertility Consultant, Obstetrician MBBS, FCPS (Gynecology & Obstetrics), CMT, MHPE, Fellowship in Aesthetic Genital Surgery & Cosmetic Gynaecology",
    Experience: "22 years",
    Patients: "99% (613)",
    Timings: [
      {
        day:"Mon-Thu",
        Time: "8:00am - 7:00pm"
      },
      {
        day:"Friday",
        Time: "8:00am - 5:00pm"
      },
      {
        day:"Saturday",
        Time: "11:00am - 11:00pm"
      },
      {
        day:"Sunday",
        Time: "11:00am - 5:00pm"
      },
    ]
  },
  {
    userImage: Image2,
    Name: "Doctor Name",
    Desc: "Gynecologist, Fertility Consultant, Obstetrician MBBS, FCPS (Gynecology & Obstetrics), CMT, MHPE, Fellowship in Aesthetic Genital Surgery & Cosmetic Gynaecology",
    Experience: "22 years",
    Patients: "99% (613)",
    Timings: [
      {
        day:"Mon-Thu",
        Time: "8:00am - 7:00pm"
      },
      {
        day:"Friday",
        Time: "8:00am - 5:00pm"
      },
      {
        day:"Saturday",
        Time: "11:00am - 11:00pm"
      },
      {
        day:"Sunday",
        Time: "11:00am - 5:00pm"
      },
    ]
  },
  {
    userImage: Image3,
    Name: "Doctor Name",
    Desc: "Gynecologist, Fertility Consultant, Obstetrician MBBS, FCPS (Gynecology & Obstetrics), CMT, MHPE, Fellowship in Aesthetic Genital Surgery & Cosmetic Gynaecology",
    Experience: "22 years",
    Patients: "99% (613)",
    Timings: [
      {
        day:"Mon-Thu",
        Time: "8:00am - 7:00pm"
      },
      {
        day:"Friday",
        Time: "8:00am - 5:00pm"
      },
      {
        day:"Saturday",
        Time: "11:00am - 11:00pm"
      },
      {
        day:"Sunday",
        Time: "11:00am - 5:00pm"
      },
    ]
  },
  {
    userImage: Image4,
    Name: "Doctor Name",
    Desc: "Gynecologist, Fertility Consultant, Obstetrician MBBS, FCPS (Gynecology & Obstetrics), CMT, MHPE, Fellowship in Aesthetic Genital Surgery & Cosmetic Gynaecology",
    Experience: "22 years",
    Patients: "99% (613)",
    Timings: [
      {
        day:"Mon-Thu",
        Time: "8:00am - 7:00pm"
      },
      {
        day:"Friday",
        Time: "8:00am - 5:00pm"
      },
      {
        day:"Saturday",
        Time: "11:00am - 11:00pm"
      },
      {
        day:"Sunday",
        Time: "11:00am - 5:00pm"
      },
    ]
  },
]
const OurDoctors = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false })
  );
  return (
    <div id="OurDoctors" className="w-full bg-white bg-opacity-80 py-28 h-full">
      <div className="w-[60%] m-auto max-xl:w-[90%]">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-2">OUR DOCTORS</h2>
          <p className="font-extralight text-[#1977CC]">
            FINDING THE RIGHT ONE, YOUR VISIT, PATIENT EDUCATION, AND
          </p>
          <p className="font-extralight text-[#1977CC]">
            RESOURCES. FINDING THE RIGHT DOCTOR.
          </p>
        </div>
        <div className="w-full h-fit">
        <Carousel 
      plugins={[plugin.current]}
      className="w-full h-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    > 
    <CarouselContent>
      {
        data.map((e,i)=>(
          <CarouselItem key={i} className="grid grid-cols-[0.4fr,0.6fr] max-lg:grid-cols-1">
            <div className="w-full h-full overflow-hidden">
              <Image src={e.userImage} alt="e" width={1000} height={1000} className="w-full h-fit"/>
              </div>
              <div className="flex flex-col h-full justify-evenly bg-white p-4 px-16">
                <h2 className="text-4xl text-[#1977CC] font-extrabold">{e.Name}</h2>
                <p className="font-light">{e.Desc}</p>
                <div className="flex w-full justify-between">
                  <div className="flex flex-col"> Experience <p className="font-bold"> {e.Experience} </p></div>
                  <div className="flex flex-col"> Satisfied Patients <p className="font-bold"> {e.Patients} </p> </div>
                </div>
                <div>
                  <h2 className="text-2xl ">Timings:</h2>
                  <div>
                    {e.Timings.map((ef, i)=>(
                      <div key={i} className="w-full flex justify-between"><p>{ef.day}</p> <p>{ef.Time}</p></div>
                    ))}
                  </div>
                </div>
              </div>
          </CarouselItem>
        ))
      }
      
    </CarouselContent>
    <CarouselPrevious className="absolute top-0 bottom-0 left-5 m-auto "/>
      <CarouselNext className="absolute top-0 bottom-0 right-5 m-auto  bg-white"/>
    </Carousel>
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;
