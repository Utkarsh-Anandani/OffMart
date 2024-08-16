"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from 'next/link';

const CartIcon = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        setCartCount(count);
    }, [cartItems]);

    return (
        <div>
            <Link href="/Cart">
                <div className='relative text-white text-2xl font-bold'>
                    <MdOutlineShoppingCart />
                    {cartCount > 0 && (
                        <span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                            {cartCount}
                        </span>
                    )}
                </div>
            </Link>
        </div>
    );
}

export default CartIcon;
