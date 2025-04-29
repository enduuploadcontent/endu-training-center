'use client';

import DownloadableImageList from '@/components/ui/downloadableImage';
import CustomTypography from '@/components/ui/typography';
import buddhistDayjs from '@/variables/day';
import { studentList } from '@/variables/student/student-list';
import { ArrowLeft } from '@phosphor-icons/react';
import Link from 'next/link';
import { use } from 'react';

export default function OurStudentDetailPage({
   params,
}: {
   params: Promise<{ index: string }>;
}) {
   const { index } = use(params);
   const content = studentList[Number(index) - 1];

   return (
      <div className='flex flex-col gap-4 min-h-[calc(100vh-190px)] mobile:min-h-[calc(100vh-250px)] w-full items-center justify-between pt-28 mobile:pt-20 pb-8 mobile:p-6'>
         <div className='flex flex-col gap-4 w-full h-full max-w-6xl'>
            <div className='flex items-center justify-between'>
               <div className='flex flex-col gap-2'>
                  <CustomTypography
                     variant='subtitle1'
                  >
                     {content?.title}
                  </CustomTypography>
                  <CustomTypography
                     variant='caption1'
                     mobileVariant='overline1'
                     className='mobile:hidden'
                  >
                     {buddhistDayjs(content.date).format('DD MMM BBBB')}
                  </CustomTypography>
               </div>
               <CustomTypography
                  variant='body1'
                  mobileVariant='caption1'
                  className='text-foreground-secondary mobile:hidden'
               >
                  {`ทั้งหมด ${content?.imgSrc.length} รายการ`}
               </CustomTypography>
            </div>
            <div className='grid grid-cols-4 gap-3 w-full mobile:grid-cols-2 mobile:gap-2'>
               <DownloadableImageList
                  key={index}
                  src={content.imgSrc}
                  className='overflow-hidden aspect-square mobile:h-[150px] mobile:min-h-[150px] w-full object-cover'
               />
            </div>
         </div>
         <div className='flex w-full py-2 items-center justify-end mobile:justify-center max-w-6xl'>
            <Link
               href={'/our-student'}
               className='hover:scale-105 transition-all duration-300 flex gap-2 items-center text-foreground-secondary'
            >
               <ArrowLeft size={16} />
               <CustomTypography variant='button'>ย้อนกลับ</CustomTypography>
            </Link>
         </div>
      </div>
   );
}
