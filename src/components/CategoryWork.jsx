import React from 'react'
import { categoryWork } from '../../data'
const CategoryWork = () => {
  return (
    <div className='flex flex-col items-center mt-4'>
      <div className='flex flex-col items-center gap-1 my-2'>
        <h1 className='text-xl font-semibold'>
          How It Works?
        </h1>
        <div className='h-1 w-14 bg-red-600'></div>
      </div>
      <div className='grid place-items-center grid-cols-1 md:grid-cols-3 gap-4 my-4 w-3/5'>
        {
          categoryWork.map((item) => (
            <div className='flex flex-col items-center  gap-2 text-center bg-white w-cardW1 h-dealH1 rounded-md  ' key={item.id}>
              <div className='bg-red-200 w-16 h-16 flex justify-center items-center rounded-lg my-2'>
                <img src={item.src} alt={item.title} />
              </div>
              <h1 className='font-bold'>{item.title}</h1>
              <p className='text-gray-800 text-sm font-semibold'>{item.info}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CategoryWork