import React from 'react';
import result from "@/public/images/result.png";
import Image from 'next/image';
import {Reveal} from '@/components/utils/Reveal';
import { IoIosPeople } from 'react-icons/io';
import { FaPeopleRoof,FaBuildingLock } from 'react-icons/fa6';
import { BiBookAdd } from 'react-icons/bi';

const results:{number:string, title: string, icon: any}[] = [
    {number: "3526+", title: "Tons Of Customers", icon: <FaPeopleRoof color="#4F81BD" size="32px" />},
    {number: "3550+", title: "Complete Projects", icon: <FaBuildingLock color="#4F81BD" size="28px" />},
    {number: "124+", title: "Team Members", icon: <IoIosPeople color="#4F81BD" size="38px" />},
    {number: "72+", title: "Upcoming Projects", icon: <BiBookAdd color="#4F81BD" size="32px" />},
]

const Result = () => {
    return (
        <div className='relative'>
            <div className='mt-14'>
                <div className='bg-black absolute opacity-90 w-5/6 z-30 lg:h-[800px] h-[750px]' />
                <Image className="w-full lg:h-[800px] h-[750px] image-container" src={result} alt="elevator result" />
            </div>
            <div className='text-white z-40 absolute w-full top-0 px-10 pt-24 font-tillitium'>
                <Reveal><p className='lg:text-xl font-bold text-base text-primarypink'>OUR COMPANY STATS</p></Reveal>
                <Reveal><p className='lg:text-[40px] text-2xl font-semibold leading-normal text-white lg:w-[40%] mt-5'>EXCELLENCE DRIVEN FOR GETTING UNRIVALED RESULTS.</p></Reveal>
                    <div className='grid lg:grid-cols-4 grid-cols-2 lg:mt-10 mt-16 gap-6'>
                {results.map((result, index) => (
                    <Reveal  key={index}>
                        <div className='bg-primaryblue w-full font-tillitium lg:h-[280px] lg:py-0 py-4 h-auto gap-1 flex justify-center flex-col sm:items-start items-center px-10 lg:mt-10'>
                            <div className='lg:w-[80px] lg:h-[80px] flex justify-center items-center rounded-full w-[55px] h-[55px] bg-white'>
                                {result.icon}
                            </div>
                            <p className='text-white lg:text-[40px] md:mt-8 mt-2 font-bold text-2xl'>{result.number}</p>
                            <p className='lg:text-lg text-sm md:mt-4 mt-2 font-medium text-white whitespace-nowrap'>{result.title}</p>
                    </div>
                    </Reveal>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Result;