import React, { useContext } from "react";
import {Context} from '../context/Context'

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {addToCart, cartItems} =useContext(Context)

  const cartItemAmount = cartItems[id]

  return (
    <div className="lg:w-[300px] lg:h-[350px] w-[120px] h-[170px] mx-auto flex-col justify-center flex items-center">
      <img className="w-full max-w-[400px]" src={productImage} />
      <div className="text-center">
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <button
      onClick={() => addToCart(id)}
        className="hover:bg-gray-700 hover:text-white duration-300 bg-transparent border-gray-700 border-2 min-w-[100px] pl-[10px] pr-[10px] pt-[5px] pb-[5px] rounded-2xl"
      >
        Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
