'use client';

import OurStudentCard from '@/components/ourStudent/ourStudentCard';
import CustomTypography from '@/components/ui/typography';
import buddhistDayjs from '@/variables/day';
import { showcaseList } from '@/variables/showcase/showcase-list';
import { ArrowLeft, MagnifyingGlass } from '@phosphor-icons/react';
import { Image, Input, Pagination } from 'antd';
import Link from 'next/link';
import { use, useEffect, useState } from 'react';

export default function OurStudentDetailPage({
   params,
}: {
   params: Promise<{ index: string }>;
}) {
   const { index } = use(params);
   const content = showcaseList[Number(index) - 1];

   return (
      <div className='flex flex-col gap-4 min-h-[calc(100vh-190px)] mobile:min-h-[calc(100vh-250px)] w-full items-center justify-between pt-28 mobile:pt-20 pb-8 mobile:p-6'>
         <div className='flex flex-col gap-4 w-full h-full max-w-7xl'>
            <div className='flex mobile:hidden items-center justify-between'>
               <CustomTypography variant='h5'>
                  {content?.title}
               </CustomTypography>
            </div>
            <div className='hidden mobile:flex items-center justify-between'>
               <CustomTypography variant='subtitle2'>
                  {content?.title}
               </CustomTypography>
            </div>
            <div className='grid grid-cols-4 gap-3 w-full mobile:grid-cols-2 mobile:gap-2'>
               {content?.imgSrc.map((img, index) => (
                  <Image
                     key={index}
                     src={img}
                     className='overflow-hidden aspect-square mobile:h-[150px] mobile:min-h-[150px] w-full object-cover'
                  />
               ))}
            </div>
         </div>
         <div className='flex w-full py-2 items-center justify-end mobile:justify-center max-w-7xl'>
            <Link
               href={'/our-student'}
               className='hover:scale-105 transition-all duration-300 flex gap-2 items-center text-foreground-secondary'
            >
               <ArrowLeft size={16} />
               <CustomTypography variant='button'>กลับหน้าแรก</CustomTypography>
            </Link>
         </div>
      </div>
   );
}
