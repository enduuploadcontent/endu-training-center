type LecturerType = {
   img: string;
   name: string;
};

export enum CourseLevel {
   Basic = 'พื้นฐาน',
   Medium = 'ปานกลาง',
   Hard = 'ยาก',
}

export type CourseContentType = {
   imgSrc: string;
   level: CourseLevel;
   title: string;
   detail?: string;
   skill?: string[];
   suitableFor: string[];
   learningDay: string;
   cost: number;
   lecturer: LecturerType[];
};

const tibet = {
   img: '/images/lecturer/tibet.png',
   name: 'อ.ทิเบต',
};

const wu = {
   img: '/images/lecturer/wu.png',
   name: 'Mr.Wu',
};

const knots = {
   img: '/images/lecturer/not.png',
   name: 'อ.น็อต',
};

export const courseList: CourseContentType[] = [
   {
      imgSrc: 'https://i.imgur.com/vPBiVY0.jpeg',
      level: CourseLevel.Basic,
      title: 'Hardware Basic H1',
      detail:
         'เทคนิคการแกะเครื่อง iphone และ Android รุ่นต่างๆ การใช้เครื่องมือซ่อมพื้นฐาน วิธีการเปลี่ยนแบตเตอรี่ การเปลี่ยนจอภาพ และการเปลี่ยนพอร์ตชาร์จ',
      skill: ['แกะเครื่อง', 'เปลี่ยนแบต', 'เปลี่ยนจอ', 'เปลี่ยนพอร์ทชาร์จ'],
      suitableFor: [
         'ผู้ไม่มีพื้นฐานด้านการซ่อม',
         'ผู้ที่สนใจหารายได้เสริมจากการซ่อมมือถือ',
         'ผู้ที่ต้องการเริ่มต้นอาชีพช่างซ่อมมือถือ',
      ],
      learningDay: '2 วัน',
      cost: 3900,
      lecturer: [tibet, wu],
   },
   {
      imgSrc: 'https://i.imgur.com/dpMtAG7.jpeg',
      level: CourseLevel.Basic,
      title: 'Hardware Basic H2',
      detail:
         'ต่อเนื่องจาก Basic H1 เน้นลงมือปฏิบัติและใช้เครื่องมือจนคล่องมากยิ่งขึ้น เพื่อเพิ่มความชำนาญในการซ่อม',
      skill: [
         'เรียนต่อเนื่องจาก Basic H1',
         'เน้นปฎิบัติจริง',
         'ใช้เครื่องมือจนชำนาญ',
      ],
      suitableFor: [
         'ต้องการฝึกปฏิบัติจริง เน้นลงมือทำจริง',
         'ช่างที่ต้องการเพิ่มความชำนาญในการซ่อม',
         'ต้องการพัฒนาทักษะให้พร้อมรับงานจริง',
      ],
      learningDay: '3 วัน',
      cost: 5900,
      lecturer: [tibet, wu],
   },
   {
      imgSrc: 'https://i.imgur.com/TwfC0AH.jpeg',
      level: CourseLevel.Medium,
      title: 'Hardware Advance H1',
      detail:
         'การใช้งานเครื่องมือสำหรับการซ่อมเมนบอร์ด เทคนิคการแยกและประกบเมนบอร์ดสองชั้น การเช็คการกินกระแส 5 ขั้นตอน วิธีการอ่านผังวงจร (Schematic Diagram) วิธีการเขียน Block Diagram',
      skill: [
         'ซ่อมแมนบอร์ด 2 ชั้น',
         'วิเคราะห์วงจรเบื้องต้น',
         'การอ่านสายวงจร',
      ],
      suitableFor: [
         'ช่างที่มีประสบการณ์พื้นฐาน',
         'ผู้ที่ต้องการพัฒนาทักษะให้สูงขึ้น',
         'ผู้ที่สนใจสร้างอาชีพในสายช่างซ่อมมือถือ',
      ],
      learningDay: '5 วัน',
      cost: 14900,
      lecturer: [tibet, wu],
   },
   {
      imgSrc: 'https://i.imgur.com/l1TXPn9.jpeg',
      level: CourseLevel.Hard,
      title: 'Hardware Pro H1',
      detail:
         'การทำงานของ CPU เทคนิคการยกวาง CPU ให้ปลอดภัย วิธีการเพิ่มและเปลี่ยนหน่วยฮาร์ดดิสก์ (NAND) การ Swap Mainboard (ย้ายบ้าน) บอร์ดสองชั้น',
      skill: ['Reball CPU iPhone', 'ย้ายบ้าน iPhone'],
      suitableFor: [
         'ช่างซ่อมที่ต้องการพัฒนาทักษะขั้นสูง',
         'ผู้ที่ต้องการเปิดร้านซ่อมมือถือมืออาชีพ',
         'ผู้ที่ต้องการแก้ไขปัญหางานซ่อมที่ซับซ้อนอย่างมีประสิทธิภาพ',
      ],
      learningDay: '3 วัน',
      cost: 24900,
      lecturer: [tibet, wu],
   },
   {
      imgSrc: 'https://i.imgur.com/MTZhhNH.jpeg',
      level: CourseLevel.Hard,
      title: 'Hardware Pro H2',
      detail:
         'วิเคราะห์การทำงานภาคสัญญาณ iPhone และ Android วิธีการดูการกินกระแส การวัดหาสาเหตุเสียของภาคสัญญาณ iPhone และ Android ซ่อมบอร์ด 2 ชั้นและวิธีหาอาการเสียอย่างรวดเร็ว',
      skill: [
         'วิเคราห์วงจร',
         'ซ่อมสัญญาณ',
         'วิเคราะห์กระแส',
         'บอร์ด 2 ชั้น',
         'พื้นฐานการอ่านวงจร Android',
      ],
      suitableFor: [
         'ช่างซ่อมที่ต้องการพัฒนาทักษะขั้นสูง',
         'ผู้ที่ต้องการเปิดร้านซ่อมมือถือมืออาชีพ',
         'ผู้ที่ต้องการแก้ไขปัญหางานซ่อมที่ซับซ้อนอย่างมีประสิทธิภาพ',
      ],
      learningDay: '3 วัน',
      cost: 28900,
      lecturer: [tibet, wu],
   },
   {
      imgSrc: 'https://i.imgur.com/cCHMQ2H.jpeg',
      level: CourseLevel.Basic,
      title: 'Hardware OCA H1',
      detail: 'ลอกกระจกหน้าจอแบบเรียบและแบบโค้ง',
      skill: ['ลอกกระจก OCA'],
      suitableFor: [
         'ผู้ที่มีพื้นฐานการแกะเครื่องเบื้องต้น',
         'ผู้ที่ต้องการเพิ่มรายได้',
      ],
      learningDay: '3 วัน',
      cost: 8900,
      lecturer: [wu],
   },

   {
      imgSrc: 'https://i.imgur.com/k4ljmpH.jpeg',
      level: CourseLevel.Hard,
      title: 'Masterclass (1 Month)',
      skill: [
         'ฝึกยก-วาง CPU ย้ายบ้าน กู้คืนข้อมูล',
         'วิเคราะห์อาการเสียเชิงลึก',
         'ซ่อมภาคสัญญาณ',
         'พื้นฐานการอ่านวงจร',
      ],
      suitableFor: [
         'ผู้ที่ต้องการเริ่มต้นอาชีพช่างซ่อมมือถือไม่จำเป็นต้องมีพื้นฐาน',
         'ช่างซ่อมที่ต้องการต่อยอดสู่การซ่อมระดับสูง',
      ],
      learningDay: '1 เดือน',
      cost: 69000,
      lecturer: [tibet, wu],
   },
   {
      imgSrc: 'https://i.imgur.com/2iPBgCK.jpeg',
      level: CourseLevel.Hard,
      title: 'Masterclass (2 Months)',
      skill: [
         'ฝึกยก-วาง CPU ย้ายบ้าน กู้คืนข้อมูล',
         'วิเคราะห์อาการเสียเชิงลึก',
         'ซ่อมภาคสัญญาณ',
         'พื้นฐานการอ่านวงจร',
      ],
      suitableFor: [
         'ผู้ที่ต้องการเริ่มต้นอาชีพช่างซ่อมมือถือไม่จำเป็นต้องมีพื้นฐาน',
         'ช่างซ่อมที่ต้องการต่อยอดสู่การซ่อมระดับสูง',
      ],
      learningDay: '2 เดือน',
      cost: 119000,
      lecturer: [tibet, wu],
   },
   {
      imgSrc: 'https://i.imgur.com/EgAsXQ1.jpeg',
      level: CourseLevel.Hard,
      title: 'Masterclass (3 Months)',
      skill: [
         'ฝึกยก-วาง CPU ย้ายบ้าน กู้คืนข้อมูล',
         'วิเคราะห์อาการเสียเชิงลึก',
         'ซ่อมภาคสัญญาณ',
         'พื้นฐานการอ่านวงจร',
      ],
      suitableFor: [
         'ผู้ที่ต้องการเริ่มต้นอาชีพช่างซ่อมมือถือไม่จำเป็นต้องมีพื้นฐาน',
         'ช่างซ่อมที่ต้องการต่อยอดสู่การซ่อมระดับสูง',
      ],
      learningDay: '3 เดือน',
      cost: 159000,
      lecturer: [tibet, wu],
   },
   {
      imgSrc: 'https://i.imgur.com/F5mhMIw.jpeg',
      level: CourseLevel.Basic,
      title: 'Software Basic S1',
      suitableFor: [
         'ผู้ที่ไม่มีพื้นฐานด้านการซ่อม',
         'ต้องการเพิ่มความรู้ความเข้าใจในการซ่อม',
      ],
      learningDay: '2 วัน',
      cost: 3900,
      lecturer: [knots],
   },
   {
      imgSrc: 'https://i.imgur.com/Ng25mHM.jpeg',
      level: CourseLevel.Hard,
      title: 'Software Pro S1',
      suitableFor: [
         'ช่างระดับเชี่ยวชาญ',
         'ผู้ที่ต้องการแก้ไขและจัดการด้วยตัวเอง',
      ],
      learningDay: '3 วัน',
      cost: 5500,
      lecturer: [knots],
   },
];
