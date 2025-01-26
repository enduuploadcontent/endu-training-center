'use client';

import { ThemeProvider } from '@material-tailwind/react';

const materialTheme = {
   typography: {
      defaultProps: {
         variant: 'paragraph',
         color: 'inherit',
         textGradient: false,
         // fontSmoothing: 'antialiased',
      },
      valid: {
         variants: [
            'h4',
            'h5',
            'subtitle1',
            'subtitle2',
            'subtitle3',
            'body1',
            'body2',
            'button',
            'caption1',
            'caption2',
            'overline1',
            'overline2',
         ],
      },
      styles: {
         variants: {
            h4: {
               fontWeight: 'font-[500]',
               fontSize: 'text-[35px]',
               lineHeight: 'leading-[57.75px]',
               fontFamily: 'font-ibm',
            },
            h5: {
               fontWeight: 'font-[500]',
               fontSize: 'text-[25px]',
               lineHeight: 'leading-[41.25px]',
               fontFamily: 'font-ibm',
            },
            subtitle1: {
               fontWeight: 'font-[600]',
               fontSize: 'text-[21px]',
               lineHeight: 'leading-[34.65px]',
               fontFamily: 'font-ibm',
            },
            subtitle3: {
               fontWeight: 'font-[600]',
               fontSize: 'text-[15px]',
               lineHeight: 'leading-[24.75px]',
               fontFamily: 'font-ibm',
            },
            body1: {
               fontWeight: 'font-[400]',
               fontSize: 'text-[15px]',
               lineHeight: 'leading-[24.75px]',
               fontFamily: 'font-ibm',
            },
            caption1: {
               fontWeight: 'font-[400]',
               fontSize: 'text-[13px]',
               lineHeight: 'leading-[21.45px]',
               fontFamily: 'font-ibm',
            },
            caption2: {
               fontWeight: 'font-[600]',
               fontSize: 'text-[17px]',
               lineHeight: 'leading-[28.05px]',
               fontFamily: 'font-ibm',
            },
         },
         textGradient: {
            bgClip: 'bg-clip-text',
            color: 'text-transparent',
         },
      },
   },
};

export default function MaterialThemeProvider({
   children,
}: {
   children: React.ReactNode;
}) {
   return <ThemeProvider value={materialTheme}>{children}</ThemeProvider>;
}
