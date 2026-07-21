import React from 'react';
import Image from 'next/image';
import { Reveal } from '../utils/Reveal';
import { teams } from '@/data/team';

const Team = () => {

    return (
        <div className='pt-16 pb-32 overflow-x-hidden'>
            <div className='w-[90%] mx-auto relative'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                    {teams.map((team) => (
                        <div className='bg-white font-tillitium p-8 w-full border-[#f5f5f5]' key={team.name}>
                            <Reveal>
                                <div>
                                    <Image className='w-full lg:h-[350.33px] h-[240px] object-cover object-center' src={team.url} alt={`${team.name}, ${team.role} at GEVA VENTURES`} />
                                    <div className='flex justify-center pt-8 pb-6 items-center'>
                                        <div>
                                            <p className='text-ink font-tillitium text-center text-[30px] font-semibold'>{team.name}</p>
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
