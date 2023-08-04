import React from 'react';
import {HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight} from 'react-icons/hi2';
import Reveal from '@/components/utils/Reveal';

const Testimonies = () => {
    return (
        <div className=' bg-white py-32'>
            <Reveal>
                <div className='py-10 lg:px-16 w-[90%] mx-auto shadow-sm border-t-[0.5px] border-b-[0.5px] font-tillitium'>
                <div className='lg:flex'>
                    <div className='flex justify-center flex-col lg:items-center'>
                        <Reveal><p className='text-primaryblack text-[25px] whitespace-nowrap font-semibold'>TRUSTED FROM OVER <br /> 1,500 CLIENTS</p></Reveal>
                        <div className='w-44 h-44 mt-10 rounded-full bg-primaryblack' />
                    </div>
                    <div className='lg:ml-32'>
                        <Reveal><p className='leading-tight text-primaryblack mt-6 text-2xl w-[90%] font-tillitium lg:text-[36px]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p></Reveal>
                        <Reveal><p className='font-bold text-xl text-primaryblack mt-10'>Christian Chiemela, <span className='text-primarypink'>CEO</span></p></Reveal>
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