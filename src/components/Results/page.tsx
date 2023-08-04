import React from 'react';
import result from "@/public/images/result.png";
import Image from 'next/image';
import Reveal from '@/components/utils/Reveal';

const results = [
    {number: "3526+", title: "Tons Of Customers"},
    {number: "3550+", title: "Complete Projects"},
    {number: "124+", title: "Team Members"},
    {number: "72+", title: "Upcoming Projects"},
]

const Result = () => {
    return (
        <div className='relative'>
            <div className='mt-24'>
                <div className='bg-black absolute opacity-90 w-5/6 z-30 lg:h-[800px] h-[750px]' />
                <Image className="w-full lg:h-[800px] h-[750px] image-container" src={result} alt="elevator result" />
            </div>
            <div className='text-white z-40 absolute w-full top-0 px-10 pt-24 font-tillitium'>
                <Reveal><p className='lg:text-xl text-base text-primarypink'>OUR COMPANY STATS</p></Reveal>
                <Reveal><p className='lg:text-[40px] text-2xl font-semibold leading-normal text-white lg:w-[40%] mt-5'>EXCELLENCE DRIVEN FOR GETTING UNRIVALED RESULTS.</p></Reveal>
                    <div className='grid lg:grid-cols-4 grid-cols-2 lg:mt-10 mt-16 gap-6'>
                {results.map((result, index) => (
                    <Reveal  key={index}>
                        <div className='bg-primarypink w-full font-tillitium lg:h-[280px] lg:py-0 py-4 h-auto gap-1 flex justify-center flex-col lg:px-10 px-5 lg:mt-10'>
                        <svg className='lg:w-[80px] lg:h-[80px] w-[40px] h-[40px]' viewBox="0 0 78 80" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <ellipse cx="38.875" cy="40" rx="38.875" ry="40" fill="#FFFFF1" />
                            <rect x="21.3813" y="20" width="34.9875" height="40" fill="url(#pattern0)" />
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_832_552" transform="matrix(0.0285816 0 0 0.025 -0.0144695 0)" />
                                </pattern>
                                <image id="image0_832_552" width="36" height="40" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAFFElEQVRYhbWYy3HbSBCGv4YeV1MRiI5gqQgIRWAqAkFVAko3gxGIioDSzUWqilAE5EZgKALREZiMYKHbFmWj9zADEABfoLzqG8GZnn/68Xf3CBtEAzooI4TGpjXlDUS80ZWIpNb6DSIb9fvECDNSopqaQuAUiICpDHn+CECxDOjVUaQeDY6IgAZCC+WFNy72tdjhPou3iT24k4M7JuaYEXCxjx7n/wK0As6hkwHcRz4EEIB8Ywag17j77KvtMvVpAZ9W/jhgLt+Y5f+/8eNPMm0nIBusfQQPZQ7m5rn8JsJklofwlWNmGtCVAZMPAcQRY4QTHD5nblgnMiQEQg0IgbH6nL0H0LYYSlDaCC4OnW1gSsAG3ANPwAiAw3r78v3VD+rzFejlDK08yxBXfdoAm2KkGEMc4wLjwt8THLp1LlUCpAEdsnhISXDwwAKBJvCKokBXhobBbYyNEVzgFRP4E6BDyrk9JQROZbjbjWWXKR5wLwMm8kiMCeAm8CwDRAY0EK4QRnk6HzEGhAUnMqCBcgYGiDwSyyMxb3gILWvFPQCxppAqcxngZT9lwATlAYeR+nxHcHmjk7lRhkxRwqKK3MW6u1DXIcZVvwsJigA/SgcuL7FXIG8GJLmLit/aelP5pnwBZqjhmhU2dpYWBcj318i4clD7tBBeUCKEGYprg3WGcm8t4yG4KFOEO2CMkiBEpMQWTFbDsk7Bw8RhCehOQDkoo6CFsdYMYYLSsVQwRbkHJginwJ39FiI0rLsmCCOUZyABJllW/pHoNa4G/Nx7n4+nPvF7ztwe1L+YAifVGNGAjvr8oz4vGjBds/MSeV8t29gxFg7vAZcsOCtmk/p4CE0coiID21rWY0GztD7gEsUlSxohxuGpyt47AVllEdAmJZRH/l675oYmv7lFuEBxZWgsZ9m/b2liguSc5CK0gQkLrnIeqwPIKu4BoS0dVTdlffQzB3h5c2asOAK6tuiWdV7jIoQcEGZ7agMqgOpYCihyUwL0ZbDUl1NIyrktQ9t1+7RlyPP+Tb6SVFNYr3HXpEcf5aEOGACEWH3OPqSn1huaCC4Hq24qrfOJ1c/J8gkhXLGQ9eslWKVVEWZ6Q7OUHQ5fADRAAUgxRbmSQerT4o2ZRCT2nBaLnB5mKG4JkAb0MYH7ADyRclcCk5WFlJ82nn4AfeDEAjm361yocNcNTVJeOGamPheYsnKfU0NKjBQA2QOuUM6ylF2xXmBrmNJDiBBOUR4QYmCcxYteAw63pc0pPVtKpnb9p1IRdnBRy9Tq0QBuSelsAlMSoWnrGCw7yqUYhn/NGN5W+0uUnh0GPKi0tKZ/j42FjuigzGtmxF+WW+4suTXsK8kSb0SiARMcvgIx/5JwTDfTXx2RbDy5OFw59sYu1Kw9BsAVqQW/wEWYr6xbEALnGnArEck6YgQb6I65oHxjZgApTduc7RYzhUTWLaFEJKTllhVsF2lqV1d9OxKtAwPfMb1SD7JqL7RJa8RO5cBd8Wb7axfhQv2yhWxcfQeeio3boU1HqvGjASELok1zuvV7T4bbHxNkyFQDPISx+oVZLaWDMJdB2bqHpLTszF6VPodM4X2NVgnUgIkGYNO9KHfVtQ6mVV0fP7/2c+NOSTm3851YTloRB6VVRZ4NdH/6gPkeOWT5UFlARGO/xqSWvOLQVt/WO0OsKxd2ED7jVFxjxp11Jk3ImjPT+RmFZt563QrHTLNdxDymosxZrE4i/wE/AxxiF1jmBAAAAABJRU5ErkJggg==" />
                            </defs>
                        </svg>
                            <p className='text-white lg:text-[40px] md:mt-10 mt-2 font-bold text-2xl'>{result.number}</p>
                            <p className='lg:text-lg text-sm md:mt-4 mt-2 font-medium text-white whitespace-nowrap'>{result.title}</p>
                    </div>
                    </Reveal>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Result;