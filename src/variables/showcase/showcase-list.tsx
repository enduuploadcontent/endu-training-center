import { ReactNode } from 'react';

export type ShowcaseContentType = {
   title: string;
   date: string;
   minuteRead: number;
   thumbnailSrc: string;
   videoSrc: string;
   imgSrc: string[];
   detail: ReactNode;
};

export const showcaseList: ShowcaseContentType[] = [];
