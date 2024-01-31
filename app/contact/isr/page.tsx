import React from 'react';
import IsrFetchExample from './components/isrFetchExample';

type Props = {
  params: {
    slug: string;
  };
};
// ISR
const Page = async ({ params }: Props) => {
  return (
    <section className='my-8 flex flex-col items-center justify-center'>
      {' '}
      <h1 className='font-bold'>ISR</h1>
      <p>{params.slug}</p>
      <IsrFetchExample />
    </section>
  );
};

export default Page;
