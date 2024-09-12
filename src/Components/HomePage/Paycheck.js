'use client'
import React from 'react';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import slider1 from './assets/slider1.svg'
import slider2 from './assets/slider2.svg'
import slider3 from './assets/slider3.svg'
import slider4 from './assets/slider4.svg'
import s1 from './assets/s1.svg'
import s2 from './assets/s2.svg'
import s3 from './assets/s3.svg'
import s4 from './assets/s4.svg'
import Image from 'next/image';
import Link from 'next/link';


const testimonialsData = [
  slider1, slider2, slider3, slider4
];
const responsive = [
  s1, s2, s3, s4
]

const Paycheck = () => {

  return (
    <div className='w-full flex justify-center py-20 max-md:py-10'>
      <div className="w-[90%] flex flex-col justify-center items-center">
        <div className='flex flex-col items-center max-sm:items-start'>
          <h2 className='text-[41px] max-xl:text-[30px] max-lg:text-[24px] max-md:text-[20px] text-[#062B43] font-bold'>Turn your passion into a <span className='bg-gradient-to-r from-[#514BD2] to-[#D0904B] bg-clip-text text-transparent'>Paycheck!</span></h2>
          <p className='text-[#175574] text-[30px] max-xl:text-[24px] max-lg:text-[20px] max-md:text-[14px] font-semibold'>Hot on Hiring Tech 🔥</p>
        </div>
        <div className='w-[90%] max-sm:w-full max-sm:hidden'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='my-10'
          >
            {testimonialsData.map((image, index) => (
              <SwiperSlide key={index}>
                <Link href='/'><Image src={image} alt='sliders' className='w-full' /></Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='w-full sm:hidden'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='my-10'
          >
            {responsive.map((image, index) => (
              <SwiperSlide key={index}>
                <Link href='/'><Image src={image} alt='sliders' className='w-full' /></Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Paycheck;
