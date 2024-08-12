import React from 'react'
import Navbar from '../components/Navbar'
import { BsQrCodeScan } from "react-icons/bs";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import Link from 'next/link';

function page() {
  return (
    <main className='w-full h-full'>
      <Navbar />
      <div className='flex flex-col gap-10 px-7 py-10'>
        <div className='flex flex-col'>
          <h1 className='text-5xl text-black font-bold text-left'>Latest Features</h1>
          <p className='text-xl text-gray-500 font-semibold text-left'>OffMart is working on some great features to enhance offline shopping experience <br /> and making it hassle free.</p>
        </div>

        <Link href={'/onstore/scanner'}>
        <div className='w-[75vw] h-[20vh] flex items-center gap-14 px-12 bg-blue-100 rounded-3xl border-[3px] border-blue-700 border-spacing-5 text-blue-800 text-[4.5rem] shadow-lg hover:shadow-xl'>
          <BsQrCodeScan/>
          <div className='flex flex-col'>
          <p className='text-2xl text-blue-700 font-semibold'>Scan & Shop</p>
          <p className='text-lg text-black font-semibold'>Avoid getting into queues, scan to add products to your virtual cart, <br/>pay and get going...</p>
          </div>
        </div>
        </Link>

        <Link href={'/onstore/list'}>
        <div className='w-[75vw] h-[20vh] flex items-center gap-14 px-12 bg-blue-100 rounded-3xl border-[3px] border-blue-700 border-spacing-5 text-blue-800 text-[5rem] shadow-lg hover:shadow-xl'>
          <LiaMapMarkedAltSolid/>
          <div className='flex flex-col'>
          <p className='text-2xl text-blue-700 font-semibold'>Shopping List</p>
          <p className='text-lg text-black font-semibold'>Create, Edit and Check the shopping list exquisitely created for each offline shopping experience and get real time updates from it.</p>
          </div>
        </div>
        </Link>
      </div>
    </main>
  )
}

export default page


