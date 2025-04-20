'use client';

import OurStudentCard from '@/components/ourStudent/ourStudentCard';
import CustomTypography from '@/components/ui/typography';
import buddhistDayjs from '@/variables/day';
import Notfound from '@/components/ui/notfound';
import { studentList } from '@/variables/student/student-list';
import { Input, Pagination } from 'antd';
import { nonCaseSensitiveSearch, scrollToTop } from '@/utils/misc';
import { useEffect, useState } from 'react';

export default function OurStudentPage() {
   const sortedContents = studentList.sort((a, b) => {
      return buddhistDayjs(a.date).isBefore(buddhistDayjs(b.date)) ? 1 : -1;
   });

   const pageSize = 8;
   const [skip, setSkip] = useState<number>(0);

   const onPaginationChange = (page: number) => {
      setSkip((page - 1) * pageSize);
   };

   const [filteredList, setFilteredList] = useState(sortedContents);
   const [contentList, setContentList] = useState(
      filteredList.slice(skip, skip + pageSize),
   );
   const [searchInput, setSearchInput] = useState<string>('');

   const search = () => {
      const filteredList = sortedContents.filter((d) =>
         nonCaseSensitiveSearch(d.title, searchInput),
      );
      setFilteredList(filteredList);
      onPaginationChange(1);
   };

   useEffect(() => {
      setContentList(filteredList.slice(skip, skip + pageSize));
      scrollToTop();
   }, [skip, filteredList]);

   return (
      <div className='flex flex-col gap-4 min-h-[calc(100vh-190px)] mobile:min-h-[calc(100vh-250px)] w-full items-center justify-between pt-28 mobile:pt-20 pb-8 mobile:p-6'>
         <div className='flex flex-col gap-4 w-full max-w-6xl h-full flex-grow'>
            <div className='flex items-center justify-between'>
               <CustomTypography variant='h5'>
                  นักเรียนของเรา
               </CustomTypography>
               <CustomTypography
                  variant='body1'
                  mobileVariant='caption1'
                  className='text-foreground-secondary'
               >{`ทั้งหมด ${sortedContents.length} รายการ`}</CustomTypography>
            </div>
            <Input.Search
               size='large'
               placeholder='ค้นหา'
               className='!w-[360px]'
               value={searchInput}
               onChange={(e) => setSearchInput(e.target.value)}
               onPressEnter={search}
               onSearch={search}
            />
            {sortedContents.length === 0 ? (
               <div className='h-full w-full flex-grow flex items-center justify-center'>
                  <Notfound />
               </div>
            ) : (
               <div className='grid grid-cols-4 gap-3 w-full mobile:grid-cols-2 mobile:gap-2'>
                  {contentList.map((content, index) => (
                     <OurStudentCard
                        key={index}
                        index={index + 1}
                        content={content}
                     />
                  ))}
               </div>
            )}
            <div className='flex w-full py-2 items-center justify-end mobile:justify-center max-w-6xl'>
               <Pagination
                  align='end'
                  total={filteredList.length}
                  current={skip / pageSize + 1}
                  pageSize={pageSize}
                  onChange={onPaginationChange}
                  className='!flex mobile:!hidden'
               />
               <Pagination
                  total={filteredList.length}
                  current={skip / pageSize + 1}
                  pageSize={pageSize}
                  onChange={onPaginationChange}
                  simple
                  className='mobile:!flex !hidden !items-center'
               />
            </div>
         </div>
      </div>
   );
}
