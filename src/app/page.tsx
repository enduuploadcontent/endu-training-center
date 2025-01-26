'use client';

import CustomTypography from '@/components/ui/typography';
import buddhistDayjs from '@/variables/day';
import { homePageCarousel } from '@/variables/home/image-carousel';
import { showcaseList } from '@/variables/showcase/showcase-list';
import { Carousel } from '@material-tailwind/react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
   return (
      <div className='flex flex-col'>
         <CarouselComponent />
         <WhyLearningComponent />
         <ShowcaseComponent />
         <ResponseComponent />
      </div>
   );
}

function CarouselComponent() {
   return (
      <Carousel
         autoplay
         autoplayDelay={5000}
         loop
         prevArrow={({ handlePrev }) => (
            <button
               type='button'
               title='prev'
               onClick={handlePrev}
               className='!absolute top-2/4 left-4 -translate-y-2/4'
            >
               <CaretLeft size={56} color='white' />
            </button>
         )}
         nextArrow={({ handleNext }) => (
            <button
               type='button'
               title='next'
               onClick={handleNext}
               className='!absolute top-2/4 !right-4 -translate-y-2/4'
            >
               <CaretRight size={56} color='white' />
            </button>
         )}
      >
         {homePageCarousel.map((src, index) => (
            <picture key={index}>
               <img
                  src={src}
                  alt={'carousel-' + index}
                  className='h-screen mobile:h-[50vh] w-full object-cover'
               />
            </picture>
         ))}
      </Carousel>
   );
}

