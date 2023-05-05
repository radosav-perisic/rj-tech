import React from "react";
import { PRODUCTS } from "../products";
import Product  from "../components/product";

const Shop = () => {
  return (
    <div className="w-full h-screen justify-center items-center">
      <div className="mt-24 text-center text-5xl">
        <h1>R&J Tech </h1>
      </div>
      <div className="w-full h-auto grid grid-cols-2 gap-x-3 mt-12 sm:grid-cols-3 gap-12 text-center font-semibold py-6 items-center mx-auto justify-center">
        {PRODUCTS.map((product) => (
          <Product data={product}/>
        ))}
      </div>
    </div>
  );
};

export default Shop;
