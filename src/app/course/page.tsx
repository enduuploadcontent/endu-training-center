'use client';

import CourseCard from '@/components/course/courseCard';
import CustomTypography from '@/components/ui/typography';
import { nonCaseSensitiveSearch, scrollToTop } from '@/utils/misc';
import { courseList } from '@/variables/course/course';
import { Checkbox, GetProp, Input, Pagination } from 'antd';
import { useEffect, useState } from 'react';

export default function CoursePage() {
   const pageSize = 6;

   const [skip, setSkip] = useState<number>(0);

   const onPaginationChange = (page: number) => {
      setSkip((page - 1) * pageSize);
   };

   const master = courseList;

   const [filteredList, setFilteredList] = useState(master);
   const [contentList, setContentList] = useState(
      filteredList.slice(skip, skip + pageSize),
   );
   const [searchInput, setSearchInput] = useState<string>('');
   const [levelFilter, setLevelFilter] = useState<string[]>([]);

   const search = () => {
      const filteredList = master.filter(
         (d) =>
            levelFilter.includes(d.level) &&
            nonCaseSensitiveSearch(d.title, searchInput),
      );
      setFilteredList(filteredList);
      onPaginationChange(1);
   };

   const clear = () => {
      setFilteredList(master);
      onPaginationChange(1);
   };

   useEffect(() => {
      setContentList(filteredList.slice(skip, skip + pageSize));
      scrollToTop();
   }, [skip, filteredList]);

   const onLevelFilterChange = () => {
      if (levelFilter.length > 0) {
         const filteredList = master.filter(
            (d) =>
               levelFilter.includes(d.level) &&
               nonCaseSensitiveSearch(d.title, searchInput),
         );
         setFilteredList(filteredList);
      } else {
         const filteredList = master.filter((d) =>
            nonCaseSensitiveSearch(d.title, searchInput),
         );
         setFilteredList(filteredList);
      }
      onPaginationChange(1);
   };

   useEffect(() => {
      onLevelFilterChange();
      scrollToTop();
   }, [levelFilter]);

   return (
      <div className='flex flex-col gap-4 w-full items-center justify-center mt-20 mobile:mt-14 py-8 mobile:p-6'>
         <div className='flex flex-col gap-4 w-full max-w-6xl'>
            <div className='flex mobile:hidden items-center justify-between'>
               <CustomTypography variant='h5'>หลักสูตร</CustomTypography>
               <CustomTypography
                  variant='body1'
                  className='text-foreground-secondary'
               >{`ทั้งหมด ${filteredList.length} รายการ`}</CustomTypography>
            </div>
            <div className='hidden mobile:flex items-center justify-between'>
               <CustomTypography variant='subtitle2'>หลักสูตร</CustomTypography>
               <CustomTypography
                  variant='caption1'
                  className='text-foreground-secondary'
               >{`ทั้งหมด ${filteredList.length} รายการ`}</CustomTypography>
            </div>
            <div className='flex mobile:flex-col mobile:gap-4 items-center mobile:items-start justify-between'>
               <Input.Search
                  size='large'
                  placeholder='ค้นหา'
                  className='!w-[360px]'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onPressEnter={search}
                  onSearch={search}
               />
               <div className='flex gap-4 items-center'>
                  <CustomTypography variant='body1'>ระดับ:</CustomTypography>
                  <Checkbox.Group
                     options={[
                        { label: 'พื้นฐาน', value: 'basic' },
                        { label: 'ปานกลาง', value: 'medium' },
                        { label: 'ยาก', value: 'hard' },
                     ]}
                     value={levelFilter}
                     onChange={setLevelFilter}
                  />
               </div>
            </div>
            <div className='grid grid-cols-3 w-full mobile:grid-cols-1 gap-4'>
               {contentList.map((content, index) => (
                  <CourseCard key={index} content={content} />
               ))}
            </div>
         </div>
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
   );
}
