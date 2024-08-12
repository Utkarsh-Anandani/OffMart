import React from 'react'
import Navbar from '@/app/components/Navbar'
import Map from '@/app/components/Map'

const page = () => {
  return (
    <main className='w-full min-h-screen'>
        <Navbar/>
        <Map/>
    </main>
  )
}

export default page
