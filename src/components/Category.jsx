import React from 'react'
import { categoryItems } from '../../data'
import { DealItems } from '../../data'

const Category = () => {
  return (
    <div id='coupon' className='flex flex-col items-center mt-4 overflow-auto'>
      <div className='flex flex-col items-center gap-1 my-2'>
        <h1 className='text-xl font-semibold'>
          Coupon By Categories
        </h1>
        <div className='h-1 w-14 bg-red-600'></div>
      </div>
      <div className='flex gap-1  '>
        {
          categoryItems.map((item) => (
            <CategoryItem key={item.id} value={item} />
          ))
        }

      </div>
      <div className='flex  '>
       {DealItems.map((item) => (
        <DealItem key={item.id} value={item}/>
       ))}
      </div>

    </div>
  )
}

export default Category


const CategoryItem = ({ value }) => {
  const { name, src } = value
  return (
    <div className='flex flex-col bg-white items-center justify-center py-2 px-4 rounded-t-md  w-24 mt-4 cursor-pointer border-b-4 border-borderC hover:border-b-4 hover:border-red-600 '>
      <img src={src} alt={name} width={30} />
      <h3 className='text-sm mt-2'>{name}</h3>
    </div>
  )
}

const DealItem = ({value}) => {
  const { name , off , button} = value
  return (
    <div className='flex flex-col items-center text-center w-cardW2 h-dealH bg-white  mb-4'>
     <img  src="https://i.imgur.com/DYkP3Ni.png" alt="amazon" width={'80px'} />
     <h1>{name}</h1>
     <p className='text-sm text-green-500'>{off}</p>
     <button className='bg-buttonBG text-white text-sm py-2 w-3/4 rounded-md my-1'>{button}</button>
    </div>
  )
}