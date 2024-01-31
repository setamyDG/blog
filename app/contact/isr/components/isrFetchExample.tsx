/* eslint-disable @typescript-eslint/no-explicit-any */
import { unstable_cache } from 'next/cache';
import React from 'react';

const getTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();
  return todos;
};

const revalidateUserPosts = unstable_cache(
  async () => {
    return await getTodos();
  },
  ['todos'],
  {
    // if user refresh the page after 3600 seconds, it will revalidate the data and show the latest data if it changes
    revalidate: 3600,
  },
);

const IsrFetchExample = async () => {
  const todo = await revalidateUserPosts();

  return (
    <section className='flex flex-col items-center justify-center'>
      <h1>ISR component</h1>
      <p>todo title: {todo[0].title}</p>
    </section>
  );
};

export default IsrFetchExample;