function WhyLearningComponent() {
   return (
      <div className='px-8 py-16 flex items-center justify-center mobile:p-6'>
         <div className='max-w-7xl w-full flex flex-col gap-4 mobile:items-center'>
            <motion.div
               initial={{ opacity: 0, scale: 0 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{
                  duration: 1,
                  scale: {
                     type: 'spring',
                     visualDuration: 1,
                     bounce: 0,
                  },
               }}
               className='w-fit mobile:w-full'
            >
               <CustomTypography variant='h5' className='w-fit mobile:hidden'>
                  ทำไมต้องเรียนที่ ENDU
               </CustomTypography>
               <CustomTypography
                  variant='caption2'
                  className='w-fit hidden mobile:flex'
               >
                  ทำไมต้องเรียนที่ ENDU
               </CustomTypography>
            </motion.div>
            <div className='flex mobile:flex-col justify-between w-full'>
               <motion.img
                  initial={{ opacity: 0, scale: 1, x: -200 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                     duration: 1,
                     ease: 'easeOut',
                  }}
                  className='max-h-[480px] object-contain w-fit mobile:hidden'
                  src='/images/home/why-learning.png'
               />
               <div className='flex gap-6 mobile:flex-col'>
                  <div className='flex flex-col gap-6 pb-12 mobile:pb-0'>
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
                  <div className='flex flex-col gap-6 pt-12 mobile:pt-0'>
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
         viewport={{ once: true }}
         transition={{
            duration: 1,
            ease: 'easeOut',
         }}
         className='content-shadow rounded-lg p-4 flex flex-col gap-4 items-center justify-center w-[260px] mobile:w-full'
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

function ShowcaseComponent() {
   const contentList = showcaseList
      .sort((a, b) => {
         return buddhistDayjs(a.date).isBefore(buddhistDayjs(b.date)) ? 1 : -1;
      })
      .slice(0, 3);

   return (
      <div className='px-8 py-16 flex items-center justify-center mobile:p-6'>
         <div className='max-w-7xl w-full flex flex-col gap-6 items-center'>
            <motion.div
               initial={{ opacity: 0, scale: 0 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{
                  duration: 1,
                  scale: {
                     type: 'spring',
                     visualDuration: 1,
                     bounce: 0,
                  },
               }}
               className='w-fit mobile:w-full'
            >
               <CustomTypography variant='h4' className='w-fit mobile:hidden'>
                  ENDU Show case
               </CustomTypography>
            </motion.div>
            <div className='grid grid-cols-3 gap-3 w-full'>
               {contentList.map((content, index) => (
                  <motion.a
                     key={index}
                     initial={{ opacity: 0, scale: 1, y: 100 }}
                     whileInView={{ opacity: 1, scale: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{
                        duration: 1,
                        ease: 'easeOut',
                     }}
                     className='overflow-hidden h-[540px] relative p-4 flex items-end hover:cursor-pointer'
                  >
                     <picture>
                        <img
                           src={content.thumbnailSrc}
                           alt='thumbnail'
                           className='absolute top-0 left-0 h-full w-full object-cover hover:scale-110 transition-all duration-500 z-0'
                        />
                     </picture>
                     <div className='flex flex-col text-white z-50 w-full'>
                        <CustomTypography variant='subtitle1'>
                           {content.title}
                        </CustomTypography>
                        <div className='flex justify-between'>
                           <CustomTypography variant='body1'>
                              {buddhistDayjs(content.date).format('DD MMM BB')}
                           </CustomTypography>
                           {/* <Link
                              href={`/showcase/${index}`}
                           > */}
                           <CustomTypography
                              variant='body1'
                              className={`underline`}
                           >
                              อ่านเพิ่มเติม
                           </CustomTypography>
                           {/* </Link> */}
                        </div>
                     </div>
                  </motion.a>
               ))}
            </div>
         </div>
      </div>
   );
}

function ResponseComponent() {
   return (
      <motion.div
         // initial={{ opacity: 0, scale: 0 }}
         // whileInView={{ opacity: 1, scale: 1 }}
         // viewport={{ once: false }}
         // transition={{
         //    duration: 0.5,
         // }}
         className='px-8 py-16 flex items-center justify-center mobile:p-6 text-white bg-[url(/images/home/respone-bg.png)]'
      >
         <div className='max-w-7xl w-full flex flex-col gap-6 items-center'>
            <motion.div
               initial={{ opacity: 0, scale: 0 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{
                  duration: 1,
                  scale: {
                     type: 'spring',
                     visualDuration: 1,
                     bounce: 0,
                  },
               }}
               className='w-fit mobile:w-full'
            >
               <CustomTypography variant='h5' className='w-fit mobile:hidden'>
                  เสียงตอบรับจากผู้เรียน ENDU
               </CustomTypography>
               <CustomTypography
                  variant='caption2'
                  className='w-fit hidden mobile:flex'
               >
                  เสียงตอบรับจากผู้เรียน ENDU
               </CustomTypography>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, scale: 1, y: 200 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{
                  duration: 1,
                  ease: 'easeOut',
               }}
               className='rounded-lg px-16 py-14 flex flex-col gap-10 items-center justify-center bg-white w-full relative'
            >
               <Carousel
                  autoplay
                  autoplayDelay={5000}
                  loop
                  navigation={() => <></>}
                  className='static'
                  prevArrow={({ handlePrev }) => (
                     <button
                        type='button'
                        title='prev'
                        onClick={handlePrev}
                        className='!absolute top-2/4 left-4 -translate-y-2/4 z-50'
                     >
                        <CaretLeft size={44} color='#7B89A1' />
                     </button>
                  )}
                  nextArrow={({ handleNext }) => (
                     <button
                        type='button'
                        title='next'
                        onClick={handleNext}
                        className='!absolute top-2/4 !right-4 -translate-y-2/4 z-50'
                     >
                        <CaretRight size={44} color='#7B89A1' />
                     </button>
                  )}
               >
                  {homePageCarousel.map((src, index) => (
                     <div
                        key={index}
                        className='flex items-center justify-center text-foreground-primary'
                     >
                        <div className='flex flex-col gap-10 max-w-[60%]'>
                           <div className='flex flex-col gap-2 items-center text-center'>
                              <CustomTypography variant='subtitle1'>
                                 “ ประทับใจมาก! ”
                              </CustomTypography>
                              <CustomTypography variant='body1'>
                                 Lorem ipsum dolor sit amet consectetur. Posuere
                                 facilisis in rutrum arcu purus non. Accumsan
                                 sem volutpat auctor ut nulla eu. Mus sit
                                 quisque vulputate nisl interdum maecenas. Donec
                                 pellentesque consequat aenean quam varius
                                 dictum iaculis.
                              </CustomTypography>
                           </div>
                           <div className='flex flex-col gap-2 items-center'>
                              <CustomTypography variant='subtitle1'>
                                 คุณจักรภพ น.
                              </CustomTypography>
                              <CustomTypography
                                 variant='body1'
                                 className='text-foreground-secondary'
                              >
                                 จากหลักสูตร Pro H1
                              </CustomTypography>
                           </div>
                        </div>
                     </div>
                  ))}
               </Carousel>
            </motion.div>
         </div>
      </motion.div>
   );
}
