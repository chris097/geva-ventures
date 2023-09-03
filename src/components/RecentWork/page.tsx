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
                                {playing === false && <button type='button' onClick={handlePlay} className='flex absolute z-50'>
                                    <svg className='cursor-pointer' width="56px" height="56px" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className='fill-[#244061] animate-pulse bg-[#244061]' opacity="0.4" d="M27.9951 55.8977C43.4057 55.8977 55.8984 43.405 55.8984 27.9944C55.8984 12.5838 43.4057 0.0910645 27.9951 0.0910645C12.5845 0.0910645 0.0917969 12.5838 0.0917969 27.9944C0.0917969 43.405 12.5845 55.8977 27.9951 55.8977Z" />
                                        <path opacity="0.4" d="M27.9945 56C12.559 56 0 43.4319 0 27.9945C0 12.5571 12.559 0 27.9945 0C43.4301 0 56 12.559 56 27.9945C56 43.4301 43.4319 56 27.9945 56ZM27.9945 0.18241C12.6593 0.18241 0.18241 12.6593 0.18241 27.9945C0.18241 43.3298 12.6593 55.8176 27.9945 55.8176C43.3298 55.8176 55.8176 43.3316 55.8176 27.9945C55.8176 12.6575 43.3316 0.18241 27.9945 0.18241Z" fill="#244061" />
                                        <path opacity="0.4" d="M27.9943 51.1572C23.4124 51.1572 18.9335 49.7985 15.1239 47.253C11.3142 44.7075 8.34494 41.0894 6.59155 36.8564C4.83816 32.6233 4.3794 27.9654 5.27327 23.4716C6.16714 18.9778 8.3735 14.85 11.6133 11.6102C14.8532 8.37032 18.981 6.16396 23.4748 5.27009C27.9686 4.37622 32.6265 4.83499 36.8596 6.58838C41.0926 8.34177 44.7107 11.311 47.2562 15.1207C49.8017 18.9303 51.1604 23.4093 51.1604 27.9911C51.1546 34.1333 48.712 40.0224 44.3688 44.3656C40.0256 48.7088 34.1365 51.1514 27.9943 51.1572ZM27.9943 5.01649C23.4485 5.01649 19.0048 6.36446 15.2252 8.88995C11.4455 11.4154 8.49966 15.005 6.76008 19.2047C5.02049 23.4044 4.56534 28.0257 5.45217 32.4841C6.339 36.9425 8.52799 41.0378 11.7423 44.2522C14.9566 47.4665 19.052 49.6555 23.5104 50.5423C27.9688 51.4291 32.59 50.974 36.7897 49.2344C40.9895 47.4948 44.579 44.5489 47.1045 40.7693C49.63 36.9896 50.978 32.546 50.978 28.0002C50.9727 21.9062 48.5495 16.0633 44.2403 11.7541C39.9312 7.445 34.0883 5.02181 27.9943 5.01649Z" fill="#FF8B00" />
                                        <path d="M27.9938 48.6546C39.4039 48.6546 48.6536 39.4049 48.6536 27.9948C48.6536 16.5847 39.4039 7.33496 27.9938 7.33496C16.5837 7.33496 7.33398 16.5847 7.33398 27.9948C7.33398 39.4049 16.5837 48.6546 27.9938 48.6546Z" fill="#FF8B00" />
                                        <path d="M36.0956 27.9943L22.0117 19.8643V36.1261L36.0956 27.9943Z" fill="white" />
                                    </svg>
                                </button>}
                                {toggle === true && playing === true && <button className='flex absolute z-50' type='button' onClick={handlePause}>
                                    <svg className='w-[60px] h-[60px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_561_10)">
                                            <path opacity="0.4" d="M19.9969 38.6716C31.0044 38.6716 39.9277 30.0286 39.9277 19.3669C39.9277 8.7053 31.0044 0.0623169 19.9969 0.0623169C8.98929 0.0623169 0.0659103 8.7053 0.0659103 19.3669C0.0659103 30.0286 8.98929 38.6716 19.9969 38.6716Z" fill="#244061" />
                                            <path opacity="0.4" d="M19.9961 38.743C8.97068 38.743 -7.62939e-06 30.0479 -7.62939e-06 19.3677C-7.62939e-06 8.68747 8.97068 -6.10352e-05 19.9961 -6.10352e-05C31.0215 -6.10352e-05 40 8.68874 40 19.3677C40 30.0466 31.0227 38.743 19.9961 38.743ZM19.9961 0.126138C9.04234 0.126138 0.130286 8.75815 0.130286 19.3677C0.130286 29.9772 9.04234 38.6168 19.9961 38.6168C30.9499 38.6168 39.8697 29.9785 39.8697 19.3677C39.8697 8.75688 30.9511 0.126138 19.9961 0.126138Z" fill="#FF8B00" />
                                            <path opacity="0.4" d="M19.9945 35.3924C16.7217 35.3924 13.5225 34.4525 10.8014 32.6913C8.08016 30.9303 5.95926 28.4272 4.70685 25.4985C3.45443 22.5699 3.12674 19.3474 3.76521 16.2384C4.40369 13.1294 5.97966 10.2736 8.29384 8.03217C10.608 5.79072 13.5565 4.26427 16.7662 3.64586C19.9761 3.02744 23.3032 3.34484 26.3269 4.55789C29.3505 5.77097 31.9347 7.82521 33.753 10.4609C35.5712 13.0966 36.5417 16.1953 36.5417 19.3651C36.5376 23.6146 34.7929 27.6888 31.6906 30.6937C28.5882 33.6985 24.3819 35.3884 19.9945 35.3924ZM19.9945 3.4704C16.7475 3.4704 13.5735 4.40298 10.8737 6.15022C8.17398 7.89744 6.06978 10.3808 4.82723 13.2864C3.58466 16.1919 3.25955 19.3891 3.893 22.4736C4.52645 25.5581 6.09001 28.3914 8.38596 30.6152C10.6819 32.839 13.6071 34.3535 16.7917 34.967C19.9762 35.5806 23.2772 35.2656 26.277 34.0621C29.2767 32.8586 31.8407 30.8206 33.6447 28.2056C35.4486 25.5906 36.4115 22.5165 36.4115 19.3714C36.4076 15.1554 34.6767 11.113 31.5989 8.13178C28.5209 5.15054 24.3474 3.47408 19.9945 3.4704Z" fill="#FF8B00" />
                                            <path d="M19.9962 33.6608C28.1464 33.6608 34.7532 27.2615 34.7532 19.3675C34.7532 11.4736 28.1464 5.07428 19.9962 5.07428C11.8462 5.07428 5.23926 11.4736 5.23926 19.3675C5.23926 27.2615 11.8462 33.6608 19.9962 33.6608Z" fill="#FF8B00" />
                                            <path d="M13 26H17.6667V12H13V26ZM22.3333 12V26H27V12H22.3333Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_561_10">
                                                <rect width="40" height="40" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>}
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