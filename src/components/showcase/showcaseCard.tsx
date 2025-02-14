import React from 'react';
import CustomTypography from '../ui/typography';
import buddhistDayjs from '@/variables/day';

type Props = { content: any };

export default function ShowcaseCard({ content }: Props) {
   return (
      <a className='overflow-hidden h-[540px] mobile:h-[240px] mobile:w-full relative flex items-end hover:cursor-pointer group'>
         <picture>
            <img
               src={content.thumbnailSrc}
               alt='thumbnail'
               className='absolute top-0 left-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-500 z-0'
            />
         </picture>
         <div className='flex mobile:hidden flex-col justify-end text-white z-10 w-full h-1/2 p-4 bg-gradient-to-b from-black/0 to-black'>
            <CustomTypography variant='subtitle1'>
               {content.title}
            </CustomTypography>
            <div className='flex justify-between'>
               <CustomTypography variant='body1'>
                  {buddhistDayjs(content.date).format('DD MMM BB')}
               </CustomTypography>
               {/* <Link
            href={`/showcase/${index}`}
         > */}
               <CustomTypography variant='body1' className={`underline`}>
                  อ่านเพิ่มเติม
               </CustomTypography>
               {/* </Link> */}
            </div>
         </div>
         <div className='hidden mobile:flex flex-col justify-end text-white z-10 w-full h-1/2 p-4 bg-gradient-to-b from-black/0 to-black'>
            <CustomTypography variant='subtitle3' className='mobile:line-clamp-2 mobile:break-words'>
               {content.title}
            </CustomTypography>
            <div className='flex justify-between mobile:hidden'>
               <CustomTypography variant='caption1'>
                  {buddhistDayjs(content.date).format('DD MMM BB')}
               </CustomTypography>
               {/* <Link
            href={`/showcase/${index}`}
         > */}
               <CustomTypography variant='caption1' className={`underline`}>
                  อ่านเพิ่มเติม
               </CustomTypography>
               {/* </Link> */}
            </div>
         </div>
      </a>
   );
}
