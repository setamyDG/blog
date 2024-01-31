import React from 'react';
import SsgFetchExample from './components/ssgFetchExample';

type Props = {
  params: {
    slug: string;
  };
};
// SSG
const Page = async ({ params }: Props) => {
  return (
    <section className='my-8 flex flex-col items-center justify-center'>
      {' '}
      <h1 className='font-bold'>SSG</h1>
      <p>{params.slug}</p>
      <SsgFetchExample />
    </section>
  );
};

export default Page;
