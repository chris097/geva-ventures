"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '../utils/Reveal';
import { projectGallery, projects } from '@/data/projects';
import bannerImg from '../../../public/images/recent_work_banner.png';

const RecentWork = () => {
    const [playing, setPlaying] = useState<boolean>(true);
    const [isMuted, setIsMuted] = useState<boolean>(true);
    const [hovered, setHovered] = useState<boolean>(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
    const playRef = useRef<HTMLVideoElement>(null);

    const videos = [
        {
            title: "Escalator & Lift System Installation",
            description: "Watch our site engineering team deliver a premium escalator & lift system installation.",
            src: "/action_video.mp4",
            tag: "Installation"
        },
        {
            title: "Elevator Modernization Service",
            description: "Witness the technical modernization process of standard elevator cabs and control systems.",
            src: "/action_video.mp4",
            tag: "Modernization"
        },
        {
            title: "Routine Maintenance & Testing",
            description: "Our dedicated technical team carrying out routine safety checks and load testing.",
            src: "/action_video.mp4",
            tag: "Maintenance"
        }
    ];

    const selectVideo = (index: number) => {
        setCurrentVideoIndex(index);
        setPlaying(true);
        // Force the video element to reload and play
        setTimeout(() => {
            if (playRef.current) {
                playRef.current.load();
                playRef.current.play().catch(e => console.log(e));
            }
        }, 50);
    };

    const handlePlayPause = () => {
        if (!playRef.current) return;
        if (playing) {
            playRef.current.pause();
            setPlaying(false);
        } else {
            playRef.current.play().catch(e => console.log(e));
            setPlaying(true);
        }
    };

    const handleMuteToggle = () => {
        if (!playRef.current) return;
        playRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    // Pick 6 prominent projects to feature in the gallery
    const featuredProjects = [
        projects[18], // NDDC
        projects[13], // 1004 Estate
        projects[0],  // Bravado Mall
        projects[1],  // Maas Central Hotel
        projects[2],  // Vinmillan Hotel
        projects[27], // PAMO Teaching Hospital
    ];

    return (
        <section id='company' className='bg-white overflow-hidden'>

            {/* ── Banner strip ── */}
            <div className='relative h-[420px] lg:h-[500px] overflow-hidden'>
                <Image
                    src={bannerImg}
                    alt='GEVAC Ventures completed projects'
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
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10'>
                            {/* Main Video Player */}
                            <div className='lg:col-span-2'>
                                <div
                                    onMouseEnter={() => setHovered(true)}
                                    onMouseLeave={() => setHovered(false)}
                                    onClick={handlePlayPause}
                                    className='group relative overflow-hidden rounded-3xl bg-slate-950 border border-white/10 shadow-2xl lg:h-[480px] h-[280px] cursor-pointer'
                                >
                                    <video
                                        ref={playRef}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        onPlay={() => setPlaying(true)}
                                        onPause={() => setPlaying(false)}
                                        className='w-full h-full object-cover pointer-events-none'
                                        key={currentVideoIndex}
                                    >
                                        <source
                                            src={videos[currentVideoIndex].src}
                                            type='video/mp4'
                                        />
                                    </video>

                                    {/* Centered play/pause overlay */}
                                    <div className={`absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] transition-opacity duration-300 ${(!playing || hovered) ? 'opacity-100' : 'opacity-0'}`}>
                                        <div
                                            className='flex items-center justify-center w-20 h-20 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95'
                                        >
                                            {playing ? (
                                                <svg viewBox='0 0 24 24' fill='white' className='w-8 h-8'>
                                                    <path d='M6 19h4V5H6v14zm8-14v14h4V5h-4z' />
                                                </svg>
                                            ) : (
                                                <svg viewBox='0 0 24 24' fill='white' className='w-8 h-8 ml-1'>
                                                    <path d='M8 5v14l11-7z' />
                                                </svg>
                                            )}
                                        </div>
                                    </div>

                                    {/* Bottom Glassmorphic Control Bar */}
                                    <div
                                        onClick={(e) => e.stopPropagation()}
                                        className={`absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-lg flex items-center justify-between transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                    >
                                        <div className='flex items-center gap-4'>
                                            <button
                                                type='button'
                                                onClick={handlePlayPause}
                                                className='text-white hover:text-primary transition-colors'
                                                aria-label={playing ? 'Pause' : 'Play'}
                                            >
                                                {playing ? (
                                                    <svg viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
                                                        <path d='M6 19h4V5H6v14zm8-14v14h4V5h-4z' />
                                                    </svg>
                                                ) : (
                                                    <svg viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
                                                        <path d='M8 5v14l11-7z' />
                                                    </svg>
                                                )}
                                            </button>
                                            <span className='text-xs font-semibold tracking-wider text-slate-300 uppercase'>
                                                {playing ? 'In Action' : 'Paused'}
                                            </span>
                                        </div>

                                        <div className='flex items-center gap-3'>
                                            <button
                                                type='button'
                                                onClick={handleMuteToggle}
                                                className='p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all hover:scale-105 active:scale-95'
                                                aria-label={isMuted ? 'Unmute' : 'Mute'}
                                            >
                                                {isMuted ? (
                                                    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-4 h-4'>
                                                        <path d='M11 5L6 9H2v6h4l5 4V5z' />
                                                        <line x1='23' y1='9' x2='17' y2='15' />
                                                        <line x1='17' y1='9' x2='23' y2='15' />
                                                    </svg>
                                                ) : (
                                                    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-4 h-4'>
                                                        <polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5' />
                                                        <path d='M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07' />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Playlist Selector Queue */}
                            <div className='flex flex-col gap-3 lg:h-[480px] overflow-y-auto pr-1'>
                                <h4 className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-1'>Playlist Queue</h4>
                                {videos.map((vid, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => selectVideo(idx)}
                                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex flex-col gap-2 ${idx === currentVideoIndex ? 'bg-primary/10 border-primary/40 shadow-lg shadow-primary/5' : 'bg-slate-900/50 border-white/5 hover:border-white/20 hover:bg-slate-900/80'}`}
                                    >
                                        <div className='flex justify-between items-center w-full'>
                                            <span className={`inline-block px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-md ${idx === currentVideoIndex ? 'bg-primary text-white' : 'bg-white/5 text-slate-400 border border-white/5'}`}>
                                                {vid.tag}
                                            </span>
                                            {idx === currentVideoIndex && playing && (
                                                <span className='flex gap-1 items-end h-3'>
                                                    <span className='w-[3px] bg-primary animate-pulse h-2.5' style={{ animationDuration: '0.6s' }} />
                                                    <span className='w-[3px] bg-primary animate-pulse h-3.5' style={{ animationDuration: '0.8s' }} />
                                                    <span className='w-[3px] bg-primary animate-pulse h-2' style={{ animationDuration: '0.5s' }} />
                                                </span>
                                            )}
                                        </div>
                                        <h5 className='text-white font-tillitium font-bold text-sm lg:text-base leading-snug line-clamp-1'>
                                            {vid.title}
                                        </h5>
                                        <p className='text-slate-400 text-xs line-clamp-2 leading-relaxed'>
                                            {vid.description}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>

        </section>
    );
};

export default RecentWork;
