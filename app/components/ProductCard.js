import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm h-[70vh] rounded hover:shadow-2xl  overflow-hidden shadow-lg m-4">
      <img className="w-full hover:scale-105 h-52" src={product.thumbnail} alt={product.title} />
      <div className=" pl-4 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">Brand: {product.brand}</p>
        <p className="text-gray-700 text-base">Price: ${product.price}</p>
        <p className="text-gray-700 text-base">Discount: {product.discountPercentage}%</p>
        <p className="text-gray-700 text-base">Rate: {product.rating}/5</p>
        <div className='mt-4'>
          <button className='bg-blue-500 text-white font-semibold w-28 py-2 rounded-md'>Add to cart</button>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;
