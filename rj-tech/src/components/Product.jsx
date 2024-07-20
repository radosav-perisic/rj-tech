import React, { useContext } from "react";
import { Context } from "../context/Context";

const Product = ({ data }) => {
  const { productImage, productName, price, originalPrice, discount, isNew, category, id } = data;
  const { addToCart } = useContext(Context);

  return (
    <div className="bg-white  p-4 flex flex-col items-center justify-between relative">
      <div className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded ${isNew ? 'bg-green-500' : 'bg-orange-500'}`}>
        {isNew ? 'New' : 'Discount'}
      </div>
      <img src={productImage} alt={productName} className="w-full h-32 object-contain mb-4" />
      <h3 className="text-lg font-bold mb-2">{productName}</h3>
      <div className="text-sm text-gray-500 mb-2">Category: {category}</div>
      {discount && <div className="text-red-500 text-sm mb-1">Save: ${discount.toFixed(2)}</div>}
      {originalPrice && <div className="text-gray-500 line-through">${originalPrice.toFixed(2)}</div>}
      <div className="text-xl font-bold text-gray-800">${price.toFixed(2)}</div>
      <button 
        className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600"
        onClick={() => addToCart(id)}
      >
        <i className="fas fa-shopping-cart mr-2"></i> Add to Cart
      </button>
    </div>
  );
};

export default Product;
