import React from 'react'
import Navbar from '@/app/components/Navbar'
import ShoppingList from '@/app/components/ShoppingList'

const page = () => {
  return (
    <main className='w-full min-h-screen'>
        <Navbar />
        <ShoppingList />
    </main>
  )
}

export default page
