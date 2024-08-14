import React from 'react';
import { FaOpencart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import CartIcon from './CartIcon';
import Link from 'next/link';

const Navbar = () => {

  return (
    <div className='w-full h-[10vh] flex items-center bg-blue-600 px-5'>
      <Link href={'/'}>
        <div className='text-white text-2xl font-bold flex gap-2 items-center w-[22vw]'>
          <FaOpencart /> OFFMART
        </div>
      </Link>
      <div className='w-[56vw] flex items-center justify-center gap-[-2px]'>
        <button className='bg-white h-[30px] px-2 py-1 rounded-s-full border-r-2 border-white'><CiSearch /></button>
        <input className='h-[30px] w-2/3 rounded-e-full focus:border focus:outline-none px-2 text-sm' type="text" name='search' />
      </div>
      <div className='w-[33vw] flex justify-between items-center'>
        <Link href={'/ai-assistant'}><p className='text-white text-lg font-semibold'>ChatBot</p></Link>
        <Link href={'/onstore'}><p className='text-white text-lg font-semibold'>OnStore</p></Link>
        <p className='text-white text-lg font-semibold'>Contact</p>
        <p className='text-white text-lg font-semibold'>Profile</p>
        <CartIcon />
      </div>
    </div>
  );
}

export default Navbar;
