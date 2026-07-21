"use client";
import React, { useState, useEffect } from 'react';
import { Reveal } from '@/components/utils/Reveal';
import { testimonials } from '@/data/testimonials';

const avatarColors = ['from-primary to-sky-400', 'from-accent to-orange-400', 'from-purple-500 to-violet-400'];

const Testimonies = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goTo = (idx: number) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveIndex(idx);
            setIsAnimating(false);
        }, 250);
    };

    const next = () => goTo((activeIndex + 1) % testimonials.length);
    const prev = () => goTo((activeIndex - 1 + testimonials.length) % testimonials.length);

    useEffect(() => {
        const t = setInterval(next, 7000);
        return () => clearInterval(t);
    }, [activeIndex]);

    const active = testimonials[activeIndex];
    const initials = active.name.split(' ').slice(0, 2).map(n => n[0]).join('');

    return (
        <section className='bg-slate-950 py-28'>
            <div className='w-[90%] max-w-6xl mx-auto'>

                {/* Header */}
                <Reveal>
                    <div className='text-center mb-20'>
                        <span className='inline-block text-accent text-xs font-black tracking-[0.5em] uppercase mb-5 border border-accent/30 bg-accent/10 px-4 py-2 rounded-full'>
                            Client Stories
                        </span>
                        <h2 className='font-tillitium font-black text-white text-4xl lg:text-5xl leading-tight tracking-tighter mt-4'>
                            WHAT OUR <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400'>CLIENTS</span> SAY
                        </h2>
                    </div>
                </Reveal>

                {/* Main card */}
                <div className='relative'>
                    {/* Background accent */}
                    <div className='absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-[3rem] blur-xl' />

                    <div className='relative bg-slate-900 border border-white/8 rounded-3xl p-10 lg:p-16 overflow-hidden'>
                        {/* Large quote mark */}
                        <div className='absolute top-8 right-8 text-[200px] leading-none text-white/3 font-serif select-none pointer-events-none'>❝</div>

                        <div className={`transition-opacity duration-250 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                            {/* Stars */}
                            <div className='flex gap-1 mb-8'>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className='text-accent text-xl'>★</span>
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className='font-tillitium text-slate-200 text-xl lg:text-2xl leading-relaxed italic max-w-4xl mb-10'>
                                {active.description.replace(/^"|"$/g, '')}
                            </blockquote>

                            {/* Author */}
                            <div className='flex items-center gap-5'>
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${avatarColors[activeIndex % avatarColors.length]} flex items-center justify-center font-black text-white text-xl shadow-xl`}>
                                    {initials}
                                </div>
                                <div>
                                    <p className='text-white font-bold text-base font-tillitium'>{active.name.replace(/,$/, '')}</p>
                                    <p className='text-slate-500 text-xs uppercase tracking-wider mt-1'>{active.location}</p>
                                </div>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className='flex items-center justify-between mt-12 pt-8 border-t border-white/8'>
                            {/* Dots */}
                            <div className='flex gap-2'>
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => goTo(i)}
                                        className={`rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`}
                                    />
                                ))}
                            </div>

                            {/* Arrows */}
                            <div className='flex gap-3'>
                                <button onClick={prev} className='w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white hover:border-primary hover:bg-primary/20 hover:text-primary transition-all duration-300'>
                                    ←
                                </button>
                                <button onClick={next} className='w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-primary/40'>
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust indicators */}
                <Reveal>
                    <div className='grid grid-cols-3 gap-6 mt-10'>
                        {[
                            { num: '1,000+', label: 'Happy clients' },
                            { num: '100%', label: 'Project success rate' },
                            { num: '24/7', label: 'Support available' },
                        ].map(({ num, label }) => (
                            <div key={label} className='text-center border border-white/8 rounded-2xl py-6 hover:border-primary/30 transition-colors duration-300'>
                                <p className='text-white font-black text-2xl font-tillitium'>{num}</p>
                                <p className='text-slate-500 text-xs uppercase tracking-widest mt-1'>{label}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Testimonies;
