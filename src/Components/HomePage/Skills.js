'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import tech1 from './assets/tech1.svg';
import tech2 from './assets/tech2.svg';
import tech3 from './assets/tech3.svg';
import tech4 from './assets/tech4.svg';
import tech5 from './assets/tech5.svg';
import tech6 from './assets/tech6.svg';
import tech7 from './assets/tech7.svg';

const Skills = () => {
    // State to manage the active tab and animation
    const [activeTab, setActiveTab] = useState('Tech');
    const [isAnimating, setIsAnimating] = useState(false);

    // Array of tab data
    const tabs = [
        'Tech',
        'Non-Tech',
        'Management',
        'Media',
    ];

    // Object to map tab names to their respective content
    const tabContent = {
        'Tech': [tech1, tech2, tech3, tech4, tech5, tech6, tech7],
        'Non-Tech': [tech1, tech2, tech3, tech4, tech5, tech6, tech7],
        'Management': [tech1, tech2, tech3, tech4, tech5, tech6, tech7],
        'Media': [tech1, tech2, tech3, tech4, tech5, tech6, tech7],
    };

    // Function to handle tab change with animation
    const handleTabChange = (tab) => {
        setIsAnimating(true);
        setTimeout(() => {
            setActiveTab(tab);
            setIsAnimating(false);
        }, 300); // Duration should match the CSS animation duration
    };

    return (
        <>
            <div className='flex w-full justify-center py-10 max-sm:py-0'>
                <div className='w-[90%] flex flex-col items-center'>
                    <h2 className='text-[41px] text-center max-xl:text-[30px] max-lg:text-[24px] max-md:text-[20px] text-[#062B43] font-bold'>
                        Unlock Expertise in Diverse Tech Skills!
                    </h2>
                    <div className='w-full py-10'>
                        {/* Tab Navigation */}
                        <div className='flex justify-center max-lg:flex-wrap gap-20 max-lg:gap-5 max-sm:gap-0'>
                            {tabs.map((tab) => (
                                <p
                                    key={tab}
                                    onClick={() => handleTabChange(tab)}
                                    className={`text-[20px] max-lg:text-[16px] max-md:text-[14px] text-[#062B43] px-4 py-2 max-md:px-3 max-md:py-1 rounded-[30px] cursor-pointer ${activeTab === tab ? 'bg-[#D79442] text-[#fff]' : ''}`}
                                >
                                    {tab}
                                </p>
                            ))}
                        </div>

                        {/* Content Panels */}
                        <div className='flex justify-center flex-wrap gap-10 max-sm:gap-2 mx-40 max-xl:mx-0 py-10'>
                            {tabContent[activeTab].map((content, index) => (
                                <Link href='/' key={index} className='max-[470px]:w-full'>
                                    <Image
                                        className={`transition-transform max-[470px]:w-full duration-300 ${isAnimating ? 'scale-110 opacity-80' : 'scale-100 opacity-100'}`}
                                        src={content}
                                        alt={`Tech skill ${index}`}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;
