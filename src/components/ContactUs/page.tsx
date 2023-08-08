import React from 'react';
import { Reveal } from '../utils/Reveal';
import PhonewithTime from '@/public/svgs/PhonewithTime';
import Phone from '@/public/svgs/Phone';
import LocationIcon from '@/public/svgs/LocationIcon';

interface metaData {
    info: string
    time: string
    show: boolean
    bgColor: string
    icon: JSX.Element
    showEnd: boolean
}

const ContactInfo = ({info, time, show, bgColor, icon, showEnd}: metaData) => {
    return (
        <>
            <Reveal>
                <div className={`${bgColor} w-full text-white h-[256px] flex`}>
                    <div>
                        {show ? <div className='w-6 h-full bg-primarypink' /> : ""}
                    </div>
                    <div className='flex justify-center items-center w-full gap-4 px-6'>
                        {icon}
                        <div className='font-tillitium text-white'>
                            <p className='text-sm font-semibold'>{info}</p>
                            <p className='text-lg font-semibold mt-3'>{time}</p>
                        </div>
                    </div>
                    <div>
                       {showEnd ? <div className='w-6 h-full bg-primarypink' /> : ""}
                    </div>
                </div>
            </Reveal>
        </>
    );
};

const ContactUs = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 text-white py-24'>
            <ContactInfo
                info='WE ARE OPEN MONDAY-FRIDAY'
                time='7:00 am - 9:00 pm'
                show={true}
                bgColor='bg-black'
                icon={<PhonewithTime />}
                showEnd={false}
            />
            <ContactInfo
                info='HAVE A QUESTION?'
                time='+2348035802938, +2348100727926'
                show={false}
                showEnd={false}
                bgColor='bg-primarypink'
                icon={<Phone />}
            />
            <ContactInfo
                info='NEED AN ELEVATOR? OUR ADDRESS'
                time='NO. 1 CHIEF VAL CLOSE OFF TIMOTHY LANE RUMUOLA ROAD PORT HARCOURT, RIVERS STATE'
                show={false}
                showEnd={true}
                bgColor='bg-black'
                icon={<LocationIcon />}
            />
        </div>
    );
};

export default ContactUs;