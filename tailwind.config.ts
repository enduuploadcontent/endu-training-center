import type { Config } from 'tailwindcss';

const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/theme/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         screens: {
            mobile: { max: '600px' },
            tablet: { min: '600px' },
            laptop: { min: '768px' },
            desktop: { min: '1024px' },
         },
         colors: {
            brand: {
               primary: '#155EEF',
               logo: '#114BBF'
            },
            foreground: {
               primary: '#0A0A0A',
               secondary: '#7B89A1',
            },
            background: {
               blue: '#F5F8FF',
            },
            border: '#EDEDED',
         },
         fontFamily: {
            ibm: ['IBMPlexSansThai', 'sans-serif'],
         },
      },
   },
   plugins: [],
}) satisfies Config;
