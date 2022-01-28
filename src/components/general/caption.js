import React from 'react';

export default function Caption() {
  return (
    <div className='my-20 mx-2 md:my-20 grid place-items-center text-center'>
      <h1 className='font-sans text-3xl md:text-6xl font-bold md:py-8'>The Best stunting images from unplash API</h1>
      <div className="max-w-2/5 mt-4">
        <p className='text-lg md:text-xl'>History is a gallery of pictures in which there are few originals and many copies.</p>
      </div>
    </div>
  );
}
