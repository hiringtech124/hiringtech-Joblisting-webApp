import Image from 'next/image'
import React from 'react'
import img1 from './assets/w1.svg'
import img2 from './assets/w2.svg'
import Link from 'next/link'
import { FaPlay } from "react-icons/fa";
const WeHelpwith = () => {
    return (
        <div className='flex justify-center w-full max-sm:py-5'>
            <div className='w-[80%] max-sm:w-[90%] space-y-10'>
                <h2 className='text-[41px] max-xl:text-[30px] max-lg:text-[24px] max-md:text-[20px] text-[#062B43] font-semibold text-center'>What can we help you with?</h2>
                <div className='flex justify-between max-md:flex-col max-sm:gap-5'>
                    <div className='space-y-10 max-lg:space-y-5'>
                        <h2 className='text-[#175574] text-[30px] max-xl:text-[26px] max-lg:text-[18px] font-medium'>Find your next job, effortlessly.</h2>
                        <p className='text-[#175574] text-[18px] max-xl:text-[14px]'>You deserve better than spammy job boards.</p>
                        <p className='text-[#175574] text-[18px] max-xl:text-[14px]'>In less than 5 mins, get matched to just the right opportunities you want. Connect with the actual hiring teams and get super fast responses back.</p>
                        <div className='flex gap-5 max-md:gap-2'>
                            <Link href='/' className='text-white text-[18px] max-md:tracking-tighter max-xl:text-[16px] max-lg:text-[14px] bg-gradient-to-r from-[#D79442] to-[#FFB55B] rounded-[30px] px-5 py-2 max-sm:px-3 max-sm:py-1'>Find Job now</Link>
                            <Link href='/' className='text-white text-[18px] max-md:tracking-tighter max-xl:text-[16px] max-lg:text-[14px] bg-gradient-to-r from-[#007BFF] to-[#7DBCFF] rounded-[30px] px-5 py-2 max-sm:px-3 max-sm:py-1'>View Jobs</Link>
                        </div>
                    </div>
                    <Image src={img1} alt='we help' className='max-xl:w-[400px] max-lg:w-[300px] max-md:w-full'/>
                </div>
                <div className='flex flex-row-reverse max-md:flex-col max-sm:gap-5 justify-between'>
                    <div className='space-y-10 max-lg:space-y-5 flex flex-col items-end max-sm:items-start'>
                        <h2 className='text-[#175574] text-[30px] max-xl:text-[26px] max-lg:text-[18px] font-medium'>Hire 10x top tech talent. 0x backouts.</h2>
                        <p className='text-[#175574] text-[18px] max-xl:text-[14px] text-end max-sm:text-start'>We are the #1 tech hiring platform in India. Connect with top talent, engage with them and close positions to execute your vision, faster.</p>
                        <div className='flex gap-5 max-md:gap-2'>
                            <Link href='/' className='text-white text-[18px] max-md:tracking-tighter max-xl:text-[16px] max-lg:text-[14px] bg-gradient-to-r from-[#D79442] to-[#FFB55B] rounded-[30px] px-5 py-2 max-sm:px-3 max-sm:py-1'>Find talent</Link>
                            <Link href='/' className='text-[#175574] text-[18px] max-md:tracking-tighter max-xl:text-[16px] max-lg:text-[14px] flex items-center gap-2'><FaPlay />How it Works?</Link>
                        </div>
                    </div>
                    <Image src={img2} alt='we help' className='max-xl:w-[400px] max-lg:w-[300px] max-md:w-full'/>
                </div>
            </div>
        </div>
    )
}

export default WeHelpwith