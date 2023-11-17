import React from 'react'
import { img } from '../../data'
const PopularCategory = () => {
  return (
    <div id='store'  className='flex flex-col items-center mt-4'>
      <div className='flex flex-col items-center gap-1 my-2'>
        <h1 className='text-xl font-semibold'>
          Popular MemberShip
        </h1>
        <div className='h-1 w-14 bg-red-600'></div>
      </div>

      <div className='grid place-items-center  grid-cols-1 gap-3  md:grid-cols-2 my-4 mx-4 md:mx-2'>
        {
          img.map((index) => (
            <div key={index}>
              <img src={[index]} alt="img" />
            </div>
          ))
        }
      </div>
      <div className='flex  gap-2'>
        <div className='h-2 w-10 rounded-md bg-menuColor '></div>
        <div className='h-2 w-4 rounded-md bg-gray-400'></div>
        <div className='h-2 w-4 rounded-md bg-gray-400'></div>
      </div>
    </div>
  )
}

export default PopularCategory

