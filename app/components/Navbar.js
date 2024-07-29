import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='w-full h-[10vh] flex items-center bg-blue-600 px-5'>
      <div className='text-white text-2xl font-bold flex gap-4 items-center w-[22vw]'>
        <MdOutlineShoppingCart/> OFFMART
      </div>
      <div className='w-[56vw] flex items-center justify-center'>
        <button className='bg-white h-[30px] px-2 py-1 rounded-s-full'><CiSearch/></button>
        <input className='h-[30px] w-2/3 rounded-e-full focus:border focus:border-black foc' type="text" />
      </div>
      <div className='w-[33vw]'>
        profile
      </div>
    </div>
  )
}

export default Navbar
