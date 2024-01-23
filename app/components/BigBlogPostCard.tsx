import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BlogAuthor from './BlogAuthor';
import { colorTag } from '@/const/postTagColor';
import type { PropsPost } from '@/types';

const BigBlogPostCard = ({ post }: PropsPost) => (
  <div className='flex h-[630px] w-full flex-col md:flex md:flex-row'>
    <div className='relative flex-1'>
      <Image
        priority
        className='size-full object-cover'
        src={post.imageSrc}
        alt={post.title}
        width={400}
        height={400}
      />
    </div>
    <div className='flex flex-1 flex-col justify-center border pl-[40px] text-black backdrop-blur-sm'>
      <Link
        className='max-w-[645px] whitespace-nowrap text-3xl font-bold text-blue-500 transition-all hover:text-black sm:text-5xl lg:border-2 lg:border-r-[16px] lg:border-blue-500 lg:p-4 lg:hover:border-r-[120px]'
        href={post.slug}
      >
        {post.title}
      </Link>
      <p className={`mt-6 text-sm font-bold uppercase ${colorTag[post.tag]}`}>{post.tag}</p>
      <BlogAuthor post={post} />
    </div>
  </div>
);

export default BigBlogPostCard;
