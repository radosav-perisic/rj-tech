// src/pages/Chargers.jsx
import React, { useContext } from "react";
import PRODUCTS from "../products";
import Product from "../components/Product";
import bannerImage from "../assets/chargers-banner3.jpg";
import { Context } from "../context/Context";

const Chargers = () => {
  const { searchQuery } = useContext(Context);
  const chargersProducts = PRODUCTS.filter(product => 
    product.category === "Chargers" && product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-full rounded flex flex-col justify-center items-center">
      <img 
        src={bannerImage} 
        alt="Apple Watch Banner" 
        className="w-full max-w-2xl h-auto object-cover pt-24 mb-4"
      />
      <h1 className="text-4xl font-bold mb-4">CHARGERS</h1>
      <div className="w-full max-w-[1000px] mt-8 grid grid-cols-2 gap-x-3 h-auto sm:grid-cols-3 gap-24 text-center font-semibold pb-6 items-center mx-auto justify-center">
        {chargersProducts.map(product => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Chargers;
