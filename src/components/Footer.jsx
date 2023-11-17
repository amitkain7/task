import React from 'react'

const Footer = () => {
  return (
    <div id='footer' className=' flex justify-center w-full bg-menuColor mt-4 '>
      <div className='w-3/4 flex justify-around p-4 flex-wrap gap-4'>
        <div className='flex flex-col gap-3 justify-center items-start'>
          <img src="./public/assets/foo.png" alt="logo"  />
          <p className='text-sm text-white'>Lorem Ipsum is simply dummy of <br /> the printing and type setting.</p>
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
        <div className='flex flex-col gap-2'>
          <h1 className='text-lg text-red-600 '>Company</h1>
          <ul className='text-sm text-white cursor-pointer list-disc '>
            <li className='my-1'>About Us</li>
            <li className='my-1'>Privacy Policy</li>
            <li className='my-1'>Terms</li>
            <li className='my-1'>Blogs</li>
            <li className='my-1'>Branding</li>
            <li className='my-1'>Career</li>

          </ul>

        </div>
        <div className='flex flex-col gap-2'>
         <h1 className='text-lg text-red-600 '>General</h1>
         <ul className='text-sm text-white cursor-pointer list-disc '>
          <li  className='my-1' >Patner With Us</li>
          <li  className='my-1'>Write to us</li>
          <li  className='my-1'>Mobile App</li>
          <li  className='my-1'>Site Map</li>
         </ul>
        </div>
        <div className='flex flex-col gap-2' >
          <h1  className='text-lg text-red-600 ' >Pages</h1>
          <ul className='text-sm text-white cursor-pointer list-disc '>
          <li className='my-1' >Amazon Offer</li>
          <li  className='my-1' >Google Pay Offers</li>
          <li className='my-1' >PayPal Offers</li>
          <li  className='my-1' >PhonePe Offers</li>
          <li  className='my-1' >Festival Offers</li>
          <li  className='my-1' >Bank Offers</li>
          </ul>
        </div>
        <div className='flex flex-col gap-2' >
          <h1 className='text-lg text-red-600 ' >More</h1>
          <ul className='text-sm text-white cursor-pointer  list-disc'>
            <li className='my-1'  >City Offers</li>
            <li className='my-1' >Brand Offers</li>
            <li className='my-1' >Product Deals</li>
            <li className='my-1' >Gift Cards</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer