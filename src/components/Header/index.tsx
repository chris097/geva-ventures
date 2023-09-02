import React, { useState } from 'react';
import EmailIcon from '@/public/svgs/EmailIcon';
import PhoneIcon from '@/public/svgs/PhoneIcon';
import ClockIcon from '@/public/svgs/ClockIcon';
import Logo from '@/public/svgs/Logo';
import Link from 'next/link';
import Navbar from '@/components/mobile/Navbar';
import { BiMenuAltLeft } from 'react-icons/bi';


const Header = () => {

    const [showMenu, setShowMenu] = useState<boolean>(false);

    const handleClick = () => {
        setShowMenu(true);
    }

    return (
        <div>
            {showMenu && <Navbar setShowMenu={setShowMenu} />}
            <div className='bg-[#F2F3F5] text-primaryblack font-roboto-slab' >
                <div className='w-[90%] mx-auto flex justify-between items-center h-[52px]'>
                    <div className='flex lg:gap-10 h-44 gap-6'>
                        <div className='flex items-center gap-1'>
                            <PhoneIcon fillColor="#4F81BD" width="16px" height="14px" />
                            <span className='sm:text-sm text-xs font-semibold'>+2348035802938, +2348100727926</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <EmailIcon fillColor="#4F81BD" width="16px" height="16px" />
                            <span className='sm:text-sm text-xs font-semibold'>vinovilla_2014@yahoo.com</span>
                        </div>
                    </div>
                    <div className='lg:flex gap-2 items-center hidden'>
                        <ClockIcon />
                        <span className='sm:text-sm text-xs font-semibold'>Mon - Sat 9:00AM - 6:00PM, Sunday - Closed</span>
                    </div>
                </div>
            </div>
            <div className='h-auto py-3 bg-primaryblack items-center'>
                <div className='w-[90%] mx-auto text-primaryblack flex justify-between items-center h-full'>
                    <div className='flex items-center gap-16'>
                        <div>
                            <Logo />
                        {/* <p className='text-primarypink font-semibold text-base font-tillitium'>GEVAC GLOBAL SERVICES LTD</p> */}
                        </div>
                    </div>
                        <div className='lg:flex hidden items-center text-white font-roboto font-medium text-base gap-16'>
                            <Link href="/" className='cursor-pointer hover:text-primarypink transition-all duration-500'>Home</Link>
                            <Link href="#company" className='cursor-pointer hover:text-primarypink transition-all duration-500'>Company</Link>
                            <Link href="#service" className='cursor-pointer hover:text-primarypink transition-all duration-500'>Our Service</Link>
                            <Link href="#contact" className='cursor-pointer hover:text-primarypink transition-all duration-500'>Contact US</Link>
                        </div>
                    <div className='lg:hidden block' onClick={handleClick}>
                        <BiMenuAltLeft color="white" size="30px" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;