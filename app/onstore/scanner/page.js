import React from 'react'
import Navbar from '@/app/components/Navbar';
import QRScanner from '@/app/components/QRScanner'
import { Toaster } from 'react-hot-toast';
import QrCartContents from '@/app/components/QrCartContents';

const page = () => {
  return (
    <main className='w-full h-full'>
      <Navbar />
      <div className='w-[100vw] h-[90vh] QR-container pt-[5vh] pb-[5vh] px-[2vw] flex gap-5'>
        <QRScanner />
        <QrCartContents />
      </div>
      <Toaster />
    </main>
  )
}

export default page
