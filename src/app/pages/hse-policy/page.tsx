"use client";
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer/page';

const HSEPOLICY = () => {
  return (
    <main>
      <Header />
      <div className='flex flex-col justify-center font-tillitium items-center mt-20'>
        <h1 className='text-5xl font-semibold text-primaryblue'>Health Safety Employees Policy</h1>
        <p className='text-xl mt-3 text-gray-800 font-semibold font-roboto-slab'>Please read these H.S.E policies carefully before using the services or accessing the platform.</p>
      </div>
      <div className='mx-auto w-[90%]'>
        <div className='text-xl font-semibold mt-10 text-primaryblack'>Updated at May 1st, 2023</div>
        <div className='text-xl text-primaryblack mt-5'>The health and safety of our Employees is our Companies most important business consideration. No employee of GEVAC GLOBAL SERVICES (GGS) will be required to do a job that they consider unsafe, GGS will comply with all applicable Oregon OSHA workplace safety and health requirement and maintain occupational safety and health standards that equals or exceed the best practices in the industry. GGS has a safety committee, consisting of management and labour representatives, whose responsibility is identifying hazards and unsafe work practices, removing obstacles to accident prevention, and helping evaluate our company’s effort to achieve an accurate and injury free workplace.</div>
        <div className='text-xl text-primaryblack mt-5'>The health and safety of our Employees is our Companies most important business consideration. No employee of GEVAC GLOBAL SERVICES (GGS) will be required to do a job that they consider unsafe, GGS will comply with all applicable Oregon OSHA workplace safety and health requirement and maintain occupational safety and health standards that equals or exceed the best practices in the industry. GGS has a safety committee, consisting of management and labour representatives, whose responsibility is identifying hazards and unsafe work practices, removing obstacles to accident prevention, and helping evaluate our company’s effort to achieve an accurate and injury free workplace.</div>
      </div>
      <Footer />
    </main>
  );
};

export default HSEPOLICY;