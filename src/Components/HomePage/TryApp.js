import React from 'react'
import Image from 'next/image'
import img from './assets/play.svg'
import Link from 'next/link'
const TryApp = () => {
  return (
    <div className='w-full flex justify-center bg-white py-10 max-sm:py-5'>
        <Link href='/' className='w-[80%] max-sm:w-[90%]'><Image src={img} alt='play store' className='w-full'/></Link>
    </div>
  )
}

export default TryApp