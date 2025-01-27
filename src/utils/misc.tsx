import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const nonCaseSensitiveSearch = (text: string, search: string) => {
   return text.toLowerCase().includes(search.toLowerCase().trim());
};

export const cn = (...inputs: ClassValue[]) => {
   return twMerge(clsx(inputs));
};
