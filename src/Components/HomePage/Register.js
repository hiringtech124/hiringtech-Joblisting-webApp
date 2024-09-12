import Link from 'next/link';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
const Register = () => {
    return (
        <div className='w-full flex justify-center bg-[#ABE0F833] bg-opacity-[0.2] '>
            <div className='w-[80%] max-xl:w-[90%] flex justify-between max-md:flex-col max-md:gap-10 py-40 max-xl:py-20 z-2 relative'>
                <p className='text-[264px] max-xl:text-[200px] max-lg:text-[100px] text-[#D79442] text-opacity-[0.5] z-[-9] absolute top-0 max-xl:top-[-15%] max-lg:top-7 left-0'>Now</p>
                <div className='text-[#175574] text-[30px] max-xl:text-[24px] max-lg:text-[18px] font-medium ml-5 max-lg:ml-2'>Discover Your Dream Job <br />
                    and Fulfill Dreams With Hiring Tech</div>
                <div className='flex items-center gap-5 max-lg:gap-2'>
                    <Link href='/' className='bg-[#fff] rounded-[30px] flex items-center max-lg:text-[14px] max-sm:text-[12px] text-[#175574] gap-2 py-2 px-8 max-lg:px-4'><FcGoogle className='text-[25px] max-lg:text-[20px]'/>Continue with Google</Link>
                    or
                    <Link href='/' className='text-white text-[18px] max-md:tracking-tighter max-xl:text-[16px] max-lg:text-[14px] max-sm:text-[12px] bg-gradient-to-r from-[#D79442] to-[#FFB55B] rounded-[30px] px-5 py-2 max-sm:px-3 max-sm:py-1'>Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Register