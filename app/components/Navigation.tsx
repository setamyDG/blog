'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = {
  home: '/',
  contact: '/contact',
  ssg: '/contact/ssg',
  ssr: '/contact/ssr',
  isr: '/contact/isr',
  streaming: '/contact/streaming',
};

export default function Navigation() {
  const pathname = usePathname();

  const getLinkClassName = (route: string) => {
    if (route === pathname) {
      return 'text-blue-500';
    }
    return 'text-gray-400 hover:text-black transition-colors';
  };

  return (
    <header>
      <nav className='flex w-full items-center justify-center gap-8 bg-white py-6'>
        <Link href={routes.home} className={getLinkClassName(routes.home)}>
          Home
        </Link>
        <div className='flex items-center gap-2'>
          <div className='h-[1px] w-[20px] bg-black' />
          <h1 className='font-bold'>setamyDG</h1>
          <div className='h-[1px] w-[20px] bg-black' />
        </div>
        <Link href={routes.contact} className={getLinkClassName(routes.contact)}>
          Contact
        </Link>
        <Link href={routes.ssg} className={getLinkClassName(routes.ssg)}>
          SSG
        </Link>
        <Link href={routes.ssr} className={getLinkClassName(routes.ssr)}>
          SSR
        </Link>
        <Link href={routes.isr} className={getLinkClassName(routes.isr)}>
          ISR
        </Link>
        <Link href={routes.streaming} className={getLinkClassName(routes.streaming)}>
          Streaming
        </Link>
      </nav>
    </header>
  );
}
