import React from 'react';
import resultsImg from '../../../public/images/services_banner.png';
import Image from 'next/image';
import { Reveal } from '@/components/utils/Reveal';
import { AnimatedCounter } from '@/components/utils/AnimatedCounter';

const stats = [
    { number: '3526+', title: 'Satisfied Clients', suffix: 'nationwide' },
    { number: '3550+', title: 'Projects Completed', suffix: 'across Nigeria' },
    { number: '124', title: 'Expert Engineers', suffix: 'certified & trained' },
    { number: '72+', title: 'Projects In Pipeline', suffix: 'already booked' },
];

const Result = () => {
    return (
        <section className='relative overflow-hidden bg-white'>
            {/* Full-bleed image with layered gradient */}
            <div className='relative min-h-[500px] lg:h-[780px] py-20 lg:py-0 flex flex-col justify-center'>
                <div className='absolute inset-0'>
                    <Image
                        src={resultsImg}
                        alt='GEVA Ventures building atrium'
                        className='w-full h-full object-cover'
                        priority
                    />
                    {/* Multi-stop gradient overlay */}
                    <div className='absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-primary/30' />

                    {/* Decorative grid lines */}
                    <div className='absolute inset-0 opacity-5'
                        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }}
                    />
                </div>

                {/* Content */}
                <div className='relative z-10 px-5 sm:px-8 lg:px-20'>
                    <div className='max-w-7xl mx-auto w-full'>

                        {/* Heading */}
                        <Reveal>
                            <span className='inline-block text-accent text-[10px] sm:text-xs font-black tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-4 sm:mb-6 border border-accent/30 bg-accent/10 px-4 py-2 rounded-full'>
                                Our Impact
                            </span>
                        </Reveal>
                        <Reveal>
                            <h2 className='font-tillitium font-extrabold sm:font-black text-white text-3xl sm:text-4xl lg:text-6xl leading-none tracking-tighter mb-4'>
                                NUMBERS THAT<br />
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-300'>SPEAK FOR</span> THEMSELVES.
                            </h2>
                        </Reveal>
                        <Reveal>
                            <p className='text-slate-400 text-sm sm:text-base max-w-xl mt-4 mb-10 sm:mb-16 leading-relaxed'>
                                Over three decades of delivering world-class mobility systems across Nigeria — from hospitals to hotels, malls to skyscrapers.
                            </p>
                        </Reveal>

                        {/* Stats Grid */}
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4'>
                            {stats.map((stat, index) => (
                                <Reveal key={index} className="h-full">
                                    <div className='group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:border-primary/50 hover:bg-primary/10 transition-all duration-400 overflow-hidden h-full flex flex-col justify-center'>
                                        {/* Accent glow */}
                                        <div className='absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                                        <p className='text-3xl sm:text-4xl lg:text-5xl font-bold sm:font-black text-white font-tillitium mb-1 sm:mb-2 relative z-10'><AnimatedCounter value={stat.number} /></p>
                                        <p className='text-slate-200 font-bold text-xs sm:text-sm lg:text-base font-tillitium relative z-10 leading-tight'>{stat.title}</p>
                                        <p className='text-slate-500 text-[9px] sm:text-xs uppercase tracking-widest mt-1 sm:mt-2 relative z-10 leading-tight'>{stat.suffix}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;