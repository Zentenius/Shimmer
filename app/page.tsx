import BestSellers from "@/components/BestSellers";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScrollWheel from "@/components/ScrollWheel";
import Image from "next/image";

export default function Home() {
  return (
   
   <div className="">
   <Hero/>
   <ScrollWheel/>
   <BestSellers/>
   <Footer/>
   </div>
  );
}
