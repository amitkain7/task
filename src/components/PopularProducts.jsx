import React from 'react'
import { card } from '../../data'
import { GiTrophyCup } from "react-icons/gi";
import { MdOutlineTimer } from "react-icons/md";
import { FaGripfire } from "react-icons/fa";



const PopularProducts = () => {
  return (
    <div id='deals' className=' mt-4 flex flex-col items-center  gap-4  '>
      <div className='mx-2 md:mx-0 md:text-base py-2 flex justify-between gap-2 md:gap-10 '>
        <div className='flex gap-1 items-center bg-white py-2 px-2 rounded-md cursor-pointer text-xs md:text-base '>
          <GiTrophyCup />
          <span className='hover:text-red-600'>Popular Coupons</span>
        </div>
        <div className=' flex gap-1 items-center  bg-white py-1 px-2 rounded-md cursor-pointer text-xs md:text-base'>
          <MdOutlineTimer />
          <span className='hover:text-red-600 '>Ending Soon</span>

        </div>
        <div className=' flex gap-1 items-center   bg-white py-1 px-2 rounded-md cursor-pointer text-xs md:text-base'>
          <FaGripfire />
          <span className='hover:text-red-600 '>Latest Coupons</span>

        </div>
      </div>
      <div className='grid place-items-center gap-y-4 gap-x-1 md:gap-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 mx-2'>
        {
          card.map((item) => (
            <Card key={item.id} value={item} />
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

export default PopularProducts


const Card = ({ value }) => {
  const { offer, summeroffer, button } = value
  return (
    <div className=' box-border flex flex-col items-center text-center py-1 w-cardW h-cardH bg-white rounded-lg  '>
        <h1 className='mt-1 text-green-500'>{offer}</h1>  
        <img   src="./public/ama.png" alt="amalogo" width={'100px'} />
        <p className='text-sm mb-2 text-gray-400'>{summeroffer}</p>
        <button className='bg-buttonBG text-white text-sm rounded-md w-3/4 py-2 '>{button}</button>
    </div>
  )
}
