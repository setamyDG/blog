import { Metadata } from 'next';
import BigBlogPostCard from './components/BigBlogPostCard';
import SectionData from './components/SectionData';
import { getSortedPostsData } from '@/utils/posts';

export const metadata: Metadata = {
  title: 'setamyDG - Blog - Home',
  description: 'List of all posts from setamyDG Blog.',
};

export default function Home() {
  const posts = getSortedPostsData();
  const newestPost = posts[0];
  const lastThreePosts = posts.slice(1, 4);
  const restPosts = posts.slice(4);

  return (
    <section className='flex w-full flex-col'>
      <BigBlogPostCard post={newestPost} />
      <SectionData data={lastThreePosts} title='Featured' subtitle='Posts' />
      <SectionData data={restPosts} title='My' subtitle='Latest' />
    </section>
  );
}
