'use client';

import React from 'react';
import Logo from './logo';
import { SocialIcon } from 'react-social-icons';
import CustomTypography from '../ui/typography';

export default function Footer() {
   const socialUrls = [
      'https://www.facebook.com',
      'https://www.instagram.com',
      'https://www.youtube.com',
      'https://www.tiktok.com',
   ];

   return (
      <footer className={`w-full flex items-center justify-center px-8 py-16`}>
         <div className='flex w-full max-w-7xl items-center justify-between'>
            <div className='flex flex-col gap-4'>
               <Logo />
               <CustomTypography variant='caption1'>
                  Copyright © 2024 ENDU MOBILE REPAIR SCHOOL
               </CustomTypography>
            </div>
            <div className='flex gap-2'>
               {socialUrls.map((url, index) => (
                  <SocialIcon
                     key={index}
                     target='_blank'
                     url={url}
                     className='hover:scale-[1.05] transition-all duration-500 hover:cursor-pointer !w-10 !h-10'
                  />
               ))}
            </div>
         </div>
      </footer>
   );
}
