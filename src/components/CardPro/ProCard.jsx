import React from 'react';


const ProCard = ({ primaryImg, title }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
      <article className="product__card bg-white shadow-md p-4 rounded-lg overflow-hidden">
        <div className="overflow-hidden rounded-md">
          <img
            src={primaryImg}
            alt={title}
            className="transition-transform duration-300 ease-in-out hover:scale-110 w-full"
          />
        </div>
        <div className="product__card--content text-center mt-4">
          <h3 className="product__card--title font-semibold text-lg">{title}</h3>
        </div>
      </article>
    </div>
  );
};

export default ProCard;
