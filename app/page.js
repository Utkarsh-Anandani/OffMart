"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ReactDOM from 'react-dom';
import CategoryCards from "./components/CategoryCard";


export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <Navbar />
      <Banner />
      <div className="mt-20">
        <CategoryCards />
      </div>
    </main>
  );
}

