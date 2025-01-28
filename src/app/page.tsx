'use client';

import CustomTypography from '@/components/ui/typography';
import { cn } from '@/utils/misc';
import buddhistDayjs from '@/variables/day';
import { homePageCarousel } from '@/variables/home/image-carousel';
import { showcaseList } from '@/variables/showcase/showcase-list';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { Carousel, ConfigProvider } from 'antd';
import { motion } from 'framer-motion';

export default function HomePage() {
   return (
      <div className='flex flex-col'>
         <CarouselComponent />
         <WhyLearningComponent />
         <ShowcaseComponent />
         <ResponseComponent />
         <div className='flex flex-col corner-bg-big'>
            <PathToSuccessComponent />
            <MapComponent />
         </div>
      </div>
   );
}

const LeftArrow = ({
   className: arrowClassName,
   currentSlide,
   slideCount,
   additionClassName,
   ...restArrowProps
}: any) => {
   return (
      <CaretLeft
         // IMPORTANT: do not spread props after className otherwise it will be overwritten by only slick carousel classes
         {...restArrowProps}
         className={cn(
            'left-5 !z-10 !w-14 !h-14',
            {
               'color-disabled': Number(currentSlide) === 0,
            },
            arrowClassName,
            additionClassName,
         )}
      />
   );
};

const RightArrow = ({
   className: arrowClassName,
   currentSlide,
   slideCount,
   additionClassName,
   ...restArrowProps
}: any) => {
   return (
      <CaretRight
         // IMPORTANT: do not spread props after className otherwise it will be overwritten by only slick carousel classes
         {...restArrowProps}
         className={cn(
            'right-5 !z-10 !w-14 !h-14',
            {
               'color-disabled': Number(currentSlide) === 0,
            },
            additionClassName,
            arrowClassName,
         )}
      />
   );
};

function CarouselComponent() {
   return (
      <ConfigProvider
         theme={{
            token: {
               colorBgContainer: 'white',
            },
            components: {
               Carousel: {
                  dotHeight: 12,
                  dotWidth: 12,
                  dotActiveWidth: 12,
                  dotOffset: 16,
               },
            },
         }}
      >
         <Carousel
            autoplay
            autoplaySpeed={5000}
            arrows
            prevArrow={
               <LeftArrow
                  size={56}
                  color='white'
                  additionClassName='mobile:!hidden'
               />
            }
            nextArrow={
               <RightArrow
                  size={56}
                  color='white'
                  additionClassName='mobile:!hidden'
               />
            }
            draggable
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
      </ConfigProvider>
   );
}

