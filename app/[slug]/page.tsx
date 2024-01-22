import Image from 'next/image';
import React from 'react';
import Page404 from '../components/404';
import BlogAuthor from '../components/BlogAuthor';
import BlogTitle from '../components/BlogTitle';
import { getPost } from '@/utils/posts';

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({ params }: Props) => {
  return {
    title: `Blog | ${params.slug}`,
    description: `Blog ${params.slug} description`,
  };
};

const BlogPage = async ({ params }: Props) => {
  const post = await getPost(params.slug);

  if (!post) return <Page404 />;

  return (
    <section className='flex flex-col items-center justify-center'>
      <div className='relative h-[600px] w-full text-center'>
        <Image
          src={post.imageSrc}
          alt={post.title}
          className='absolute inset-x-0 top-0 size-full object-cover'
          width={400}
          height={300}
          priority
        />
        <div className=' transform: absolute left-[50%] top-[20%] translate-x-[-50%] translate-y-[-50%] text-white'>
          <BlogTitle title={post.title} />
          <div className='flex justify-center'>
            <BlogAuthor post={post} />
          </div>
        </div>
      </div>
      <article className='prose my-4 bg-white px-8 shadow-xl'>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </article>
    </section>
  );
};

export default BlogPage;
