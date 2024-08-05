"use client";
import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ReactDOM from 'react-dom';
import CategoryCards from "./components/CategoryCard";
// import Cart from "./Cart/page"


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
      {/* <Router>
        <div> */}
          <Navbar />
          {/* <Routes>
             <Route path="/Cart" element={<Cart/>} />
          </Routes>
        </div>   
      </Router> */}
      <Banner />
      <div className="mt-20">
        <CategoryCards />
      </div>
      <div className="container mt-20">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

    </main>
  );
}

