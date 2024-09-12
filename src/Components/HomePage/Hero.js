import React from 'react'
import Image from 'next/image'
import hero from './assets/hero.svg'
import h1 from './assets/icon 01.png'
import h2 from './assets/icon 02.png'
import h3 from './assets/icon 03.png'
import curve1 from './assets/curve1.svg'
import curve2 from './assets/curve2.svg'

import Link from 'next/link'
const Hero = () => {
  return (
    <div className='w-full flex justify-center pt-20 relative max-sm:pt-[100px]'>
      <Image src={curve1} alt='curve1' className='max-xl:hidden absolute right-0 z-[-10]' />
      <Image src={curve2} alt='curve2' className='max-xl:hidden absolute left-0 z-[-10]' />
      <div className='w-[90%]'>
        <div className='flex max-sm:flex-col max-sm:items-start justify-between items-center max-xl:py-10 max-sm:py-0'>
          <div className='space-y-10 max-xl:space-y-5 max-sm:space-y-3 ml-20 max-lg:ml-0'>
            <h1 className='text-[41px] max-xl:text-[30px] max-lg:text-[24px] text-[#062B43] font-bold leading-[48px] max-md:leading-[30px]'>Hire India's top <br />full-time <span className='bg-gradient-to-r from-[#514BD2] to-[#D0904B] bg-clip-text text-transparent'>Remote Talent</span></h1>
            <p className='text-[20px] max-xl:text-[16px] max-lg:text-[14px] text-[#175574] font-medium'>AI-driven platform that makes hiring reliable,<br /> simple, and fast.</p>
            <div className='flex gap-10 max-xl:gap-5 max-md:gap-2'>
              <Link href='/' className='text-white text-[18px] max-md:tracking-tighter max-xl:text-[16px] max-lg:text-[14px] max-sm:text-[12px] bg-gradient-to-r from-[#D79442] to-[#FFB55B] rounded-[30px] px-5 py-2 max-sm:px-3 max-sm:py-1'>Hire Talents</Link>
              <Link href='/' className='text-white text-[18px] max-md:tracking-tighter max-xl:text-[16px] max-lg:text-[14px] max-sm:text-[12px] bg-gradient-to-r from-[#007BFF] to-[#7DBCFF] rounded-[30px] px-5 py-2 max-sm:px-3 max-sm:py-1'>Apply as a Talent</Link>
            </div>
          </div>
          <Image src={hero} alt='phone laptop' className='z-5 max-[1400px]:w-[600px] max-xl:w-[450px] max-lg:w-[300px] max-sm:w-full' />
        </div>
        <div className='flex max-w-7xl justify-evenly max-sm:flex-wrap max-sm:gap-5 max-lg:max-w-full max-xl:py-10 max-sm:py-0 max-sm:pb-10'>
          <div className='flex gap-5 max-sm:gap-2'>
            <div className=' bg-[#D79442] rounded-[20px] max-lg:rounded-[15px] grid items-center px-4 max-xl:px-3'>
              <Image src={h1} className=' max-lg:w-[30px] max-sm:w-[20px]' alt='icon1' />
            </div>
            <p className='font-medium leading-10 max-xl:leading-6 max-sm:leading-5 text-[#175574] text-[40px] max-xl:text-[30px] max-lg:text-[24px] max-sm:text-[18px]'>25K+<br /><span className='text-[18px] max-lg:text-[14px] max-sm:text-[12px]'>Job Openings</span></p>
          </div>
          <div className='flex gap-5 max-sm:gap-2'>
            <div className=' bg-[#ABE0F8] rounded-[20px] max-lg:rounded-[15px] grid items-center px-4 max-xl:px-3'>
              <Image src={h2} className=' max-lg:w-[30px] max-sm:w-[20px]' alt='icon1' />
            </div>
            <p className='font-medium leading-10 max-xl:leading-6 max-sm:leading-5 text-[#175574] text-[40px] max-xl:text-[30px] max-lg:text-[24px] max-sm:text-[18px]'>10K+<br /><span className='text-[18px] max-lg:text-[14px] max-sm:text-[12px]'>Talents Got Hired</span></p>
          </div>
          <div className='flex gap-5 max-sm:gap-2'>
            <div className=' bg-[#175574] rounded-[20px] max-lg:rounded-[15px] grid items-center px-4 max-xl:px-3'>
              <Image src={h3} className=' max-lg:w-[30px] max-sm:w-[20px]' alt='icon1' />
            </div>
            <p className='font-medium leading-10 max-xl:leading-6 max-sm:leading-5 text-[#175574] text-[40px] max-xl:text-[30px] max-lg:text-[24px] max-sm:text-[18px]'>500+<br /><span className='text-[18px] max-lg:text-[14px] max-sm:text-[12px]'>Companies</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero