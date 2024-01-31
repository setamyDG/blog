/* eslint-disable @typescript-eslint/no-explicit-any */
import { unstable_noStore } from 'next/cache';
import React from 'react';

const getTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();
  return todos;
};

const SsrFetchExample = async () => {
  unstable_noStore();
  const todo = await getTodos();

  return (
    <section className='flex flex-col items-center justify-center'>
      <h1>SSR Component</h1>
      {todo.length > 0 && <p>todo id: {todo[0].id}</p>}
    </section>
  );
};

export default SsrFetchExample;
