import Image from 'next/image'
import React from 'react'
import img from './assets/logo.svg'
const Header = () => {
  return (
    <div className='w-full flex justify-center py-10 max-sm:py-5'>
        <div className='w-[80%] max-sm:w-[90%] flex justify-between'>
            <Image src={img} alt='logo' className='max-sm:w-[70px]'/>
            <p className='text-[#175574] text-[18px] max-sm:text-[14px] font-medium'>Contact</p>
        </div>
    </div>
  )
}

export default Header