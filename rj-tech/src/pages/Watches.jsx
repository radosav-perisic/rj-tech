import React from "react";
import PRODUCTS from "../products";
import Product from "../components/Product";

const Watches = () => {
  const watchesProducts = PRODUCTS.filter(product => product.category === "Watches");
  return (
    <div className="w-full h-full rounded flex flex-col justify-center items-center pt-20">
      <h1 className="text-5xl font-bold mb-10">Watches</h1>
      <div className="w-full max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center font-semibold py-6 items-center mx-auto justify-center">
        {watchesProducts.map(product => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Watches;
