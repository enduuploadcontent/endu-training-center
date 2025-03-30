import { ReactNode } from 'react';

export type PostContentType = {
   title: string;
   date: string;
   minuteRead: number;
   thumbnailSrc: string;
   imgSrc: string[];
   detail: ReactNode;
};

export const postList: PostContentType[] = [];
