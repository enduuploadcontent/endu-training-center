'use client';

import React, { Dispatch, Fragment, SetStateAction, useState } from 'react';
import {
   useMotionValueEvent,
   AnimatePresence,
   useScroll,
   motion,
} from 'framer-motion';
import Link from 'next/link';
import { List, X } from '@phosphor-icons/react';
import { RemoveScroll } from 'react-remove-scroll';
import { usePathname } from 'next/navigation';

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
      href: '',
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
         className={`fixed top-0 z-50 w-full flex items-center justify-center mobile:px-6 text-white transition-all duration-300 ease-out h-20 mobile:h-14  ${
            (scrolled && pathname === '/') || pathname !== '/'
               ? 'bg-white shadow-xl'
               : 'bg-transparent shadow-none'
         }`}
      >
         <div className='flex w-full max-w-7xl items-center justify-between'>
            <svg
               width='108'
               height='20'
               viewBox='0 0 108 20'
               xmlns='http://www.w3.org/2000/svg'
               className={`transition-all duration-300 ${
                  (scrolled && pathname === '/') || pathname !== '/'
                     ? 'fill-brand-primary'
                     : 'fill-white'
               }`}
            >
               <path d='M23.956 0H3.07692C1.48809 0.415068 0.792829 0.957806 0 2.63736V17.3626C0.360843 18.8375 0.8797 19.4244 2.41758 20H23.956V14.9451H6.59341V12.7473H21.0989V7.25275H6.59341V5.05494H23.956V0Z' />
               <path d='M27.9561 2.82609V19.5652V20H34.2604V8.04348H35.13L44.6952 20H49.4778C50.9246 19.3827 51.6749 18.9789 51.8691 17.1739V0H45.5648V12.1739H45.13L35.13 0H30.9995C29.407 0.524054 28.7095 1.09772 27.9561 2.82609Z' />
               <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M55.8691 0V20H77.1878C78.7577 19.4951 79.4219 18.9213 80.045 17.1429V2.63736C79.213 1.04645 78.5772 0.489135 77.1878 0H55.8691ZM73.6713 5.05493H62.2427V14.7253H73.6713V5.05493Z'
               />
               <path d='M84.0449 17.1739V0H90.7841V14.7826H101.436V0H107.958V17.1739C107.542 18.797 107.042 19.4774 105.349 20H86.871C85.309 19.4369 84.6726 18.839 84.0449 17.1739Z' />
            </svg>

            <div className='hidden gap-4 lg:flex'>
               {menuPath.map((path, index) => (
                  <Link
                     key={index}
                     href={path.href}
                     className={`hover:scale-[1.05] transition-all duration-300 min-w-[100px] px-4 ${
                        (scrolled && pathname === '/') || pathname !== '/'
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
               (scrolled && pathname === '/') || pathname !== '/'
                  ? 'text-foreground-primary'
                  : 'text-white'
            }`}
         >
            {open ? <X size={24} /> : <List size={24} />}
         </button>
         <AnimatePresence>
            {open && (
               <motion.nav
                  initial={{ y: '100vh' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100vh' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className='fixed left-0 top-0 flex h-screen w-full flex-col bg-white mt-14'
               >
                  <div className='h-screen overflow-y-scroll bg-white flex flex-col'>
                     <div className='h-px w-full bg-border' />
                     {menuPath.map((path, index) => (
                        <Fragment key={index}>
                           <Link
                              href={path.href}
                              className={`hover:scale-[1.05] transition-all duration-300 min-w-[100px] py-4 text-foreground-primary text-center`}
                           >
                              {path.title}
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
