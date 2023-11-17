import React from 'react';

const Popular = () => {
  return (
   <div className='flex justify-center mt-4 mx-2'>
    <div className='grid   grid-cols-1 md:grid-cols-2 gap-y-4 w-3/4 md:w-1/2'>
      <div className='flex w-full'>
        <img className='rounded-s-md w-full lg:w-1/2' src="./public/assets/imageSum.png" alt="image" />
      </div>
      <div className='col-span-1'>
         <h1 className='text-xl md:text-2xl font-bond'>Popular Categories</h1>
         <div className='w-20 h-1 bg-red-600 my-2'></div>
         <img className='w-full' src="./public/assets/all names.png"  alt="image" />
      </div>
    </div>
   </div>
  );
}

export default Popular;
