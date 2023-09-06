import React from 'react';
import Image from 'next/image';
import technical1 from '@/public/images/technical1.png';
import technical2 from '@/public/images/technical2.png';
import Linkedin from '@/public/svgs/Linkedin'
import {Reveal} from '../utils/Reveal';

const teams = [
    {url: technical1, name: "Helen Chai", role: "Head of Construction"},
    {url: technical2, name: "Helen Chai", role: "Head of Construction"},
    {url: technical1, name: "Helen Chai", role: "Head of Construction"},
]

const Team = () => {

    return (
        <div className='pt-8 pb-32 overflow-x-hidden'>
            <div className='w-[90%] mx-auto relative'>
                <Reveal><p className='lg:text-center text-lg font-tillitium text-primarypink font-semibold'>TEAM</p></Reveal>
                <Reveal><p className='lg:text-center lg:text-[40px] font-tillitium text-primaryblack text-[32px] font-bold pb-14'>OUR TEAM</p></Reveal>
                {/* <div className='flex lg:justify-between lg:gap-10 gap-6 lg:w-full w-[1200px]'> */}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                    {teams.map((team, index) => (
                        <div className='bg-white font-tillitium p-8 w-full border-[#f5f5f5]' key={index}>
                            <Reveal>
                            <div>
                            <Image className='w-full lg:h-[350.33px] h-[240px]' src={technical1} alt="elevator technical team" />
                            <div className='flex justify-center pt-8 pb-6 items-center'>
                                <div>
                                    <p className='text-primaryblack font-tillitium text-center text-[30px] font-semibold'>{team.name}</p>
                                    <p className='lg:text-lg text-sm text-center mt-2'>{team.role}</p>
                                </div>
                            </div>
                        </div>
                        </Reveal>
                            </div>
                    ))}
                    {/* <div className='absolute top-1/2 left-0 bg-black rounded-full flex justify-center items-center w-[48px] h-[48px] -mt-6'>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.9992 9.99994H6.81286L13.4156 3.42536C13.7924 3.04906 14.004 2.53869 14.004 2.00653C14.004 1.47436 13.7924 0.963996 13.4156 0.587699C13.0388 0.211402 12.5278 0 11.995 0C11.4622 0 10.9512 0.211402 10.5744 0.587699L0.570264 10.5795C0.388107 10.7695 0.245318 10.9936 0.150089 11.2389C-0.0500298 11.7254 -0.0500298 12.2711 0.150089 12.7577C0.245318 13.003 0.388107 13.2271 0.570264 13.4171L10.5744 23.4089C10.7604 23.5962 10.9817 23.7449 11.2255 23.8463C11.4694 23.9478 11.7309 24 11.995 24C12.2591 24 12.5207 23.9478 12.7645 23.8463C13.0083 23.7449 13.2296 23.5962 13.4156 23.4089C13.6031 23.2231 13.752 23.0021 13.8536 22.7586C13.9551 22.5151 14.0074 22.2539 14.0074 21.9901C14.0074 21.7263 13.9551 21.4651 13.8536 21.2215C13.752 20.978 13.6031 20.757 13.4156 20.5712L6.81286 13.9966H21.9992C22.5298 13.9966 23.0387 13.7861 23.414 13.4113C23.7892 13.0366 24 12.5283 24 11.9983C24 11.4683 23.7892 10.96 23.414 10.5852C23.0387 10.2105 22.5298 9.99994 21.9992 9.99994Z" fill="white" />
                        </svg>
                    </div>
                    <div className='absolute top-1/2 right-0 bg-black rounded-full flex justify-center items-center w-[48px] h-[48px] -mt-6'>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.8499 11.2389C23.7547 10.9936 23.6119 10.7695 23.4297 10.5795L13.4256 0.587699C13.239 0.401376 13.0176 0.253576 12.7738 0.152739C12.5301 0.051901 12.2688 0 12.005 0C11.4722 0 10.9612 0.211402 10.5844 0.587699C10.3978 0.774023 10.2499 0.995221 10.1489 1.23866C10.0479 1.48211 9.99597 1.74303 9.99597 2.00653C9.99597 2.53869 10.2076 3.04906 10.5844 3.42536L17.1871 9.99994H2.00083C1.47018 9.99994 0.961259 10.2105 0.58603 10.5852C0.210802 10.96 0 11.4683 0 11.9983C0 12.5283 0.210802 13.0366 0.58603 13.4113C0.961259 13.7861 1.47018 13.9966 2.00083 13.9966H17.1871L10.5844 20.5712C10.3969 20.757 10.248 20.978 10.1464 21.2215C10.0449 21.4651 9.99256 21.7263 9.99256 21.9901C9.99256 22.2539 10.0449 22.5151 10.1464 22.7586C10.248 23.0021 10.3969 23.2231 10.5844 23.4089C10.7704 23.5962 10.9917 23.7449 11.2355 23.8463C11.4793 23.9478 11.7409 24 12.005 24C12.2691 24 12.5306 23.9478 12.7745 23.8463C13.0183 23.7449 13.2396 23.5962 13.4256 23.4089L23.4297 13.4171C23.6119 13.2271 23.7547 13.003 23.8499 12.7577C24.05 12.2711 24.05 11.7254 23.8499 11.2389Z" fill="white" />
                        </svg>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Team;