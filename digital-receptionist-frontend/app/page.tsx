import Link from 'next/link';

type Element = {
  displayName: string;
  redirectPath: string;
  mainImage: string;
};

const ELEMENTS: Element[] = [
  {
    displayName: 'Restaurant',
    redirectPath: '/restaurant',
    mainImage:
      'https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/64675-183518-0QZn48YZX4uCgz4x4pGf9NOESMSGhyjPjr9Icre-BHI-64f611414dfce'
  },
  {
    displayName: 'Amenities',
    redirectPath: '/amenities',
    mainImage:
      'https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/64675-183518-IQUdZHGo4TzDkCzAVUoqqKf1mf6b1a-vg3Ov7AqjE--c-64f610ea03819'
  },
  {
    displayName: 'Services',
    redirectPath: '/services',
    mainImage:
      'https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/64675-183518---LoC6woOu5Xzo6Y5N88PkOmbbtJBgUpd3-IHjTTcbcA-64f610f07febf'
  },
  {
    displayName: 'Mobility',
    redirectPath: '/mobility',
    mainImage:
      'https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/64675-183518-tGHnci7RzM2gfTsdvkak2HcDVkCA3Fw1F-XNfrNs8Lk-64f610fd263ee'
  },
  {
    displayName: 'General Information',
    redirectPath: '/info',
    mainImage:
      'https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/64675-183518-f3O9VEve3jgZ5tpSYHb1T7KtlpSB74YrM5RuYbPihGM-64f611068021f'
  },
  {
    displayName: 'Tirana Concierge',
    redirectPath: '/concierge',
    mainImage:
      'https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/64675-183518-OF--PhMz--SSQtAp2gFON--u7NvX7mCKxLsXFPuH1LaaBk-64f6110f2d13a'
  }
];

export default function App() {
  return (
    <div
      className={`h-screen grid grid-cols-2 grid-rows-${Math.ceil(
        ELEMENTS.length / 2
      )} row-span-full`}>
      {ELEMENTS.map((el: Element, i: number) => (
        <Link
          href={el.redirectPath}
          style={{ backgroundImage: `url(${el.mainImage})` }}
          className={
            'grid items-center justify-center w-full align-middle text-white font-bold text-2xl tracking-wider'
          }
          key={i}>
          <p className="text-center">{el.displayName}</p>
        </Link>
      ))}
    </div>
  );
}
