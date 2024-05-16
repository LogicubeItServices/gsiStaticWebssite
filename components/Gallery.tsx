import React from "react";
import Image1 from "@/public/assets/Gallery/gallery-1.jpg";
import Image2 from "@/public/assets/Gallery/gallery-2.jpg";
import Image3 from "@/public/assets/Gallery/gallery-3.jpg";
import Image4 from "@/public/assets/Gallery/gallery-4.jpg";
import Image5 from "@/public/assets/Gallery/gallery-5.jpg";
import Image6 from "@/public/assets/Gallery/gallery-6.jpg";
import Image7 from "@/public/assets/Gallery/gallery-7.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";

const data = [
    {
        image: Image1,
        aspect: "aspect-square",
    },
    {
        image: Image2,
        aspect: "aspect-[2/1]",
    },
    {
        image: Image3,
        aspect: "aspect-square",
    },
    {
        image: Image4,
        aspect: "aspect-video",
    },
    {
        image: Image5,
        aspect: "aspect-square",
    },
    {
        image: Image6,
        aspect: "aspect-video",
    },
    {
        image: Image7,
        aspect: "aspect-video",
    },
];
const Gallery = () => {
  return (
    <div id='Gallery' className="py-20 bg-white w-full">
        <div className="w-[60%] m-auto flex flex-col items-center max-xl:w-[90%]">
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold mb-2">OUR GALLERY</h2>
                 <p className="font-extralight text-[#1977CC]">
                    A COMPREHENSIVE MEDICAL IMAGES GALLERY. ANATOMY AND
                </p>
                <p className="font-extralight text-[#1977CC]">
                    PHYSIOLOGY, MEDICAL EQUIPMENT
                </p>
            </div>
      <div>
        <Tabs defaultValue="All" className="w-full flex flex-col gap-4">
          <TabsList className="w-fit m-auto flex gap-3">
            <TabsTrigger value="All" className="rounded-3xl px-4 py-2 text-xl !bg-[#1977CC] !text-white">All</TabsTrigger>
            <TabsTrigger value="Pediatrics" className="rounded-3xl px-4 py-2 text-xl !bg-[#1977CC] !text-white">Pediatrics</TabsTrigger>
            <TabsTrigger value="Surgery" className="rounded-3xl px-4 py-2 text-xl !bg-[#1977CC] !text-white">Surgery</TabsTrigger>
          </TabsList>
          <TabsContent value="All">
            <div className="grid grid-rows-2 grid-flow-col gap-4  w-full h-full max-md:grid-cols-1 max-md:grid-flow-row">
                    <Image src={Image1} alt="Image" width={500} height={500} className=" w-full "/>
                    <Image src={Image7} alt="Img" width={500} height={500} className=" w-full "/>
                    <Image src={Image2} alt="Img" width={500} height={500} className=" w-full row-span-2"/>
                    <Image src={Image3} alt="Img" width={500} height={500} className=" w-full "/>
                    <Image src={Image6} alt="Img" width={500} height={500} className="w-full "/>
                    <Image src={Image5} alt="Img" width={500} height={500} className=" w-full  "/>
                    <Image src={Image4} alt="Img" width={500} height={500} className=" w-full "/>
            </div>
          </TabsContent>
            <TabsContent value="Pediatrics">
                <div className="grid grid-cols-4 gap-4 max-md:grid-cols-1">
                <Image src={Image5} alt="Img" width={500} height={500} className=" w-full  "/>
                    <Image src={Image4} alt="Img" width={500} height={500} className=" w-full "/>
                </div>
            </TabsContent>
            <TabsContent value="Surgery">
                <div className="grid grid-cols-4 gap-4 max-md:grid-cols-1">
                <Image src={Image7} alt="Img" width={500} height={500} className=" w-full "/>
                    <Image src={Image2} alt="Img" width={500} height={500} className=" w-full"/>
                </div>
            </TabsContent>
        </Tabs>
      </div>
      <button className="rounded-3xl bg-[#1977CC] text-white px-4 py-2 w-fit mt-6">View Gallery</button>
      </div>
    </div>
  );
};

export default Gallery;
