import React from 'react'
import { DealItems } from '../../data'
const Deal = () => {
  return (
    <div className='flex flex-col items-center mt-4'>
      <div className='flex flex-col items-center gap-1 my-2'>
        <h1 className='text-xl font-semibold'>
         Deals Of The Day
        </h1>
        <div className='h-1 w-14 bg-red-600'></div>
      </div>
      <div className='grid place-items-center gap-y-4 gap-x-1 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 mx-2'>
       {
        DealItems.map((item) => (
          <DealItem key={item.id} value={item}/>
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

export default Deal



 const DealItem = ({value}) => {
  const { name , off , button} = value
  return (
    <div className='flex flex-col items-center text-center w-cardW h-dealH bg-white rounded-lg mb-4'>
     <img  src="https://i.imgur.com/DYkP3Ni.png" alt="amazon" width={'80px'} />
     <h1>{name}</h1>
     <p className='text-sm text-green-500'>{off}</p>
     <button className='bg-buttonBG text-white text-sm py-2 w-3/4 rounded-md my-1'>{button}</button>
    </div>
  )
}