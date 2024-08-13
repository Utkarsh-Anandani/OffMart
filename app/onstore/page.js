import React from 'react'
import Navbar from '../components/Navbar'
import { BsQrCodeScan } from "react-icons/bs";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import Link from 'next/link';

function Page() {
  return (
    <main className="w-full min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col gap-10 px-7 py-10 lg:px-20 lg:py-16">
        <div className="flex flex-col">
          <h1 className="text-5xl text-black font-bold text-left lg:text-6xl">
            Latest Features
          </h1>
          <p className="text-xl text-gray-500 font-medium text-left mt-4 lg:text-2xl">
            OffMart is working on some great features to enhance the offline
            shopping experience <br /> and make it hassle-free.
          </p>
        </div>

        <Link href="/onstore/scanner">
          <div className="w-full lg:w-[70vw] h-[20vh] flex items-center gap-10 px-10 bg-blue-100 rounded-3xl border-3 border-blue-700 text-blue-800 text-[3.5rem] shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <BsQrCodeScan className="text-6xl lg:text-7xl" />
            <div className="flex flex-col">
              <p className="text-2xl text-blue-700 font-semibold">
                Scan & Shop
              </p>
              <p className="text-lg text-black font-normal mt-2">
                Avoid getting into queues, scan to add products to your virtual
                cart, <br /> pay, and get going...
              </p>
            </div>
          </div>
        </Link>

        <Link href="/onstore/list">
          <div className="w-full lg:w-[70vw] h-[20vh] flex items-center gap-10 px-10 bg-blue-100 rounded-3xl border-3 border-blue-700 text-blue-800 text-[3.5rem] shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <LiaMapMarkedAltSolid className="text-6xl lg:text-7xl" />
            <div className="flex flex-col">
              <p className="text-2xl text-blue-700 font-semibold">
                Shopping List
              </p>
              <p className="text-lg text-black font-normal mt-2">
                Create, edit, and check the shopping list exquisitely created
                for each offline shopping experience and get real-time updates
                from it.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default Page;
