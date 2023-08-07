"use client";
import Footer from '@/components/Footer/page'
import Header from '@/components/Header'
import React from 'react'

const QualityPolicy = () => {
  return (
    <main>
      <Header />
      <div className='flex flex-col justify-center font-roboto items-center mt-24'>
        <h1 className='text-5xl font-semibold text-primaryblue'>QualityPolicy</h1>
        <p className='text-xl mt-3 text-gray-800 font-semibold font-roboto-slab'>Please read these Quality policies carefully before using the services or accessing the platform.</p>
      </div>
      <div className='mx-auto w-[90%]'>
        <div className='text-xl font-semibold mt-14 text-primaryblack'>Updated at August 7th, 2023</div>
              <div className='text-2xl text-primaryblack mt-8 font-roboto leading-relaxed'>
                 <p className='leading-relaxed'>Every employee of GGS shall ensure the satisfaction of our customers by providing them with the best value in every product and services that carries our name.</p>
                 <p>GGS will create and retain satisfied customers, offering for sale products and services which respond to customers expectations; our customers will be supplied with products and services of a given quality, and at a price which reflects value for money.</p>
                 <p>The policy of the company, for the manufacturer and construction of the work and the service it provides is clearly defined and meets the requirement of quality.
</p>
        </div>
        <div>
          <h2 className='text-primaryblue font-bold text-2xl mt-10'>GGS places particular emphasis on:</h2>
          <div className='text-primaryblack'>
            <div className="flex items-center gap-4 mt-6 ml-10">
              <div className='bg-primaryblue w-4 h-4 rounded-full' />
              <span className='text-2xl text-primaryblack font-roboto leading-relaxed'>Operation and maintenance of a safe system of work</span>
           </div>
            <div className="flex items-center gap-4 mt-3 ml-10">
              <div className='bg-primaryblue w-4 h-4 rounded-full' />
              <span className='text-2xl text-primaryblack font-roboto leading-relaxed'>Consistent achievement of the specific quality</span>
           </div>
            <div className="flex items-center gap-4 mt-3 ml-10">
              <div className='bg-primaryblue w-4 h-4 rounded-full' />
              <span className='text-2xl text-primaryblack font-roboto leading-relaxed'>Economy of manufacture and construction activities</span>
           </div>
            <div className="flex items-center gap-4 mt-3 ml-10">
              <div className='bg-primaryblue w-4 h-4 rounded-full' />
              <span className='text-2xl text-primaryblack font-roboto leading-relaxed'>Provision of training and instruction planned to suit identified
needs</span>
           </div>
            <div className="flex items-center gap-4 mt-3 ml-10">
              <div className='bg-primaryblue w-4 h-4 rounded-full' />
              <span className='text-2xl text-primaryblack font-roboto leading-relaxed'>Adherence to programs with best practices and to comply with all
applicable requirements.</span>
           </div>
          </div>
          <p className='text-2xl text-primaryblack mt-10 font-roboto leading-relaxed'>These continual practices show that our internal requirement are being met, whilst maintaining our clients requirements for examination, testing, checking and certification while working within project specification and schedules
</p>      
        </div>
        <div className='mt-14'>
          <h1 className='text-3xl text-primaryblack font-roboto font-bold leading-relaxed'>Contact Us</h1>
          <p className='text-xl text-primaryblack font-tillitium leading-relaxed'>Don&apos;t hesitate to contact us if you have any questions.</p>
          <p className='text-xl text-primaryblack font-tillitium leading-relaxed'>Via Email: vinovilla_2014@yahoo.com</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default QualityPolicy;