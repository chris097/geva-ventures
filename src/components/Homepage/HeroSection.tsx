"use client";
import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import frame2 from '@/public/images/hero_escalator.png';
import frame1 from '@/public/images/hero_elevator.png';
import frame3 from '@/public/images/hero_auto_doors.png';
import { Reveal } from '../utils/Reveal';
import PhoneIcon from '@/public/svgs/PhoneIcon';

interface metadata {
    frame: StaticImageData;
    heading: string | JSX.Element;
    description: string;
    buttonName: string;
    number: string;
    subText: string;
}

const tabs = [
    { tab: 1, name: 'ELEVATOR INSTALLATION' },
    { tab: 2, name: 'ESCALATOR INSTALLATION' },
    { tab: 3, name: 'AUTOMATIC DOORS' },
];

const Banner = ({ frame, heading, description, buttonName, number, subText }: metadata) => {
    return (
        <>
            <div className='absolute inset-0'>
                <Image src={frame} alt='GEVA hero background' className='h-full w-full object-cover' />
                <div className='absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent' />
            </div>
            <div className='relative z-20 mx-auto flex min-h-full lg:h-full w-[90%] max-w-7xl flex-col justify-center gap-8 sm:gap-10 pt-40 pb-48 sm:pt-32 sm:pb-32 lg:py-12 text-white'>
                <div className='max-w-2xl space-y-6'>
                    <Reveal>
                        <p className='text-xs sm:text-sm uppercase tracking-[0.32em] text-sky-200/90'>Elevating your spaces with high-performance mobility systems</p>
                    </Reveal>
                    <Reveal>
                        <h1 className='text-3xl font-semibold sm:font-bold tracking-tight leading-tight sm:text-5xl lg:text-7xl drop-shadow-lg'>{heading}</h1>
                    </Reveal>
                    <Reveal>
                        <p className='text-sm sm:text-base leading-7 sm:leading-8 text-slate-100/90'>{description}</p>
                    </Reveal>
                    <Reveal>
                        <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
                            <Link href='/contact' className='inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-orange-400 px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-accent/40 transition-all hover:scale-105'>
                                {buttonName}
                            </Link>
                            <Link href='#service' className='inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/20 hover:scale-105'>
                                Explore Services
                            </Link>
                        </div>
                    </Reveal>
                </div>
                <Reveal>
                    <div className='grid gap-4 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-slate-950/25 backdrop-blur-xl sm:grid-cols-[1fr_1fr]'>
                        <div className='flex items-center gap-4'>
                            <div className='flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900/90 text-white shadow-lg shadow-slate-950/20'>
                                <PhoneIcon fillColor='#ffffff' width='18px' height='15.5px' />
                            </div>
                            <div>
                                <p className='text-[10px] sm:text-xs uppercase tracking-widest text-slate-300'>Call our mobility team</p>
                                <p className='text-lg sm:text-xl font-semibold text-white'>{number}</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center rounded-3xl bg-slate-950/20 p-4 text-slate-100'>
                            <p className='text-[10px] sm:text-xs uppercase tracking-widest text-slate-300'>Fast response & modern support</p>
                            <p className='mt-2 text-base sm:text-lg font-semibold'>{subText}</p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </>
    );
};

const HeroSection = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === tabs.length ? 1 : prevIndex + 1));
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 7000);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <section className='relative w-full font-tillitium min-h-[900px] lg:h-screen lg:min-h-[720px] overflow-hidden'>
            <Banner
                frame={activeIndex === 1 ? frame1 : activeIndex === 2 ? frame2 : frame3}
                heading={<span>WELCOME TO <span className='text-primary'>GEVA VENTURES</span></span>}
                description='Modern vertical mobility systems for elevators, escalators and automatic doors.'
                buttonName='Request Quote'
                subText='Reliable support for engineered mobility solutions.'
                number='+2348035802938'
            />

            <div className='absolute bottom-6 sm:bottom-10 left-1/2 z-40 w-[min(94%,980px)] -translate-x-1/2 rounded-3xl sm:rounded-full border border-white/40 bg-white/70 px-4 py-4 sm:px-4 sm:py-2.5 shadow-2xl shadow-slate-900/20 backdrop-blur-xl'>
                <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
                    <div className='text-center sm:text-left'>
                        <p className='text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-500'>Featured solutions</p>
                        <p className='text-xs sm:text-sm font-semibold text-slate-900 mt-0.5 sm:mt-0'>Elevators, escalators, automatic doors.</p>
                    </div>
                    <div className='flex flex-wrap justify-center gap-2 sm:gap-3 sm:justify-end'>
                        {tabs.map((tab) => (
                            <button
                                key={tab.tab}
                                type='button'
                                onClick={() => setActiveIndex(tab.tab)}
                                className={`rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-sm transition ${tab.tab === activeIndex ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 bg-white text-slate-700 hover:border-primary hover:text-primary'}`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
