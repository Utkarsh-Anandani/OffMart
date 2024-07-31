import Link from 'next/link';
import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className="w-full h-[25vh] bg-blue-100 flex">
            <div className="w-2/3 h-full flex flex-col pl-[10vw] justify-center">
                <h1 className="text-[4rem] font-semibold text-black mb-0">Inside a OffMart store?</h1>
                <p className="text-3xl font-semibold text-blue-800">Try the latest onstore features of the OffMart store</p>
            </div>
            <div className="w-1/3 h-full flex items-center">
            <Link href={'/onstore'}>
                <button className="px-8 py-2 text-2xl font-semibold bg-blue-600 text-white rounded-2xl flex gap-3 items-center">
                    Get OnStore<FaArrowUpRightFromSquare />
                </button>
            </Link>
            </div>
        </div>
    )
}

export default Banner
