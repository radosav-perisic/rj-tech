import React from "react";

const Product = (props) => {
  const { id, product, price, productImage } = props.data;
  return (
    <div className="">
      <img src={productImage} />
      <div className="">
        <p>{productName}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Product;
