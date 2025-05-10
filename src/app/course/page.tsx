'use client';

import CourseCard from '@/components/course/courseCard';
import Notfound from '@/components/ui/notfound';
import CustomTypography from '@/components/ui/typography';
import { cn, nonCaseSensitiveSearch } from '@/utils/misc';
import { courseList } from '@/variables/course/course';
import { CaretDown } from '@phosphor-icons/react';
import { Collapse, Input } from 'antd';
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
               <CustomTypography variant='h5' mobileVariant='subtitle1'>
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
               className='!w-[360px] mobile:!w-full'
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
            <Collapse
               bordered={false}
               defaultActiveKey={['1']}
               expandIcon={({ isActive }) => (
                  <CaretDown
                     size={16}
                     weight='fill'
                     className={cn(
                        'transition-all duration-300',
                        isActive ? 'rotate-180' : 'rotate-[360deg]',
                     )}
                  />
               )}
               items={[
                  {
                     key: '1',
                     label: (
                        <CustomTypography variant='subtitle2'>
                           เงื่อนไขและข้อตกลง
                        </CustomTypography>
                     ),
                     children: (
                        <ul className='list-disc ml-6 text-[15px]'>
                           <li>ผู้สมัครสามารถเปลี่ยนคอร์สเรียนได้</li>
                           <li>สามารถเปลี่ยนวันเรียนได้ หากแจ้งล่วงหน้า</li>
                           <li>
                              หลังชำระเงินจอง สามารถยกเลิกได้ภายใน 7 วัน
                              (โรงเรียนยินดีคืนเงินเต็มจํานวน)
                           </li>
                        </ul>
                     ),
                  },
               ]}
            />
         </div>
      </div>
   );
}
