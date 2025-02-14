'use client';

import ShowcaseCard from '@/components/showcase/showcaseCard';
import CustomTypography from '@/components/ui/typography';
import buddhistDayjs from '@/variables/day';
import { showcaseList } from '@/variables/showcase/showcase-list';
import { Input, Pagination } from 'antd';
import { useEffect, useState } from 'react';

export default function ShowcasePage() {
   const [skip, setSkip] = useState<number>(0);

   const onPaginationChange = (page: number, pageSize: number) => {
      setSkip((page - 1) * pageSize);
   };

   useEffect(() => {
      console.log(skip);
   }, [skip]);

   const contentList = showcaseList
      .sort((a, b) => {
         return buddhistDayjs(a.date).isBefore(buddhistDayjs(b.date)) ? 1 : -1;
      })
      .slice(skip, skip + 8);

   return (
      <div className='flex w-full items-center justify-center mt-20 py-8 mobile:p-6'>
         <div className='flex flex-col gap-4 w-full max-w-7xl'>
            <div className='flex items-center justify-between'>
               <CustomTypography variant='h5'>ผลงานการซ่อม</CustomTypography>
               <CustomTypography
                  variant='body1'
                  className='text-foreground-secondary'
               >{`ทั้งหมด ${showcaseList.length} รายการ`}</CustomTypography>
            </div>
            <Input size='large' placeholder='ค้นหา' className='!w-[360px]' />
            <div className='grid grid-cols-4 gap-3 w-full mobile:grid-cols-2 mobile:gap-2'>
               {contentList.map((content, index) => (
                  <ShowcaseCard key={index} content={content} />
               ))}
            </div>
            <Pagination
               align='end'
               total={showcaseList.length}
               current={skip / 8 + 1}
               pageSize={8}
               onChange={onPaginationChange}
               className='!flex mobile:!hidden'
            />
            <Pagination
               align='end'
               total={showcaseList.length}
               current={skip / 8 + 1}
               pageSize={8}
               onChange={onPaginationChange}
               simple
               className='mobile:!flex !hidden'
            />
         </div>
      </div>
   );
}
