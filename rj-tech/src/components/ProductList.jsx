// src/components/ProductList.jsx
import React, { useContext } from 'react';
import { Context } from '../context/Context';
import Product from './Product';
import PRODUCTS from '../products';

const ProductList = ({ category }) => {
  const { searchQuery } = useContext(Context);
  const filteredProducts = PRODUCTS.filter(product =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!category || product.category === category)
  );

  return (
    <div className="w-full max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center font-semibold py-6 items-center mx-auto justify-center">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => <Product key={product.id} data={product} />)
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
