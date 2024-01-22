'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = {
  home: '/',
  contact: '/contact',
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
      </nav>
    </header>
  );
}
