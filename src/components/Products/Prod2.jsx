import React from 'react';
import { ProductProvider } from './../CardPro/ProCon';
import ProGrid from './../CardPro/ProGrid';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
    primaryImg: 'nutb/hex_nuts.jpeg',
    secondaryImg: 'nutb/hex_nuts.jpeg',
    title: 'Hex Nuts',
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
  }
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
