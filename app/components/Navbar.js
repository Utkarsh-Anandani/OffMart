import React from 'react';
import Link from 'next/link';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaOpencart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className='w-full h-[10vh] flex items-center bg-blue-600 px-5'>
      <div className='text-white text-2xl font-bold flex gap-2 items-center w-[22vw]'>
        <FaOpencart /> OFFMART
      </div>
      <div className='w-[56vw] flex items-center justify-center gap-[-2px]'>
        <button className='bg-white h-[30px] px-2 py-1 rounded-s-full border-r-2 border-white'><CiSearch /></button>
        <input className='h-[30px] w-2/3 rounded-e-full focus:border focus:outline-none px-2 text-sm' type="text" />
      </div>
      <div className='w-[33vw] flex justify-between items-center'>
        <p className='text-white text-lg font-semibold'>About</p>
        <p className='text-white text-lg font-semibold'>OnStore</p>
        <p className='text-white text-lg font-semibold'>Contact</p>
        <p className='text-white text-lg font-semibold'>Profile</p>
        <Link href="/cart">
          <div className='relative text-white text-2xl font-bold'>
            <MdOutlineShoppingCart />
            {cartCount > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                {cartCount}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
