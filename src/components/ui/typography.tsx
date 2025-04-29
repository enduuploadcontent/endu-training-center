'use client';
import { Typography, TypographyProps } from '@material-tailwind/react';

interface Props extends Omit<TypographyProps, 'variant'> {
   variant?:
      | 'h4'
      | 'h5'
      | 'subtitle1'
      | 'subtitle2'
      | 'subtitle3'
      | 'body1'
      | 'body2'
      | 'button'
      | 'caption1'
      | 'caption2'
      | 'overline1'
      | 'overline2';
   mobileVariant?: Props['variant']; // New prop for mobile variant
}

export default function CustomTypography({
   variant,
   mobileVariant,
   ...rest
}: Props) {
   // Use mobileVariant if screen size is small, else use variant
   const appliedVariant =
      typeof window !== 'undefined' && window.innerWidth <= 600
         ? mobileVariant || variant
         : variant;

   return <Typography variant={appliedVariant} {...(rest as any)} />;
}
