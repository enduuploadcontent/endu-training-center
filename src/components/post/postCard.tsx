import React from 'react';
import CustomTypography from '../ui/typography';
import { PostContentType } from '@/variables/post/post-list';
import buddhistDayjs from '@/variables/day';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
   content: PostContentType;
   index: number;
};

export default function PostCard({ content, index }: Props) {
   return (
      <Link href={`/post/${index + 1}`}>
         <motion.div
            whileHover={{
               y: -8,
               transition: { duration: 0.3 },
            }}
            className='content-shadow rounded-lg flex flex-col'
         >
            <img
               src={content.thumbnailSrc}
               alt='thumbnail'
               className='w-full aspect-[4/3] rounded-t-lg object-cover'
            />
            <div className='p-4 flex flex-col gap-4 justify-between h-full'>
               <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-1'>
                     <CustomTypography variant='subtitle2'>
                        {content.title}
                     </CustomTypography>
                     <CustomTypography
                        variant='caption1'
                        className='line-clamp-2'
                     >
                        {content.detail}
                     </CustomTypography>
                  </div>
                  <div className='flex gap-2.5 items-center'>
                     <img
                        src='/images/circle-logo.png'
                        alt='logo'
                        className='w-8 h-8'
                     />
                     <div className='flex flex-col text-foreground-secondary'>
                        <CustomTypography variant='overline1'>
                           ENDU Team
                        </CustomTypography>
                        <CustomTypography variant='overline2'>
                           {buddhistDayjs(content.date).format('DD MMM BBBB')}
                        </CustomTypography>
                     </div>
                  </div>
               </div>
            </div>
         </motion.div>
      </Link>
   );
}
