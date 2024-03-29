import BlogCard from './BlogCard';
import type { Post } from '@/types';

type Props = {
  data: Post[];
  title: string;
  subtitle: string;
  className?: string;
};

export const SectionData = ({ data, title, subtitle, className }: Props) => {
  return (
    <section className='flex flex-col items-center justify-center px-8 sm:px-28'>
      <h1 className='my-12 text-2xl'>
        <strong className='text-blue-500'>{title} </strong>
        {subtitle}
      </h1>

      <div className={className}>
        {data.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
};

export default SectionData;
