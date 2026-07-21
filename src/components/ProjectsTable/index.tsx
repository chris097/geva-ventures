"use client";
import React, { useState } from 'react';
import { Reveal } from '@/components/utils/Reveal';
import { projects } from '@/data/projects';

const ITEMS_PER_PAGE = 10;

const ProjectsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className='bg-slate-950 py-16 lg:py-24'>
      <div className='mx-auto w-[90%] max-w-7xl'>
        <Reveal>
          <div className='flex items-center justify-between mb-10'>
            <h2 className='text-3xl lg:text-4xl font-tillitium font-black text-white'>Installation Directory</h2>
            <span className='px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-xl text-sm font-bold'>
              {projects.length} Total
            </span>
          </div>
        </Reveal>
        
        <Reveal>
          <div className='rounded-[2rem] border border-white/10 bg-slate-900/50 backdrop-blur-sm overflow-hidden shadow-2xl'>
            <div className='overflow-x-auto'>
              <table className='w-full text-left border-collapse'>
                <thead className='bg-slate-900 border-b border-white/10'>
                  <tr>
                    <th className='px-6 py-5 text-xs font-black uppercase tracking-widest text-slate-500'>#</th>
                    <th className='px-6 py-5 text-xs font-black uppercase tracking-widest text-slate-500'>Region</th>
                    <th className='px-6 py-5 text-xs font-black uppercase tracking-widest text-slate-500'>Project Name</th>
                    <th className='px-6 py-5 text-xs font-black uppercase tracking-widest text-slate-500'>Lifts</th>
                    <th className='px-6 py-5 text-xs font-black uppercase tracking-widest text-slate-500'>Stops</th>
                    <th className='px-6 py-5 text-xs font-black uppercase tracking-widest text-slate-500'>Location</th>
                    <th className='px-6 py-5 text-xs font-black uppercase tracking-widest text-slate-500'>Year</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-white/5'>
                  {currentProjects.map((project, index) => {
                    // Calculate absolute index for correct numbering across pages
                    const absoluteIndex = startIndex + index + 1;
                    return (
                      <tr key={`${project.name}-${absoluteIndex}`} className='group hover:bg-white/5 transition-colors duration-200'>
                        <td className='px-6 py-4 text-sm font-bold text-slate-600 group-hover:text-primary transition-colors'>{String(absoluteIndex).padStart(2, '0')}</td>
                        <td className='px-6 py-4 text-sm font-semibold text-slate-300'>
                          <span className='inline-block px-2 py-1 bg-slate-800 rounded-md text-xs'>{project.region}</span>
                        </td>
                        <td className='px-6 py-4 text-base font-tillitium font-bold text-white group-hover:text-primary transition-colors whitespace-nowrap'>{project.name}</td>
                        <td className='px-6 py-4 text-sm font-bold text-slate-300'>{project.lifts}</td>
                        <td className='px-6 py-4 text-sm font-semibold text-slate-400'>{project.stops}</td>
                        <td className='px-6 py-4 text-sm text-slate-400 whitespace-nowrap'>{project.location}</td>
                        <td className='px-6 py-4 text-sm font-bold text-accent'>{project.year}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className='flex items-center justify-between px-6 py-4 border-t border-white/10 bg-slate-900/30'>
                <p className='text-sm text-slate-400'>
                  Showing <span className='text-white font-bold'>{startIndex + 1}</span> to <span className='text-white font-bold'>{Math.min(startIndex + ITEMS_PER_PAGE, projects.length)}</span> of <span className='text-white font-bold'>{projects.length}</span> projects
                </p>
                <div className='flex items-center gap-2'>
                  <button 
                    onClick={handlePrev} 
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 border ${currentPage === 1 ? 'border-white/5 text-slate-600 cursor-not-allowed' : 'border-white/10 text-white hover:border-primary/50 hover:text-primary hover:bg-primary/10'}`}
                  >
                    Previous
                  </button>
                  <div className='flex items-center gap-1 px-2'>
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-8 h-8 rounded-lg text-sm font-bold transition-all duration-200 ${currentPage === i + 1 ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                  <button 
                    onClick={handleNext} 
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 border ${currentPage === totalPages ? 'border-white/5 text-slate-600 cursor-not-allowed' : 'border-white/10 text-white hover:border-primary/50 hover:text-primary hover:bg-primary/10'}`}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ProjectsTable;
