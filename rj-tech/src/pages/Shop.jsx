import React from "react";
import { PRODUCTS } from "../products";
import Product  from "../components/product";

const Shop = () => {
  return (
    <div className="">
      <div className="">
        <h1>R&J Tech Store</h1>
      </div>
      <div className="">
        {PRODUCTS.map((product) => (
          <Product data={product}/>
        ))}
      </div>
    </div>
  );
};

export default Shop;
