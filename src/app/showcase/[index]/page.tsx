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
import { Carousel, ConfigProvider, Image, Input, Pagination } from 'antd';
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
         <div className='flex flex-col gap-4 w-full h-full max-w-4xl'>
            <div className='flex flex-col gap-2'>
               <CustomTypography variant='subtitle1' mobileVariant='subtitle2'>
                  {content?.title}
               </CustomTypography>
               <div className='flex gap-2.5 items-center'>
                  <img
                     src='/images/circle-logo.png'
                     className='w-10 h-10 mobile:w-8 mobile:h-8 '
                  />
                  <div className='flex flex-col text-foreground-secondary'>
                     <CustomTypography
                        variant='subtitle3'
                        mobileVariant='overline2'
                     >
                        ENDU Team
                     </CustomTypography>
                     <CustomTypography
                        variant='caption1'
                        mobileVariant='overline1'
                     >
                        {buddhistDayjs(content.date).format('DD MMM BBBB') +
                           ` - อ่าน ${content.minuteRead} นาที`}
                     </CustomTypography>
                  </div>
               </div>
            </div>
            <ConfigProvider
               theme={{
                  token: {
                     colorBgContainer: 'white',
                  },
                  components: {
                     Carousel: {
                        dotHeight: 12,
                        dotWidth: 12,
                        dotActiveWidth: 12,
                        dotOffset: 16,
                     },
                  },
               }}
            >
               <Carousel autoplay autoplaySpeed={5000} draggable>
                  {imgList.map((img, index) => (
                     <img
                        key={index}
                        src={img}
                        className='overflow-hidden aspect-[4/3] w-full object-cover'
                     />
                  ))}
               </Carousel>
            </ConfigProvider>

            <CustomTypography variant='body1'>
               {content.detail}
            </CustomTypography>
         </div>
         <div className='flex w-full py-2 items-center justify-end mobile:justify-center max-w-4xl'>
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
