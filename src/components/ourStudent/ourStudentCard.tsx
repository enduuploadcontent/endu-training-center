import React from 'react';
import CustomTypography from '../ui/typography';
import buddhistDayjs from '@/variables/day';
import Link from 'next/link';
import { StudentContentType } from '@/variables/student/student-list';

type Props = { content: StudentContentType; index: number };

export default function OurStudentCard({ content, index }: Props) {
   return (
      <Link
         href={`/our-student/${index}`}
         className='overflow-hidden aspect-square mobile:h-[150px] mobile:min-h-[150px] w-full relative flex items-end hover:cursor-pointer group'
      >
         <picture>
            <img
               src={content.thumbnailSrc}
               referrerPolicy="no-referrer"
               alt='thumbnail'
               className='absolute top-0 left-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-500 z-0'
            />
         </picture>
         <div className='flex flex-col justify-end text-white z-10 w-full h-1/2 p-4 bg-gradient-to-b from-black/0 to-black'>
            <CustomTypography
               variant='subtitle3'
               mobileVariant='caption2'
               className='line-clamp-2 break-words'
            >
               {content.title}
            </CustomTypography>
            <div className='flex justify-between mobile:hidden'>
               <CustomTypography variant='caption1'>
                  {buddhistDayjs(content.date).format('DD MMM BB')}
               </CustomTypography>
               <CustomTypography variant='caption1' className={`underline`}>
                  อ่านเพิ่มเติม
               </CustomTypography>
            </div>
         </div>
      </Link>
   );
}
