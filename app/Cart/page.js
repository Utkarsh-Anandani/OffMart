"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../redux/cartSlice';

function page() {
  const content = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleRemove = (_id) => {
    dispatch(remove(_id));
  }

  return (
    <>
      <Navbar />
      {content ?
        <div className='px-[10vw] py-[10vh] w-full h-auto'>
          {
            content.map(item => (
              <div key={item._id} className='w-full h-[10vh] border mb-5 flex items-center justify-between px-5'>
                <img className='h-full' src={item.thumbnail} alt="img" />
                <p>{item.title}</p>
                <p>{item.price}</p>
                <p>+ 1 -</p>
                <button onClick={() => handleRemove(item._id)} className='bg-red-600 px-3 py-2 rounded-lg text-white font-semibold text-base'>
                  Remove Item
                </button>
              </div>
            ))
          }
        </div>
        :
        <div className='mt-24 text-center font-bold text-xl'>Add products to cart</div>
      }
    </>
  )
}

export default page