"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer/page';
import teamHero from '@/public/images/team_hero.png';
import { Reveal } from '@/components/utils/Reveal';

const departments = [
    {
        name: 'Leadership',
        members: [
            { name: 'Kenneth Ugwu', role: 'Managing Director', bio: 'Over 30 years leading elevator & mobility systems engineering across Nigeria with a relentless focus on quality and innovation.', initials: 'KU' },
            { name: 'Vincent Okafor', role: 'Director of Operations', bio: 'Oversees all installation, maintenance and procurement operations across our Port Harcourt, Lagos, and Abuja offices.', initials: 'VO' },
        ],
    },
    {
        name: 'Engineering',
        members: [
            { name: 'Emeka Nwosu', role: 'Chief Engineer', bio: 'Certified vertical transport specialist with expertise in OTIS, Mitsubishi and Schindler systems.', initials: 'EN' },
            { name: 'Chidi Obi', role: 'Senior Installation Engineer', bio: 'Leads major commercial elevator installations, ensuring compliance with international safety codes.', initials: 'CO' },
            { name: 'Amara Eze', role: 'Escalator Systems Lead', bio: 'Specialises in KONE and Thyssen Krupp escalator systems with 12 years of hands-on experience.', initials: 'AE' },
            { name: 'Samuel Ikenna', role: 'Automatic Door Technician', bio: 'Expert in CAME, DORMA and GEZE automatic door systems for commercial and healthcare facilities.', initials: 'SI' },
        ],
    },
    {
        name: 'Business & Client Relations',
        members: [
            { name: 'Ngozi Adeyemi', role: 'Head of Business Development', bio: 'Builds long-term partnerships with developers, contractors, and facility managers across Nigeria.', initials: 'NA' },
            { name: 'Tunde Balogun', role: 'Client Relations Manager', bio: 'Ensures every client receives prompt, professional support — from initial quote through to post-installation care.', initials: 'TB' },
        ],
    },
];

const values = [
    { icon: '⚡', title: 'Speed & Reliability', desc: 'We respond to callouts within hours, not days.' },
    { icon: '🏆', title: 'Certified Excellence', desc: 'Every engineer holds internationally recognised certifications.' },
    { icon: '🤝', title: 'Client-First Culture', desc: 'Your project timeline and budget are always our top priority.' },
    { icon: '🌍', title: 'Premium Products', desc: 'We import only top-grade systems from Europe, Japan, and the Americas.' },
];

const TeamPage = () => {
    return (
        <main className='bg-slate-950'>
            <Header />

            {/* Hero */}
            <div className='relative h-[420px] lg:h-[520px] overflow-hidden flex items-center'>
                <Image src={teamHero} alt='GEVA Ventures Team' className='absolute inset-0 w-full h-full object-cover object-top' priority />
                <div className='absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/70 to-slate-950/40' />
                <div className='absolute inset-0 opacity-10' style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                <div className='relative z-10 w-[90%] mx-auto max-w-6xl mt-16'>
                    <Reveal>
                        <span className='inline-block text-accent text-xs font-black tracking-[0.5em] uppercase mb-5 border border-accent/30 bg-accent/10 px-4 py-2 rounded-full'>
                            Our People
                        </span>
                    </Reveal>
                    <Reveal>
                        <h1 className='font-tillitium font-extrabold sm:font-black text-white text-4xl sm:text-5xl lg:text-7xl leading-none tracking-tighter'>
                            MEET THE <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-300'>TEAM.</span>
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className='text-slate-400 mt-5 max-w-xl text-lg leading-relaxed'>
                            124+ certified engineers, technicians, and business professionals united by one mission — world-class mobility for Nigeria.
                        </p>
                    </Reveal>
                </div>
            </div>

            {/* Values Strip */}
            <div className='bg-slate-900/50 border-y border-white/5 py-12'>
                <div className='w-[90%] max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
                    {values.map((v, i) => (
                        <Reveal key={i}>
                            <div className='flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group'>
                                <span className='text-3xl mb-3'>{v.icon}</span>
                                <p className='text-white font-bold font-tillitium text-sm mb-1 group-hover:text-primary transition-colors'>{v.title}</p>
                                <p className='text-slate-500 text-xs leading-relaxed'>{v.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Team Sections */}
            {departments.map((dept) => (
                <div key={dept.name} className='bg-slate-950 py-16 lg:py-20 border-b border-white/5 last:border-none'>
                    <div className='w-[90%] max-w-6xl mx-auto'>
                        <Reveal>
                            <div className='flex items-center gap-4 mb-12'>
                                <div className='h-px flex-1 bg-gradient-to-r from-transparent to-white/10' />
                                <span className='text-xs font-black uppercase tracking-[0.4em] text-slate-500 px-4'>{dept.name}</span>
                                <div className='h-px flex-1 bg-gradient-to-l from-transparent to-white/10' />
                            </div>
                        </Reveal>

                        <div className={`grid gap-6 ${dept.members.length === 2 ? 'md:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
                            {dept.members.map((member, i) => (
                                <Reveal key={i}>
                                    <div className='group relative rounded-[2rem] bg-slate-900 border border-white/5 p-8 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 shadow-2xl overflow-hidden h-full flex flex-col'>
                                        {/* Glow */}
                                        <div className='absolute -top-12 -right-12 w-36 h-36 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                                        {/* Avatar */}
                                        <div className='relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-6 shadow-xl shadow-primary/20 shrink-0'>
                                            <span className='text-white font-black text-lg font-tillitium'>{member.initials}</span>
                                        </div>

                                        <div className='relative z-10 flex-1'>
                                            <p className='text-white font-tillitium font-black text-xl mb-1 group-hover:text-primary transition-colors'>{member.name}</p>
                                            <p className='text-accent text-xs font-bold uppercase tracking-widest mb-4'>{member.role}</p>
                                            <p className='text-slate-400 text-sm leading-relaxed'>{member.bio}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            {/* CTA */}
            <div className='bg-slate-950 py-20 lg:py-28'>
                <div className='w-[90%] max-w-4xl mx-auto text-center'>
                    <Reveal>
                        <span className='inline-block text-accent text-xs font-black tracking-[0.5em] uppercase mb-6 border border-accent/30 bg-accent/10 px-4 py-2 rounded-full'>
                            Join Our Team
                        </span>
                        <h2 className='font-tillitium font-extrabold sm:font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tighter mb-6'>
                            WE&apos;RE ALWAYS LOOKING FOR <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-300'>GREAT TALENT.</span>
                        </h2>
                        <p className='text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto'>
                            Are you a certified elevator or escalator engineer? A business development professional? We&apos;d love to hear from you.
                        </p>
                        <div className='flex flex-wrap justify-center gap-4'>
                            <Link href='/contact' className='inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-500 text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-primary/30 hover:scale-105 hover:shadow-primary/50 transition-all duration-300'>
                                Get In Touch <span>→</span>
                            </Link>
                            <Link href='/about' className='inline-flex items-center gap-3 border-2 border-white/10 text-white font-bold text-sm px-8 py-4 rounded-2xl hover:bg-white hover:text-slate-950 hover:border-white transition-all duration-300'>
                                About GEVA
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default TeamPage;
