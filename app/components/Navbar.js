import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='w-full h-[10vh] flex items-center bg-blue-600 px-5'>
      <div className='text-white text-2xl font-bold flex gap-4 items-center w-[33vw]'>
        <MdOutlineShoppingCart/> OFFMART
      </div>
      <div className='w-[34vw] '>
        <button className='bg-white'><CiSearch/></button>
        <input type="text" />
      </div>
      <div className='w-[33vw]'>
        Profile
      </div>
    </div>
  )
}

export default Navbar
