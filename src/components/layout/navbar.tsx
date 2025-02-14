'use client';

import React, { Dispatch, Fragment, SetStateAction, useState } from 'react';
import {
   useMotionValueEvent,
   AnimatePresence,
   useScroll,
   motion,
} from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, List, X } from '@phosphor-icons/react';
import { RemoveScroll } from 'react-remove-scroll';
import { usePathname } from 'next/navigation';
import Logo from './logo';
import CustomTypography from '../ui/typography';

const menuPath = [
   {
      title: 'หน้าแรก',
      href: '/',
   },
   {
      title: 'หลักสูตร',
      href: '/course',
   },
   {
      title: 'ผลงานการซ่อม',
      href: '/showcase',
   },
   {
      title: 'นักเรียนของเรา',
      href: '',
   },
   {
      title: 'บทความ',
      href: '',
   },
   {
      title: 'เกี่ยวกับเรา',
      href: '',
   },
];

export default function Navbar() {
   const pathname = usePathname();
   const [open, setOpen] = useState(false);

   return (
      <RemoveScroll removeScrollBar={false} enabled={open}>
         <NavbarComponent pathname={pathname} open={open} setOpen={setOpen} />
      </RemoveScroll>
   );
}

function NavbarComponent({
   open,
   setOpen,
   pathname,
}: {
   open: boolean;
   pathname: string;
   setOpen: Dispatch<SetStateAction<boolean>>;
}) {
   const [scrolled, setScrolled] = useState(false);
   const { scrollY } = useScroll();

   useMotionValueEvent(scrollY, 'change', (latest) => {
      setScrolled(latest > 250 ? true : false);
   });

   return (
      <nav
         className={`fixed top-0 z-50 w-full flex items-center justify-center px-8 mobile:px-6 transition-all duration-500 ease-out h-20 mobile:h-14 bg-white  ${
            (scrolled && pathname === '/') || pathname !== '/' || open
               ? 'bg-opacity-100 shadow-xl'
               : 'bg-opacity-0 shadow-none'
         }`}
      >
         <div className='flex w-full max-w-7xl items-center justify-between'>
            <Logo
               className={`transition-all duration-500 ${
                  (scrolled && pathname === '/') || pathname !== '/' || open
                     ? 'fill-brand-logo'
                     : 'fill-white'
               }`}
            />
            <div className='hidden gap-4 lg:flex'>
               {menuPath.map((path, index) => (
                  <Link
                     key={index}
                     href={path.href}
                     className={`hover:scale-105 transition-all duration-500 min-w-[100px] px-4 ${
                        (scrolled && pathname === '/') ||
                        pathname !== '/' ||
                        open
                           ? 'text-foreground-primary'
                           : 'text-white'
                     }`}
                  >
                     {path.title}
                  </Link>
               ))}
            </div>
            <MobileMenu
               scrolled={scrolled}
               pathname={pathname}
               open={open}
               setOpen={setOpen}
            />
         </div>
      </nav>
   );
}

function MobileMenu({
   scrolled,
   pathname,
   open,
   setOpen,
}: {
   scrolled: boolean;
   pathname: string;
   open: boolean;
   setOpen: Dispatch<SetStateAction<boolean>>;
}) {
   return (
      <div className='block lg:hidden'>
         <button
            onClick={() => setOpen((prev) => !prev)}
            className={`block p-2 ${
               (scrolled && pathname === '/') || pathname !== '/' || open
                  ? 'text-foreground-primary'
                  : 'text-white'
            }`}
         >
            {open ? <X size={24} /> : <List size={24} />}
         </button>
         <AnimatePresence>
            {open && (
               <motion.nav
                  initial={{ x: '100vw' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100vw' }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className='fixed left-0 top-0 flex h-screen w-full flex-col bg-white mt-[55px] px-6 border-t-border border'
               >
                  <div className='h-screen overflow-y-scroll bg-white flex flex-col'>
                     {/* <div className='h-px w-full bg-border' /> */}
                     {menuPath.map((path, index) => (
                        <Fragment key={index}>
                           <Link
                              href={path.href}
                              className={`hover:scale-105 transition-all duration-500 min-w-[100px] py-6 text-foreground-primary items-center flex justify-between`}
                           >
                              <CustomTypography
                                 variant='subtitle1'
                                 className='font-[500px]'
                              >
                                 {path.title}
                              </CustomTypography>
                              <div className='p-2'>
                                 <ArrowRight size={24} color='#7B89A1' />
                              </div>
                           </Link>
                           <div className='h-px w-full bg-border' />
                        </Fragment>
                     ))}
                  </div>
               </motion.nav>
            )}
         </AnimatePresence>
      </div>
   );
}
