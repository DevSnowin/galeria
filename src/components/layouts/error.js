import React from 'react';

export default function Error() {
  return(
    <div className='w-2/5 mx-auto flex justify-center items-center flex-col py-20'>
        <iframe src="https://giphy.com/embed/3o6Zt6ML6BklcajjsA" className='absolute w-full h-full' frameBorder="0" className="giphy-embed" allowFullScreen>
        </iframe>
      <h1 className='text-2xl font-bold text-center'>Oops! Something went wrong</h1>
      <p className='py-3 w-64 text-center'>Too many requests!! Please try again after some time.</p>
  </div>);
}
