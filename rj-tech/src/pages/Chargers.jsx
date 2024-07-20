import React from "react";
import PRODUCTS from "../products";
import Product from "../components/Product";


const Chargers = () => {
  const chargersProducts = PRODUCTS.filter(product => product.category === "Chargers");
  return (
    <div className="w-full h-full rounded flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold mb-10">CHARGERS</h1>
      <div className="w-full max-w-[1000px] mt-20 grid grid-cols-2 gap-x-3 h-auto sm:grid-cols-3 gap-24 text-center font-semibold py-6 items-center mx-auto justify-center">
        {chargersProducts.map(product => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Chargers;