import React, { useState } from 'react';
import CustomTypography from '../ui/typography';
import { Info, CheckFat, X, CalendarBlank } from '@phosphor-icons/react';
import { Modal } from 'antd';
import { CoursrContentType } from '@/variables/course/course';
import { cn } from '@/utils/misc';

type Props = {
   content: CoursrContentType;
};

export default function CourseCard({ content }: Props) {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

   const showModal = () => setIsModalOpen(true);
   const closeModal = () => setIsModalOpen(false);

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
      <div className='content-shadow rounded-lg flex flex-col'>
         <img
            src={content.imgSrc}
            className='max-h-[170px] rounded-t-lg object-cover'
         />
         <div className='p-4 flex flex-col gap-4 justify-between h-full'>
            <div className='flex flex-col gap-4'>
               <div className='flex flex-col gap-2'>
                  <div className='flex justify-between items-center'>
                     <LevelTag level={content.level} />
                     <>
                        <Info
                           size={24}
                           color='#7B89A1'
                           className='hover:cursor-pointer'
                           onClick={showModal}
                        />
                        <Modal
                           open={isModalOpen}
                           centered
                           destroyOnClose={true}
                           closeIcon={null}
                           maskClosable={false}
                           footer={null}
                           className='rounded-lg'
                           width={'600px'}
                           title={
                              <p className='font-semibold text-[17px] text-foreground-primary flex justify-between items-center'>
                                 คอร์สนี้เหมาะสำหรับ
                                 <button
                                    type='button'
                                    className='w-10 h-10 p-0 flex items-center justify-center'
                                    onClick={closeModal}
                                 >
                                    <X size={24} />
                                 </button>
                              </p>
                           }
                        >
                           <div className='flex flex-col gap-2'>
                              {content.suitableFor.map(
                                 (skill: string, skillIndex: number) => (
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
                                 ),
                              )}
                           </div>
                        </Modal>
                     </>
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
                  {content.skill.map((skill: string, skillIndex: number) => (
                     <div key={skillIndex} className='flex gap-2 items-center'>
                        <CheckFat size={16} color='#05C65B' weight='fill' />
                        <CustomTypography variant='body1'>
                           {skill}
                        </CustomTypography>
                     </div>
                  ))}
               </div>
            </div>
            {content.lecturer.length === 1 ? (
               <div className='flex gap-2 items-center'>
                  <img
                     src={content.lecturer[0].img}
                     className='h-8 w-8 rounded-full object-contain'
                  />
                  <CustomTypography variant='caption1'>
                     {content.lecturer[0].name}
                  </CustomTypography>
               </div>
            ) : (
               <div className='relative h-8 w-full flex'>
                  {content.lecturer.map((lecturer, lecturerIndex) => {
                     return (
                        <img
                           key={lecturerIndex}
                           src={lecturer.img}
                           className={cn(
                              'h-8 w-8 rounded-full object-contain -ml-2 bg-white',
                           )}
                        />
                     );
                  })}
               </div>
            )}
         </div>
         <div className='p-4 flex items-center justify-between border-t border-border'>
            <div className='flex gap-2 items-center'>
               <CalendarBlank size={20} color='#7B89A1' />
               <CustomTypography variant='body1'>
                  {`เรียน ${content.learningDay} วัน`}
               </CustomTypography>
            </div>
            <CustomTypography
               variant='subtitle2'
               className='text-brand-primary'
            >
               {`${content.cost} บาท`}
            </CustomTypography>
         </div>
      </div>
   );
}
