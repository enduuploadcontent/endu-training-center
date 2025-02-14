import './globals.css';
import { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import MaterialThemeProvider from '@/theme/material';
import Footer from '@/components/layout/footer';
import FloatingButton from '@/components/layout/floating';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { antdtheme } from '@/theme/antdtheme';

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
         <body className='min-h-screen'>
            <AntdRegistry>
               <ConfigProvider theme={antdtheme}>
                  <MaterialThemeProvider>
                     <FloatingButton />
                     <Navbar />
                     {children}
                     <Footer />
                  </MaterialThemeProvider>
               </ConfigProvider>
            </AntdRegistry>
         </body>
      </html>
   );
}
