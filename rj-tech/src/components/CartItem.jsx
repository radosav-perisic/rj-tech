import React, {useContext} from "react";
import { Context } from "../context/Context";

const CartItem = (props) => {
    const {cartItems, addToCart, removeFromCart, updateCartItem} =useContext(Context)

  const { id, productName, price, productImage } = props.data;
  return (
    <div className="lg:w-[700px] lg:h-[250px] w-[220px] h-[60px] flex items-center shadow-lg rounded-3xl mt-[70px]">
      <img className="w-[200px]" src={productImage} />
      <div className="w-full text-3xl">
        <p>
            {productName}
        </p>
        <p>${price}</p>
        <div  className="flex">
           <button onClick={()=> removeFromCart(id)}> - </button>
           <input  className="w-10 text-center mt-16 outline-slate-600 outline-1" value={cartItems[id]} onChange={(e) => updateCartItem(Number(e.target.value), id)}/>
           <button onClick={()=> addToCart(id)}>  + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
