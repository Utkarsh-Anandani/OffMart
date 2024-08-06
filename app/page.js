<<<<<<< HEAD
"use client";
import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
"use client"
import React, { useEffect, useState } from 'react'
>>>>>>> 5f0c5f6276d330b5f74909d418c0c0e343f0f08d
import ProductCard from './components/ProductCard';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import CategoryCards from "./components/CategoryCard";
<<<<<<< HEAD
// import Cart from "./Cart/page"
=======
>>>>>>> 5f0c5f6276d330b5f74909d418c0c0e343f0f08d


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
<<<<<<< HEAD
    <main className="w-screen min-h-screen">
      {/* <Router>
        <div> */}
          <Navbar />
          {/* <Routes>
             <Route path="/Cart" element={<Cart/>} />
          </Routes>
        </div>   
      </Router> */}
=======
    <main className="max-w-screen min-h-screen">
      <Navbar/>
>>>>>>> 5f0c5f6276d330b5f74909d418c0c0e343f0f08d
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

    </main>
  );
}

