import React from 'react'
import Navbar from '../components/Navbar'
import QRScanner from '../components/QRScanner'
import { Toaster } from 'react-hot-toast';
import QrCartContents from '../components/QrCartContents';

function page() {
  return (
    <main className='w-full h-full'>
      <Navbar />
      <div className='w-[100vw] h-[90vh] QR-container pt-[5vh] pb-[5vh] px-[2vw] flex gap-10'>
        <QRScanner />
        <QrCartContents />
      </div>
      <Toaster />
    </main>
  )
}

export default page


