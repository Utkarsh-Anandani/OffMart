import React from 'react'
import Navbar from '../components/Navbar'
import QRScanner from '../components/QRScanner'

function page() {
  return (
    <main className='w-full h-[90vh]'>
        <Navbar/>
        <QRScanner/>
    </main>
  )
}

export default page


