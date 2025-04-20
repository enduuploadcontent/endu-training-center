'use client';

import React, {
   Dispatch,
   Fragment,
   SetStateAction,
   useEffect,
   useState,
} from 'react';
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
import { cn } from '@/utils/misc';

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
      href: '/our-student',
   },
   {
      title: 'บทความ',
      href: '/post',
   },
   {
      title: 'เกี่ยวกับเรา',
      href: '/about-us',
   },
];

export default function Navbar() {
   const pathname = usePathname();
   const [open, setOpen] = useState(false);

   useEffect(() => {
      setOpen(false);
   }, [pathname]);

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
      setScrolled(latest > 100 ? true : false);
   });

   return (
      <nav
         className={cn(
            `fixed top-0 z-50 w-full flex items-center justify-center px-8 mobile:px-6 transition-all duration-500 ease-out h-20 mobile:h-14 bg-white bg-opacity-100`,
            scrolled || open ? 'navbar-shadow' : 'shadow-none',
            pathname === '/' && !scrolled ? 'bg-opacity-0 ' : 'bg-opacity-100',
         )}
      >
         <div className='flex w-full max-w-6xl items-center justify-between'>
            <Logo
               className={cn(
                  `transition-all duration-500`,
                  (scrolled && pathname === '/') || pathname !== '/' || open
                     ? 'fill-brand-logo'
                     : 'fill-white',
               )}
            />
            <div className='hidden gap-4 lg:flex'>
               {menuPath.map((path, index) => (
                  <Link
                     key={index}
                     href={path.href}
                     className={cn(
                        `hover:scale-105 transition-all duration-500 px-4`,
                        (scrolled && pathname === '/') ||
                           pathname !== '/' ||
                           open
                           ? 'text-foreground-primary'
                           : 'text-white',
                     )}
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
            className={cn(
               `block p-2`,
               (scrolled && pathname === '/') || pathname !== '/' || open
                  ? 'text-foreground-primary'
                  : 'text-white',
            )}
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
                  className='fixed left-0 top-0 flex h-screen w-full flex-col bg-white mt-[55px] border-t-border border'
               >
                  <div className='h-screen overflow-y-scroll bg-white flex flex-col'>
                     {/* <div className='h-px w-full bg-border' /> */}
                     {menuPath.map((path, index) => (
                        <Fragment key={index}>
                           <Link
                              href={path.href}
                              onClick={() => {
                                 if (pathname.includes(path.href))
                                    setOpen(false);
                              }}
                              className={`px-6 hover:scale-105 transition-all duration-500 min-w-[100px] py-6 text-foreground-primary items-center flex justify-between`}
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
                           <div className='w-full px-6'>
                              <div className='w-full h-px bg-border' />
                           </div>
                        </Fragment>
                     ))}
                  </div>
               </motion.nav>
            )}
         </AnimatePresence>
      </div>
   );
}
