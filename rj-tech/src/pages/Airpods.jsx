import React from "react";
import { PRODUCTS } from "../products";
import Product from "../components/Product";

const Airpods = () => {
  const airpodsProducts = PRODUCTS.filter(product => product.category === "Airpods");
  return (
    <div className="w-full h-full rounded flex flex-col justify-center items-center">
      <div className="w-full max-w-[1000px] mt-20 grid grid-cols-2 gap-x-3 h-auto sm:grid-cols-3 gap-24 text-center font-semibold py-6 items-center mx-auto justify-center">
        {airpodsProducts.map(product => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Airpods;