import React, {useState, useEffect} from 'react';
import {HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight} from 'react-icons/hi2';
import { Reveal} from '@/components/utils/Reveal';
import Image from 'next/image';
import client1 from "@/public/images/technical1.png";

const comments = [
    {id: 1, name: "DR. IBEABUCHI CMD,", location: "PALMARS HOSPITAL, PORT HARCOURT, RIVERS STATE, NIGERIA", description: "“From the initial consultation to the final inspection, the entire process was seamless and efficient. Your team displayed an impressive level of professionalism and expertise throughout the projezct”."},
    {id: 2, name: "MD. ALFYQUEENET HOTEL OWERRI,", location: "PALMARS HOSPITAL, PORT HARCOURT, RIVERS STATE, NIGERIA", description: "“I want to take a moment to express my immense satisfaction with the recently installed elevator in our building. This new addition has truly transformed our daily experience, and I couldn't be happier with the results. The efficiency and speed have made moving about quick and hassle-free”."},
    {id: 3, name: "DR. OHIAH CMD,", location: "PALMARS HOSPITAL, PORT HARCOURT, RIVERS STATE, NIGERIA", description: "”We couldn't be happier with the maintenance service provided by GEVAC GLOBAL SERVICES LIMITED. They are true professionals who take pride in their work, and it shows in the results. Our escalator is running better than ever, and we look forward to a continued partnership with them in the future. Thank you for your outstanding service!”"},
]

const Testimonies = () => {

     const [activeIndex, setActiveIndex] = useState(1);

    const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex ===3 ? 1 : prevIndex + 1));
    };
    
     useEffect(() => {
    // Automatically change slide every 7 seconds
    const slideInterval = setInterval(nextSlide, 7000);

    // Clear interval when the component is unmounted
    return () => clearInterval(slideInterval);
     }, [activeIndex]);
    
    
    const Comment = ({name, location, description}: {name:string, location: string, description: string}) => {
        return <>
            <div className='lg:flex'>
                    <div className='flex justify-center flex-col lg:items-center'>
                        <Reveal><p className='text-primaryblack text-[25px] whitespace-nowrap font-semibold'>TRUSTED FROM OVER <br /> 1,000 CLIENTS</p></Reveal>
                            <div className='w-44 h-44 mt-14 lg:ml-32'>
                                <Image className='w-full h-full rounded-full' src={client1} alt="client" />
                        </div>
                    </div>
                    <div className='lg:ml-28'>
                    <Reveal><p className='leading-normal text-primaryblack mt-6 text-2xl italic w-full font-tillitium lg:text-[30px]'>{description}</p></Reveal>
                    <Reveal><p className='font-bold text-xl text-primaryblack mt-10'>{name} <span className='text-primarypink text-sm'>{location}</span></p></Reveal>
                    </div>
                </div>
        </>
    };
    
    return (
        <div className=' bg-white py-32'>
            <Reveal>
                <div className='py-10 lg:px-16 w-[90%] mx-auto shadow-sm border-t-[0.5px] border-b-[0.5px] font-tillitium'>
                    {comments[0].id === activeIndex && <Comment
                        name='DR. IBEABUCHI CMD,'
                        location='PALMARS HOSPITAL, PORT HARCOURT, RIVERS STATE, NIGERIA'
                        description='“From the initial consultation to the final inspection, the entire process was seamless and efficient. Your team displayed an impressive level of professionalism and expertise throughout the projezct”.'
                    />}
                    {comments[1].id === activeIndex && <Comment
                        name='MD. ALFYQUEENET HOTEL OWERRI,'
                        location='PALMARS HOSPITAL, PORT HARCOURT, RIVERS STATE, NIGERIA'
                        description='“From the initial consultation to the final inspection, the entire process was seamless and efficient. Your team displayed an impressive level of professionalism and expertise throughout the projezct”.'
                    />}
                    {comments[2].id === activeIndex && <Comment
                        name='DR. OHIAH CMD,'
                        location='PALMARS HOSPITAL, PORT HARCOURT, RIVERS STATE, NIGERIA'
                        description="”We couldn't be happier with the maintenance service provided by GEVAC GLOBAL SERVICES LIMITED. They are true professionals who take pride in their work, and it shows in the results. Our escalator is running better than ever, and we look forward to a continued partnership with them in the future. Thank you for your outstanding service!”."
                    />}
                <div className='flex justify-end mt-10'>
                    <div onClick={nextSlide} className={`${activeIndex !== 1 ? "bg-primaryblack" : "bg-primarypink"} px-4 hover:bg-primaryblack text-white py-3`}>
                        <HiOutlineArrowSmallLeft size={32} />
                    </div>
                    <div onClick={nextSlide} className={`${activeIndex === 1 ? "bg-primaryblack" : "bg-primarypink"} hover:bg-primaryblack px-4 text-white py-3`}>
                        <HiOutlineArrowSmallRight size={32} />
                    </div>
                </div>
            </div>
            </Reveal>
        </div>
    );
};

export default Testimonies;