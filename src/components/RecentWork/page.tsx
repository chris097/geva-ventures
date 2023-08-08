import React from 'react';
import Image, { StaticImageData } from 'next/image';
import recent1 from "@/public/images/frame5.jpeg"
import recent2 from "@/public/images/frame9.jpeg"
import recent3 from "@/public/images/frame10.jpg"
import { Reveal } from '../utils/Reveal';

const recents: { img: StaticImageData }[] = [
    { img: recent1 },
    { img: recent2 },
    { img: recent3 },
    { img: recent2 },
];

const RecentWork = () => {
    return (
        <div className='overflow-x-hidden'>
            <div className='lg:pt-32 pt-24'>
                <Reveal>
                    <div className='lg:flex justify-between items-center w-[90%] mx-auto'>
                        <div>
                            <p className='font-tillitium uppercase text-primarypink text-lg font-semibold'>Latest Projects</p>
                            <p className='lg:text-[40px] font-tillitium text-primaryblack text-[32px] font-bold'>OUR RECENT WORK</p>
                        </div>
                        <button className='bg-primarypink text-white uppercase px-6 py-3 rounded mt-5 text-sm font-medium'>View Projects</button>
                    </div>
                </Reveal>
                <div className='flex lg:justify-between gap-4 mt-16 w-[2200px]'>
                    {recents.map((recent, index) => (
                        <Reveal key={index}>
                            <div className='lg:w-[550px] lg:h-[434px] w-[300px] h-[300px]'>
                                <Image className='w-full h-full' src={recent.img} alt='elevator recent pic' />
                            </div>
                        </Reveal>
                    ))}
                </div>
                <div className='flex justify-center w-full py-8'>
                    <div className='flex lg:gap-4 gap-2 items-center mt-2'>
                        <span className='bg-[#244061] h-2 w-2 lg:w-3 lg:h-3 rounded-full' />
                        <span className='bg-white w-2 h-2 lg:w-3 lg:h-3 rounded-full' />
                        <span className='bg-white w-2 h-2 lg:w-3 lg:h-3 rounded-full' />
                        <span className='bg-white w-2 h-2 lg:w-3 lg:h-3 rounded-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentWork;