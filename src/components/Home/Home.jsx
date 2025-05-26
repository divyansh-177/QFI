import React from 'react';
import { Link } from 'react-router-dom';
import HeroSliderSection from '../HeroSlid/HeroSliderSection';
import Prod2 from "./../Products/Prod2.jsx"

export default function Home() {
  return (
    <div className="mx-auto w-full max-full">
      <HeroSliderSection />
      <h1 className="text-center text-2xl font-bold mb-6  text-orange-600 mt-10">Our Products</h1>
         <Prod2 />
{/* Principal Customers Section */}
<section className="w-full bg-orange-700 mt-16">
  <div className="max-w-7xl mx-auto px-6 sm:px-12 pb-16 ">
    {/* Centered Heading */}
    <h1 className="text-gray-200 text-xl sm:text-3xl font-semibold leading-tight mb-12 text-center">
      Our Principal Customers
    </h1>

    {/* Centered Logos */}
    <div className="flex justify-center gap-12">
      <img
        src="./../../public/nokia.png"
        alt="Customer 1 Logo"
        className="max-w-[300px] max-h-[150px]"
      />
      <img
        src="./../../public/honda.png"
        alt="Customer 2 Logo"
        className="max-w-[300px] max-h-[150px]"
      />
      <img
        src="./../../public/maruti.png"  /* Replace with your actual image */
        alt="Customer 3 Logo"
        className="max-w-[300px] max-h-[150px]"
      />
    </div>
  </div>
</section>

    </div>
  );
}
