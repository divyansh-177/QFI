import React from 'react';
import { useProducts } from './ProCon';
import ProCard from './ProCard';

const ProGrid = () => {
  const products = useProducts();

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4">
        {products.map((product, idx) => (
          <ProCard
            key={idx}
            primaryImg={product.primaryImg}
            secondaryImg={product.secondaryImg}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ProGrid;
