import React from 'react';
import { ProductProvider } from './../CardPro/ProCon';
import ProGrid from './../CardPro/ProGrid';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from 'react';


const products = [
  {
    primaryImg: 'nutb/hex_nuts.jpeg',
    secondaryImg: 'nutb/hex_nuts.jpeg',
    title: 'Hex Nuts',
  },
  {
    primaryImg: 'nutb/SerratedFlange.jpeg',
    secondaryImg: 'nutb/SerratedFlange.jpeg',
    title: 'Serrated Flange Nuts',
  },
   {
    primaryImg: 'nutb/lock_nuts.jpeg',
    secondaryImg: 'nutb/lock_nuts.jpeg',
    title: 'Lock Nuts',
  },
  {
    primaryImg: 'nutb/Selfclinchingnuts.jpeg',
    secondaryImg: 'nutb/Selfclinchingnuts.jpeg',
    title: 'Self Clinching Nuts',
  },
  {
    primaryImg: 'nutb/Flangnut.jpeg',
    secondaryImg: 'nutb/Flangnut.jpeg',
    title: 'Flang Nuts',
  },
  {
    primaryImg: 'nutb/Wheelnuts.jpeg',
    secondaryImg: 'nutb/Wheelnuts.jpeg',
    title: 'Wheel Nuts',
  },
  {
    primaryImg: 'nutb/Specialstepnut.jpeg',
    secondaryImg: 'nutb/Specialstepnut.jpeg',
    title: 'Special Step Nuts',
  },
  {
    primaryImg: 'nutb/Collarstay.jpeg',
    secondaryImg: 'nutb/Collarstay.jpeg',
    title: 'Collar Stay',
  },
  {
    primaryImg: 'nutb/Tnut.jpeg',
    secondaryImg: 'nutb/Tnut.jpeg',
    title: 'T Nuts',
  },{
    primaryImg: 'nutb/Tbush.jpeg',
    secondaryImg: 'nutb/Tbush.jpeg',
    title: 'T Bush',
  },
  {
    primaryImg: 'nutb/sq_weld.jpeg',
    secondaryImg: 'nutb/sq_weld.jpeg',
    title: 'Square Weld Nuts',
  },
  {
    primaryImg: 'nutb/Sp_bush.jpeg',
    secondaryImg: 'nutb/Sp_bush.jpeg',
    title: 'Special Bush / Collor stay',
  }
];


export default function Prod() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 {
  const points = [
   
  ];

  return (
    // Add horizontal padding (px-6 or px-8 or px-4 depending on your design)
    <div className="px-6 md:px-12 lg:px-24">
    <h1 className="text-center text-2xl font-bold mb-6  text-orange-600 mt-10">Our Products</h1>

      <div className="w-full py-6">
        <div className="mb-6">
          {/* <span className="text-lg font-bold text-orange-600 block text-left px-20">
            Our range of products includes:-
          </span> */}
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
}