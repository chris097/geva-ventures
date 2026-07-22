"use client";
import React, { useState } from 'react';
import aboutImg from '../../../public/images/about_modern_office.png';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '../utils/Reveal';
import { AnimatedCounter } from '../utils/AnimatedCounter';

const stats = [
    { value: '745+', label: 'Projects Done' },
    { value: '30+', label: 'Years Experience' },
    { value: '124', label: 'Team Members' },
    { value: '1K+', label: 'Happy Clients' },
];

const pillars = [
    { icon: '⚡', title: 'Emergency Response', desc: 'Round-the-clock support for critical mobility system failures.' },
    { icon: '🏆', title: 'Certified Engineers', desc: 'Our team holds internationally recognised engineering certifications.' },
    { icon: '🌍', title: 'European Standards', desc: 'We import only premium products from Europe, America & Japan.' },
];

const AboutUs = () => {
    const [activeTab, setActiveTab] = useState<'about' | 'vision' | 'contact'>('about');

    return (
        <section className='bg-slate-950 pt-20 pb-28 overflow-hidden'>
            <div className='w-[90%] max-w-7xl mx-auto'>

                {/* Top Row: Image + Stats */}
                <div className='grid lg:grid-cols-2 gap-16 items-center'>

                    {/* Left – Image */}
                    <div className='relative'>
                        <div className='rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/5 relative'>
                            <Image
                                src={aboutImg}
                                alt='GEVA Ventures team at work'
                                className='w-full h-[480px] object-cover'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent' />
                        </div>
                        {/* Floating badge */}
                        <div className='absolute bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-accent text-white rounded-2xl sm:rounded-3xl px-6 py-4 sm:px-8 sm:py-5 shadow-2xl shadow-accent/40 font-tillitium z-10'>
                            <p className='text-2xl sm:text-3xl font-black'>30+</p>
                            <p className='text-[10px] sm:text-xs uppercase tracking-widest font-semibold mt-1 opacity-90'>Years of Excellence</p>
                        </div>
                    </div>

                    {/* Right – Content */}
                    <div className='font-tillitium'>
                        <Reveal>
                            <p className='text-accent text-xs tracking-[0.4em] uppercase font-bold mb-5'>Who We Are</p>
                        </Reveal>
                        <Reveal>
                            <h2 className='text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold sm:font-black leading-tight tracking-tight mb-8'>
                                Nigeria&lsquo;s Premier <br />
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400'>Mobility Systems</span><br />
                                Specialists
                            </h2>
                        </Reveal>

                        {/* Tab Bar */}
                        <Reveal>
                            <div className='flex gap-1 bg-slate-900 p-1 rounded-2xl w-fit mb-8 border border-white/5'>
                                {(['about', 'vision', 'contact'] as const).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-5 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all duration-200 ${activeTab === tab ? 'bg-primary text-white shadow-lg shadow-primary/40' : 'text-slate-400 hover:text-white'}`}
                                    >
                                        {tab === 'about' ? 'About Us' : tab === 'vision' ? 'Our Vision' : 'Contact'}
                                    </button>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal>
                            {activeTab === 'about' && (
                                <p className='text-slate-400 leading-relaxed text-base mb-8'>
                                    <span className='text-accent font-bold'>GEVA VENTURES</span> is the dedicated elevators, escalators and automatic doors division of Gevac Global Services Ltd. We deliver modern vertical mobility systems for commercial, residential and healthcare developments nationwide — backed by certified engineers and a customer-first philosophy.
                                </p>
                            )}
                            {activeTab === 'vision' && (
                                <p className='text-slate-400 leading-relaxed text-base mb-8'>
                                    To modernize access across Nigeria with safe, reliable, and beautifully engineered elevator, escalator, and automatic door solutions — setting the standard for excellence in vertical mobility.
                                </p>
                            )}
                            {activeTab === 'contact' && (
                                <div className='grid grid-cols-2 gap-4 mb-8 text-slate-400 text-sm leading-relaxed'>
                                    {[
                                        { title: 'Head / Port Harcourt', addr: 'No. 1 Chief Val Close off Timothy Lane, Rumuola Road, PH.' },
                                        { title: 'Lagos Office', addr: '3rd Floor Nurses House, Churchgate Street, Victoria Island.' },
                                        { title: 'Abuja Office', addr: 'Suite 9D Lake City Plaza, Oladipo Diva Way, Gudu District.' },
                                        { title: 'Telephone', addr: '+2348035802938 | +2348034422516' },
                                    ].map(({ title, addr }) => (
                                        <div key={title}>
                                            <p className='text-accent font-bold text-xs uppercase tracking-widest mb-1'>{title}</p>
                                            <p>{addr}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Reveal>

                        <Reveal>
                            <Link href='/about' className='inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-500 text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-primary/30 hover:scale-105 hover:shadow-primary/50 transition-all duration-300'>
                                Discover More
                                <span className='text-lg'>→</span>
                            </Link>
                        </Reveal>
                    </div>
                </div>

                {/* Stats Row */}
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-24'>
                    {stats.map((s, i) => (
                        <Reveal key={i}>
                            <div className='border border-white/8 rounded-2xl bg-white/3 p-6 sm:p-8 text-center group hover:border-primary/40 hover:bg-primary/5 transition-all duration-300'>
                                <p className='text-3xl sm:text-4xl lg:text-5xl font-bold sm:font-black text-white group-hover:text-primary transition-colors duration-300'><AnimatedCounter value={s.value} /></p>
                                <p className='text-slate-500 text-[10px] sm:text-xs uppercase tracking-widest mt-2 font-semibold'>{s.label}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Pillars Row */}
                <div className='grid lg:grid-cols-3 gap-6 mt-10'>
                    {pillars.map((p, i) => (
                        <Reveal key={i}>
                            <div className='border border-white/8 rounded-2xl p-8 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group'>
                                <div className='text-4xl mb-4'>{p.icon}</div>
                                <p className='text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300'>{p.title}</p>
                                <p className='text-slate-500 text-sm leading-relaxed'>{p.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutUs;