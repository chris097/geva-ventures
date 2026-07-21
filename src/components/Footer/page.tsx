import React from 'react';
import Logo from '@/public/svgs/Logo';
import TwitterIcon from '@/public/svgs/TwitterIcon';
import LinkedIcon from '@/public/svgs/LinkedIcon';
import FacebookIcon from '@/public/svgs/FacebookIcon';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6';
import { navLinks } from '@/data/navLinks';

const Footer = () => {
    return (
        <div className='bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 lg:h-auto h-auto pb-10'>
            <div className='lg:flex block justify-between text-slate-300 w-[90%] mx-auto pt-14'>
                <div className='lg:w-[30%] w-[90%]'>
                    <div className='flex items-center gap-4'>
                        <Logo />
                        <div>
                            <p className='text-white font-bold tracking-tight text-xl font-tillitium'>GEVA VENTURES</p>
                            <p className='text-[10px] uppercase tracking-wider text-slate-400'>A Subsidiary of Gevac Global Services Ltd</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <p className='text-lg font-semibold text-white'>Lagos Office</p>
                        <p className='mt-2 text-sm text-slate-400 leading-relaxed'>3rd Floor Nurses House, Churchgate Street, Victoria Island, Lagos.</p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-lg font-semibold text-white'>Port Harcourt Office</p>
                        <p className='mt-2 text-sm text-slate-400 leading-relaxed'>No. 1 Chief Val Close off Timothy Lane, Rumuola Road, Port Harcourt, Rivers State.</p>
                        <p className='mt-2 text-sm text-slate-400 leading-relaxed'>No. 12 Ohiaimini Road off Rumuola Road, Port Harcourt, Rivers State.</p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-lg font-semibold text-white'>Abuja Office</p>
                        <p className='mt-2 text-sm text-slate-400 leading-relaxed'>Suite 9D Lake City Plaza, Oladipo Diva Way, Gudu District, Abuja.</p>
                    </div>
                </div>
                <div className='mt-10 lg:mt-0'>
                    <p className='text-xl font-semibold text-white'>Useful Links</p>
                    <div className='mt-6 flex flex-col gap-3 text-sm text-slate-400'>
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className='transition-all hover:text-white hover:translate-x-1'>{link.label}</Link>
                        ))}
                        <Link href='/team' className='transition-all hover:text-white hover:translate-x-1'>Our Team</Link>
                    </div>
                </div>
                <div className='lg:mt-0 mt-7'>
                    <p className='text-xl font-semibold text-white'>Other Links</p>
                    <div className='mt-6 flex flex-col gap-3 text-sm text-slate-400'>
                        <Link href='/quality-policy' className='transition-all hover:text-white hover:translate-x-1'>Our Quality Policy</Link>
                        <Link href='/hse-policy' className='transition-all hover:text-white hover:translate-x-1'>Health Safety Policy</Link>
                    </div>
                </div>
                <div className='lg:mt-0 mt-7'>
                    <p className='text-xl font-semibold text-white'>Social Links</p>
                    <div className='mt-6 flex gap-3 items-center'>
                        <TwitterIcon />
                        <LinkedIcon />
                        <a href='https://wa.me/2348035802938' target='_blank' rel='noopener noreferrer' className='flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-accent'>
                            <FaWhatsapp size={16} />
                        </a>
                        <FacebookIcon />
                    </div>
                </div>
            </div>
            <div className='border-t-[0.5px] w-[90%] mx-auto mt-14 border-slate-800' />
            <p className='text-slate-500 mt-10 text-center flex items-center sm:text-sm text-xs justify-center gap-1'>
                <span className='text-lg'>&copy;</span> Copyright 2026 GEVA VENTURES. All Rights Reserved.</p>
        </div>
    )
}

export default Footer;
