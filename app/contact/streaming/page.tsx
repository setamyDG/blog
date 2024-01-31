import React, { Suspense } from 'react';
import StreamingFetchExample from './components/streamingFetchExample';

type Props = {
  params: {
    slug: string;
  };
};
// Streaming
const Page = async ({ params }: Props) => {
  return (
    <section className='my-8 flex flex-col items-center justify-center'>
      <h1 className='font-bold'>Streaming Component</h1>
      <p>{params.slug}</p>
      <Suspense fallback={<div>loading...</div>}>
        <StreamingFetchExample />
      </Suspense>
    </section>
  );
};

export default Page;
