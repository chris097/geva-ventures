import React, { useState } from 'react';
import faqImg from '@/public/images/frame12.jpeg';
import Image from 'next/image';
import Reveal from '../utils/Reveal';
import PhoneIcon from '@/public/svgs/PhoneIcon';
import EmailIcon from '@/public/svgs/EmailIcon';

interface metaData {
    description: string | JSX.Element
    stats: string
    text: string
    data: {icon: JSX.Element | string, description: string}[]
}

const abouts: {description: string, icon: string}[] = [
    { icon: "", description: "Emergency Solution Anytime" },
    { icon: "", description: "Affordable Price Upto 2 Years" },
    { icon: "", description: "Reliable & Experienced Team" },
];
const contacts: {description: string, icon: JSX.Element}[] = [
    { description: "+2348035802938", icon: <PhoneIcon fillColor="white" width="10px" height="10.5px" /> },
    { description: "vinovilla_2014@yahoo.com", icon: <EmailIcon fillColor="white" width="10px" height="10.5px" /> },
    { description: "+2348100727926", icon: <PhoneIcon fillColor="white" width="10px" height="10.5px" /> },
];

const tabs:{tab: number, name: string}[] = [
    { tab: 1, name: "About Us" },
    { tab: 2, name: "Vision" },
    { tab: 3, name: "Contact Us" },
];

const AboutText = ({description, stats, text, data}:metaData) => {
    return (
        <Reveal>
            <p className='lg:text-lg text-base text-[#6E777D] mt-3 lg:ml-14 lg:mr-16'>{description}</p>
            <div className='flex items-center lg:gap-20 gap-8 lg:ml-14 mt-3'>
                <div>
                    <p className='lg:text-[60px] text-[48px] font-bold text-primarypink'>{stats}</p>
                    <p className='lg:text-lg text-md font-semibold text-primaryblue uppercase leading-tight mt-2'>{text}</p>
                </div>
                <div className='mt-2'>
                    {data.map((meta, index: number) => (
                        <div key={index} className='flex gap-2 items-center mt-3'>
                            <span className='bg-primarypink rounded-full p-1'>{meta.icon}</span>
                            <span className='text-primaryblack lg:text-base text-xs'>{meta.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Reveal>
    );
};

const AboutUs = () => {

    const [currentTab, setCurrentTab] = useState(1);

    return (
        <div className='pt-24'>
            <div className='flex h-auto relative'>
                <div className='flex-1 lg:block hidden'>
                    <Image className='w-full h-full object-cover' alt='elevator about image' src={faqImg} />
                    <div>
                        <div className='bg-primaryblack text-white font-tillitium absolute bottom-0 px-6 py-8 left-0'>
                            <Reveal> <p className='text-xl mx-4 font-semibold'>Leading Developer Of Commercial & <br /> Residential Projects</p></Reveal>
                        </div>
                    </div>
                </div>
                <div className=' bg-white font-tillitium h-auto border-tb pt-10 py-14 px-5 flex-1'>
                    <Reveal><p className='text-primarypink text-base font-semibold uppercase lg:ml-14'>Latest Projects</p></Reveal>
                    <Reveal><p className='lg:text-[40px] text-2xl text-primaryblack font-bold mt-4 leading-tight lg:w-[60%] w-[90%] lg:ml-14'>WE ARE QUALIFIED IN EVERY WORKING DEPARTMENTS</p></Reveal>
                    <Reveal>
                        <div className='bg-primarygray pl-8 lg:text-lg font-tillitium font-semibold text-base gap-10 flex items-center text-primaryblack lg:h-20 h-16 lg:ml-14 lg:mr-10 my-6'>
                            {tabs.map((tab) => (
                                <div onClick={() => setCurrentTab(tab.tab)} key={tab.tab} className={`cursor-pointer transition-all duration-1000 delay-100 ${tab.tab === currentTab && "border-primarypink text-primarypink border-b-2"}`}>{tab.name}</div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal>
                        {tabs[0].tab === currentTab && <AboutText
                            description={<p><span className='text-primarypink font-bold'>GEVAC GLOBAL SERVICES</span> is a company incorporated under the laws
of the Federal Republic of Nigeria with registration Number RV122469
The Company was formed to provide expert indigenous services to support local and foreign firms operating within the shores of Nigeria.
GEVAC GLOBAL SERVICES is managed by professionals with experience spanning over many years in their fields.</p>}
                            stats='2045'
                            text='Completed Projects'
                            data={abouts}
                        />}
                        {tabs[1].tab === currentTab && <AboutText
                            description={<div>
                                <p>Head Office</p>
                            </div>}
                            stats='2025'
                            text='STARTED JOURNEY'
                            data={contacts}
                        />}
                        {tabs[2].tab === currentTab && <AboutText
                            description={<div className=''>
                                <div className='flex-1'>
                                    <p className='text-primarypink font-bold'>Head Office:</p>
                                    <p className='text-base mt-1'>NO. 1 CHIEF VAL CLOSE OFF TIMOTHY LANE RUMUOLA ROAD PORT HARCOURT, RIVERS STATE</p>
                                </div>
                                <div className='flex-1'>
                                    <p className='text-primarypink font-bold mt-3'>Branch Office:</p>
                                    <p className='mt-1 text-base'>NO 12 OHIAMINI ROAD OFF RUMULA ROAD Port Harcourt RIVERS STATE.</p>
                                </div>
                                <div className='flex-1'>
                                    <p className='text-primarypink font-bold mt-3'>Branch Office:</p>
                                    <p className='mt-1 text-base'>NO. 6 CROWN AVENUE ENUGU – NGWO ENUGU STATE NIGERIA</p>
                                </div>
                            </div>}
                            stats='1995'
                            text='STARTED JOURNEY'
                            data={contacts}
                        />}
                        <button className='bg-black h-14 lg:ml-14 rounded-sm py-3 px-6 text-base font-semibold mt-10 text-white'>GET STARTED</button>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;