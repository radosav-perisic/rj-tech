import React, { useContext } from "react";
import PRODUCTS from "../products";
import Product from "../components/Product";
import bannerImage from "../assets/accessories-banner.jpg";
import { Context } from "../context/Context";

const Accessories = () => {
  const { searchQuery } = useContext(Context);
  const accessoriesProducts = PRODUCTS.filter(product => 
    product.category === "Accessories" && product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="w-full h-full rounded flex flex-col justify-center items-center">
      <img 
        src={bannerImage} 
        alt="Accessories Banner" 
        className="w-full max-w-4xl h-auto object-cover pt-24 mb-4"
      />
      <div className="w-full max-w-[1000px] mt-20 grid grid-cols-2 gap-x-3 h-auto sm:grid-cols-3 gap-24 text-center font-semibold py-6 items-center mx-auto justify-center">
        {accessoriesProducts.map(product => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Accessories;
