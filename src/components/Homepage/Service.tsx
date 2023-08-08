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
    {url: service1, title: "ELEVATOR INSTALLATION", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus."},
    {url: service2, title: "ESCALATOR INSTALLATION", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus."},
    {url: service4, title: "PROCUREMENT SERVICES", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus."},
    {url: service3, title: "LABOUR CONTRACTORS", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus."},
    {url: service5, title: "ELEVATOR SERVICES", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus."},
    {url: service6, title: "ESCALATOR SERVICES", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus."},
]

const Service = () => {
  return (
      <div className='pb-16 lg:mt-28 mt-20 mx-auto w-[90%]'>
          <Reveal><p className='text-xl font-tillitium text-primarypink text-center font-semibold'>OUR SERVICES</p></Reveal>
          <Reveal><p className='lg:text-[40px] font-tillitium text-primaryblack text-center sm:text-[38px] text-[32px] font-bold'>QUALITY SERVICING OPPORTUNITY</p></Reveal>
          <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-3 lg:gap-5 gap-5 mt-14'>
              {services.map((service, index) => (
                  <Reveal key={index}>
                      <div className='flex-1 bg-white shadow-sm rounded-md'>
                  <div className='relative lg:h-[360px] sm:h-[200px] h-[250px]'>
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