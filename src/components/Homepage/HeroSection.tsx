import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import frame2 from '@/public/images/frame3.jpeg';
import frame1 from '@/public/images/frame16.jpeg';
import frame3 from '@/public/images/frame6.jpeg';
import {Reveal} from '../utils/Reveal';
import PhoneIcon from '@/public/svgs/PhoneIcon';

interface metadata{
    frame: StaticImageData
    heading: string | JSX.Element
    description: string
    buttonName: string
    number: string
    subText: string
}

const tabs = [
    { tab: 1, name: "ELEVATOR INSTALLATION" },
    { tab: 2, name: "ESCALATOR INSTALLATION" },
    { tab: 3, name: "AUTOMATIC DOORS" },
];

const Banner = ({ frame, heading, description, buttonName, number, subText }:metadata) => {
    return <> <div>
        <div className='overlay absolute overflow-hidden w-full lg:h-screen h-[550px] m-0 z-30 opacity-40' />
        <Image className="w-full slide absolute z-20 lg:h-screen h-[550px] object-cover left-0" src={frame} alt="elevator hero section" />
    </div>
        <div className='relative text-white z-40 flex flex-col w-[90%] justify-center mx-auto lg:h-full h-[500px]'>
            <div>
                <Reveal><p className='lg:text-xl text-sm font-semibold font-roboto'>{heading}</p></Reveal>
                <Reveal>
                    <h1 className='lg:w-[65%] uppercase sm:w-[80%] w-[90%] lg:text-[72px] text-3xl mt-4 font-bold leading-tight'>{description}</h1>
                </Reveal>
            </div>
            <Reveal>
                <div className='text-white flex items-center lg:mt-20 mt-10 lg:gap-20 gap-10'>
                    <button className='w-52 h-16 lg:block hidden text-lg text-white font-roboto uppercase bg-primaryblue'>{buttonName}</button>
                    <div className='flex items-center gap-3'>
                        <div className='bg-white rounded-full flex justify-center items-center w-14 h-14'><PhoneIcon fillColor="#244061" width="18px" height="15.5px" /></div>
                        <div>
                            <p className='text-[#6E777D] text-base font-semibold font-roboto'>{subText}</p>
                            <p className='text-lg font-semibold font-roboto'>{number}</p>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    </>
};

const HeroSection = () => {

    const [activeIndex, setActiveIndex] = useState(1);

    const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === tabs.length ? 1 : prevIndex + 1));
    };
    
     useEffect(() => {
    // Automatically change slide every 7 seconds
    const slideInterval = setInterval(nextSlide, 7000);

    // Clear interval when the component is unmounted
    return () => clearInterval(slideInterval);
  }, [activeIndex]);
  

    return (
        <div className='w-full font-tillitium relative lg:h-screen h-[550px]'>
            {tabs[0].tab === activeIndex && <Banner
                frame={frame1}
                heading={<p className='text-2xl'>WELCOME TO <span className='text-primarypink'>GEVAC GLOBAL SERVICES LTD</span></p>}
                description="Elevate your building's accessibility"
                buttonName="Get Started"
                subText="Call Us Now"
                number="+2348035802938"
            />}
            {tabs[1].tab === activeIndex && <Banner
                frame={frame2}
                heading={<p className='text-2xl'>WELCOME TO <span className='text-primarypink'>GEVAC GLOBAL SERVICES LTD</span></p>}
                description="WE’RE PROVIDING INDUSTRY LEADING SOLUTIONS"
                buttonName="Get Started"
                subText="Call Us Now"
                number="+2348035802938"
            />}
            {tabs[2].tab === activeIndex && <Banner
                frame={frame3}
                heading={<p className='text-2xl'>WELCOME TO <span className='text-primarypink'>GEVAC GLOBAL SERVICES LTD</span></p>}
                description="WE’RE PROVIDING INDUSTRY LEADING SOLUTIONS"
                buttonName="Get Started"
                subText="Call Us Now"
                number="+2348035802938"
            />}
            <div className='text-black lg:w-3/6 absolute bottom-0 z-40 h-16 right-0 bg-white'>
                <div className='flex lg:px-14 px-4 gap-4 justify-between w-full font-roboto-slab sm:text-[13px] text-[9px] sm:font-semibold h-full items-center'>
                    {tabs.map((tab, index) => (
                        <div onClick={() => setActiveIndex(tab.tab)} key={index} className={`cursor-pointer ${tab.tab === activeIndex && "border-primaryblack border-b"}`}>{tab.name}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;