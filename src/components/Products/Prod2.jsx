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

function Prod2() {
 

  return (
    // Add horizontal padding (px-6 or px-8 or px-4 depending on your design)
    <>
      <ProductProvider products={products}>
        <div className="container mx-auto">
          <ProGrid />
        </div>
      </ProductProvider>
   </>
  );
}


export default Prod2;
