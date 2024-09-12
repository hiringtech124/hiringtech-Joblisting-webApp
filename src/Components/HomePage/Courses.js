import React from 'react'
import img from './assets/courses.svg'
import { FaCheck } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
const Courses = () => {
    return (
        <div className='w-full flex justify-center py-10 max-md:py-5'>
            <div className='w-[80%] max-sm:w-[90%]'>
                <h2 className='text-[41px] max-xl:text-[30px] max-lg:text-[24px] max-md:text-[20px] text-[#062B43] font-bold'>Secure Your Future Now! <br />
                    With Our Job <span className='bg-gradient-to-r from-[#514BD2] to-[#D0904B] bg-clip-text text-transparent'>Guarantee Courses</span></h2>
                <div className='flex justify-between items-center max-md:flex-col-reverse max-md:items-start max-md:py-5'>
                    <div className='space-y-5'>
                        <div className='text-[20px] max-xl:text-[16px] max-lg:text-[14px]'>
                            <p className='text-[#175574] font-medium flex items-center gap-2' ><FaCheck className='text-[#ABE0F8]' />Gap Year Support Guidance and Program</p>
                            <p className='text-[#175574] font-medium flex items-center gap-2' ><FaCheck className='text-[#ABE0F8]' />Professional ResumeDesign Services</p>
                            <p className='text-[#175574] font-medium flex items-center gap-2' ><FaCheck className='text-[#ABE0F8]' />100% Placement Guaranteed</p>
                            <p className='text-[#175574] font-medium flex items-center gap-2' ><FaCheck className='text-[#ABE0F8]' />Communication Skills Workshops</p>
                            <p className='text-[#175574] font-medium flex items-center gap-2' ><FaCheck className='text-[#ABE0F8]' />75-Day Intensive Training Program</p>
                        </div>
                        <div>
                            <Link href='/' className='text-white max-lg:text-[14px] bg-gradient-to-r from-[#D79442] to-[#FFB55B] rounded-[30px] px-5 py-2 max-sm:px-3 max-sm:py-1'>View Details</Link>
                        </div>
                    </div>
                    <Image src={img} alt='courses' className='w-[600px] max-xl:w-[480px] max-lg:w-[350px] max-md:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Courses