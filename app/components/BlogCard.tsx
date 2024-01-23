import { Chip } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { colorTag } from '@/const/postTagColor';
import type { PropsPost } from '@/types';

const BlogCard = ({ post }: PropsPost) => (
  <div className='group relative flex flex-col rounded-2xl bg-white shadow-lg transition-all hover:scale-105'>
    <Chip variant='shadow' color='danger' size='sm' className='absolute right-2 top-2'>
      {post.estimatedReadTime} min
    </Chip>
    <Link href={post.slug}>
      <div className={`h-fit`}>
        <Image
          src={post.imageSrc}
          alt={post.title}
          className={`h-[325px] w-full rounded-2xl object-cover`}
          width={300}
          height={300}
          priority
        />
      </div>
      <div className='px-4 py-2'>
        <p className={`mt-2 text-xs font-bold uppercase ${colorTag[post.tag]}`}>{post.tag}</p>
        <p className='mt-1 cursor-pointer text-xs font-bold transition-colors group-hover:text-blue-500 sm:text-lg'>
          {post.title}
        </p>
        <div className='mt-2 flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Image
              quality={20}
              src={post.avatarSrc}
              alt={post.author}
              width={30}
              height={30}
              className='rounded-full'
              priority
            />
            <p className='text-xs font-bold'>{post.author}</p>
          </div>
          <p className='text-xs font-bold'>{post.date}</p>
        </div>
      </div>
    </Link>
  </div>
);

export default BlogCard;
