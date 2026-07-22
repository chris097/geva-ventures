import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer/page';
import aboutImg from '@/public/images/gevac7.jpeg';
import { Reveal } from '@/components/utils/Reveal';
import { AnimatedCounter } from '@/components/utils/AnimatedCounter';

export const metadata: Metadata = {
  title: 'About Us | GEVA VENTURES',
  description: 'GEVA VENTURES is the dedicated elevators, escalators and automatic doors business of Gevac Global Services Ltd, delivering modern vertical mobility systems across Nigeria.',
};

const stats = [
  { number: '745+', label: 'Completed Projects' },
  { number: '30+', label: 'Years Of Combined Expertise' },
  { number: '1990', label: 'Trusted By Clients Since' },
  { number: '124+', label: 'Team Members' },
];

const offices = [
  { name: 'Head Office — Port Harcourt', address: 'No. 1 Chief Val Close off Timothy Lane, Rumuola, Port Harcourt, Rivers State.' },
  { name: 'Lagos Office', address: '3rd Floor Nurses House, Churchgate Street, Victoria Island, Lagos.' },
  { name: 'Port Harcourt Office', address: '12 Ohiaimini Road off Rumuola Road, Port Harcourt, Rivers State.' },
  { name: 'Abuja Office', address: 'Suite 9D Lake City Plaza, Oladipo Diva Way, Gudu District, Abuja.' },
];

const AboutPage = () => {
  return (
    <main className='bg-slate-950'>
      <Header />
      <div className='relative h-[420px] lg:h-[500px] overflow-hidden flex items-center'>
        <Image src={aboutImg} alt='GEVA VENTURES team on site' className='absolute inset-0 w-full h-full object-cover object-center' priority />
        <div className='absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40' />
        <div className='absolute inset-0 opacity-10' style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className='relative z-10 w-[90%] mx-auto max-w-6xl mt-16'>
          <Reveal>
            <span className='inline-block text-accent text-xs font-black tracking-[0.5em] uppercase mb-5 border border-accent/30 bg-accent/10 px-4 py-2 rounded-full'>
              About Us
            </span>
          </Reveal>
          <Reveal>
            <h1 className='font-tillitium font-extrabold sm:font-black text-white text-4xl sm:text-5xl lg:text-7xl leading-none tracking-tighter'>
              GEVA <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-300'>VENTURES.</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className='text-slate-400 mt-5 max-w-xl text-lg leading-relaxed'>
              Modernizing access across Nigeria, one installation at a time.
            </p>
          </Reveal>
        </div>
      </div>

      <div className='bg-slate-950 py-20 lg:py-28'>
        <div className='w-[90%] max-w-6xl mx-auto'>

          <Reveal>
            <p className='text-lg sm:text-xl lg:text-3xl leading-relaxed text-slate-300 font-light border-l-4 border-primary pl-6 py-2'>
              <span className='font-tillitium font-bold sm:font-black text-white uppercase text-xl sm:text-2xl lg:text-4xl'>GEVA VENTURES</span> is the dedicated elevators, escalators and automatic doors business of Gevac Global Services Ltd. We deliver modern vertical mobility systems for commercial, residential and healthcare developments nationwide, backed by certified engineers and customer-first service — from procurement and installation through to ongoing maintenance.
            </p>
          </Reveal>

          <div className='mt-20 grid gap-6 md:grid-cols-2 lg:gap-10'>
            <Reveal>
              <div className='group rounded-[2rem] bg-slate-900/50 backdrop-blur-md border border-white/10 p-10 hover:border-primary/40 hover:bg-slate-900 transition-all duration-300 shadow-2xl h-full'>
                <p className='text-xs font-black uppercase tracking-[0.3em] text-accent mb-6'>Our Mission</p>
                <p className='text-lg lg:text-xl leading-relaxed text-white'>To modernize access across Nigeria with safe, reliable, and beautifully engineered elevator, escalator, and automatic door solutions.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className='group rounded-[2rem] bg-slate-900/50 backdrop-blur-md border border-white/10 p-10 hover:border-primary/40 hover:bg-slate-900 transition-all duration-300 shadow-2xl h-full'>
                <p className='text-xs font-black uppercase tracking-[0.3em] text-accent mb-6'>Why Clients Choose Us</p>
                <ul className='space-y-4 text-base lg:text-lg leading-relaxed text-white'>
                  <li className='flex items-center gap-3'><span className='text-primary'>✦</span> Emergency solution anytime.</li>
                  <li className='flex items-center gap-3'><span className='text-primary'>✦</span> Affordable pricing with warranty support up to 2 years.</li>
                  <li className='flex items-center gap-3'><span className='text-primary'>✦</span> Reliable, experienced technical team.</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className='bg-slate-950 py-16 border-y border-white/5'>
        <div className='mx-auto grid w-[90%] max-w-6xl grid-cols-2 gap-6 lg:grid-cols-4'>
          {stats.map((stat, i) => (
            <Reveal key={stat.label}>
              <div className='text-center p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors duration-300 group h-full flex flex-col justify-center'>
                <p className='text-4xl sm:text-5xl lg:text-6xl font-bold sm:font-black font-tillitium text-white group-hover:text-primary transition-colors'><AnimatedCounter value={stat.number} /></p>
                <p className='mt-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400'>{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className='bg-slate-950 py-20 lg:py-28'>
        <div className='mx-auto w-[90%] max-w-6xl'>
          <Reveal>
            <div className='mb-12'>
              <p className='text-xs font-black uppercase tracking-[0.3em] text-accent mb-4'>Our Offices</p>
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-tillitium font-extrabold sm:font-black text-white'>Where to find us</h2>
            </div>
          </Reveal>

          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {offices.map((office) => (
              <Reveal key={office.name}>
                <div className='group rounded-3xl bg-slate-900 border border-white/5 p-8 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 shadow-2xl h-full flex flex-col'>
                  <p className='text-xl font-tillitium font-black text-white mb-4 group-hover:text-primary transition-colors'>{office.name}</p>
                  <p className='text-base text-slate-400 leading-relaxed'>{office.address}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className='mt-16 flex flex-wrap gap-4'>
              <Link href='/team' className='inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-500 text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-primary/30 hover:scale-105 hover:shadow-primary/50 transition-all duration-300'>
                Meet Our Team <span>→</span>
              </Link>
              <Link href='/contact' className='inline-flex items-center gap-3 border-2 border-white/10 text-white font-bold text-sm px-8 py-4 rounded-2xl hover:bg-white hover:text-slate-950 hover:border-white transition-all duration-300'>
                Get In Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
