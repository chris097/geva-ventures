import React from 'react';
import Link from 'next/link';
import { Reveal } from '../utils/Reveal';

const contactItems = [
    {
        tag: 'OFFICE HOURS',
        value: 'Mon – Sat · 9:00 am – 6:00 pm',
        sub: 'We respond within 2 business hours',
        emoji: '🕘',
        accent: 'from-primary to-sky-500',
    },
    {
        tag: 'CALL US',
        value: '+234 803 580 2938\n+234 803 442 2516',
        sub: 'info@gevacglobalservicesltd.com',
        emoji: '📞',
        accent: 'from-accent to-orange-400',
    },
    {
        tag: 'OUR OFFICES',
        value: 'Lagos · Victoria Island\nPort Harcourt · Rumuola Road',
        sub: 'Abuja · Gudu District',
        emoji: '📍',
        accent: 'from-purple-500 to-violet-400',
    },
];

const ContactUs = () => {
    return (
        <section id='contact' className='bg-slate-950 py-52 overflow-hidden relative'>
            {/* Background decoration */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none' />

            <div className='w-[90%] max-w-6xl mx-auto relative z-10'>

                {/* Heading */}
                <Reveal>
                    <div className='text-center mb-16'>
                        <span className='inline-block text-accent text-xs font-black tracking-[0.5em] uppercase mb-5 border border-accent/30 bg-accent/10 px-4 py-2 rounded-full'>
                            Get In Touch
                        </span>
                        <h2 className='font-tillitium font-black text-white text-4xl lg:text-5xl leading-tight tracking-tighter mt-5'>
                            WE&apos;RE READY TO <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400'>HELP YOU.</span>
                        </h2>
                        <p className='text-slate-500 mt-4 text-base max-w-xl mx-auto leading-relaxed'>
                            Whether you need a quote, a site visit, or emergency support — our team is always one call away.
                        </p>
                    </div>
                </Reveal>

                {/* Contact cards */}
                <div className='grid lg:grid-cols-3 gap-6 mb-6'>
                    {contactItems.map((item, i) => (
                        <Reveal key={i}>
                            <div className='group relative bg-slate-900 border border-white/8 rounded-3xl p-8 overflow-hidden hover:border-white/15 transition-all duration-300 hover:-translate-y-1 h-full'>
                                {/* Gradient accent top bar */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Emoji icon */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-2xl mb-6 shadow-xl`}>
                                    {item.emoji}
                                </div>

                                <p className='text-xs font-black tracking-[0.4em] uppercase text-slate-500 mb-3'>{item.tag}</p>
                                <p className='text-white font-bold text-base font-tillitium whitespace-pre-line leading-relaxed mb-2'>
                                    {item.value}
                                </p>
                                <p className='text-slate-500 text-sm'>{item.sub}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Direct Connect Section: Emails, WhatsApp, QR */}
                <div className='grid lg:grid-cols-3 gap-6 mb-12'>
                    {/* Emails Card */}
                    <Reveal>
                        <div className='bg-slate-900 border border-white/8 rounded-3xl p-8 hover:border-white/15 transition-all duration-300 h-full'>
                            <p className='text-xs font-black tracking-[0.4em] uppercase text-slate-500 mb-6'>Direct Emails</p>
                            <div className='space-y-4'>
                                <a href="mailto:vincent@gevacglobalservicesltd.com" className='group block'>
                                    <p className='text-white font-bold text-sm group-hover:text-primary transition-colors'>Vincent</p>
                                    <p className='text-slate-400 text-xs'>vincent@gevacglobalservicesltd.com</p>
                                </a>
                                <a href="mailto:kenneth@gevacglobalservicesltd.com" className='group block'>
                                    <p className='text-white font-bold text-sm group-hover:text-primary transition-colors'>Kenneth</p>
                                    <p className='text-slate-400 text-xs'>kenneth@gevacglobalservicesltd.com</p>
                                </a>
                                <a href="mailto:info@gevacglobalservicesltd.com" className='group block'>
                                    <p className='text-white font-bold text-sm group-hover:text-primary transition-colors'>General Info</p>
                                    <p className='text-slate-400 text-xs'>info@gevacglobalservicesltd.com</p>
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    {/* WhatsApp Card */}
                    <Reveal>
                        <div className='bg-gradient-to-br from-[#075E54]/40 to-slate-900 border border-[#25D366]/20 rounded-3xl p-8 hover:border-[#25D366]/40 transition-all duration-300 flex flex-col h-full'>
                            <p className='text-xs font-black tracking-[0.4em] uppercase text-[#25D366]/70 mb-4'>WhatsApp Support</p>
                            <div className='flex-1 flex flex-col justify-center items-center text-center'>
                                <div className='w-14 h-14 bg-[#25D366]/20 rounded-full flex items-center justify-center mb-3'>
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#25D366]">
                                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.441-1.273.6-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
                                    </svg>
                                </div>
                                <h4 className='text-white font-bold text-lg mb-1'>Chat with us</h4>
                                <p className='text-slate-400 text-sm mb-4'>Available for urgent technical support and quotes.</p>
                                <a href="https://wa.me/2348035802938" target="_blank" rel="noreferrer" className='bg-[#25D366] hover:bg-[#1da851] text-white text-sm font-bold py-2.5 px-6 rounded-full transition-colors w-full'>
                                    Start Chat
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    {/* QR Code Card */}
                    <Reveal>
                        <div className='bg-slate-900 border border-white/8 rounded-3xl p-8 hover:border-white/15 transition-all duration-300 flex flex-col items-center justify-center text-center h-full'>
                            <p className='text-xs font-black tracking-[0.4em] uppercase text-slate-500 mb-4 w-full text-left'>Scan to Connect</p>
                            <div className='w-28 h-28 bg-white rounded-xl p-2 mb-4 flex items-center justify-center overflow-hidden'>
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://geva-ventures.com" alt="QR Code" className='w-full h-full object-contain' />
                            </div>
                            <h4 className='text-white font-bold text-sm'>Save our Contact</h4>
                            <p className='text-slate-500 text-xs mt-1'>Scan with your phone camera</p>
                        </div>
                    </Reveal>
                </div>

                {/* CTA Banner */}
                <Reveal>
                    <div className='relative bg-gradient-to-br from-primary/20 to-sky-500/10 border border-primary/20 rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden'>
                        <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none' />
                        <div className='relative z-10'>
                            <h3 className='font-tillitium font-black text-white text-2xl lg:text-3xl tracking-tight'>Ready to elevate your building?</h3>
                            <p className='text-slate-400 mt-2 text-sm lg:text-base'>Schedule a free site visit and get a detailed project quote.</p>
                        </div>
                        <Link
                            href='/contact'
                            className='relative z-10 shrink-0 inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-500 text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-2xl shadow-primary/40 hover:scale-105 hover:shadow-primary/60 transition-all duration-300 whitespace-nowrap'
                        >
                            Book a Free Consultation <span className='text-lg'>→</span>
                        </Link>
                    </div>
                </Reveal>

            </div>
        </section>
    );
};

export default ContactUs;
