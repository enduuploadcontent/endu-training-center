import type { Config } from 'tailwindcss';

export default {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
            },
            foreground: {
               primary: '#0A0A0A',
            },
            border: '#EDEDED',
         },
      },
   },
   plugins: [],
} satisfies Config;
