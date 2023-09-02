"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/Header';

const AboutUs = () => {

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
    <div>
      <Header />
           <div className='bg-yabalightyellow h-auto xl:py-20 md:py-10 py-7'>
            <div className='w-[90%] mx-auto'>
                <div className='border-yabayellow text-yabayellow bg-yabalighteryellow text-base font-circular flex justify-center items-center rounded-[8px] border-[0.5px] w-[110px] h-[40px]'>About Us</div>
                <p className='lg:text-2xl sm:text-xl text-base font-circular font-[450] xl:w-[70%] lg:w-[78%] md:w-[75%] w-[90%] text-plainblack mt-4'>At Yabacon, we believe that the next big global tech solution can, and will, come from Africa. So we&apos;re building a community of innovators to help make this a reality.</p>
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
  )
}

export default AboutUs;