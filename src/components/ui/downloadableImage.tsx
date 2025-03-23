import { Image } from 'antd';
import {
   ArrowClockwise,
   ArrowCounterClockwise,
   DownloadSimple,
   MagnifyingGlassMinus,
   MagnifyingGlassPlus,
} from '@phosphor-icons/react';
import { useState } from 'react';

type Props = {
   src: string[];
   className: string;
};

export default function DownloadableImageList({ src, className }: Props) {
   const [current, setCurrent] = useState(0);
   const onDownload = () => {
      const url = src[current];
      const filename = url.split('/').pop() ?? '';

      fetch(url)
         .then((response) => response.blob())
         .then((blob) => {
            const blobUrl = URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            URL.revokeObjectURL(blobUrl);
            link.remove();
         });
   };

   return (
      <Image.PreviewGroup
         preview={{
            toolbarRender: (
               _,
               {
                  actions: { onZoomOut, onZoomIn, onRotateLeft, onRotateRight },
               },
            ) => (
               <div className='flex flex-col gap-2 justify-center '>
                  <div className='flex px-6 py-2 gap-6 rounded-full  bg-[#00000040]'>
                     <MagnifyingGlassMinus
                        size={24}
                        onClick={onZoomOut}
                        className='hover:cursor-pointer'
                     />
                     <MagnifyingGlassPlus
                        size={24}
                        onClick={onZoomIn}
                        className='hover:cursor-pointer'
                     />
                     <ArrowCounterClockwise
                        size={24}
                        onClick={onRotateLeft}
                        className='hover:cursor-pointer'
                     />
                     <ArrowClockwise
                        size={24}
                        onClick={onRotateRight}
                        className='hover:cursor-pointer'
                     />
                     <DownloadSimple
                        size={24}
                        onClick={onDownload}
                        className='hover:cursor-pointer'
                     />
                  </div>
               </div>
            ),
            onChange: (index) => {
               setCurrent(index);
            },
         }}
      >
         {src.map((src, index) => (
            <Image src={src} key={index} alt={src} className={className} />
         ))}
      </Image.PreviewGroup>
   );
}
