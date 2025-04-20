'use client';

import CustomTypography from '@/components/ui/typography';
import { cn } from '@/utils/misc';
import buddhistDayjs from '@/variables/day';
import { homePageCarousel } from '@/variables/home/image-carousel';
import { showcaseList } from '@/variables/showcase/showcase-list';
import { Carousel, ConfigProvider } from 'antd';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
   return (
      <div className='flex flex-col'>
         <CarouselComponent />
         <WhyLearningComponent />
         <ShowcaseComponent />
         {/* <ResponseComponent /> */}
         <div className='flex flex-col relative corner-bg-top-left overflow-hidden'>
            {/* <PathToSuccessComponent /> */}
            <MapComponent />
         </div>
      </div>
   );
}

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
         <Carousel autoplay autoplaySpeed={5000} draggable>
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
         <div className='max-w-6xl w-full flex flex-col gap-4 mobile:items-center'>
            <div className='w-fit mobile:w-full'>
               <CustomTypography
                  variant='h5'
                  mobileVariant='subtitle2'
                  className='w-fit'
               >
                  ทำไมต้องเรียนที่ ENDU
               </CustomTypography>
            </div>
            <div className='flex mobile:flex-col justify-between w-full gap-4'>
               <img
                  className='max-h-[480px] object-contain w-fit'
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
                     className='flex gap-6 mobile:flex-col mobile:gap-4'
                  >
                     <WhyLearningCard
                        title='หลักสูตรตั้งแต่เริ่มต้นจนถึงมืออาชีพ'
                        detail={
                           <>
                              มีหลักสูตรครอบคลุมทุกระดับ
                              <br />
                              เพื่อให้คุณสามารถ
                              <br />
                              พัฒนาทักษะได้อย่างต่อเนื่อง
                           </>
                        }
                        iconSrc='/images/home/book.png'
                        className='mb-6 mobile:m-0'
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
                        className='mt-12 mobile:m-0'
                     />
                  </motion.div>
                  <motion.div
                     variants={childrenContainerVariants}
                     className='flex gap-6 mobile:flex-col mobile:gap-4'
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
                        className='mb-12 mobile:m-0'
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
                        className='mt-6 mobile:m-0'
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
            'content-shadow rounded-lg p-4 flex flex-col gap-4 items-center justify-center w-[260px] mobile:w-full mobile:flex-row mobile:items-start mobile:justify-start',
            className,
         )}
      >
         <div className='p-2 rounded-md bg-background-blue flex items-center justify-center'>
            <picture>
               <img src={iconSrc} className='w-8 h-8' alt='icon' />
            </picture>
         </div>
         <div className='flex flex-col gap-1 text-center mobile:text-start'>
            <CustomTypography variant='subtitle3'>{title}</CustomTypography>
            <CustomTypography
               variant='caption1'
               className='text-foreground-secondary'
            >
               {detail}
            </CustomTypography>
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
      <div className='px-8 py-16 flex items-center justify-center mobile:p-6 relative corner-bg-top-right overflow-hidden'>
         <div className='max-w-6xl w-full flex flex-col gap-6 mobile:gap-4 items-center'>
            <div className='w-full flex justify-between'>
               <div className='flex flex-col'>
                  <CustomTypography variant='h4' mobileVariant='subtitle1'>
                     ผลงานการซ่อม
                  </CustomTypography>
                  <CustomTypography variant='body2' mobileVariant='caption1'>
                     ผลงานซ่อมจริงจากฝีมืออาจารย์และนักเรียน
                     ที่นี่นักเรียนได้ฝึกปฏิบัติจริงทุกขั้นตอน
                     เรียนจบพร้อมทำงานได้ทันที
                  </CustomTypography>
               </div>
               <Link
                  href='/showcase'
                  className='px-8 py-1.5 h-fit rounded-full border border-brand-primary text-brand-primary bg-white hover:cursor-pointer hover:scale-110 transition-all duration-300 mobile:hidden'
               >
                  <CustomTypography variant='button'>
                     ดูผลงานทั้งหมด
                  </CustomTypography>
               </Link>
            </div>
            <div className='grid grid-cols-3 gap-3 w-full mobile:overflow-y-auto mobile:flex mobile:gap-2'>
               {contentList.map((content, index) => (
                  <a
                     key={index}
                     className='overflow-hidden h-[540px] mobile:h-[400px] mobile:w-[270px] mobile:min-w-[270px] relative flex items-end hover:cursor-pointer group'
                  >
                     <picture>
                        <img
                           src={content.thumbnailSrc}
                           alt='thumbnail'
                           className='absolute top-0 left-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-500 z-0'
                        />
                     </picture>
                     <div className='flex flex-col justify-end text-white z-10 w-full h-1/2 p-4 bg-gradient-to-b from-black/0 to-black'>
                        <CustomTypography
                           variant='subtitle1'
                           mobileVariant='subtitle3'
                        >
                           {content.title}
                        </CustomTypography>
                        <div className='flex justify-between'>
                           <CustomTypography
                              variant='body1'
                              mobileVariant='caption1'
                           >
                              {buddhistDayjs(content.date).format('DD MMM BB')}
                           </CustomTypography>
                           <Link href={`/showcase/${index + 1}`}>
                              <CustomTypography
                                 variant='body1'
                                 mobileVariant='caption1'
                                 className={`underline`}
                              >
                                 อ่านเพิ่มเติม
                              </CustomTypography>
                           </Link>
                        </div>
                     </div>
                  </a>
               ))}
            </div>
            <Link
               href='/showcase'
               className='w-full justify-center py-1.5 h-fit rounded-full border border-brand-primary text-brand-primary bg-white hover:cursor-pointer hover:scale-110 transition-all duration-300 hidden mobile:flex'
            >
               <CustomTypography variant='button'>
                  ดูผลงานทั้งหมด
               </CustomTypography>
            </Link>
         </div>
      </div>
   );
}

