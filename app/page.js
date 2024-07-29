import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <Navbar/>
      <Footer/>
    </main>
  );
}
