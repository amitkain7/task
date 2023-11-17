import React from 'react'

const NewsLatter = () => {
  return (
    <div className='flex justify-center mt-6 '>
      <div className='grid place-items-center grid-cols-1 md:grid-cols-2 gap-3 bg-white rounded-lg mx-2 '>
        <div className='m-2 rounded-none'>
          <img src="./src/assets/form-img.png" alt="newslatter" />
        </div>
        <div className='flex flex-col  gap-4 md:gap-0 pl-4 md:pl-0 justify-around items-start h-3/4 w-full'>
          <h1 className='text-2xl font-bold md:font-extrabold text-newslatterC'>Subscribe to our <br /> Newsletter!</h1>
          <p className='text-gray-400'> Be the first to get exclusive offers <br /> ands the latest news</p>
          <div className='w-3/4 border-2 rounded-md border-gray-400 p-2 mr-2'>

          <input className='w-full outline-none text-sm ' type="email" placeholder='Enter your email address' />
          </div>
          <button className='bg-buttonBG text-white text-sm py-2 px-6 rounded-lg mb-2'> SUBSCRIBE </button>
        </div>
      </div>
    </div>
  )
}

export default NewsLatter