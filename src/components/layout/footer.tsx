'use client';

import React from 'react';
import Logo from './logo';
import { SocialIcon } from 'react-social-icons';
import CustomTypography from '../ui/typography';

export default function Footer() {
   const socialUrls = [
      {
         href: 'https://www.facebook.com',
         imgSrc: '/images/social/facebook.png',
      },
      {
         href: 'https://www.instagram.com',
         imgSrc: '/images/social/instagram.png',
      },
      { href: 'https://www.youtube.com', imgSrc: '/images/social/youtube.png' },
      { href: 'https://www.tiktok.com', imgSrc: '/images/social/tiktok.png' },
   ];

   return (
      <footer className={`w-full flex items-center justify-center px-8 py-16 mobile:px-5 mobile:py-10 border-t-border border`}>
         <div className='flex mobile:flex-col mobile:gap-10 w-full max-w-7xl items-center justify-between'>
            <div className='flex flex-col gap-4'>
               <Logo />
               <CustomTypography
                  variant='caption1'
                  className='mobile:hidden drop-shadow-lg'
               >
                  Copyright © 2024 ENDU MOBILE REPAIR SCHOOL
               </CustomTypography>
               
            </div>
            <div className='flex gap-2 mobile:gap-3'>
               {socialUrls.map((item, index) => (
                  <a
                     key={index}
                     href={item.href}
                     target='_blank'
                     rel='noopener noreferrer'
                     className='hover:scale-105 transition-all duration-300 hover:cursor-pointer'
                  >
                     <picture>
                        <img
                           alt={item.href}
                           src={item.imgSrc}
                           className='!w-8 !h-8'
                        />
                     </picture>
                  </a>
               ))}
            </div>
            <CustomTypography
                  variant='caption1'
                  className='hidden mobile:flex drop-shadow-lg'
               >
                  Copyright © 2024 ENDU MOBILE REPAIR SCHOOL
               </CustomTypography>
         </div>
      </footer>
   );
}
