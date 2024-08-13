"use client"; // Mark this as a client component

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, editItem, removeItem } from '../redux/shoppingListSlice'; // Import the actions

const ShoppingList = () => {
  const items = useSelector((state) => state.shoppingList.items);
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (itemName.trim() === '' || quantity.trim() === '') return;

    const newItem = { itemName, quantity };

    if (isEditing) {
      dispatch(editItem({ index: currentIndex, item: newItem }));
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      dispatch(addItem(newItem));
    }

    setItemName('');
    setQuantity('');
  };

  const handleEditItem = (index) => {
    setItemName(items[index].itemName);
    setQuantity(items[index].quantity);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div className="w-full min-h-[90vh] flex flex-col items-center bg-gray-50 py-10">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">Shopping List</h1>
      
      <form className="flex gap-4 mb-8" onSubmit={handleAddItem}>
        <input
          className="border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Item Name"
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          className="border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Quantity"
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition-all"
        >
          {isEditing ? 'Update Item' : 'Add Item'}
        </button>
      </form>

      <div className="w-full max-w-2xl flex flex-col items-center">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="w-full flex justify-between items-center bg-white p-4 mb-2 rounded-lg shadow-sm">
              <div>
                <p className="text-lg font-medium text-gray-800">{item.itemName}</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => handleEditItem(index)}
                  className="text-blue-600 hover:text-blue-800 transition-all"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="text-red-600 hover:text-red-800 transition-all"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No items in the list.</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
