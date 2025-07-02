import React from 'react';
import { Link } from 'react-router-dom';
import HeroSliderSection from '../HeroSlid/HeroSliderSection';
import Prod2 from "./../Products/Prod2.jsx"

export default function Home() {
  return (
    <div className="mx-auto w-full max-full">
      <HeroSliderSection />

      <h1 className="text-center text-4xl font-bold mb-6 mt-10">Our Products</h1>
      <Prod2 />

      {/* View More Button */}
      <div className="text-center mt-6">
        <Link to="/products">
          <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition">
            View More
          </button>
        </Link>
      </div>

      {/* Principal Customers Section */}
      <section className="w-full bg-orange-700 mt-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 pb-16">
          <h1 className="text-gray-200 text-xl sm:text-3xl font-semibold leading-tight mb-12 text-center">
            Our Principal Customers
          </h1>

          <div className="flex justify-center gap-12 flex-wrap text-center text-white">
            {/* Existing Customers */}
            <div>
              <img
                src="/honda.png"
                alt="Honda"
                className="max-w-[300px] max-h-[150px] mx-auto"
              />
              <p className="mt-2">Honda</p>
            </div>
            <div>
              <img
                src="/maruti.png"
                alt="Maruti"
                className="max-w-[300px] max-h-[150px] mx-auto"
              />
              <p className="mt-2">Maruti</p>
            </div>

            {/* New Customers */}
            <div>
              <img
                src="/badve_group.jpeg"
                alt="BADVE GROUP"
                className="max-w-[300px] max-h-[150px] mx-auto"
              />
              <p className="mt-2">BADVE GROUP</p>
            </div>
            <div>
              <img
                src="/fiem.jpg"
                alt="FIEM"
                className="max-w-[300px] max-h-[150px] mx-auto"
              />
              <p className="mt-2">FIEM</p>
            </div>
            <div>
              <img
                src="/lps_bossard.jpeg"
                alt="LPS BOSSARD"
                className="max-w-[300px] max-h-[150px] mx-auto"
              />
              <p className="mt-2">LPS BOSSARD</p>
            </div>
            <div>
              <img
                src="/new_holland_agriculture.jpeg"
                alt="New Holland Agriculture"
                className="max-w-[300px] max-h-[150px] mx-auto"
              />
              <p className="mt-2">New Holland Agriculture</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
