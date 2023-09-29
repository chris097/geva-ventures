import React from 'react';
import Image from 'next/image';
import technical1 from '@/public/images/man.jpeg';
import technical2 from '@/public/images/woman.jpeg';
import technical3 from '@/public/images/technical1.png';
import Linkedin from '@/public/svgs/Linkedin'
import {Reveal} from '../utils/Reveal';

const teams = [
    {url: technical1, name: "Okolichukwu Ebube", role: "Legal Director"},
    {url: technical2, name: "Olajumoke Owoborode-Ilugo", role: "Head of Public Relations"},
    {url: technical3, name: "Helen Chai", role: "Head of Construction"},
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
                            <Image className='w-full lg:h-[350.33px] h-[240px] object-center' src={team.url} alt="elevator technical team" />
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
                </div>
            </div>
        </div>
    );
};

export default Team;