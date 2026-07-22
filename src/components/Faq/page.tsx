"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Reveal } from '../utils/Reveal';
import { faqs as allFaqs } from '@/data/faqs';

interface FaqProps {
    limit?: number;
    showHeading?: boolean;
    showViewAll?: boolean;
}

const Faq = ({ limit, showHeading = true, showViewAll = false }: FaqProps) => {
    const [openTag, setOpenTag] = useState<number | null>(null);
    const faqs = limit ? allFaqs.slice(0, limit) : allFaqs;

    const toggle = (tag: number) => setOpenTag(prev => prev === tag ? null : tag);

    return (
        <section id='faq' className='bg-slate-950 pb-16 pt-16 lg:pb-28 lg:pt-44'>
            <div className='w-[90%] max-w-6xl mx-auto'>

                {/* Two-column layout: heading left, FAQs right */}
                <div className='lg:grid lg:grid-cols-[1fr_1.6fr] gap-20 items-start'>

                    {/* Left: sticky heading */}
                    {showHeading && (
                        <div className='lg:sticky lg:top-28 mb-16 lg:mb-0'>
                            <Reveal>
                                <span className='inline-block text-accent text-xs font-black tracking-[0.5em] uppercase mb-5 border border-accent/30 bg-accent/10 px-4 py-2 rounded-full'>
                                    FAQ
                                </span>
                                <h2 className='font-tillitium font-extrabold sm:font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tighter mt-6 mb-6'>
                                    YOUR <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-300'>QUESTIONS,</span><br />ANSWERED.
                                </h2>
                                <p className='text-slate-400 leading-relaxed text-base mb-8'>
                                    Everything you need to know about our elevator, escalator, and automatic door services.
                                </p>
                                {showViewAll && (
                                    <Link href='/faq' className='inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-500 text-white font-bold text-sm px-7 py-4 rounded-2xl shadow-xl shadow-primary/30 hover:scale-105 hover:shadow-primary/50 transition-all duration-300'>
                                        View All FAQs <span>→</span>
                                    </Link>
                                )}
                            </Reveal>
                        </div>
                    )}

                    {/* Right: accordion */}
                    <div className='space-y-4'>
                        {faqs.map((faq, index) => {
                            const isOpen = openTag === faq.tag;
                            return (
                                <Reveal key={faq.tag}>
                                    <div className={`border rounded-[1.5rem] overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary/40 bg-slate-900/80 shadow-2xl shadow-primary/10' : 'border-white/10 bg-slate-900/30 hover:border-white/20 hover:bg-slate-900/50'}`}>
                                        <button
                                            onClick={() => toggle(faq.tag)}
                                            className='w-full flex items-center justify-between gap-4 px-7 py-6 text-left'
                                        >
                                            <span className='flex items-center gap-4'>
                                                <span className={`text-xs font-black w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white/5 text-slate-400 border border-white/10'}`}>
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                                <span className={`font-semibold font-tillitium tracking-wide text-base lg:text-lg transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-white'}`}>
                                                    {faq.title}
                                                </span>
                                            </span>
                                            <span className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 font-bold transition-all duration-300 ${isOpen ? 'bg-primary border-primary text-white rotate-45 shadow-lg shadow-primary/30' : 'border-white/10 text-slate-400 hover:border-white/30 hover:text-white'}`}>
                                                +
                                            </span>
                                        </button>
                                        {isOpen && (
                                            <div className='px-7 pb-6 text-slate-400 text-sm lg:text-base leading-relaxed border-t border-white/5 pt-4'>
                                                {faq.description}
                                            </div>
                                        )}
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Faq;
