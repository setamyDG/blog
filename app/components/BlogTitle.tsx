import { Chip } from '@nextui-org/react';

type Props = {
  title: string;
};

const BlogTitle = ({ title }: Props) => (
  <Chip variant='shadow' color='primary'>
    <h1 className='text-2xl font-bold'>{title}</h1>
  </Chip>
);

export default BlogTitle;
