"use client";
import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';
import { toast } from 'react-hot-toast';

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
    toast.success('Added to cart');
  }

  return (
    <div className="relative max-w-sm h-[70vh] rounded hover:shadow-2xl overflow-hidden shadow-lg m-4">
      <img className="w-full hover:scale-105 h-52" src={product.thumbnail} alt={product.title} />
      <div className="pl-4 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">Brand: {product.brand}</p>
        <p className="text-gray-700 text-base">Price: ${product.price}</p>
        <p className="text-gray-700 text-base">Discount: {product.discountPercentage}%</p>
        <p className="text-gray-700 text-base">Rate: {product.rating}/5</p>
        <div className='absolute bottom-10'>
          <button onClick={() => handleAdd(product)} className='bg-blue-500 hover:scale-105 hover:shadow-sm text-white font-semibold w-28 py-2 rounded-md'>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