function WhyLearningComponent() {
   const mainContainerVariants = {
      hidden: { opacity: 0 },
      show: {
         opacity: 1,
         transition: {
            staggerChildren: 1,
         },
      },
   };

   const childrenContainerVariants = {
      hidden: { opacity: 0 },
      show: {
         opacity: 1,
         transition: {
            staggerChildren: 0.5,
         },
      },
   };
   return (
      <div className='px-8 py-16 flex items-center justify-center mobile:p-6'>
         <div className='max-w-7xl w-full flex flex-col gap-4 mobile:items-center'>
            <motion.div
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               viewport={{ once: true }}
               transition={{
                  duration: 1,
                  ease: 'easeOut',
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
               <motion.div
                  variants={mainContainerVariants}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                  className='flex flex-col'
               >
                  <motion.div
                     variants={childrenContainerVariants}
                     className='flex gap-6'
                  >
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
                        className='mb-6'
                     />
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
                        className='mt-12'
                     />
                  </motion.div>
                  <motion.div
                     variants={childrenContainerVariants}
                     className='flex gap-6'
                  >
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
                        className='mb-12'
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
                        className='mt-6'
                     />
                  </motion.div>
               </motion.div>
            </div>
         </div>
      </div>
   );
}

type WhyLearningCardProps = {
   title: React.ReactNode;
   detail: React.ReactNode;
   iconSrc?: string;
   className?: string;
};

function WhyLearningCard({
   title,
   detail,
   iconSrc,
   className,
}: WhyLearningCardProps) {
   const variants = {
      hidden: { opacity: 0, scale: 1, y: 200 },
      show: { opacity: 1, scale: 1, y: 0 },
   };

   return (
      <motion.div
         variants={variants}
         transition={{
            duration: 1,
            ease: 'easeOut',
         }}
         className={cn(
            'content-shadow rounded-lg p-4 flex flex-col gap-4 items-center justify-center w-[260px] mobile:w-full',
            className,
         )}
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
      <div className='px-8 py-16 flex items-center justify-center mobile:p-6 corner-bg-small'>
         <div className='max-w-7xl w-full flex flex-col gap-6 items-center'>
            <motion.div
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               viewport={{ once: true }}
               transition={{
                  duration: 1,
                  ease: 'easeOut',
               }}
               className='w-fit mobile:w-full'
            >
               <CustomTypography variant='h4' className='w-fit mobile:hidden'>
                  ENDU Show case
               </CustomTypography>
            </motion.div>
            <motion.div
               initial={{ y: 100 }}
               whileInView={{ y: 0 }}
               viewport={{ once: true }}
               transition={{
                  duration: 1,
               }}
               className='grid grid-cols-3 gap-3 w-full'
            >
               {contentList.map((content, index) => (
                  <a
                     key={index}
                     className='overflow-hidden h-[540px] relative p-4 flex items-end hover:cursor-pointer'
                  >
                     <picture>
                        <img
                           src={content.thumbnailSrc}
                           alt='thumbnail'
                           className='absolute top-0 left-0 h-full w-full object-cover hover:scale-110 transition-all duration-500 z-0'
                        />
                     </picture>
                     <div className='flex flex-col text-white z-10 w-full'>
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
                  </a>
               ))}
            </motion.div>
         </div>
      </div>
   );
}

function ResponseComponent() {
   return (
      <div className='px-8 py-16 flex items-center justify-center mobile:p-6 text-white bg-[url(/images/home/respone-bg.png)] bg-contain'>
         <div className='max-w-7xl w-full flex flex-col gap-6'>
            <motion.div
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               viewport={{ once: true }}
               transition={{
                  duration: 1,
                  ease: 'easeOut',
               }}
               className='w-fit mobile:w-full'
            >
               <CustomTypography
                  variant='h5'
                  className='w-fit mobile:hidden drop-shadow-lg'
               >
                  เสียงตอบรับจากผู้เรียน ENDU
               </CustomTypography>
               <CustomTypography
                  variant='caption2'
                  className='w-fit hidden mobile:flex drop-shadow-lg'
               >
                  เสียงตอบรับจากผู้เรียน ENDU
               </CustomTypography>
            </motion.div>
            <div className='rounded-lg px-16 py-14 mobile:p-4 flex flex-col gap-10 items-center justify-center bg-white w-full relative'>
               <div className='w-full'>
                  <ConfigProvider
                     theme={{
                        token: {
                           colorBgContainer: '#7B89A1',
                        },
                        components: {
                           Carousel: {
                              dotOffset: -30,
                           },
                        },
                     }}
                  >
                     <Carousel
                        autoplay
                        autoplaySpeed={5000}
                        arrows
                        prevArrow={
                           <LeftArrow
                              additionClassName='!-left-[54px] !w-11 !h-11 mobile:!hidden'
                              size={44}
                              color='#7B89A1'
                           />
                        }
                        nextArrow={
                           <RightArrow
                              additionClassName='!-right-[54px] !w-11 !h-11 mobile:!hidden'
                              size={44}
                              color='#7B89A1'
                           />
                        }
                        draggable
                        dots={{ className: 'mobile:!hidden' }}
                     >
                        {homePageCarousel.map((src, index) => (
                           <div
                              key={index}
                              className='!flex items-center justify-center text-foreground-primary'
                           >
                              <div className='flex flex-col gap-6 w-[70%] mobile:w-full'>
                                 <div className='flex flex-col gap-2 items-center text-center'>
                                    <CustomTypography variant='subtitle1'>
                                       “ ประทับใจมาก! ”
                                    </CustomTypography>
                                    <CustomTypography variant='body1'>
                                       Lorem ipsum dolor sit amet consectetur.
                                       Posuere facilisis in rutrum arcu purus
                                       non. Accumsan sem volutpat auctor ut
                                       nulla eu. Mus sit quisque vulputate nisl
                                       interdum maecenas. Donec pellentesque
                                       consequat aenean quam varius dictum
                                       iaculis.
                                    </CustomTypography>
                                 </div>
                                 <div className='flex flex-col gap-2 items-center'>
                                    <CustomTypography variant='subtitle2'>
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
                  </ConfigProvider>
               </div>
            </div>
         </div>
      </div>
   );
}

function PathToSuccessComponent() {
   const contentList = showcaseList
      .sort((a, b) => {
         return buddhistDayjs(a.date).isBefore(buddhistDayjs(b.date)) ? 1 : -1;
      })
      .slice(0, 8);

   return (
      <div className='px-8 py-16 flex items-center justify-center mobile:p-6'>
         <div className='max-w-7xl w-full flex flex-col gap-6 items-center'>
            <motion.div
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               viewport={{ once: true }}
               transition={{
                  duration: 1,
                  ease: 'easeOut',
               }}
               className='w-fit mobile:w-full'
            >
               <CustomTypography variant='h4' className='w-fit mobile:hidden'>
                  ก้าวแรกสู่ความสำเร็จ
               </CustomTypography>
            </motion.div>
            <motion.div
               initial={{ y: 100 }}
               whileInView={{ y: 0 }}
               transition={{
                  duration: 1,
               }}
               viewport={{ once: true }}
               className='grid grid-cols-4 gap-x-2 gap-y-6 w-full'
            >
               {contentList.map((content, index) => (
                  <a
                     key={index}
                     className='overflow-hidden aspect-square  relative p-4 flex items-end hover:cursor-pointer'
                  >
                     <picture>
                        <img
                           src={content.thumbnailSrc}
                           alt='thumbnail'
                           className='absolute top-0 left-0 h-full w-full object-cover hover:scale-110 transition-all duration-500 z-0'
                        />
                     </picture>
                     <div className='flex flex-col text-white z-10 w-full'>
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
                  </a>
               ))}
            </motion.div>
         </div>
      </div>
   );
}

function MapComponent() {
   return (
      <div className='px-8 py-16 flex items-center justify-center mobile:p-6'>
         <div className='max-w-7xl w-full flex gap-6 justify-between items-start'>
            <picture className='w-full'>
               <img alt='map' src='/images/home/map.png' />
            </picture>
            <div className='w-full flex flex-col gap-8 items-start'>
               <div className='w-full flex flex-col gap-4'>
                  <CustomTypography variant='h5'>
                     วิธีเดินทางมายังโรงเรียนของเรา
                  </CustomTypography>
                  <CustomTypography variant='body2'>
                     Lorem ipsum dolor sit amet consectetur. Magna feugiat
                     pharetra id urna dictumst amet malesuada amet.{' '}
                  </CustomTypography>
               </div>
               <div className='w-full flex flex-col gap-4'>
                  <CustomTypography variant='h5'>
                     ช่องทางติดต่อเราเพิ่มเติม
                  </CustomTypography>
                  <div className='flex gap-4 items-center'>
                     <div className='p-1.5 rounded-[4px] bg-background-blue flex items-center justify-center'>
                        <picture>
                           <img
                              src={'/images/home/clock.svg'}
                              className='w-5 h-5'
                              alt='icon'
                           />
                        </picture>
                     </div>
                     <CustomTypography variant='body2'>
                        เปิดทำการ : 09.00 - 18.00
                     </CustomTypography>
                  </div>
                  <div className='flex gap-4 items-center'>
                     <div className='p-1.5 rounded-[4px] bg-background-blue flex items-center justify-center'>
                        <picture>
                           <img
                              src={'/images/home/envelope.svg'}
                              className='w-5 h-5'
                              alt='icon'
                           />
                        </picture>
                     </div>
                     <CustomTypography variant='body2'>
                        trainingcenter@endu.co.th
                     </CustomTypography>
                  </div>
                  <div className='flex gap-4 items-start'>
                     <div className='p-1.5 rounded-[4px] bg-background-blue flex items-center justify-center'>
                        <picture>
                           <img
                              src={'/images/home/mapPinLine.svg'}
                              className='w-5 h-5'
                              alt='icon'
                           />
                        </picture>
                     </div>
                     <div className='flex flex-col gap-1'>
                        <CustomTypography variant='body2'>
                           10/3 ชั้น 7 ซอยบุปผาบุรี แขวงช่องนนทรี เขตยานนาวา
                           กรุงเทพมหานคร 10120
                        </CustomTypography>
                        <a href=''>
                           <CustomTypography
                              variant='caption2'
                              className='text-brand-primary underline'
                           >
                              เปิดในแผนที่
                           </CustomTypography>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
