import React from 'react';
import Image, { StaticImageData } from 'next/image';
import recent1 from "@/public/images/frame5.jpeg"
import recent2 from "@/public/images/frame9.jpeg"
import recent3 from "@/public/images/frame10.jpg"
import { Reveal } from '../utils/Reveal';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
      items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
      items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
      items: 1.5
  }
};

const recents: { img: StaticImageData }[] = [
    { img: recent1 },
    { img: recent2 },
    { img: recent3 },
    { img: recent2 },
];

const RecentWork = () => {
    return (
        <div className='overflow-x-hidden'>
            <div className='lg:pt-32 pt-24'>
                <Reveal>
                    <div className='lg:flex justify-between items-center w-[90%] mx-auto'>
                        <div>
                            <p className='font-tillitium uppercase text-primarypink text-lg font-semibold'>Latest Projects</p>
                            <p className='lg:text-[40px] font-tillitium text-primaryblack text-[32px] font-bold'>OUR RECENT WORK</p>
                        </div>
                        <button className='bg-primarypink text-white uppercase px-6 py-3 rounded mt-5 text-sm font-medium'>View Projects</button>
                    </div>
                </Reveal>
                <div>
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        infinite={true}
                        partialVisible={true}
                        // dotListClass="custom-dot-list-style"
                        // itemClass='carousel-item-padding-40-px'
                        className='w-full flex lg:justify-between gap-4 pr-16 mt-16'
                    >
                        {recents.map((recent, index) => (
                            <div key={index} className='lg:w-[550px] lg:h-[434px] w-[450px] mx-72 h-[300px]'>
                                <Image className='w-full h-full lg:pr-20 sm:pr-[200px] pr-[212px]' src={recent.img} alt='elevator recent pic' />
                            </div>
                        ))}
                    </Carousel>
                </div>
                {/* <div className='flex justify-center w-full py-8'>
                    <div className='flex lg:gap-4 gap-2 items-center mt-2'>
                        <span className='bg-[#244061] h-2 w-2 lg:w-3 lg:h-3 rounded-full' />
                        <span className='bg-white w-2 h-2 lg:w-3 lg:h-3 rounded-full' />
                        <span className='bg-white w-2 h-2 lg:w-3 lg:h-3 rounded-full' />
                        <span className='bg-white w-2 h-2 lg:w-3 lg:h-3 rounded-full' />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default RecentWork;