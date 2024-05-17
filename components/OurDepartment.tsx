'use client'
import React from "react";
import Service1 from "@/public/assets/Dummy Services/service-1.jpg";
import Service2 from "@/public/assets/Dummy Services/service-2.jpg";
import Service3 from "@/public/assets/Dummy Services/service-3.jpg";
import Service4 from "@/public/assets/Dummy Services/service-4.jpg";
import Service5 from "@/public/assets/Dummy Services/service-5.jpg";
import Service6 from "@/public/assets/Dummy Services/service-6.jpg";
import Image from "next/image";
import {motion} from 'framer-motion'

const data = [
  {
    image: Service1,
    title: "Physiotherapy",
    desc: "Physiotherapy is a type of therapy that uses physical movement to help people recover from injuries, illnesses.",
  },
  {
    image: Service2,
    title: "Routine Medical Care",
    desc: "Routine medical care, Preventive care wellness care, essential for maintaining health preventing illness.",
  },
  {
    image: Service3,
    title: "Nursing Services",
    desc: "Encompass a wide range of healthcare practices provided by licensed nurses to promote, maintain, restore health.",
  },
  {
    image: Service4,
    title: "Vaccination",
    desc: "Vaccines work by exposing the body to a weakened or inactive form of a virus, which helps body develop immunity.",
  },
  {
    image: Service5,
    title: "Minor Surgery",
    desc: "Surgical procedure that is typically less invasive and requires less time to complete than major surgery.",
  },
  {
    image: Service6,
    title: "Diagnostic Imaging",
    desc: "Is a group of medical tests that use different imaging techniques to create pictures of the inside of the body.",
  },
];
const OurDepartment = () => {
  return (
    <div id="OurDepartment" className="w-full h-fit bg-white py-28">
    <div className="w-[60%] m-auto max-xl:w-[90%]">
      
      <div className="text-center mb-12">
      <motion.div initial={{opacity:0,translateY:30}} whileInView={{opacity:1,translateY:0}} transition={{ease:"linear",duration:0.5}}>
        <h2 className="text-5xl font-bold mb-2">OUR DEPARTMENT</h2>
        </motion.div>
        <motion.div initial={{opacity:0,translateY:-30}} whileInView={{opacity:1,translateY:0}} transition={{ease:"linear",duration:0.5}}>
        <p className="font-extralight text-[#1977CC]">
          WIDE RANGE OF HEALTHCARE SERVICES PROVIDED BY
        </p>
        <p className="font-extralight text-[#1977CC]">
          HEALTHCARE PROFESSIONALS.
        </p>
        </motion.div>
      </div>
     
      <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
        {
            data.map((e,i)=>(
                <div key={i} className="flex flex-col items-center gap-3 text-center">
                  <motion.div initial={{rotateY:180,opacity:0}} whileInView={{rotateY:0,opacity:1}} whileHover={{rotateY:180}} transition={{ease:"easeInOut",duration:0.5}}>
                    <Image src={e.image} alt={"e"} width={500} height={500} className="w-full"/>
                    </motion.div>
                    <motion.div initial={{translateY:50,opacity:0}} whileInView={{translateY:0,opacity:1}} transition={{ease:"easeInOut",duration:0.5}}>
                    <h2 className="text-2xl text-[#1977CC]">{e.title}</h2>
                    <p className="text-sm">{e.desc}</p>
                    </motion.div>
                </div>
            ))
        }
      </div>
    </div>
    </div>
  );
};

export default OurDepartment;
