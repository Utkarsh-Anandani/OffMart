import React from 'react'
import Navbar from "../../components/Navbar"
import ShoppingList from '../../components/ShoppingList'

const page = () => {
  return (
    <main className='w-full min-h-screen'>
        <Navbar />
        <ShoppingList />
    </main>
  )
}

export default page
