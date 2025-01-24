'use client';

import CustomTypography from '@/components/ui/typography';
import { homePageCarousel } from '@/variables/home/image-carousel';
import { Carousel } from '@material-tailwind/react';
import { motion } from 'framer-motion';

export default function HomePage() {
   return (
      <div className='flex flex-col'>
         <Carousel autoplay autoplayDelay={5000} loop>
            {homePageCarousel.map((src, index) => (
               <picture key={index}>
                  <img
                     src={src}
                     alt={'carousel-' + index}
                     className='h-screen w-full object-cover'
                  />
               </picture>
            ))}
         </Carousel>
         <div className='px-8 py-16 flex items-center justify-center'>
            <div className='max-w-7xl w-full flex flex-col gap-4'>
               <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  // viewport={{ once: true }}
                  transition={{
                     duration: 1,
                     scale: {
                        type: 'spring',
                        visualDuration: 1,
                        bounce: 0,
                     },
                  }}
                  className='w-fit'
               >
                  <CustomTypography variant='h5' className='w-fit'>
                     ทำไมต้องเรียนที่ ENDU
                  </CustomTypography>
               </motion.div>
               <div className='flex justify-between w-full'>
                  <motion.img
                     initial={{ opacity: 0, scale: 1, x: -200 }}
                     whileInView={{ opacity: 1, scale: 1, x: 0 }}
                     // viewport={{ once: true }}
                     transition={{
                        duration: 1,
                        ease: 'easeOut',
                     }}
                     className='max-h-[480px] object-contain w-fit'
                     src='/images/home/why-learning.png'
                  />
                  <div className='flex gap-6'>
                     <div className='flex flex-col gap-6 pb-12'>
                        <WhyLearningCard
                           title='มีหลักสูตรตั้งแต่ระดับ 0-100'
                           detail={
                              <>
                                 หลักสูตรครอบคลุมทุกระดับตั้งแต่
                                 <br />
                                 เริ่มต้นจนถึงเชี่ยวชาญ เพื่อให้คุณสามารถ
                                 <br />
                                 พัฒนาทักษะได้อย่างต่อเนื่อง
                              </>
                           }
                           iconSrc='/images/home/book.png'
                        />
                        <WhyLearningCard
                           title='ลงมือซ่อมจริงพร้อมเทคนิคมากมาย'
                           detail={
                              <>
                                 ฝึกซ่อมจริงพร้อมเรียนรู้เทคนิคเฉพาะทาง
                                 <br />
                                 ที่จะช่วยยกระดับทักษะการซ่อม
                              </>
                           }
                           iconSrc='/images/home/repair.png'
                        />
                     </div>
                     <div className='flex flex-col gap-6 pt-12'>
                        <WhyLearningCard
                           title='เรียนกับอาจารย์ผู้เชี่ยวชาญ'
                           detail={
                              <>
                                 เรียนรู้จากอาจารย์ผู้เชี่ยวชาญที่
                                 <br />
                                 ถ่ายทอดทักษะจากประสบการณ์จริง
                              </>
                           }
                           iconSrc='/images/home/teacher.png'
                        />
                        <WhyLearningCard
                           title='เรียบจบรับใบประกาศ'
                           detail={
                              <>
                                 เรียนจบรับใบประกาศนียบัตรรับรอง
                                 <br />
                                 มาตรฐานจาก สช. เพิ่มโอกาส
                                 <br />
                                 ในการทำงานสายซ่อมโทรศัทพ์มือถือ
                              </>
                           }
                           iconSrc='/images/home/certificate.png'
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

type WhyLearningCardProps = {
   title: React.ReactNode;
   detail: React.ReactNode;
   iconSrc?: string;
};

function WhyLearningCard({ title, detail, iconSrc }: WhyLearningCardProps) {
   return (
      <motion.div
         initial={{ opacity: 0, scale: 1, y: 200 }}
         whileInView={{ opacity: 1, scale: 1, y: 0 }}
         // viewport={{ once: true }}
         transition={{
            duration: 1,
            ease: 'easeOut',
         }}
         className='content-shadow rounded-lg p-4 flex flex-col gap-4 items-center justify-center w-[260px]'
      >
         <div className='p-2 rounded-md bg-background-blue flex items-center justify-center'>
            <picture>
               <img src={iconSrc} className='w-8 h-8' alt='icon' />
            </picture>
         </div>
         <div className='flex flex-col gap-1 text-center'>
            <CustomTypography variant='subtitle3'>{title}</CustomTypography>
            <CustomTypography variant='caption1'>{detail}</CustomTypography>
         </div>
      </motion.div>
   );
}
