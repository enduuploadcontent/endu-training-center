import { Image } from 'antd';
import {
   ArrowClockwise,
   ArrowCounterClockwise,
   DownloadSimple,
   Eye,
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
            toolbarRender: () => <></>,
            onChange: (index) => {
               setCurrent(index);
            },
         }}
      >
         {src.map((src, index) => (
            <Image
               src={src}
               referrerPolicy='no-referrer'
               key={index}
               alt={src}
               className={className}
               preview={{mask: <div className='flex items-center gap-2'><Eye size={24}/></div>}}
            />
         ))}
      </Image.PreviewGroup>
   );
}
