'use client';

import { TextShimmer } from '@/components/ui/textShimmer';
import CustomTypography from '@/components/ui/typography';
import { animate, useMotionValue, motion } from 'framer-motion';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import useMeasure from 'react-use-measure';

export default function AboutUsPage() {
   const registerButtonRef = useRef<HTMLAnchorElement>(null);

   const handleClick = () => {
      registerButtonRef?.current?.classList.add('active');
      setTimeout(() => {
         registerButtonRef?.current?.classList.remove('active');
      }, 300);
   };

   const [carouselRef, { width: carouselWidth }] = useMeasure();

   const xCarouselTranslation = useMotionValue(0);

   useEffect(() => {
      const finalPos = -carouselWidth / 2;

      animate(xCarouselTranslation, [0, finalPos], {
         ease: 'linear',
         duration: 25,
         repeat: Infinity,
         repeatType: 'loop',
         repeatDelay: 0,
      });
   }, [carouselWidth, xCarouselTranslation]);

   const imgList = [
      'https://i.imgur.com/K0oEoU8.jpeg',
      'https://i.imgur.com/39DCuJo.jpeg',
      'https://i.imgur.com/VBwIWsn.jpeg',
      'https://i.imgur.com/LB45WiA.jpeg',
      'https://i.imgur.com/mc94JwX.jpeg',
      'https://i.imgur.com/EWDyD4m.jpeg',
      'https://i.imgur.com/Ma2UY6o.jpeg',
      'https://i.imgur.com/3yjOYr6.jpeg',
   ];

   return (
      <div className='flex flex-col min-h-[calc(100vh-190px)] mobile:min-h-[calc(100vh-250px)] w-full pt-20 mobile:pt-14'>
         <div className='flex flex-row mobile:flex-col'>
            <div className='w-1/2 h-[660px] mobile:w-full mobile:h-[365px] flex flex-col gap-6 mobile:gap-3 px-16 mobile:px-6 items-center justify-center bg-[url(/images/about-us/bg-1.png)] bg-fill-y'>
               <CustomTypography
                  variant='h4'
                  mobileVariant='h5'
                  className='text-foreground-primary text-center'
               >
                  <p>พร้อมก้าวสู่โลกของการ</p>
                  <TextShimmer>ซ่อมมือถืออย่างมืออาชีพ</TextShimmer>
                  <p>กับอาจารย์ตัวจริง</p>
               </CustomTypography>
               <CustomTypography
                  variant='body2'
                  className='text-foreground-primary text-center mobile:hidden'
               >
                  โรงเรียนสอนซ่อมมือถือแห่งแรกในไทยที่ได้รับการรับรองมาตรฐานจาก
                  กสช.
                  <br />
                  ซึ่งดูแลการศึกษาเอกชนนอกระบบ
                  ครอบคลุมการฝึกอบรมและพัฒนาทักษะวิชาชีพ
                  <br />
                  โดยมุ่งส่งมอบความรู้และพัฒนาทักษะผู้เรียนอย่างมืออาชีพ
               </CustomTypography>
               <CustomTypography
                  variant='caption1'
                  className='text-foreground-primary text-center hidden mobile:inline'
               >
                  โรงเรียนสอนซ่อมมือถือแห่งแรกในไทยที่ได้รับการรับรองมาตรฐาน
                  <br />
                  จาก กสช. ซึ่งดูแลการศึกษาเอกชนนอกระบบ
                  <br />
                  ครอบคลุมการฝึกอบรมและพัฒนาทักษะวิชาชีพ
                  <br />
                  โดยมุ่งส่งมอบความรู้และพัฒนาทักษะผู้เรียนอย่างมืออาชีพ
               </CustomTypography>
            </div>
            <div className='w-1/2 h-[660px] mobile:w-full mobile:h-[365px]'>
               <ReactPlayer
                  url='https://www.youtube.com/watch?v=TbP4wAB_Iwo'
                  height='100%'
                  width='100%'
                  playing
               />
            </div>
         </div>
         <div className='px-8 py-16 flex items-center justify-center mobile:px-6 mobile:py-12'>
            <div className='max-w-6xl w-full flex flex-col gap-8 items-center mobile:gap-6'>
               <CustomTypography
                  variant='h5'
                  mobileVariant='subtitle2'
                  className='text-foreground-primary text-center'
               >
                  วัสดุอุปกรณ์คุณภาพสูง <br className='desktop:hidden' />
                  นำเข้าจากโรงงานผู้ผลิตชั้นนำในประเทศจีน
               </CustomTypography>
               <div className='flex justify-between mobile:grid grid-cols-2 mobile:gap-3'>
                  <img
                     src='/images/about-us/factory-1.png'
                     alt='factory-1'
                     className='h-[70px]'
                  />
                  <img
                     src='/images/about-us/factory-2.png'
                     alt='factory-2'
                     className='h-[70px]'
                  />
                  <img
                     src='/images/about-us/factory-3.png'
                     alt='factory-3'
                     className='h-[70px]'
                  />
                  <img
                     src='/images/about-us/factory-4.png'
                     alt='factory-4'
                     className='h-[70px]'
                  />
               </div>
               <CustomTypography
                  variant='body2'
                  mobileVariant='caption1'
                  className='text-foreground-primary text-center'
               >
                  โรงเรียนสอนซ่อมมือถือเอ็นดู เราคัดสรรวัสดุและอุปกรณ์คุณภาพสูง
                  <br className='desktop:hidden' />
                  โดยนำเข้าจากโรงงานผู้ผลิตชั้นนำในประเทศจีน
                  <br className='desktop:hidden' />
                  ทุกชิ้นผ่านมาตรฐานการผลิตที่เคร่งครัด
                  <br />
                  เพื่อให้มั่นใจว่าอุปกรณ์ที่ใช้มีคุณภาพและประสิทธิภาพสูงสุด
               </CustomTypography>
            </div>
         </div>
         <div className='px-8 py-16 flex items-center justify-center mobile:p-6 text-white bg-[url(/images/home/respone-bg.png)] bg-contain'>
            <div className='max-w-6xl w-full flex flex-col gap-6 mobile:gap-4'>
               <CustomTypography
                  variant='h4'
                  mobileVariant='subtitle2'
                  className='text-center break-words'
               >
                  {
                     'ENDU เรามุ่งเน้นที่จะเพิ่มศักยภาพให้ร้านซ่อมมือถือ ประกอบธุรกิจการซ่อมได้อย่างมีประสิทธิภาพ และสร้างรายได้อย่างยั่งยืน'
                  }
               </CustomTypography>
            </div>
         </div>
         <div className='flex flex-col gap-8 items-center justify-center bg-[url(/images/about-us/bg-2.png)] bg-contain pt-16 pb-12 mobile:py-12'>
            <CustomTypography
               variant='h5'
               mobileVariant='subtitle2'
               className='text-foreground-primary'
            >
               อยากเป็นช่างมืออาชีพต้องที่ ENDU
            </CustomTypography>
            <div className='relative h-[360px] mobile:h-[160px] w-full overflow-x-hidden'>
               <motion.div
                  ref={carouselRef}
                  style={{ x: xCarouselTranslation }}
                  className='flex absolute left-0 w-max'
               >
                  {[...imgList, ...imgList].map((entry, index) => (
                     <img
                        key={index}
                        src={entry}
                        alt={`img-${index}`}
                        className='h-[360px] mobile:h-[160px] aspect-square object-cover'
                     />
                  ))}
               </motion.div>
            </div>
            <Link
               href='https://www.facebook.com/profile.php?id=61568661807183'
               ref={registerButtonRef}
               onClick={handleClick}
               className='register-button w-[250px] h-[60px] mobile:w-[190px] mobile:h-[44px] bg-gradient-to-b from-brand-primary to-brand-dark rounded-full relative flex items-center justify-center'
            >
               <CustomTypography
                  variant='h5'
                  mobileVariant='subtitle2'
                  className='text-white'
               >
                  สมัครเรียนเลย !
               </CustomTypography>
               <img
                  src='/images/about-us/pointer.png'
                  alt='pointer'
                  className='w-7 h-7 mobile:w-5 mobile:h-5 absolute -bottom-1 -right-1'
               />
               <span className='shape'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
               </span>
            </Link>
         </div>
      </div>
   );
}
