import ReactQueryProvider from '@/provider/reactQueryProvider';
import './globals.css';
import { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import MaterialThemeProvider from '@/theme/material';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
   title: 'ENDU Training Center',
   description: '',
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang='th'>
         <link
            rel='icon'
            type='image/png'
            href='/favicon-96x96.png'
            sizes='96x96'
         />
         <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
         <link rel='shortcut icon' href='/favicon.ico' />
         <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
         />
         <meta name='apple-mobile-web-app-title' content='คิดถึงลูน่า' />
         <link rel='manifest' href='/site.webmanifest' />
         <ReactQueryProvider>
            <MaterialThemeProvider>
               <body className='min-h-screen'>
                  <Navbar />
                  {children}
                  <Footer/>
               </body>
            </MaterialThemeProvider>
         </ReactQueryProvider>
      </html>
   );
}
