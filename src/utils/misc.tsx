import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const nonCaseSensitiveSearch = (text: string, search: string) => {
   return text.toLowerCase().includes(search.toLowerCase().trim());
};

export const cn = (...inputs: ClassValue[]) => {
   return twMerge(clsx(inputs));
};

export const downloadFile = (name: string, src: string) => {
   fetch(src, { mode: 'cors' })
      .then((response) => response.blob())
      .then((blob) => {
         const url = URL.createObjectURL(blob)
         const link = document.createElement('a')
         link.href = url
         link.download = name
         document.body.appendChild(link)
         link.click()
         document.body.removeChild(link)
      })
      .catch((error) => {
         console.error('Error downloading file:', error)
      })
}

export const scrollToTop = () => {
   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};