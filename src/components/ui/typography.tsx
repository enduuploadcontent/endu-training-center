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
}

export default function CustomTypography(props: Props) {
   return <Typography {...(props as any)} />;
}
