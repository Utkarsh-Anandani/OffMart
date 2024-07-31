import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";


export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <Navbar />
      <Banner />
    </main>
  );
}
