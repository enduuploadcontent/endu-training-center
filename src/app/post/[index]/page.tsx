'use client';

import CustomTypography from '@/components/ui/typography';
import buddhistDayjs from '@/variables/day';
import { postList } from '@/variables/post/post-list';
import { ArrowLeft } from '@phosphor-icons/react';
import { Carousel, ConfigProvider } from 'antd';
import Link from 'next/link';
import { use } from 'react';

export default function PostDetailPage({
   params,
}: {
   params: Promise<{ index: string }>;
}) {
   const { index } = use(params);
   const content = postList[Number(index) - 1];

   return (
      <div className='flex flex-col gap-4 min-h-[calc(100vh-190px)] mobile:min-h-[calc(100vh-250px)] w-full items-center justify-between pt-28 mobile:pt-20 pb-8 mobile:p-6'>
         <div className='flex flex-col gap-4 w-full h-full max-w-4xl'>
            <div className='flex flex-col gap-2'>
               <CustomTypography variant='subtitle1'>
                  {content?.title}
               </CustomTypography>
               <div className='flex gap-2.5 items-center'>
                  <img
                     src='/images/circle-logo.png'
                     alt='logo'
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
                        {buddhistDayjs(content.date).format('DD MMM BBBB')}
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
                  {content.imgSrc.map((img, index) => (
                     <img
                        key={index}
                        src={img}
                        alt={`img-${index}`}
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
               href={'/post'}
               className='hover:scale-105 transition-all duration-300 flex gap-2 items-center text-foreground-secondary'
            >
               <ArrowLeft size={16} />
               <CustomTypography variant='button'>ย้อนกลับ</CustomTypography>
            </Link>
         </div>
      </div>
   );
}
