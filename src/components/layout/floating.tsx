import React from 'react';

export default function FloatingButton() {
   const socialUrls = [
      {
         href: 'https://www.facebook.com/messages/t/453806131157051',
         imgSrc: '/images/social/messenger.png',
      },
      {
         href: 'https://line.me/ti/p/~0965936661',
         imgSrc: '/images/social/line.png',
      },
      { href: `tel:0965936661`, imgSrc: '/images/social/phone.png', title: 'คุณแจง' },
   ];
   return (
      <div className='fixed right-4 z-50 top-1/2 -translate-y-1/2 transition-all duration-300'>
         <div className='flex flex-col gap-3'>
            {socialUrls.map((item, index) => (
               <a
                  key={index}
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:scale-105 transition-all duration-300 hover:cursor-pointer rounded-full floating-shadow'
               >
                  <picture>
                     <img
                        alt={item.href}
                        src={item.imgSrc}
                        className='!w-10 !h-10'
                     />
                  </picture>
               </a>
            ))}
         </div>
      </div>
   );
}
