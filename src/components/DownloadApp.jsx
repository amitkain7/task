import React from 'react'

const DownloadApp = () => {
  return (
    <div className='flex justify-center '>
      <div className='grid place-items-center  grid-cols-1 md:grid-cols-2 rounded-md gap-4 md:gap-10  bg-red-200 '>
        <div className='flex flex-col justify-center gap-2  py-2  '>
          <h1 className='text-red-600 font-bold text-2xl md:text-3xl '>Want to be a <br /> part of our team</h1>
          <p className='text-gray-800 font-semibold '>Be a part of best site of discount <br />coupons</p>
          <div className='flex gap-4'>
          <div className='flex bg-white p-1  gap-1 rounded-md cursor-pointer '>
            <img src="./public/assets/image 64.png" alt="appstore" className='w-6 h-6'/>
            <div className='flex flex-col '>
              <p className='text-xs font-light text-gray-700'>Download From</p>
              <p className='text-xs'>APP STORE</p>
            </div>

          </div>
            <div className='flex bg-white p-1 gap-1 rounded-md cursor-pointer '>
            <img src="./public/assets/image 64 (1).png" alt="palystore" className='w-6 h-6' />
            <div className='flex flex-col '>
              <p className='text-xs font-light text-gray-700'>Download From</p>
              <p className='text-xs'>PLAY STORE</p>
            </div>
          </div>

          </div>
        </div>
        <div className=' flex pt-6'>
          <img src="./public/assets/Phone.png" alt="phone" width={'160px'} />
          <img src="./public/assets/Phone (1).png" alt="phone" width={'200px'} />
        </div>
      </div>
    </div>
  )
}

export default DownloadApp