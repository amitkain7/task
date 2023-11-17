import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Navbar = () => {
  const [show, setShow] = useState(false)
  const blur = {
    'backdrop-filter': 'blur(30px)'
  }
  return (
    <div className='flex flex-col py-5  sticky top-0 z-10  ' style={blur}>
      <div className='flex gap-3 mx-2  md:justify-around  items-center'>
        <div>
          <img src="./src/assets/logo.png" alt="logo" />
        </div>
        <div className='flex gap-1  md:gap-4  items-center bg-searchBG  rounded-lg p-2 w-1/2  md:w-searchW   '>
          <CiSearch />
          <input className='outline-none bg-transparent w-full text-xs  md:text-sm ' type="text" placeholder='Search For brand, category...' />
        </div>
        <div className='hidden md:block'>
          <button className='bg-buttonBG text-white py-2 px-4 rounded-lg text-sm '>
            LOGIN/SIGN UP
          </button>
        </div>
        <div className='block ml-6 md:hidden relative '>
          <RxHamburgerMenu onClick={() => setShow(!show)} />
          {show && <HamMenu />}
        </div>
      </div>
      <div className='bg-menuColor hidden md:block py-2 mt-2 '>
        <ul className='list-none flex justify-center gap-6  text-white '>
          <li className='cursor-pointer hover:text-red-600 '> <AnchorLink href='#home' >Home</AnchorLink> </li>
          <li className='cursor-pointer hover:text-red-600 '> <AnchorLink href='#deals' >Deals</AnchorLink></li>
          <li className='cursor-pointer hover:text-red-600'> <AnchorLink href='#coupon' >Coupon</AnchorLink> </li>
          <li className='cursor-pointer hover:text-red-600'> <AnchorLink href='#store' >Store</AnchorLink></li>
          <li className='cursor-pointer hover:text-red-600'> <AnchorLink href='#footer' >Contact us</AnchorLink></li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar


const HamMenu = () => {
  return (
    <ul className='absolute list-none right-1 top-6 bg-menuColor text-white rounded-md flex flex-col  items-center gap-1 mt-2 py-2 z-20 px-4   '>
      <li className='text-red-500 hover:text-red-600'><AnchorLink href='#home' >Home</AnchorLink></li>
      <li className=' hover:text-red-600'><AnchorLink href='#deals' >Deals</AnchorLink></li>
      <li className=' hover:text-red-600'><AnchorLink href='#coupon' >Coupon</AnchorLink> </li>
      <li className=' hover:text-red-600'><AnchorLink href='#store' >Store</AnchorLink></li>
      <li className=' hover:text-red-600'><AnchorLink href='#footer' >Contact us</AnchorLink></li>
      <li className=' hover:text-red-600' >Login/SignUp</li>
    </ul>
  )
}