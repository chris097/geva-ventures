import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer/page';
import { services } from '@/data/services';
import { Reveal } from '@/components/utils/Reveal';
import heroImg from '@/public/images/hero_escalator.png';

export const metadata: Metadata = {
  title: 'Services | GEVAC VENTURES',
  description: 'Elevator installation, escalator installation, automatic doors, procurement and maintenance services from GEVAC VENTURES.',
};

const ServicesPage = () => {
  return (
    <main>
      <Header />
      <div className='relative h-[420px] lg:h-[500px] overflow-hidden flex items-center'>
        <Image src={heroImg} alt='GEVAC Ventures Services' className='absolute inset-0 w-full h-full object-cover object-center' priority />
        <div className='absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40' />
        <div className='absolute inset-0 opacity-10' style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className='relative z-10 w-[90%] mx-auto max-w-6xl mt-16'>
          <Reveal>
            <span className='inline-block text-accent text-xs font-black tracking-[0.5em] uppercase mb-5 border border-accent/30 bg-accent/10 px-4 py-2 rounded-full'>
              What We Do
            </span>
          </Reveal>
          <Reveal>
            <h1 className='font-tillitium font-extrabold sm:font-black text-white text-4xl sm:text-5xl lg:text-7xl leading-none tracking-tighter'>
              OUR <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-300'>SERVICES.</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className='text-slate-400 mt-5 max-w-xl text-lg leading-relaxed'>
              Engineered mobility solutions, delivered end to end — from procurement through installation and ongoing maintenance.
            </p>
          </Reveal>
        </div>
      </div>
      <div className='bg-slate-950'>
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const words = service.title.split(' ');
          const lastWord = words.pop();
          const rest = words.join(' ');

          return (
            <div key={service.slug} id={service.slug} className={`py-20 lg:py-32 ${isEven ? 'bg-slate-950' : 'bg-slate-900 border-y border-white/5'}`}>
              <div className='mx-auto w-[90%] max-w-7xl'>
                <div className={`flex flex-col gap-12 lg:gap-24 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>

                  {/* Image Block */}
                  <div className='w-full lg:w-1/2'>
                    <Reveal>
                      <div className='group relative h-[350px] sm:h-[450px] lg:h-[550px] w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl'>
                        <Image src={service.image} alt={`${service.title} at GEVAC VENTURES`} className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105' />
                        <div className='absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500' />
                        <div className='absolute bottom-0 left-0 p-8 lg:p-10'>
                          <span className='inline-block px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white font-bold sm:font-black text-xl sm:text-2xl lg:text-4xl tracking-tighter shadow-2xl'>
                            0{index + 1}
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  {/* Text Block */}
                  <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                    <Reveal>
                      <h2 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-tillitium font-extrabold sm:font-black uppercase text-white tracking-tighter mb-6 leading-tight'>
                        {rest} {rest ? ' ' : ''}
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-300'>
                          {lastWord}
                        </span>
                      </h2>
                    </Reveal>
                    <Reveal>
                      <div className='relative'>
                        <div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-transparent rounded-full' />
                        <p className='text-lg lg:text-xl leading-relaxed text-slate-300 mb-10 pl-6 py-2'>
                          {service.summary}
                        </p>
                      </div>
                    </Reveal>

                    <ul className='grid sm:grid-cols-2 gap-x-6 gap-y-4 lg:gap-y-6'>
                      {service.details.map((detail, idx) => (
                        <Reveal key={idx}>
                          <li className='flex items-start gap-4'>
                            <div className='mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary shadow-lg shadow-primary/20'>
                              <svg viewBox='0 0 24 24' fill='none' className='w-3 h-3' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'>
                                <polyline points='20 6 9 17 4 12'></polyline>
                              </svg>
                            </div>
                            <span className='text-base text-slate-400 leading-snug'>{detail}</span>
                          </li>
                        </Reveal>
                      ))}
                    </ul>

                    <Reveal>
                      <div className='mt-14'>
                        <Link href='/contact' className='inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-500 text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 hover:shadow-primary/40 transition-all duration-300'>
                          Request a Quote <span>→</span>
                        </Link>
                      </div>
                    </Reveal>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </main>
  );
};

export default ServicesPage;
