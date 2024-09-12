import React from 'react'
import './Home.css'
import Image from 'next/image'
import img from './assets/companies.svg'

const Companies = () => {
    return (
        <div className='w-full flex justify-center py-20 max-sm:py-5'>
            <div className='w-[100%] flex flex-col items-center'>
                <div className='flex max-sm:w-[90%] flex-col items-center max-sm:items-start'>
                    <h2 className='text-[41px] max-xl:text-[30px] max-lg:text-[24px] max-md:text-[20px] text-[#062B43] font-bold'>
                        500+ leading companies hire through <span className='bg-gradient-to-r from-[#514BD2] to-[#D0904B] bg-clip-text text-transparent'>Hiring tech </span>🤝
                    </h2>
                    <p className='text-[#175574] text-[30px] max-xl:text-[24px] max-lg:text-[20px] max-md:text-[14px] font-semibold'>
                        Get an opportunity to learn from industry leaders
                    </p>
                </div>
                <div className='bgImg flex gap-40 max-sm:gap-5 py-5'>
                    {/* Duplicate the Image */}
                    <Image src={img} alt='companies' />
                    <Image src={img} alt='companies' />
                </div>
            </div>
        </div>
    )
}

export default Companies
