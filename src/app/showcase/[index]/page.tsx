'use client';

import OurStudentCard from '@/components/ourStudent/ourStudentCard';
import DownloadableImage from '@/components/ui/downloadableImage';
import CustomTypography from '@/components/ui/typography';
import { cn } from '@/utils/misc';
import buddhistDayjs from '@/variables/day';
import { showcaseList } from '@/variables/showcase/showcase-list';
import {
   ArrowLeft,
   CaretLeft,
   CaretRight,
   MagnifyingGlass,
} from '@phosphor-icons/react';
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
   const [skip, setSkip] = useState<number>(0);

   const [imgList, setImgList] = useState<string[]>(
      content.imgSrc.slice(skip, skip + 5),
   );

   const [currentImg, setCurrentImg] = useState<string>(content.imgSrc[0]);

   useEffect(() => {
      setImgList(content.imgSrc.slice(skip, skip + 5));
   }, [skip]);

   const prevImg = () => {
      setSkip((prev) => Math.max(prev - 1, 0));
   };

   const nextImage = () => {
      setSkip((prev) => Math.min(prev + 1, content.imgSrc.length - 5));
   };

   return (
      <div className='flex flex-col gap-4 min-h-[calc(100vh-190px)] mobile:min-h-[calc(100vh-250px)] w-full items-center justify-between pt-28 mobile:pt-20 pb-8 mobile:p-6'>
         <div className='flex flex-col gap-4 w-full h-full max-w-7xl'>
            <div className='flex mobile:hidden flex-col gap-2'>
               <CustomTypography variant='subtitle1'>
                  {content?.title}
               </CustomTypography>
               <div className='flex gap-2.5 items-center'>
                  <img src='/images/circle-logo.png' className='w-10 h-10' />
                  <div className='flex flex-col text-foreground-secondary'>
                     <CustomTypography variant='subtitle3'>
                        ENDU Team
                     </CustomTypography>
                     <CustomTypography variant='caption1'>
                        {buddhistDayjs(content.date).format('DD MMM BBBB')}
                     </CustomTypography>
                  </div>
               </div>
            </div>
            <div className='hidden mobile:flex'>
               <CustomTypography variant='subtitle2'>
                  {content?.title}
               </CustomTypography>
            </div>
            <DownloadableImage
               src={currentImg}
               className='overflow-hidden aspect-[4/3] w-full object-cover'
            />
            <div className='grid grid-cols-5 gap-3 w-full mobile:grid-cols-2 mobile:gap-2 relative text-white z-50'>
               {imgList.map((img, index) => (
                  <img
                     key={index}
                     src={img}
                     className={cn(
                        'overflow-hidden aspect-[4/3] mobile:h-[150px] mobile:min-h-[150px] w-full object-cover',
                        img === currentImg
                           ? 'border-2 border-brand-primary'
                           : '',
                     )}
                     onClick={() => setCurrentImg(img)}
                  />
               ))}
               <button
                  onClick={prevImg}
                  className='absolute left-0 top-1/2 -translate-y-1/2 bg-foreground-secondary/70 py-4'
                  hidden={imgList.length < 5}
               >
                  <CaretLeft size={28} />
               </button>
               <button
                  onClick={nextImage}
                  className='absolute right-0 top-1/2 -translate-y-1/2 bg-foreground-secondary/70 py-4'
                  hidden={imgList.length < 5}
               >
                  <CaretRight size={28} />
               </button>
            </div>
            <CustomTypography variant='body1'>
               {content.detail}
            </CustomTypography>
         </div>
         <div className='flex w-full py-2 items-center justify-end mobile:justify-center max-w-7xl'>
            <Link
               href={'/showcase'}
               className='hover:scale-105 transition-all duration-300 flex gap-2 items-center text-foreground-secondary'
            >
               <ArrowLeft size={16} />
               <CustomTypography variant='button'>กลับหน้าแรก</CustomTypography>
            </Link>
         </div>
      </div>
   );
}