function ResponseComponent() {
   return (
      <div className='px-8 py-16 flex items-center justify-center mobile:p-6 text-white bg-[url(/images/home/respone-bg.png)] bg-contain'>
         <div className='max-w-6xl w-full flex flex-col gap-6 mobile:gap-4'>
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
                  mobileVariant='subtitle2'
                  className='w-fit drop-shadow-lg'
               >
                  เสียงตอบรับจากผู้เรียน ENDU
               </CustomTypography>
            </motion.div>
            <div className='rounded-lg px-16 py-14 mobile:p-6 mobile:pb-[60px] flex flex-col gap-10 items-center justify-center bg-white w-full relative'>
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
                                    <CustomTypography
                                       variant='subtitle1'
                                       mobileVariant='subtitle2'
                                       className='w-fit'
                                    >
                                       “ ประทับใจมาก! ”
                                    </CustomTypography>
                                    <CustomTypography
                                       variant='body1'
                                       mobileVariant='caption1'
                                       className='w-fit'
                                    >
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
                                    <CustomTypography
                                       variant='subtitle2'
                                       mobileVariant='subtitle3'
                                       className='w-fit'
                                    >
                                       คุณจักรภพ น.
                                    </CustomTypography>
                                    <CustomTypography
                                       variant='body1'
                                       mobileVariant='caption1'
                                       className='w-fit text-foreground-secondary'
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
         <div className='max-w-6xl w-full flex flex-col gap-6 mobile:gap-4 items-center'>
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
                  variant='h4'
                  mobileVariant='subtitle2'
                  className='w-fit'
               >
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
               className='grid grid-cols-4 gap-x-2 gap-y-6 w-full mobile:overflow-y-auto mobile:flex mobile:gap-2'
            >
               {contentList.map((content, index) => (
                  <a
                     key={index}
                     className='overflow-hidden aspect-square mobile:h-[200px] mobile:min-h-[200px] mobile:w-[200px] mobile:min-w-[200px] relative flex items-end hover:cursor-pointer group'
                  >
                     <picture>
                        <img
                           src={content.thumbnailSrc}
                           alt='thumbnail'
                           className='absolute top-0 left-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-500 z-0'
                        />
                     </picture>
                     <div className='flex flex-col justify-end text-white z-10 w-full h-1/2 p-4 bg-gradient-to-b from-black/0 to-black'>
                        <CustomTypography
                           variant='subtitle3'
                           mobileVariant='caption2'
                        >
                           {content.title}
                        </CustomTypography>
                        <div className='flex justify-between'>
                           <CustomTypography
                              variant='caption1'
                              mobileVariant='overline1'
                           >
                              {buddhistDayjs(content.date).format('DD MMM BB')}
                           </CustomTypography>
                           {/* <Link
                              href={`/showcase/${index}`}
                           > */}
                           <CustomTypography
                              variant='caption1'
                              mobileVariant='overline1'
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
         <div className='max-w-6xl w-full flex mobile:flex-col gap-6 mobile:gap-4 justify-between items-start'>
            <picture className='w-full'>
               <img alt='map' src='/images/home/map.png' />
            </picture>
            <div className='w-full flex flex-col gap-8 mobile:gap-4 items-start'>
               <div className='w-full flex flex-col gap-4 mobile:gap-2'>
                  <CustomTypography
                     variant='h5'
                     mobileVariant='subtitle2'
                     className='w-fit'
                  >
                     วิธีเดินทางมายังโรงเรียนของเรา
                  </CustomTypography>
                  <CustomTypography
                     variant='body2'
                     mobileVariant='caption1'
                     className='w-fit'
                  >
                     📍 ที่ตั้ง:
                     <br />
                     ตึกเอเรียเพลส ชั้น 7 ถนนนนทรี 5 เขตยานนาวา กรุงเทพมหานคร
                     10120
                     <br />
                     <br />
                     🚗 โดยรถยนต์ส่วนตัว:
                     <br />
                     จากถนนสาธุประดิษฐ์ ให้เลี้ยวเข้าซอยนนทรี 5
                     อาคารเอเรียเพลสอยู่ด้าน ในใกล้กับร้าน 7-Eleven
                     มีที่จอดรถรองรับหน้าตึก
                     <br />
                     <br />
                     🚆 โดยรถไฟฟ้า BTS/MRT:
                     <br />
                     ลง BTS ช่องนนทรี หรือ MRT คลองเตย
                     แล้วต่อแท็กซี่หรือวินมอเตอร์ไซค์ (ใช้เวลาประมาณ 10–15 นาที)
                     <br />
                     <br />
                     🚌 โดยรถโดยสารประจำทาง:
                     <br />
                     รถเมล์ที่ผ่านถนนสาธุประดิษฐ์ ได้แก่ สาย 62, 67
                     ลงป้ายใกล้โลตัส พระราม 3 แล้วเดินหรือต่อวินเข้าซอยนนทรี 5
                  </CustomTypography>
               </div>
            </div>
         </div>
      </div>
   );
}
