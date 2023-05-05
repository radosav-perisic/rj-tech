import React from "react";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="w-[700px] h-[250px] flex items-center shadow-2xl rounded-3xl m-[30px]">
      <img className="w-[200px]" src={productImage} />
      <div className="w-full text-3xl">
        <p>
            {productName}
        </p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default CartItem;
