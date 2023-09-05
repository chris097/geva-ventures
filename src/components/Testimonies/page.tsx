import React from 'react';
import {HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight} from 'react-icons/hi2';
import { Reveal} from '@/components/utils/Reveal';
import Image from 'next/image';
import client1 from "@/public/images/technical1.png";

const Testimonies = () => {
    return (
        <div className=' bg-white py-32'>
            <Reveal>
                <div className='py-10 lg:px-16 w-[90%] mx-auto shadow-sm border-t-[0.5px] border-b-[0.5px] font-tillitium'>
                <div className='lg:flex'>
                    <div className='flex justify-center flex-col lg:items-center'>
                        <Reveal><p className='text-primaryblack text-[25px] whitespace-nowrap font-semibold'>TRUSTED FROM OVER <br /> 1,000 CLIENTS</p></Reveal>
                            <div className='w-44 h-44 mt-14 lg:ml-32'>
                                <Image className='w-full h-full rounded-full' src={client1} alt="client" />
                        </div>
                    </div>
                    <div className='lg:ml-28'>
                        <Reveal><p className='leading-normal text-primaryblack mt-6 text-2xl w-full font-tillitium lg:text-[30px]'>From the initial consultation to the final inspection, the entire process was seamless and efficient. Your team displayed an impressive level of professionalism and expertise throughout the project.</p></Reveal>
                        <Reveal><p className='font-bold text-xl text-primaryblack mt-10'>DR. IBEABUCHI CMD, <span className='text-primarypink text-sm'>PALMARS HOSPITAL, PORT HARCOURT, RIVERS STATE, NIGERIA</span></p></Reveal>
                    </div>
                </div>
                <div className='flex justify-end mt-10'>
                    <div className='bg-primarypink px-4 hover:bg-primaryblack text-white py-3'>
                        <HiOutlineArrowSmallLeft size={32} />
                    </div>
                    <div className='bg-primarypink hover:bg-primaryblack px-4 text-white py-3'>
                        <HiOutlineArrowSmallRight size={32} />
                    </div>
                </div>
            </div>
            </Reveal>
        </div>
    );
};

export default Testimonies;