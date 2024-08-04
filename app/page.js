"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ReactDOM from 'react-dom';
import CategoryCards from "./components/CategoryCard";


export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/data')
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the data
        setProducts(data);
      });
  }, []);
  return (
    <main className="w-screen min-h-screen">
      <Navbar />
      <Banner />
      <div className="mt-20">
        <CategoryCards />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

