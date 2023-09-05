import React from 'react';
import Image from 'next/image';
import service1 from '@/public/images/frame7.jpeg';
import service2 from '@/public/images/frame6.jpeg';
import service3 from '@/public/images/service3.png';
import service4 from '@/public/images/frame8.jpeg';
import service5 from '@/public/images/frame10.jpg';
import service6 from '@/public/images/frame4.jpeg';
import {Reveal} from '../utils/Reveal';

const services = [
    {url: service1, title: "ELEVATOR INSTALLATION", description: "We specialize in installing various elevator types, including passenger, freight, accessibility, and dumbwaiters. Ensures smart, energy-efficient elevators. Our commitment to innovative technology ensures smart, energy-efficient elevators, while customization options allow you to create a unique interior design. "},
    {url: service2, title: "ESCALATOR INSTALLATION", description: "Our dedicated team specializes in installing a wide range of escalator types, from standard passenger escalators to heavy-duty and outdoor models. With a focus on cutting-edge technology, energy efficiency, and safety compliance, we tailor solutions to match your unique space and design preferences.  "},
    {url: service4, title: "PROCUREMENT SERVICES", description: "Our experienced team specializes in delivering comprehensive procurement solutions to meet your specific needs.  We handle procurement across various industries, ensuring efficiency, cost-effectiveness, and quality. With a commitment to cutting-edge technology, transparency, and client satisfaction. "},
    {url: service3, title: "LABOUR CONTRACTORS", description: "Our seasoned team specializes in providing comprehensive labor solutions to meet your workforce needs. We offer labor contracting services across various industries, ensuring flexibility, expertise, and efficiency. With a focus on cutting-edge labor management technology, compliance, and client satisfaction."},
    {url: service5, title: "ELEVATOR SERVICES", description: "Our dedicated team specializes in delivering comprehensive elevator solutions to meet your vertical transportation needs. We offer services for various types of elevators, including passenger, freight, accessibility, and more. With a commitment to cutting-edge technology, safety, and client satisfaction."},
    {url: service6, title: "ESCALATOR SERVICES", description: "Our experienced team specializes in delivering comprehensive escalator solutions to enhance vertical transportation in your commercial spaces. We offer installation and maintenance services for a variety of escalators, including standard passenger, heavy-duty, outdoor, and customized designs."},
]

const Service = () => {
  return (
      <div id="service" className='pb-16 lg:mt-28 mt-20 mx-auto w-[90%]'>
          <Reveal><p className='text-xl font-tillitium text-primarypink text-center font-semibold'>OUR SERVICES</p></Reveal>
          <Reveal><p className='lg:text-[40px] font-tillitium text-primaryblack text-center sm:text-[38px] text-[32px] font-bold'>QUALITY SERVICING OPPORTUNITY</p></Reveal>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-3 lg:gap-5 gap-5 mt-14'>
              {services.map((service, index) => (
                  <Reveal key={index}>
                      <div className='flex-1 bg-white lg:h-[760px] h-auto shadow-sm rounded-md'>
                  <div className='relative lg:h-[360px] h-[300px]'>
                     <Image className='w-full h-full' src={service.url} alt='elevator service pics' />
                          <div className='absolute bottom-0 z-40 text-white right-0 bg-primaryblue text-2xl font-bold px-5 py-3'>0{index+1}</div>
                  </div>
                  <div className='px-6 pt-6 font-tillitium'>
                          <p className='lg:text-2xl text-xl sm:text-base font-bold text-[#244061]'>{service.title}</p>
                          <p className='lg:text-lg sm:text-sm text-base mt-4 text-secondaryblack'>{service.description}</p>
                      <button className='w-1/2 lg:h-[55px] h-[48px] bg-primaryblue text-white rounded lg:text-lg font-semibold text-base my-6'>View Service</button>
                  </div>
              </div>
                  </Reveal>
              ))}
          </div>
    </div>
  )
}

export default Service;