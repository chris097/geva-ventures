"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '../utils/Reveal';
import { projectGallery, projects } from '@/data/projects';
import bannerImg from '../../../public/images/recent_work_banner.png';

const RecentWork = () => {
    const [playing, setPlaying] = useState<boolean>(false);
    const [hovered, setHovered] = useState<boolean>(false);
    const playRef = useRef<HTMLVideoElement>(null);

    // Pick 6 prominent projects to feature in the gallery
    const featuredProjects = [
        projects[18], // NDDC
        projects[13], // 1004 Estate
        projects[0],  // Bravado Mall
        projects[1],  // Maas Central Hotel
        projects[2],  // Vinmillan Hotel
        projects[27], // PAMO Teaching Hospital
    ];

    const handlePlay = () => {
        playRef.current?.play();
        setPlaying(true);
    };
    const handlePause = () => {
        playRef.current?.pause();
        setPlaying(false);
    };

    return (
        <section id='company' className='bg-white overflow-hidden'>

            {/* ── Banner strip ── */}
            <div className='relative h-[420px] lg:h-[500px] overflow-hidden'>
                <Image
                    src={bannerImg}
                    alt='GEVA Ventures completed projects'
                    className='w-full h-full object-cover object-center'
                    priority
                />
                <div className='absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40' />
                {/* Decorative dots */}
                <div className='absolute inset-0 opacity-10'
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
                />

                <div className='absolute inset-0 flex flex-col justify-center w-[90%] mx-auto max-w-7xl left-0 right-0'>
                    <Reveal>
                        <span className='inline-block text-accent text-xs font-black tracking-[0.5em] uppercase mb-5 border border-accent/30 bg-accent/10 px-4 py-2 rounded-full w-fit'>
                            Portfolio
                        </span>
                    </Reveal>
                    <Reveal>
                        <h2 className='font-tillitium font-extrabold sm:font-black text-white text-3xl sm:text-4xl lg:text-6xl leading-none tracking-tighter'>
                            OUR RECENT<br />
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-300'>WORK.</span>
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className='text-slate-400 text-base mt-5 max-w-lg leading-relaxed'>
                            From hospitals to hotels, malls to skyscrapers — we&apos;ve installed and maintained elevators and escalators across Nigeria.
                        </p>
                    </Reveal>
                    <Reveal>
                        <Link
                            href='/projects'
                            className='mt-8 w-fit inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-500 text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-primary/40 hover:scale-105 transition-all duration-300'
                        >
                            View All Projects <span>→</span>
                        </Link>
                    </Reveal>
                </div>
            </div>

            {/* ── Photo Grid ── */}
            <div className='bg-slate-950 py-14'>
                <div className='w-[90%] max-w-7xl mx-auto'>
                    {/* Section label */}
                    <div className='flex items-center justify-between mb-8'>
                        <p className='text-slate-500 text-xs uppercase tracking-[0.4em] font-bold'>Project Gallery</p>
                        <Link href='/projects' className='text-primary text-xs font-bold hover:underline underline-offset-4 transition-all'>View All →</Link>
                    </div>

                    {/* Bento grid layout */}
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 auto-rows-[130px] lg:auto-rows-[160px]'>
                        {projectGallery.map((item, index) => {
                            let gridClass = '';
                            // 3-col bento logic:
                            // Desktop: 0=2x2, 1=1x1, 2=1x1, 3,4,5=1x1
                            // Mobile: 0=2x2, 1,2=1x1, 3,4=1x1, 5=2x1
                            if (index === 0) gridClass = 'col-span-2 row-span-2';
                            else if (index === 5) gridClass = 'col-span-2 lg:col-span-1 row-span-1';
                            else gridClass = 'col-span-1 row-span-1';

                            const project = featuredProjects[index];

                            return (
                                <Reveal key={index} className={`h-full ${gridClass}`}>
                                    <div className='group relative w-full h-full overflow-hidden rounded-xl border border-white/5 hover:border-primary/40 transition-all duration-300 cursor-pointer'>
                                        <Image
                                            src={item.img}
                                            alt={project?.name || `Project ${index + 1}`}
                                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                                        />
                                        {/* Gradient overlay always visible at bottom, darkens on hover */}
                                        <div className='absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300' />

                                        {/* Text container */}
                                        <div className='absolute bottom-0 left-0 right-0 p-4 lg:p-6 flex flex-col justify-end'>
                                            <div>
                                                <span className='inline-block px-2 py-1 bg-white/10 backdrop-blur-md rounded-md text-[9px] lg:text-[10px] text-white/90 uppercase font-bold tracking-widest mb-2'>
                                                    {project?.region} • {project?.year}
                                                </span>
                                                <h4 className='text-white font-tillitium font-bold text-base lg:text-xl leading-tight line-clamp-1'>
                                                    {project?.name}
                                                </h4>
                                                <p className='text-slate-300 text-xs mt-1.5 line-clamp-1'>
                                                    {project?.location} • {project?.lifts} Lift(s)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ── Video Section ── */}
            <div className='bg-slate-900 py-16'>
                <div className='w-[90%] max-w-5xl mx-auto'>
                    <Reveal>
                        <div className='text-center mb-10'>
                            <h3 className='font-tillitium font-bold sm:font-black text-white text-xl sm:text-2xl lg:text-3xl tracking-tight'>
                                See Us <span className='text-primary'>In Action</span>
                            </h3>
                            <p className='text-slate-500 mt-2 text-sm'>Watch our team deliver a premium installation</p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            className='relative overflow-hidden rounded-3xl bg-slate-950 border border-white/10 shadow-2xl lg:h-[560px] h-[280px] flex items-center justify-center'
                        >
                            {/* Play / Pause overlay */}
                            {!playing && (
                                <button
                                    type='button'
                                    onClick={handlePlay}
                                    className='absolute z-30 flex items-center justify-center w-20 h-20 rounded-full bg-primary/90 hover:bg-primary border-4 border-white/30 shadow-2xl shadow-primary/50 transition-all duration-300 hover:scale-110'
                                    aria-label='Play video'
                                >
                                    <svg viewBox='0 0 24 24' fill='white' className='w-8 h-8 ml-1'>
                                        <path d='M8 5v14l11-7z' />
                                    </svg>
                                </button>
                            )}
                            {playing && hovered && (
                                <button
                                    type='button'
                                    onClick={handlePause}
                                    className='absolute z-50 flex items-center justify-center w-16 h-16 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 backdrop-blur-sm transition-all duration-300'
                                    aria-label='Pause video'
                                >
                                    <svg viewBox='0 0 24 24' fill='white' className='w-6 h-6'>
                                        <path d='M6 19h4V5H6v14zm8-14v14h4V5h-4z' />
                                    </svg>
                                </button>
                            )}
                            <video
                                ref={playRef}
                                muted
                                onEnded={() => setPlaying(false)}
                                className='w-full h-full object-cover'
                            >
                                <source
                                    src='https://drive.google.com/uc?id=13wQVOZRdZDn5ixXo-wlyy48NaoTuGsZ1&export=download'
                                    type='video/mp4'
                                />
                            </video>
                        </div>
                    </Reveal>
                </div>
            </div>

        </section>
    );
};

export default RecentWork;
