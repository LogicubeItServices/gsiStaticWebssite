'use client'
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {motion} from 'framer-motion'

const Timings = [
    {
        Day:"Mon–Fri",
        Time:"8:00am–7:00pm"
    },
    {
        Day:"Saturday",
        Time:"11:00am–11:00pm"
    },
    {
        Day:"Sunday",
        Time:"11:00am–5:00pm"
    }, 
]
const HeroCard = () => {
  return (
    <motion.div initial={{rotateY:180,opacity:0}} whileInView={{rotateY:0,opacity:1}} transition={{ease:"linear" , duration:0.4}} whileHover={{scale:1.1}}>
    <div className=" bg-[#1977CC] w-[20rem] p-3 rounded-lg">
      <Card className="bg-[#1977CC] text-white border-0 shadow-[0]">
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold text-center">Opening Hours</CardTitle>
          <hr className="w-[90%] m-auto h-1"/>
        </CardHeader>
        <CardContent>
          <div className="w-full flex flex-col">
                {
                    Timings.map((e,i)=>(
                        <div key={i} className="w-full flex justify-between"> <p>{e.Day}</p> <p>{e.Time}</p> </div>
                    ))
                }
          </div>
        </CardContent>
        {/* <CardFooter>
          <button>Contact Us</button>
        </CardFooter> */}
      </Card>
    </div>
    </motion.div>
  );
};

export default HeroCard;
