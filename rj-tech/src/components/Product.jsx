import React, { useContext } from "react";
import { Context } from '../context/Context';

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(Context);

  const cartItemAmount = cartItems[id] || 0;

  return (
    <div className="w-[300px] h-[400px] mx-auto flex-col justify-center flex items-center p-2">
      <img className="w-full h-full object-contain" src={productImage} alt={productName} />
      <div className="text-center mt-2">
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <button
        onClick={() => addToCart(id)}
        className="hover:bg-gray-700 hover:text-white duration-300 bg-transparent border-gray-700 border-2 min-w-[100px] pl-[10px] pr-[10px] pt-[5px] pb-[5px] rounded-2xl mt-2"
      >
        Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
