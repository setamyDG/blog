import BlogCard from './BlogCard';
import type { Post } from '@/types';

type Props = {
  data: Post[];
  title: string;
  subtitle: string;
};

export const SectionData = ({ data, title, subtitle }: Props) => {
  return (
    <section className='flex flex-col items-center justify-center px-8 sm:px-28'>
      <h1 className='my-12 text-2xl'>
        <strong className='text-blue-500'>{title} </strong>
        {subtitle}
      </h1>

      <div className='grid grid-cols-1 gap-8 py-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3'>
        {data.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
};

export default SectionData;
