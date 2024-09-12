import React from 'react'
import Image from 'next/image'
import logo from './assets/logo.svg'
import { FaLinkedin } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='w-full flex justify-center bg-white'>
            <div className='w-[90%]'>
                <div className='flex max-md:flex-col justify-between py-10 mx-20 max-xl:mx-0'>
                    <div className='space-y-10 max-md:flex max-md:justify-between max-md:pb-5 max-md:space-y-0'>
                        <Image src={logo} alt='logo' />
                        <div className='space-y-5'>
                            <h2 className='text-[14px] text-[#175574] font-semibold'>Follow us on</h2>
                            <div className='flex gap-5 max-lg:gap-2'>
                                <FaLinkedin className='text-[25px] text-[#175574]' />
                                <RiFacebookCircleLine className='text-[25px] text-[#175574]' />
                                <FaInstagram className='text-[25px] text-[#175574]' />
                                <FaSquareXTwitter className='text-[25px] text-[#175574]' />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-20 max-md:gap-x-40 max-sm:gap-x-10 max-lg:gap-10'>
                        <div className='space-y-3'>
                            <h2 className='text-[18px] max-sm:text-[14px] text-[#175574] font-semibold'>Jobs by Location</h2>
                            <p className='text-[14px] max-sm:text-[12px] text-[#175574] font-medium'>Startup Jobs in India</p>
                            <p className='text-[14px] max-sm:text-[12px] text-[#175574] font-medium'>Startup Jobs in Bangalore</p>
                            <p className='text-[14px] max-sm:text-[12px] text-[#175574] font-medium'>Startup Jobs in Delhi / Gurgaon / Noida</p>
                            <p className='text-[14px] max-sm:text-[12px] text-[#175574] font-medium'>Startup Jobs in Hyderabad</p>
                        </div>
                        <div className='space-y-3'>
                            <h2 className='text-[18px] max-sm:text-[14px] text-[#175574] font-semibold'>Technology Jobs</h2>
                            <p className='text-[14px] max-sm:text-[12px] text-[#175574] font-medium'>Android Developer Jobs</p>
                            <p className='text-[14px] max-sm:text-[12px] text-[#175574] font-medium'>Frontend Developer Jobs</p>
                            <p className='text-[14px] max-sm:text-[12px] text-[#175574] font-medium'>Backend Developer Jobs</p>
                            <p className='text-[14px] max-sm:text-[12px] text-[#175574] font-medium'>DevOps Jobs</p>
                        </div>
                        <div className='space-y-3'>
                            <h2 className='text-[18px] max-sm:text-[14px] text-[#175574] font-semibold'>Internship by Stream</h2>
                            <p className='text-[14px] max-sm:text-[12px] text-[#175574] font-medium'>Computer Science Internship</p>
                            <p className='text-[14px] max-sm:text-[12px] text-[#175574] font-medium'>Electronics Internship</p>
                            <p className='text-[14px] max-sm:text-[12px] text-[#175574] font-medium'>Marketing Internship</p>
                            <p className='text-[14px] max-sm:text-[12px] text-[#175574] font-medium'>View all internships</p>
                        </div>
                        <div className='space-y-3'>
                            <h2 className='text-[18px] max-sm:text-[14px] text-[#175574] font-semibold'>Resources</h2>
                            <p className='text-[14px] max-sm:text-[12px] text-[#175574] font-medium'>About Us</p>
                            <p className='text-[14px] max-sm:text-[12px] text-[#175574] font-medium'>Career</p>
                            <p className= 'text-[14px] max-sm:text-[12px] text-[#175574] font-medium'>Safety Tips</p>
                            <p className='text-[14px] max-sm:text-[12px] text-[#175574] font-medium'>Contact Us</p>
                        </div>
                    </div>
                </div>
                <div className='border-t-2 border-[#175574] border-opacity-[0.4] w-full'></div>
                <div className='flex justify-between max-sm:flex-col max-sm:items-center max-sm:space-y-3 py-5 text-[#175574] max-lg:text-[14px] max-md:text-[12px]'>
                    <h2 className=''>Copyright © 2020 Hiring Tech, All rights reserved</h2>
                    <div className='flex gap-10 max-lg:gap-5 max-md:gap-2 max-md:gap-5'>
                        <p>Site Map</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer