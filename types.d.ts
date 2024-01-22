export type Post = {
  title: string;
  date: string;
  slug: string;
  author: string;
  estimatedReadTime: string;
  avatarSrc: string;
  imageSrc: string;
  tag: string;
  content: string;
};

type PropsPost = {
  post: Post;
};
