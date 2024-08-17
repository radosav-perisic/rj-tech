// src/components/ShopCarousel.js
import React, { useState } from 'react';
import { Carousel, Button, Typography } from "@material-tailwind/react";
import PRODUCTS from "../products";
import Product from "./Product";

const ShopCarousel = ({ category }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const limit = window.innerWidth >= 768 ? 3 : 1; // Adjust based on screen size

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + limit) % PRODUCTS.filter(p => p.category === category).length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - limit + PRODUCTS.filter(p => p.category === category).length) % PRODUCTS.filter(p => p.category === category).length);
  };

  const productsToShow = PRODUCTS.filter(product => product.category === category).slice(currentSlide, currentSlide + limit);

  return (
    <div className="relative w-full">
      <Carousel className="rounded-xl">
        {productsToShow.map((product, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={product.productImage}
              alt={product.productName}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography variant="h5" color="white" className="mb-4">
                  {product.productName}
                </Typography>
                <Typography variant="lead" color="white" className="mb-2">
                  ${product.price}
                </Typography>
                <Button size="lg" color="white">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-gray-600 hover:text-gray-900">
        &#x2039;
      </button>
      <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-gray-600 hover:text-gray-900">
        &#x203A;
      </button>
    </div>
  );
};

export default ShopCarousel;
