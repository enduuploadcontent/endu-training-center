'use client';

import PostCard from '@/components/post/postCard';
import Notfound from '@/components/ui/notfound';
import CustomTypography from '@/components/ui/typography';
import buddhistDayjs from '@/variables/day';
import { postList } from '@/variables/post/post-list';

export default function PostPage() {
   const sortedContents = postList.sort((a, b) => {
      return buddhistDayjs(a.date).isBefore(buddhistDayjs(b.date)) ? 1 : -1;
   });

   return (
      <div className='flex flex-col gap-4 min-h-[calc(100vh-190px)] mobile:min-h-[calc(100vh-250px)] w-full items-center justify-between pt-28 mobile:pt-20 pb-8 mobile:p-6'>
         <div className='flex flex-col gap-4 w-full max-w-6xl flex-grow'>
            <div className='flex items-center justify-between'>
               <CustomTypography variant='h5'>
                  บทความ
               </CustomTypography>
               <CustomTypography
                  variant='body1'
                  mobileVariant='caption1'
                  className='text-foreground-secondary'
               >{`ทั้งหมด ${sortedContents.length} รายการ`}</CustomTypography>
            </div>
            {sortedContents.length === 0 ? (
               <div className='h-full w-full flex-grow flex items-center justify-center'>
                  <Notfound />
               </div>
            ) : (
               <div className='grid grid-cols-3 gap-3 w-full mobile:grid-cols-1 mobile:gap-4'>
                  {sortedContents.map((content, index) => (
                     <PostCard key={index} index={index} content={content} />
                  ))}
               </div>
            )}
         </div>
      </div>
   );
}
