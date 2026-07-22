import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '../utils/Reveal';
import { services as allServices } from '@/data/services';

interface ServiceProps {
  limit?: number;
  showViewAll?: boolean;
}

const icons: Record<string, string> = {
  'elevator-installation': '🛗',
  'escalator-installation': '🔃',
  'automatic-doors': '🚪',
  'procurement-services': '📦',
  'elevator-maintenance': '🔧',
  'escalator-maintenance': '⚙️',
  'labour-contractors': '👷',
};

const accentColors = [
  'from-primary to-sky-400',
  'from-accent to-orange-400',
  'from-purple-500 to-violet-400',
  'from-emerald-500 to-teal-400',
  'from-rose-500 to-pink-400',
  'from-amber-500 to-yellow-400',
  'from-cyan-500 to-blue-400',
];

const Service = ({ limit, showViewAll = false }: ServiceProps) => {
  const services = limit ? allServices.slice(0, limit) : allServices;

  return (
    <section id='service' className='bg-slate-950 py-28'>
      <div className='w-[90%] max-w-7xl mx-auto'>

        {/* Header row */}
        <div className='flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16'>
          <div>
            <Reveal>
              <span className='inline-block text-accent text-xs font-black tracking-[0.5em] uppercase mb-5 border border-accent/30 bg-accent/10 px-4 py-2 rounded-full'>
                What We Do
              </span>
            </Reveal>
            <Reveal>
              <h2 className='font-tillitium font-extrabold sm:font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tighter mt-4'>
                WORLD-CLASS <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400'>MOBILITY</span><br className='hidden lg:block' /> SOLUTIONS
              </h2>
            </Reveal>
          </div>
          {showViewAll && (
            <Reveal>
              <Link href='/services' className='shrink-0 inline-flex items-center gap-2 border border-white/15 bg-white/5 hover:border-primary hover:bg-primary/10 text-white text-sm font-semibold px-6 py-3.5 rounded-2xl transition-all duration-300'>
                View All Services <span>→</span>
              </Link>
            </Reveal>
          )}
        </div>

        {/* Featured large card (first service) + 2-col grid */}
        <div className='grid lg:grid-cols-3 gap-6'>

          {/* Large featured card */}
          {services[0] && (
            <Reveal>
              <Link
                href={`/services#${services[0].slug}`}
                className='group block lg:col-span-1 lg:row-span-2 relative overflow-hidden rounded-3xl border border-white/8 hover:border-primary/40 transition-all duration-300'
              >
                <div className='absolute inset-0'>
                  <Image
                    src={services[0].image}
                    alt={services[0].title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent' />
                </div>
                <div className='relative z-10 h-full min-h-[420px] lg:min-h-[560px] flex flex-col justify-end p-8'>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${accentColors[0]} flex items-center justify-center text-xl mb-4 shadow-xl`}>
                    {icons[services[0].slug] ?? '⚡'}
                  </div>
                  <span className='text-xs font-black tracking-[0.4em] uppercase text-slate-400 mb-2'>01</span>
                  <h3 className='text-white font-bold sm:font-black text-xl sm:text-2xl font-tillitium tracking-tight mb-3 group-hover:text-sky-300 transition-colors duration-300'>{services[0].title}</h3>
                  <p className='text-slate-400 text-sm leading-relaxed mb-5'>{services[0].summary}</p>
                  <span className='inline-flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-3 transition-all duration-300'>
                    Learn more →
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Remaining services as compact horizontal cards */}
          {services.slice(1).map((service, i) => (
            <Reveal key={service.slug}>
              <Link
                href={`/services#${service.slug}`}
                className='group flex gap-5 bg-slate-900 border border-white/8 rounded-2xl p-6 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 items-start'
              >
                {/* Image thumbnail */}
                <div className='w-20 h-20 shrink-0 rounded-2xl overflow-hidden shadow-lg'>
                  <Image
                    src={service.image}
                    alt={service.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                </div>

                {/* Content */}
                <div className='flex-1 min-w-0'>
                  <div className='flex items-center gap-3 mb-2'>
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${accentColors[(i + 1) % accentColors.length]} flex items-center justify-center text-sm shadow`}>
                      {icons[service.slug] ?? '⚡'}
                    </div>
                    <span className='text-xs font-black text-slate-600 tracking-widest'>0{i + 2}</span>
                  </div>
                  <h3 className='text-white font-bold text-base font-tillitium mb-1 group-hover:text-primary transition-colors duration-300'>{service.title}</h3>
                  <p className='text-slate-500 text-xs leading-relaxed line-clamp-2'>{service.summary}</p>
                </div>

                <span className='text-slate-600 group-hover:text-primary transition-colors duration-300 text-lg self-center shrink-0'>→</span>
              </Link>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Service;
