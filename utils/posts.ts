import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHTML from 'remark-html';
import { Post } from '@/types';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      ...matterResult.data,
    } as Post;
  });

  const sorted = allPostsData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return sorted.reverse();
}

export async function getPost(slug: string): Promise<Post | null> {
  const markdownPath = path.join(postsDirectory, `${slug}.mdx`);

  try {
    const fileContentsPromise = fs.readFileSync(markdownPath, 'utf8');
    const allPostsDataPromise = getSortedPostsData();
    const [fileContents, allPostsData] = await Promise.all([fileContentsPromise, allPostsDataPromise]);
    const { data, content } = matter(fileContents);
    const htmlContent = await remark().use(remarkHTML).process(content);
    const post = allPostsData.find((post) => post.slug === slug);

    return {
      ...post,
      frontmatter: data,
      content: htmlContent.toString(),
    } as Post;
  } catch (error) {
    console.error(`Error retrieving post with slug "${slug}":`, error);
    return null;
  }
}
