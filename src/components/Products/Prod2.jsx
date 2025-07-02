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
