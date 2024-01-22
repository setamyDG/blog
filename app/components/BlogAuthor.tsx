import { Chip } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import MiniCircleSeparator from './MiniCircleSeparator';
import type { PropsPost } from '@/types';

const BlogAuthor = ({ post }: PropsPost) => (
  <div className='mt-4 flex items-center'>
    <Image
      priority
      quality={10}
      src={post.avatarSrc}
      alt={post.author}
      width={30}
      height={30}
      className='mr-2 rounded-full'
    />
    <Chip variant='shadow' color='success' size='sm'>
      <p className='text-white'>{post.author}</p>
    </Chip>
    <MiniCircleSeparator />
    <Chip variant='shadow' color='warning' size='sm'>
      <p className='text-white'>{post.date}</p>
    </Chip>
    <MiniCircleSeparator />
    <Chip variant='shadow' color='danger' size='sm'>
      <p className='text-white'>{post.estimatedReadTime} min</p>
    </Chip>
  </div>
);

export default BlogAuthor;
