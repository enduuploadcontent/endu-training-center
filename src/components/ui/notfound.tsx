import React from 'react';
import CustomTypography from './typography';

type Props = {};

export default function Notfound({}: Props) {
   return (
      <div className='flex flex-col gap-5 items-center text-foreground-secondary'>
         <img
            src='/images/notfound.png'
            className='w-[120px] h-[120px] object-contain'
         />
         <CustomTypography
            variant='subtitle1'
            mobileVariant='subtitle2'
            className='flex'
         >
            ไม่พบข้อมูล
         </CustomTypography>
      </div>
   );
}
