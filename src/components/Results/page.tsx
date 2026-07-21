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
            <div className='relative h-[700px] lg:h-[780px]'>
                <Image
                    src={resultsImg}
                    alt='GEVA Ventures building atrium'
                    className='w-full h-full object-cover'
                    priority
                />
                {/* Multi-stop gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-primary/30' />

                {/* Decorative grid lines */}
                <div className='absolute inset-0 opacity-5'
                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }}
                />

                {/* Content */}
                <div className='absolute inset-0 flex flex-col justify-center px-8 lg:px-20'>
                    <div className='max-w-7xl mx-auto w-full'>

                        {/* Heading */}
                        <Reveal>
                            <span className='inline-block text-accent text-xs font-black tracking-[0.5em] uppercase mb-6 border border-accent/30 bg-accent/10 px-4 py-2 rounded-full'>
                                Our Impact
                            </span>
                        </Reveal>
                        <Reveal>
                            <h2 className='font-tillitium font-black text-white text-4xl lg:text-6xl leading-none tracking-tighter mb-4'>
                                NUMBERS THAT<br />
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-300'>SPEAK FOR</span> THEMSELVES.
                            </h2>
                        </Reveal>
                        <Reveal>
                            <p className='text-slate-400 text-base max-w-xl mt-4 mb-16 leading-relaxed'>
                                Over three decades of delivering world-class mobility systems across Nigeria — from hospitals to hotels, malls to skyscrapers.
                            </p>
                        </Reveal>

                        {/* Stats Grid */}
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                            {stats.map((stat, index) => (
                                <Reveal key={index}>
                                    <div className='group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7 hover:border-primary/50 hover:bg-primary/10 transition-all duration-400 overflow-hidden'>
                                        {/* Accent glow */}
                                        <div className='absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                                        <p className='text-4xl lg:text-5xl font-black text-white font-tillitium mb-2 relative z-10'><AnimatedCounter value={stat.number} /></p>
                                        <p className='text-slate-200 font-bold text-sm lg:text-base font-tillitium relative z-10'>{stat.title}</p>
                                        <p className='text-slate-500 text-xs uppercase tracking-widest mt-1 relative z-10'>{stat.suffix}</p>
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