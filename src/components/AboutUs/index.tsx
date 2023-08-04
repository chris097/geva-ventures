import React, { useState } from 'react';
import faqImg from '@/public/images/faqImg.png';
import Image from 'next/image';
import Reveal from '../utils/Reveal';
import PhoneIcon from '@/public/svgs/PhoneIcon';
import EmailIcon from '@/public/svgs/EmailIcon';

interface metaData {
    description: string
    stats: string
    text: string

}


const abouts = [
    { description: "Emergency Solution Anytime" },
    { description: "Affordable Price Upto 2 Years" },
    { description: "Reliable & Experienced Team" },
];
const contacts = [
    { description: "+234808908837", icon: <PhoneIcon fillColor="white" width="10px" height="10.5px" /> },
    { description: "Example@gmail.com", icon: <EmailIcon fillColor="white" width="10px" height="10.5px" /> },
    { description: "20 Madi Ave, Lagos", icon: <PhoneIcon fillColor="white" width="10px" height="10.5px" /> },
];

const tabs = [
    { tab: 1, name: "About Us" },
    { tab: 2, name: "Vision" },
    { tab: 3, name: "Contact Us" },
];

const AboutText = ({description, stats, text}:metaData) => {
    return (
        <Reveal>
            <p className='text-lg text-[#6E777D] mt-3 lg:ml-14 mr-16'>{description}</p>
            <div className='flex items-center gap-20 lg:ml-14 mt-3'>
                <div>
                    <p className='text-[60px] font-bold text-primarypink'>{stats}</p>
                    <p className='text-lg font-semibold text-primaryblack leading-tight mt-2'>{text}</p>
                </div>
                <div className='mt-2'>
                    {contacts.map((contact, index) => (
                        <div key={index} className='flex gap-2 items-center mt-3'>
                            <span className='bg-primarypink rounded-full p-1'>{contact.icon}</span>
                            <span className='text-primaryblack text-base'>{contact.description}</span>
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
            <div className='flex h-[730px] relative'>
                <div className='flex-1 lg:block hidden'>
                    <Image className='w-full h-full object-fill' alt='elevator about image' src={faqImg} />
                    <div>
                        <div className='bg-primaryblack text-white font-tillitium absolute bottom-0 px-6 py-8 left-0'>
                       <Reveal> <p className='text-xl mx-4 font-semibold'>Leading Developer Of Commercial & <br /> Residential Projects</p></Reveal>
                    </div>
                    </div>
                </div>
                <div className=' bg-white font-tillitium h-auto border-tb pt-10 py-14 px-5 flex-1'>
                    <Reveal><p className='text-primarypink text-base font-semibold uppercase lg:ml-14'>Latest Projects</p></Reveal>
                    <Reveal><p className='lg:text-[40px] text-2xl text-primaryblack font-bold mt-4 leading-tight lg:ml-14'>WE ARE QUALIFIED IN <br /> EVERY WORKING <br /> DEPARTMENTS</p></Reveal>
                    <Reveal>
                        <div className='bg-primarygray pl-8 text-lg font-tillitium font-semibold gap-10 flex items-center text-primaryblack h-20 lg:ml-14 mr-10 my-6'>
                        {tabs.map((tab) => (
                            <div onClick={() => setCurrentTab(tab.tab)} key={tab.tab} className={`cursor-pointer ${tab.tab === currentTab && "border-primaryblack border-b-2"}`}>{tab.name}</div>
                        ))}
                        </div>
                    </Reveal>
                    <Reveal>
                        {tabs[0].tab === currentTab && <AboutText
                            description='Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus erat nascetur, a sed placerat sagittis euismod'
                            stats='3025'
                            text='STARTED JOURNEY'
                        />}
                        {tabs[1].tab === currentTab && <AboutText
                            description='Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus erat nascetur, a sed placerat sagittis euismod'
                            stats='2025'
                            text='STARTED JOURNEY'
                        />}
                        {tabs[2].tab === currentTab && <AboutText
                            description='Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus erat nascetur, a sed placerat sagittis euismod'
                            stats='1025'
                            text='STARTED JOURNEY'
                        />}
                        <button className='bg-black lg:h-14 h-10 lg:ml-14 rounded-sm py-3 px-6 text-base font-semibold mt-10 text-white'>GET STARTED</button>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;