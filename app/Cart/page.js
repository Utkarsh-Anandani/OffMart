"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../redux/cartSlice';

function CartPage() {
  const content = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleRemove = (_id) => {
    dispatch(remove(_id));
  }

  return (
    <>
      <Navbar />
      {content.length > 0 ? (
        <div className="px-[10vw] py-[10vh] w-full h-auto bg-gray-100">
          <h2 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h2>
          {content.map(item => (
            <div key={item._id} className="w-full h-auto bg-white border border-gray-300 hover:bg-slate-100 hover:shadow-lg shadow-md mb-5 flex items-center justify-between px-5 py-4 rounded-lg">
              <img className="h-20 w-20 object-cover hover:scale-110 rounded-lg" src={item.thumbnail} alt={item.title} />
              <div className="flex-1 px-4">
                <p className="font-semibold text-lg">{item.title}</p>
                <p className="text-gray-500">${item.price}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md">-</button>
                  <span className="px-3 py-1 border rounded-md">1</span>
                  <button className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md">+</button>
                </div>
                <button onClick={() => handleRemove(item._id)} className="bg-red-600 px-3 py-2 hover:scale-105 transition-transform rounded-lg text-white font-semibold">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-24 text-center font-bold text-2xl">Your cart is empty. Add products to cart.</div>
      )}
    </>
  )
}

export default CartPage;
