"use client"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, decrement, remove } from '../redux/cartSlice';

const CartContents = () => {
  const content = useSelector((store) => store.cart.items);
  const [hasMounted, setHasMounted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleIncrement = (item) => {
    dispatch(add(item));
  }

  const handleDecrement = (_id) => {
    dispatch(decrement(_id));
  }

  const handleRemove = (_id) => {
    dispatch(remove(_id));
  }

  if (!hasMounted) {
    return null; // Prevent rendering on the server
  }

  const totalSum = content.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  const discountPercent = content.reduce((sum, item) => sum + item.eco, 0);
  const avgDiscountPercent = (discountPercent / content.length).toFixed(2);
  const totalAmount = (totalSum - ((avgDiscountPercent / 100) * totalSum)).toFixed(2);

  return (
    <div>
      {content.length > 0 ? (
        <div className="px-[5vw] py-[5vh] w-full h-auto min-h-[90vh] bg-gray-100 flex justify-between">
          <div className='w-[68vw]'>
            <h2 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h2>
            {content.map(item => (
              <div key={item.id} className="w-full h-auto bg-white border border-gray-300 hover:bg-slate-100 hover:shadow-lg shadow-md mb-5 flex items-center justify-between px-5 py-4 rounded-lg">
                <img className="h-20 w-20 object-cover hover:scale-110 rounded-lg" src={item.thumbnail} alt={item.title} />
                <div className="flex-1 px-4">
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p className="text-gray-500">${item.price}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button onClick={() => handleDecrement(item._id)} className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md">-</button>
                    <span className="px-3 py-1 border rounded-md">{item.quantity}</span>
                    <button onClick={() => handleIncrement(item)} className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md">+</button>
                  </div>
                  <button onClick={() => handleRemove(item._id)} className="bg-red-600 px-3 py-2 hover:scale-105 transition-transform rounded-lg text-white font-semibold">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='flex flex-col gap-3'>
            <div className='w-[20vw] h-fit bg-white border border-gray-300 shadow-md mb-5 mt-[10vh] flex flex-col items-center px-5 py-4 rounded-lg'>
              <div className='font-semibold text-xl text-center text-black mb-7'>CHECKOUT</div>
              <div className='w-full flex justify-between text-sm'><p className='font-bold text-sm'>Toatal Cart Value</p> ${totalSum}</div>
              <div className='w-full flex justify-between text-sm'><p className='font-bold text-sm'>Average Eco Score</p> {avgDiscountPercent}</div>
              <div className='w-full flex justify-between mb-3 text-sm text-green-600 font-bold'><p className='font-bold text-sm text-black'>Eco Score Discount</p> - {avgDiscountPercent}%</div>
              <div className='h-[1px] w-full bg-slate-300 mb-3'></div>
              <div className='w-full flex justify-between text-sm'><p className='font-semibold text-sm'>Total Amount</p> ${totalAmount}</div>
            </div>
            <button className='w-full mx-[2px] bg-green-400 text-white text-base font-semibold rounded-lg px-3 py-2'>Proceed to Pay</button>
          </div>
        </div>
      ) : (
        <div className="mt-24 text-center font-bold text-2xl">Your cart is empty. Add products to cart.</div>
      )}
    </div>
  );
}

export default CartContents;
