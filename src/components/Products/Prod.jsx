import React from 'react';
import { ProductProvider } from './../CardPro/ProCon';
import ProGrid from './../CardPro/ProGrid';
import '@fortawesome/fontawesome-free/css/all.min.css';

const products = [
  {
    primaryImg: './../../../public/nutb/All Metal Torque Lock Nuts.jpeg',
    secondaryImg: './../../../public/nutb/All Metal Torque Lock Nuts.jpeg',
    title: 'All Metal Torque Lock Nuts',
  },
  {
    primaryImg: './../../public/nutb/-209x170/flange_nuts.png',
    secondaryImg: './../../public/nutb/-209x170/flange_nuts_alt.png',
    title: 'Flange Nuts',
  },
  {
    primaryImg: './../../public/nutb/-209x170/hex_nuts.png',
    secondaryImg: './../../public/nutb/-209x170/hex_nuts_alt.png',
    title: 'Hex Nuts',
  },
  {
    primaryImg: './../../public/nutb/-209x170/lock_nuts.png',
    secondaryImg: './../../public/nutb/-209x170/lock_nuts_alt.png',
    title: 'Lock Nuts',
  },
  {
    primaryImg: './../../public/nutb/-209x170/cap_nuts.png',
    secondaryImg: './../../public/nutb/-209x170/cap_nuts_alt.png',
    title: 'Cap Nuts',
  },
  {
    primaryImg: './../../public/nutb/-209x170/wheel_nuts.png',
    secondaryImg: './../../public/nutb/-209x170/wheel_nuts_alt.png',
    title: 'Wheel Nuts',
  },
  {
    primaryImg: './../../public/nutb/-209x170/weld_nuts.png',
    secondaryImg: './../../public/nutb/-209x170/weld_nuts_alt.png',
    title: 'Weld Nuts',
  },
  {
    primaryImg: './../../public/nutb/-209x170/nyloc_nuts.png',
    secondaryImg: './../../public/nutb/-209x170/nyloc_nuts_alt.png',
    title: 'Nyloc Nuts',
  },
];

function Prod() {
  const points = [
    'Mild steel and High Tensile Cold Forged Nuts from M2 to M24',
    'Mild steel and High Tensile Cold Forged Bolts from M5 to M24 with length up to 300 mm.',
    'Components machined on Traubs, CNC, VMC, Milling, CLG, Power Press, etc.',
    'Specialized and critical components which are cold/hot forged followed by high precision machining on various machines.',
  ];

  return (
    // Add horizontal padding (px-6 or px-8 or px-4 depending on your design)
    <div className="px-6 md:px-12 lg:px-24">
    <h1 className="text-center text-2xl font-bold mb-6  text-orange-600 mt-10">Our Products</h1>

      <div className="w-full py-6">
        <div className="mb-6">
          <span className="text-lg font-bold text-orange-600 block text-left px-20">
            Our range of products includes:-
          </span>
        </div>

        <div className="space-y-4 px-20">
          {points.map((text, index) => (
            <p
              key={index}
              className="text-justify font-semibold text-gray-700 flex items-start"
            >
              <span className="text-[#b5cd28] text-sm mr-2 mt-1">
                <i className="fa fa-dot-circle-o" aria-hidden="true"></i>
              </span>
              <span>{text}</span>
            </p>
          ))}
        </div>
      </div>

      <ProductProvider products={products}>
        <div className="container mx-auto">
          <ProGrid />
        </div>
      </ProductProvider>
    </div>
  );
}


export default Prod;
