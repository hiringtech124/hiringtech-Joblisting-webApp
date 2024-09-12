'use client'
import Image from 'next/image'
import { useState } from 'react';
import React from 'react'
import img from '../assets/icons.svg'
import '../style.css'
import { FcGoogle } from "react-icons/fc";
const Hero = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className='w-full flex justify-center bgclass'>
            <div className='w-[80%] flex justify-between'>
                <div className='space-y-10'>
                    <h2 className='text-[#175574] text-[40px] font-bold'>Unlock your dream job! <br /><span className='text-[#D79442]'>Join our talent pool today!</span></h2>
                    <Image src={img} alt='icons' />
                </div>
                <div className="flex justify-center items-center w-[450px]">
                    <div className="bg-white p-8 space-y-7 rounded-3xl shadow-lg w-full">

                        {/* Email or Mobile Input */}
                        <div className="mb-4">
                            <label className="block text-[#175574] text-sm font-semibold mb-2" htmlFor="email">
                                Email or Mobile Number
                            </label>
                            <input
                                id="email"
                                type="text"
                                placeholder="Email or mobile number"
                                className="w-full px-3 py-2 border-2 border-[#175574] border-opacity-[0.2] rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                            <label className="block text-[#175574] text-sm font-semibold mb-2" htmlFor="password">
                                Enter Password*
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full px-3 py-2 border-2 border-[#175574] border-opacity-[0.2] rounded-lg focus:outline-none focus:border-blue-500"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 px-3 flex items-center"
                                >
                                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {showPassword ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825C17.556 17.25 20 14 20 10s-2.444-7.25-6.125-8.825M4.5 19.5l1.75-1.75m0 0a7.5 7.5 0 0011.875-5.75c0-4.028-3.972-7.5-7.5-7.5-3.528 0-7.5 3.472-7.5 7.5 0 2.354.964 4.482 2.5 6.125L6.25 17.75z" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.775 2.892-2.935 5-5.542 5-4.477 0-8.268-2.943-9.542-7z" />
                                        )}
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right mb-4">
                            <a href="#" className="text-sm text-blue-500 hover:text-blue-700">Forgot password?</a>
                        </div>

                        {/* Login Button */}
                        <button className="w-full bg-[#D79442] text-[18px] hover:bg-yellow-700 text-white py-2 rounded-[30px] mb-4">
                            Login
                        </button>

                        {/* Google Login Button */}
                        <button className="w-full border border-[#175574] border-opacity-[0.5] text-[#175574] py-2 rounded-[30px] flex items-center gap-2 justify-center">
                            <FcGoogle />
                            Continue with Google
                        </button>

                        {/* Register Link */}
                        <div className="text-center mt-4">
                            <p className="text-sm text-[#175574]">
                                Don&apos;t have an account? <a href="#" className="text-[#D79442] hover:underline">Register</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero