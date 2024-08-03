"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ReactDOM from 'react-dom';
import CategoryCards from "./components/CategoryCard";


export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/product')
      .then((res) => res.json())
      .then((data) => setProducts(data));
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
          {products.map((product, id) => (
            <ProductCard key={id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

