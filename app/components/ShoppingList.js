import React from 'react'

const ShoppingList = () => {
  return (
    <div className='w-full min-h-[90vh] flex flex-col items-center'>
        <h1 className='text-3xl font-semibold text-black text-center my-5'>Shopping List</h1>
      <form>
        <input className='border border-black px-2 py-1 text-black rounded-xl' placeholder='Item Name' type="text" name="" id="" />
        <input className='border border-black px-2 py-1 text-black rounded-xl' placeholder='Quantity' type="text" name="" id="" />
        <button type="submit">Add Item</button>
      </form>
      <div></div>
    </div>
  )
}

export default ShoppingList
