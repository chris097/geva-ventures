"use client";
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer/page';

const HSEPOLICY = () => {
  return (
    <main>
      <Header />
      <div className='flex flex-col justify-center font-roboto items-center mt-20'>
        <h1 className='text-5xl font-semibold text-primaryblue'>Health Safety Employees Policy</h1>
        <p className='text-xl mt-3 text-gray-800 font-semibold font-roboto-slab'>Please read these H.S.E policies carefully before using the services or accessing the platform.</p>
      </div>
      <div className='mx-auto w-[90%]'>
        <div className='text-xl font-semibold mt-14 text-primaryblack'>Updated at August 7th, 2023</div>
        <div className='text-2xl text-primaryblack mt-8 font-roboto leading-relaxed'>The health and safety of our Employees is our Companies most important business consideration. No employee of GEVAC GLOBAL SERVICES (GGS) will be required to do a job that they consider unsafe, GGS will comply with all applicable Oregon OSHA workplace safety and health requirement and maintain occupational safety and health standards that equals or exceed the best practices in the industry. GGS has a safety committee, consisting of management and labour representatives, whose responsibility is identifying hazards and unsafe work practices, removing obstacles to accident prevention, and helping evaluate our company’s effort to achieve an accurate and injury free workplace.</div>
        <div>
          <h2 className='text-primaryblue font-bold text-2xl mt-10'>GGS pledges to do the following:</h2>
          <div className='text-primaryblack'>
            <div className="flex items-center gap-4 mt-6 ml-10">
              <div className='bg-primaryblue w-4 h-4 rounded-full' />
              <span className='text-2xl text-primaryblack font-roboto leading-relaxed'>Strive to achieve the goal of zero accidents and injuries.</span>
           </div>
            <div className="flex items-center gap-4 mt-3 ml-10">
              <div className='bg-primaryblue w-4 h-4 rounded-full' />
              <span className='text-2xl text-primaryblack font-roboto leading-relaxed'>Strive to achieve the goal of zero accidents and injuries.</span>
           </div>
            <div className="flex items-center gap-4 mt-3 ml-10">
              <div className='bg-primaryblue w-4 h-4 rounded-full' />
              <span className='text-2xl text-primaryblack font-roboto leading-relaxed'>Strive to achieve the goal of zero accidents and injuries.</span>
           </div>
          </div>
          <p className='text-2xl text-primaryblack mt-10 font-roboto leading-relaxed'>And comply with all applicable OR-OSHA safety and health requirements.</p>
          <div className='text-primaryblack'>
            <div className="flex items-center gap-4 mt-6 ml-10">
              <div className='bg-primaryblue w-4 h-4 rounded-full' />
              <span className='text-2xl text-primaryblack font-roboto leading-relaxed'>Train all employees in safe work practices and procedures.</span>
           </div>
            <div className="flex items-center gap-4 mt-3 ml-10">
              <div className='bg-primaryblue w-4 h-4 rounded-full' />
              <span className='text-2xl text-primaryblack font-roboto leading-relaxed'>Provide employees with necessary personal protective equipment
and train them to use and care for it properly</span>
           </div>
            <div className="flex items-center gap-4 mt-3 ml-10">
              <div className='bg-primaryblue w-4 h-4 rounded-full' />
              <span className='text-2xl text-primaryblack font-roboto leading-relaxed'>Strive to achieve the goal of zero accidents and injuries.</span>
            </div>
            <div className="flex items-center gap-4 mt-3 ml-10">
              <div className='bg-primaryblue w-4 h-4 rounded-full' />
              <span className='text-2xl text-primaryblack font-roboto leading-relaxed'>Enforce company safety and health rules and make employees to
follow the rules as a condition of employment</span>
            </div>
            <div className="flex items-center gap-4 mt-3 ml-10">
              <div className='bg-primaryblue w-4 h-4 rounded-full' />
              <span className='text-2xl text-primaryblack font-roboto leading-relaxed'>Investigate accident to determine the cause and prevent similar
accidents.</span>
           </div>
          </div>
          <p className='text-2xl text-primaryblue mt-10 font-roboto leading-relaxed font-bold'>MANAGEMENT, SUPERVISORS AND ALL OTHER EMPLOYEE SHARE RESPONSIBILITY FOR A SAFE AND HEALTHY WORK PLACE.</p>
           <div className='text-primaryblack'>
            <div className="flex items-center gap-4 mt-6 ml-10">
              <div className='bg-primaryblue w-4 h-4 rounded-full' />
              <span className='text-2xl text-primaryblack font-roboto leading-relaxed'>Management is accountable for preventing workplace injuries and illness, management also will keep informed about work place safety and health hazards and regularly review the company’s safety and health program.</span>
           </div>
            <div className="flex items-center gap-4 mt-3 ml-10">
              <div className='bg-primaryblue w-4 h-4 rounded-full' />
              <span className='text-2xl text-primaryblack font-roboto leading-relaxed'>Supervisors are responsible for supervising and training workers in safe work practices.</span>
           </div>
            <div className="flex items-center gap-4 mt-3 ml-10">
              <div className='bg-primaryblue w-4 h-4 rounded-full' />
              <span className='text-2xl text-primaryblack font-roboto leading-relaxed'>Supervisors must enforce company rules and ensure that employees follow safe practices during their work.</span>
           </div>
            <div className="flex items-center gap-4 mt-3 ml-10">
              <div className='bg-primaryblue relative w-4 h-4 rounded-full' />
              <p className='text-2xl text-primaryblack font-roboto leading-relaxed'> Employees are expected to participate in safety health program activities including immediately reporting hazard unsafe work practices and accident to supervisors or a safety committee representative, wearing required personal protective equipment and participating in and supporting safety committee activities</p>
           </div>
          </div>
        </div>
        <div className='mt-14'>
          <h1 className='text-3xl text-primaryblack font-roboto font-bold leading-relaxed'>Contact Us</h1>
          <p className='text-xl text-primaryblack font-tillitium leading-relaxed'>Don't hesitate to contact us if you have any questions.</p>
          <p className='text-xl text-primaryblack font-tillitium leading-relaxed'>Via Email: vinovilla_2014@yahoo.com</p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default HSEPOLICY;