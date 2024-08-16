"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import CategoryCards from "./components/CategoryCard";
import { Toaster } from 'react-hot-toast';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://off-mart.vercel.app/api/data')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <main className="max-w-screen min-h-screen">
      <Navbar />
      <Banner />
      <div className="mt-20">
        <CategoryCards />
      </div>
      <div className="mt-20">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <Toaster />
    </main>
  );
}
