"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

export default function Home() {
  const imageWidth = 320;
  const imageHeight = 320;

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="w-full flex items-center justify-center">
        <Swiper
          className="w-full"
          modules={[EffectFade, Autoplay]} 
          effect="fade" 
        
          autoplay={{ delay: 3000 }} 
          loop={true}
        >
          <SwiperSlide>
            <div className="w-full flex items-center justify-center">
              <Image
                src="/paul.jpg"
                alt="Paul"
                width={imageWidth}
                height={imageHeight}
                priority
                className="rounded-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex items-center justify-center">
              <Image
                src="/paul2.jpg"
                alt="Paul"
                width={imageWidth}
                height={imageHeight}
                priority
                className="rounded-full"
              />          
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex items-center justify-center">
              <Image
                src="/paul3.jpg"
                alt="Paul"
                width={imageWidth}
                height={imageHeight}
                priority
                className="rounded-full"
              />          
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}