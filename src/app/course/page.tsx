'use client';

import ShowcaseCard from '@/components/showcase/showcaseCard';
import CustomTypography from '@/components/ui/typography';
import { nonCaseSensitiveSearch, scrollToTop } from '@/utils/misc';
import { courseList } from '@/variables/course/course';
import buddhistDayjs from '@/variables/day';
import { CheckFat, Info, MagnifyingGlass } from '@phosphor-icons/react';
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

   function LevelTag({ level }: { level: string }) {
      function label() {
         switch (level) {
            case 'basic':
               return 'พื้นฐาน';
            case 'medium':
               return 'ปานกลาง';
            case 'hard':
               return 'ยาก';
            default:
               break;
         }
      }
      return (
         <div className='px-1.5 py-1 bg-background-blue text-brand-primary rounded-sm'>
            <CustomTypography variant='caption2'>{label()}</CustomTypography>
         </div>
      );
   }

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
                  <div
                     key={index}
                     className='content-shadow rounded-lg flex flex-col'
                  >
                     <img
                        src={content.imgSrc}
                        className='max-h-[170px] rounded-t-lg object-cover'
                     />
                     <div className='p-4 flex flex-col gap-4 justify-between h-full'>
                        <div className='flex flex-col gap-4'>
                           <div className='flex flex-col gap-2'>
                              <div className='flex justify-between items-center'>
                                 <LevelTag level={content.level} />
                                 <Info size={24} color='#7B89A1' className='hover:cursor-pointer'/>
                              </div>
                              <div className='flex flex-col gap-1'>
                                 <CustomTypography variant='subtitle2'>
                                    {content.title}
                                 </CustomTypography>
                                 <CustomTypography variant='caption1'>
                                    {content.detail}
                                 </CustomTypography>
                              </div>
                           </div>
                           <div className='flex flex-col gap-2'>
                              {content.skill.map((skill, skillIndex) => (
                                 <div
                                    key={skillIndex}
                                    className='flex gap-2 items-center'
                                 >
                                    <CheckFat
                                       size={16}
                                       color='#05C65B'
                                       weight='fill'
                                    />
                                    <CustomTypography variant='body1'>
                                       {skill}
                                    </CustomTypography>
                                 </div>
                              ))}
                           </div>
                        </div>
                        <div className='bg-black p-1'></div>
                     </div>
                  </div>
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
