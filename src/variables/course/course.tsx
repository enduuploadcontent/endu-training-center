type LecturerType = {
   img: string;
   name: string;
};

export type CourseContentType = {
   imgSrc: string;
   level: string;
   title: string;
   detail: string;
   skill: string[];
   suitableFor: string[];
   learningDay: number;
   cost: number;
   lecturer: LecturerType[];
};

const lecturer1 = {
   img: '/images/lecturer/L1.png',
   name: 'ทิเบต สายเสมา',
};

const lecturer2 = {
   img: '/images/lecturer/L2.png',
   name: 'ทิเบต สายเสมา',
};

const lecturer3 = {
   img: '/images/lecturer/L3.png',
   name: 'ทิเบต สายเสมา',
};

export const courseList: CourseContentType[] = [
   {
      imgSrc: '/images/showcase/1/2.png',
      level: 'basic',
      title: 'Basic H1',
      detail:
         'Lorem ipsum dolor sit amet consectetur. Pellentes que sit id aliquam urna ornare ut.',
      skill: ['เปลี่ยนจอ', 'เปลี่ยนพอร์ทชาร์จ'],
      suitableFor: [
         'ผู้ไม่มีพื้นฐานด้านการซ่อม',
         'ผู้ที่สนใจหารายได้เสริมจากการซ่อมมือถือ',
         'ผู้ที่ต้องการเริ่มต้นอาชีพช่างซ่อมมือถือ',
      ],
      learningDay: 1,
      cost: 3900,
      lecturer: [lecturer1],
   },
   {
      imgSrc: '/images/showcase/1/1.png',
      level: 'medium',
      title: 'Medium H1',
      detail:
         'Lorem ipsum dolor sit amet consectetur. Pellentes que sit id aliquam urna ornare ut.',
      skill: ['เปลี่ยนแบต', 'เปลี่ยนจอ', 'เปลี่ยนพอร์ทชาร์จ'],
      suitableFor: [
         'ผู้ไม่มีพื้นฐานด้านการซ่อม',
         'ผู้ที่ต้องการเริ่มต้นอาชีพช่างซ่อมมือถือ',
      ],
      learningDay: 1,
      cost: 3900,
      lecturer: [lecturer2, lecturer3],
   },
   {
      imgSrc: '/images/showcase/1/3.png',
      level: 'hard',
      title: 'Hard H1',
      detail:
         'Lorem ipsum dolor sit amet consectetur. Pellentes que sit id aliquam urna ornare ut.',
      skill: ['แกะเครื่อง', 'เปลี่ยนแบต', 'เปลี่ยนจอ', 'เปลี่ยนพอร์ทชาร์จ'],
      suitableFor: ['ผู้ที่สนใจหารายได้เสริมจากการซ่อมมือถือ'],
      learningDay: 1,
      cost: 3900,
      lecturer: [lecturer1, lecturer2, lecturer3],
   },
];
