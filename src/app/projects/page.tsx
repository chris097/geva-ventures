import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer/page';
import { projects, projectGallery } from '@/data/projects';
import { Reveal } from '@/components/utils/Reveal';
import heroImg from '@/public/images/recent1.png';
import ProjectsTable from '@/components/ProjectsTable';

export const metadata: Metadata = {
  title: 'Projects | GEVA VENTURES',
  description: 'Completed and ongoing elevator, escalator and automatic door installations by GEVA VENTURES across Nigeria.',
};

const ProjectsPage = () => {
  return (
    <main className='bg-slate-950'>
      <Header />
      
      {/* Hero Section */}
      <div className='relative h-[420px] lg:h-[500px] overflow-hidden flex items-center'>
        <Image src={heroImg} alt='GEVA Ventures Projects' className='absolute inset-0 w-full h-full object-cover object-center' priority />
        <div className='absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40' />
        <div className='absolute inset-0 opacity-10' style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <div className='relative z-10 w-[90%] mx-auto max-w-6xl mt-16'>
          <Reveal>
            <span className='inline-block text-accent text-xs font-black tracking-[0.5em] uppercase mb-5 border border-accent/30 bg-accent/10 px-4 py-2 rounded-full'>
              Project Portfolio
            </span>
          </Reveal>
          <Reveal>
            <h1 className='font-tillitium font-extrabold sm:font-black text-white text-4xl sm:text-5xl lg:text-7xl leading-none tracking-tighter'>
              OUR <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-300'>PROJECTS.</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className='text-slate-400 mt-5 max-w-xl text-lg leading-relaxed'>
              Selected completed and ongoing installations across Nigeria.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Gallery Bento Grid */}
      <div className='bg-slate-950 py-16 lg:py-24 border-b border-white/5'>
        <div className='w-[90%] max-w-7xl mx-auto'>
          <Reveal>
            <div className='mb-10'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-tillitium font-extrabold sm:font-black text-white'>Featured Installations</h2>
            </div>
          </Reveal>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 auto-rows-[130px] lg:auto-rows-[180px]'>
            {projectGallery.map((item, index) => {
              let gridClass = '';
              if (index === 0) gridClass = 'col-span-2 row-span-2';
              else if (index === 5) gridClass = 'col-span-2 lg:col-span-1 row-span-1';
              else gridClass = 'col-span-1 row-span-1';

              // Pick random featured projects to display info
              const featured = projects[index * 3] || projects[0];

              return (
                <Reveal key={index} className={`h-full ${gridClass}`}>
                  <div className='group relative w-full h-full overflow-hidden rounded-[2rem] border border-white/5 hover:border-primary/40 transition-all duration-300 cursor-pointer shadow-2xl'>
                    <Image src={item.img} alt={`GEVA VENTURES installed elevator project`} className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105' />
                    <div className='absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300' />
                    
                    <div className='absolute bottom-0 left-0 right-0 p-6 lg:p-8 flex flex-col justify-end'>
                      <div>
                        <span className='inline-block px-3 py-1.5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-lg text-[10px] lg:text-xs text-white/90 uppercase font-black tracking-widest mb-3'>
                          {featured.region}
                        </span>
                        <h4 className='text-white font-tillitium font-bold sm:font-black text-lg sm:text-xl lg:text-2xl leading-tight line-clamp-1'>
                          {featured.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* Projects Table */}
      <ProjectsTable />
      <Footer />
    </main>
  );
};

export default ProjectsPage;
