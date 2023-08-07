import React from 'react';
import Logo from '@/public/svgs/Logo';
import PhoneIcon from '@/public/svgs/PhoneIcon';
import EmailIcon from '@/public/svgs/EmailIcon';
import TwitterIcon from '@/public/svgs/TwitterIcon';
import LinkedIcon from '@/public/svgs/LinkedIcon';
import DiscordIcon from '@/public/svgs/DiscordIcon';
import FacebookIcon from '@/public/svgs/FacebookIcon';
import Link from 'next/link';

const Footer = () => {
  return (
      <div className='bg-primaryblack lg:h-auto h-auto pb-10 lg:mt-52 mt-32'>
          <div className='lg:flex block justify-between text-white w-[90%] mx-auto pt-14'>
              <div className='lg:w-[30%] w-[90%]'>
                    <div className='flex items-center gap-16'>
                        <div>
                            <Logo />
                        <p className='text-white font-semibold text-xl font-tillitium'>GEVAC GLOBAL SERVICES LTD</p>
                        </div>
                    </div>
                  {/* <div className='mt-6'>
                      <p className='text-xl font-semibold text-primarypink'>Offices</p>
                  </div> */}
                  <div className='mt-6'>
                      <p className='text-xl font-semibold text-primarypink'>Rivers State -</p>
                      <p className='mt-2 '>NO. 1 CHIEF VAL CLOSE OFF TIMOTHY LANE RUMUOLA ROAD PORT HARCOURT, RIVERS STATE.</p>
                      <p className='mt-2'>NO. 12 OHIAMINI ROAD OFF RUMULA ROAD Port Harcourt RIVERS STATE.</p>
                      <p className='mt-2'>NO. 6 CROWN AVENUE ENUGU – NGWO ENUGU STATE NIGERIA.</p>
                  </div>
                  <div className='mt-6'>
                      <p className='text-xl font-semibold text-primarypink'>Lagos State -</p>
                      <p className='mt-2'>3rd Floor Nurses House, Churchgate Street Victoria Island Lagos.</p>
                  </div>
              </div>
              <div className='mt-10 lg:mt-0'>
                  <p className='text-2xl font-semibold'>Useful Links</p>
                  <div className='mt-6'>
                      <div className='mt-4 text-lg'>Company</div>
                      <div className='mt-4 text-lg'>Our Service</div>
                      <div className='mt-4 text-lg'>Contact Us</div>
                  </div>
              </div>
              <div className='lg:mt-0 mt-7'>
                  <p className='text-2xl font-semibold'>Other Links</p>
                  <div className='mt-6'>
                      <div className='mt-4 text-lg'>
                      <Link href="pages/quality-policy">Our Quality Policy</Link>
                      </div>
                      <div className='mt-4 text-lg'>
                      <Link href="pages/hse-policy">Health Safety Policy</Link>
                      </div>
                  </div>
              </div>
              <div className='lg:mt-0 mt-7'>
                  <p className='text-2xl font-semibold'>Social Links</p>
                  <div className='mt-6 flex gap-3 items-center'>
                      <TwitterIcon />
                      <LinkedIcon />
                      <DiscordIcon />
                      <FacebookIcon />
                  </div>
              </div>
          </div>
          <div className='border-t-[0.5px] w-[90%] mx-auto mt-14 border-white' />
          <p className='text-primarypink mt-10 text-center flex items-center text-sm justify-center gap-1'>
              <span className='text-xl text-primarypink'>&copy;</span> Copyright 2023 Gevac Global Services Limited. All Rights Reserved.</p>
    </div>
  )
}

export default Footer;