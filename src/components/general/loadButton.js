import React from 'react';

export default function LoadButton({loadMore}) {
  return (
    <div className='w-full grid place-items-center my-10'>
        <button onClick={loadMore} className='bg-gray-900 text-white px-10 py-4 font-bold text-xl rounded active:bg-black'>Load More</button>
    </div>
  );
}
