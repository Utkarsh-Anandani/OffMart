import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import QRScanner from '../components/QRScanner'

function page() {
  return (
    <main>
        <Navbar/>
        <QRScanner/>
        <Card/>
    </main>
  )
}

export default page


