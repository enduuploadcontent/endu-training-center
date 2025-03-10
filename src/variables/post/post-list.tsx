export type PostContentType = {
   title: string;
   date: string;
   minuteRead: number;
   thumbnailSrc: string;
   imgSrc: string[];
   detail: JSX.Element;
};

export const postList: PostContentType[] = [
   {
      title: 'พิธีเปิดโรงเรียนสอนซ่อมมือถือเอ็นดู',
      date: '2024-12-01',
      minuteRead: 3,
      thumbnailSrc: '/images/showcase/1/2.png',
      imgSrc: [
         '/images/showcase/1/1.png',
         '/images/showcase/1/2.png',
         '/images/showcase/1/3.png',
      ],
      detail: (
         <>
            Lorem ipsum dolor sit amet consectetur. Auctor lectus imperdiet
            commodo pretium. Mattis in habitant odio malesuada dis tristique.
            Amet amet vel justo viverra sit eu leo ac. Tristique nec velit
            rutrum montes sit posuere ac. Est elementum non pellentesque a
            fringilla senectus quis ut gravida. Sed pellentesque lorem nisl
            scelerisque aliquet tellus volutpat arcu. Pretium aenean felis felis
            at dolor quis id turpis. Velit in risus id tellus sagittis
            facilisis. Convallis eget sagittis sit senectus eget congue.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur. Auctor lectus imperdiet
            commodo pretium. Mattis in habitant odio malesuada dis tristique.
            Amet amet vel justo viverra sit eu leo ac. Tristique nec velit
            rutrum montes sit posuere ac. Est elementum non pellentesque a
            fringilla senectus quis ut gravida. Sed pellentesque lorem nisl
            scelerisque aliquet tellus volutpat arcu. Pretium aenean felis felis
            at dolor quis id turpis. Velit in risus id tellus sagittis
            facilisis. Convallis eget sagittis sit senectus eget congue.
         </>
      ),
   },
];
