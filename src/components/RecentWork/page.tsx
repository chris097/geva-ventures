import React, { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import recent1 from "@/public/images/gevac2.jpeg"
import recent2 from "@/public/images/gevac3.jpeg"
import recent3 from "@/public/images/gevac4.jpeg"
import recent4 from "@/public/images/gevac5.jpeg"
import recent5 from "@/public/images/gevac6.jpeg"
import recent6 from "@/public/images/gevac7.jpeg"
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
    { img: recent4 },
    { img: recent5 },
    { img: recent6 },
];

const RecentWork = () => {

     const [playing, setPlaying] = useState<boolean>(false);
    const [toggle, setToogle] = useState<boolean>(false);

    const playRef = useRef<HTMLVideoElement>(null)

    const handlePlay = () => {
        if (playing === false) {
            playRef.current && playRef.current?.play();
        }
        setPlaying(true)
    }
    const handlePause = () => {
        if (playing === true) {
            playRef.current && playRef.current?.pause();
        }
        setPlaying(false)
    }

    return (
        <div id='company' className='overflow-x-hidden'>
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
                                <Image className='w-full h-full object-fill lg:pr-20 sm:pr-[200px] pr-[212px]' src={recent.img} alt='elevator recent pic' />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className='bg-yabalightyellow h-auto xl:pt-40 xl:pb-20 md:py-10 py-7'>
            <div className='w-[90%] mx-auto'>
                {/* <div className='border-yabayellow text-yabayellow bg-yabalighteryellow text-base font-circular flex justify-center items-center rounded-[8px] border-[0.5px] w-[110px] h-[40px]'>About Us</div>
                <p className='lg:text-2xl sm:text-xl text-base font-circular font-[450] w-[90%] text-primaryblack mt-4'>GEVAC GLOBAL SERVICES LTD is a company incorporated under the laws of the Federal Republic of Nigeria with registration Number RV122469 The Company was formed to provide expert indigenous services to support local and foreign firms operating within the shores of Nigeria.GEVAC GLOBAL SERVICES LIMITED is managed by professionals with experience spanning over many years in their fields.</p> */}
                <div onMouseLeave={() => setToogle(false)} className='border bg-black relative z-40 lg:h-[600px] md:h-[400px] h-[320px] rounded mt-[37px] flex justify-center items-center'>
                    <div className='flex justify-center items-center w-full h-full'>
                        {playing === false && <button type='button' onClick={handlePlay} className='flex absolute z-50'>play</button>}
                       {toggle === true && playing === true && <button className='flex absolute z-50' type='button' onClick={handlePause}>pause</button>}
                        <div onMouseOver={() => setToogle(true)} className='w-full h-full'>
                            <video muted ref={playRef} onEnded={() => setPlaying(false)} className="object-fill object-top h-full min-w-full">
                  <source src="https://drive.google.com/uc?id=13wQVOZRdZDn5ixXo-wlyy48NaoTuGsZ1&export=download"
                                    type="video/mp4" />
                            </video>
                        </div>
                      </div>
                      
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default RecentWork;