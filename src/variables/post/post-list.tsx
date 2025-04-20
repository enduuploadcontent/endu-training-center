import { ReactNode } from 'react';

export type PostContentType = {
   title: string;
   date: string;
   thumbnailSrc: string;
   imgSrc: string[];
   detail: ReactNode;
};

export const postList: PostContentType[] = [
   {
      title: 'พิธีเปิดโรงเรียนสอนซ่อมมือถือเอ็นดู',
      date: '2024-11-25',
      thumbnailSrc:
         'https://1drv.ms/i/c/799d5915db97c270/IQQOF1G43WriQrketKnxctgAAVGy03f9p60VxPXWgzBTdpI?width=660',
      imgSrc: [
         'https://1drv.ms/i/c/799d5915db97c270/IQQ5Jw_08mhNR69KVKEdHdEfAaYZWEjPARbgSrNaVSMbWqY',
         'https://1drv.ms/i/c/799d5915db97c270/IQQOF1G43WriQrketKnxctgAAVGy03f9p60VxPXWgzBTdpI',
         'https://1drv.ms/i/c/799d5915db97c270/IQQZddd-ikVSSI1LeHolp6SQAVnBoVnDRd02YtUOUNOro4I',
         'https://1drv.ms/i/c/799d5915db97c270/IQRk_WorHCf0QrY2nE0tqgiQAb39AVgH6Sm3pv5OJEB4pSM',
      ],
      detail: (
         <>
            🔥 พร้อมก้าวสู่โลกการซ่อมมือถืออย่างมืออาชีพกับ อาจารย์ตัวจริง! 🔧✨{' '}
            <br />
            <br />
            🌟 อ.ทิเบต ผู้เชี่ยวชาญเรื่องเทคนิค Hardware พื้นฐานแน่นปึ้ก
            เข้าใจง่าย สอนให้คุณเริ่มต้นได้อย่างมั่นใจ
            <br />
            🌟 อ.น็อต เจ้าแห่งเทคนิคซ่อมขั้นสูง เรื่อง Software
            เคล็ดลับและประสบการณ์ที่คุณหาจากที่ไหนไม่ได้
            <br />
            🌟 อ.อู สุดยอดเคล็ดลับในการลอกจอ พร้อมปูพื้นฐานจนคุณกลายเป็นมือโปร
            <br />
            <br />
            💡 ไม่ว่าคุณจะไม่มีพื้นฐานมาก่อนหรืออยากพัฒนา ทักษะให้เหนือระดับ
            คอร์สเรียนของโรงเรียนสอนซ่อม
            มือถือเอ็นดูจะเปลี่ยนคุณให้พร้อมเข้าสู่สายงานที่มั่นคงและสร้างรายได้อย่างยั่งยืน
            💼
            <br />
            <br />
            📢 สมัครเรียนตอนนี้! ก่อนสิ้นปี ลดทันที 20% รับแค่ 100
            ท่านแรกเท่านั้น
            <br />
            <br />
            มารับความรู้ครบวงจรตั้งแต่ขั้นพื้นฐานจนถึงระดับ
            เชี่ยวชาญพร้อมโอกาสสร้างอนาคตที่คุณออกแบบ เองได้ 📌
            <br />
            <br />
            ติดตามรายละเอียดคอร์สเรียนได้ที่เพจโรงเรียนสอน ซ่อมมือถือเอ็นดู
            <br />
            <br />
            อย่ารอช้า! ที่นั่งมีจำนวนจำกัด รีบจองก่อนเต็มนะคะ ❤️
         </>
      ),
   },
];
