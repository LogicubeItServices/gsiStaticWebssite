'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Slider1 from '@/public/assets/images/slider-1.jpg';
import Slider2 from '@/public/assets/images/slider-2.jpg';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import HeroDescription from "./HeroDescription";

export function ImageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
  const SrcArr = [
    {
      image: Slider1,
      title: "Your Health Our Priority",
    }, {
      image: Slider2,
      title: "Exceptional Healthcare"
    }]
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {SrcArr.map((e, index) => (
          <CarouselItem key={index}>
            <div className="flex w-full relative h-[45rem] overflow-hidden ">
                  <Image src={e.image} alt="e" width={3000} height={3000} className="w-full"/>
                  <div className="absolute w-[70%] h-full flex flex-col bottom-0 left-0 ">
                    <HeroDescription title={e.title}/>
                  </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-0 bottom-0 left-5 m-auto"/>
      <CarouselNext className="absolute top-0 bottom-0 right-5 m-auto"/>
    </Carousel>
  )
}
