'use client'
import React, { useState } from 'react';
import Image from "next/image";
import logo from './assets/logo.svg';
import Link from 'next/link';
import { FiSearch } from "react-icons/fi";
import { MdOutlineMenuOpen, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full flex justify-center py-10 max-sm:py-6 fixed top-0 z-[9999999999999999990] bg-opacity-50 backdrop-blur-[110.60px]'>
      <div className='w-[90%] flex justify-between items-center'>
        <div className='flex gap-20 max-xl:gap-10 max-lg:gap-5 items-center'>
          <Image src={logo} alt='logo' className='w-[100px] max-xl:w-[80px] max-sm:w-[70px]' />
          <div className='max-md:hidden flex gap-10 max-xl:gap-5 text-[#175574] text-[16px] max-xl:text-[14px] font-semibold'>
            <Link href='/'>Internships</Link>
            <Link href='/'>Jobs</Link>
            <Link href='/'>Course</Link>
          </div>
        </div>
        <div className='flex max-md:hidden items-center gap-10 max-xl:gap-5 text-[#175574] text-[16px] max-xl:text-[14px] font-semibold'>
          <Link href='/' className='flex gap-2 max-xl:gap-1 items-center'><FiSearch className='text-[20px] max-lg:text-[15px]' /> Search</Link>
          <Link href='/'>Candidate Sign-up</Link>
          <Link href='/'>Employer / Post Job</Link>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <MdClose className='text-[35px] text-[#062B43] absolute top-20 right-20 z-[999]' />
            ) : (
              <MdOutlineMenuOpen className='text-[35px] max-sm:w-[25px] text-[#062B43]' />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className='md:hidden absolute top-0 flex flex-col items-center justify-center z-5 gap-5 text-[#175574] text-[16px] font-semibold bg-white w-full h-screen p-5 rounded-lg'>
          <Link href='/' onClick={toggleMenu}>Internships</Link>
          <Link href='/' onClick={toggleMenu}>Jobs</Link>
          <Link href='/' onClick={toggleMenu}>Course</Link>
          <Link href='/' onClick={toggleMenu}>Search</Link>
          <Link href='/' onClick={toggleMenu}>Candidate Sign-up</Link>
          <Link href='/' onClick={toggleMenu}>Employer / Post Job</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
