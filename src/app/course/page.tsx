'use client';

import CourseCard from '@/components/course/courseCard';
import CustomTypography from '@/components/ui/typography';
import { nonCaseSensitiveSearch, scrollToTop } from '@/utils/misc';
import { courseList } from '@/variables/course/course';
import { Checkbox, GetProp, Input, Pagination } from 'antd';
import { useEffect, useState } from 'react';

export default function CoursePage() {
   const [skip, setSkip] = useState<number>(0);

   const onPaginationChange = (page: number, pageSize: number) => {
      setSkip((page - 1) * pageSize);
   };

   const master = courseList;

   const [filteredList, setFilteredList] = useState(master);
   const [contentList, setContentList] = useState(
      filteredList.slice(skip, skip + 6),
   );
   const [searchInput, setSearchInput] = useState<string>('');

   const search = () => {
      const filteredList = master.filter((d) =>
         nonCaseSensitiveSearch(d.title, searchInput),
      );
      setFilteredList(filteredList);
      onPaginationChange(1, 10);
   };

   const clear = () => {
      setFilteredList(master);
      onPaginationChange(1, 10);
   };

   useEffect(() => {
      setContentList(filteredList.slice(skip, skip + 6));
      scrollToTop();
   }, [skip, filteredList]);

   const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (
      checkedValues,
   ) => {
      console.log('checked = ', checkedValues);
   };

   return (
      <div className='flex w-full items-center justify-center mt-20 mobile:mt-14 py-8 mobile:p-6'>
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
            <div className='flex mobile:hidden items-center justify-between'>
               <Input.Search
                  size='large'
                  placeholder='ค้นหา'
                  className='!w-[360px]'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onPressEnter={search}
                  onSearch={search}
                  allowClear
                  onClear={clear}
               />
               <div className='flex gap-4 items-center'>
                  <CustomTypography variant='body1'>ระดับ:</CustomTypography>
                  <Checkbox.Group
                     options={[
                        { label: 'พื้นฐาน', value: 'basic' },
                        { label: 'ปานกลาง', value: 'medium' },
                        { label: 'ยาก', value: 'hard' },
                     ]}
                     onChange={onChange}
                  />
               </div>
            </div>
            <div className='grid grid-cols-3 gap-3 w-full mobile:grid-cols-2 mobile:gap-2'>
               {contentList.map((content, index) => (
                  <CourseCard key={index} content={content} />
               ))}
            </div>
            <Pagination
               align='end'
               total={filteredList.length}
               current={skip / 6 + 1}
               pageSize={6}
               onChange={onPaginationChange}
               className='!flex mobile:!hidden'
            />
            <Pagination
               align='end'
               total={filteredList.length}
               current={skip / 6 + 1}
               pageSize={6}
               onChange={onPaginationChange}
               simple
               className='mobile:!flex !hidden'
            />
         </div>
      </div>
   );
}
