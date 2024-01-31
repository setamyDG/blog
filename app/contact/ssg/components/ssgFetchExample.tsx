/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const getTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();
  return todos;
};

const SsgFetchExample = async () => {
  const todo = await getTodos();

  return (
    <section className='flex flex-col items-center justify-center'>
      <h1>SSG Component</h1>
      <p>todo id: {todo[0].id}</p>
    </section>
  );
};

export default SsgFetchExample;
