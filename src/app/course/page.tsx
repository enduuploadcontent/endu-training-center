'use client';

import CourseCard from '@/components/course/courseCard';
import Notfound from '@/components/ui/notfound';
import CustomTypography from '@/components/ui/typography';
import { nonCaseSensitiveSearch } from '@/utils/misc';
import { courseList } from '@/variables/course/course';
import { Input } from 'antd';
import { useState } from 'react';

export default function CoursePage() {
   const [filteredList, setFilteredList] = useState(courseList);

   const [searchInput, setSearchInput] = useState<string>('');

   const search = () => {
      const filteredList = courseList.filter((c) =>
         nonCaseSensitiveSearch(c.title, searchInput),
      );
      setFilteredList(filteredList);
   };

   return (
      <div className='flex flex-col gap-4 min-h-[calc(100vh-190px)] mobile:min-h-[calc(100vh-250px)] w-full items-center justify-between pt-28 mobile:pt-20 pb-8 mobile:p-6'>
         <div className='flex flex-col gap-4 w-full max-w-6xl flex-grow'>
            <div className='flex items-center justify-between'>
               <CustomTypography variant='h5' mobileVariant='subtitle2'>
                  หลักสูตร
               </CustomTypography>
               <CustomTypography
                  variant='body1'
                  mobileVariant='caption1'
                  className='text-foreground-secondary'
               >{`ทั้งหมด ${courseList.length} รายการ`}</CustomTypography>
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
            {filteredList.length === 0 ? (
               <div className='h-full w-full flex-grow flex items-center justify-center'>
                  <Notfound />
               </div>
            ) : (
               <div className='grid grid-cols-3 w-full mobile:grid-cols-1 gap-4'>
                  {filteredList.map((content, index) => (
                     <CourseCard key={index} content={content} />
                  ))}
               </div>
            )}
         </div>
      </div>
   );
}
