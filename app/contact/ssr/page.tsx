import React from 'react';
import SsrFetchExample from './components/ssrFetchExample';

type Props = {
  params: {
    slug: string;
  };
};
// SSR
const Page = async ({ params }: Props) => {
  return (
    <section className='my-8 flex flex-col items-center justify-center'>
      {' '}
      <h1 className='font-bold'>SSR</h1>
      <p>{params.slug}</p>
      <SsrFetchExample />
    </section>
  );
};

export default Page;
