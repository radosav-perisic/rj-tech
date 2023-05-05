import React from "react";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="rounded-2xl lg:w-[300px] lg:h-[350px] lg:m-[100px] w-[120px] h-[170px] mx-auto flex-col justify-center flex items-center transition ease-in duration-300">
      <img className="w-full max-w-[400px]" src={productImage} />
      <div className="text-center">
        <p>{productName}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Product;
