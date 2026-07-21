import React from 'react';
import { Reveal } from '../utils/Reveal';

// Array of placeholder partners.
const partners = [
    { name: "Otis Elevator Co", tag: "Global" },
    { name: "KONE Corporation", tag: "Partner" },
    { name: "Schindler Group", tag: "Tech" },
    { name: "Thyssenkrupp", tag: "Engineering" },
    { name: "Mitsubishi Electric", tag: "Innovation" },
    { name: "Orona Elevators", tag: "Global" },
];

const Partners = () => {
    return (
        <section className='bg-slate-950 py-16 border-t border-white/5 overflow-hidden'>
            <div className='w-[90%] max-w-7xl mx-auto'>
                <Reveal>
                    <div className='flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10'>
                        <h3 className='font-tillitium font-black text-white text-2xl lg:text-3xl tracking-tight'>
                            Trusted by <span className='text-primary'>Industry Leaders</span>
                        </h3>
                        <p className='text-slate-400 text-sm max-w-md'>
                            We partner with the world&lsquo;s leading elevator and escalator manufacturers to bring you premium, reliable, and safe technology.
                        </p>
                    </div>
                </Reveal>

                <Reveal>
                    {/* Scrolling Marquee Container */}
                    <div className='relative flex overflow-hidden group'>

                        {/* Gradient fades on left and right for seamless scroll effect */}
                        <div className='absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10' />
                        <div className='absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10' />

                        {/* Scrolling track */}
                        <div className='flex items-center gap-12 lg:gap-24 whitespace-nowrap animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused] pr-12 lg:pr-24'>

                            {/* Original Set */}
                            {partners.map((partner, index) => (
                                <div key={index} className='flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default'>
                                    <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0'>
                                        <div className='w-4 h-4 bg-white/80 rounded-sm rotate-45' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='font-bold text-white font-tillitium text-lg tracking-tight'>{partner.name}</span>
                                        <span className='text-[10px] text-slate-500 font-bold uppercase tracking-widest'>{partner.tag}</span>
                                    </div>
                                </div>
                            ))}

                            {/* Duplicate Set for Infinite Scroll Effect */}
                            {partners.map((partner, index) => (
                                <div key={`dup-${index}`} className='flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default'>
                                    <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0'>
                                        <div className='w-4 h-4 bg-white/80 rounded-sm rotate-45' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='font-bold text-white font-tillitium text-lg tracking-tight'>{partner.name}</span>
                                        <span className='text-[10px] text-slate-500 font-bold uppercase tracking-widest'>{partner.tag}</span>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Inline keyframes for marquee since it might not be in tailwind config */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}} />
        </section>
    );
};

export default Partners;
