import React, { useContext, useEffect, useState } from "react";
import PRODUCTS from "../products";
import Product from "../components/Product";
import Loader from "../components/Loader";
import { Context } from "../context/Context";

const Airpods = () => {
  const { searchQuery, loading, setLoading } = useContext(Context);
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS.filter(product => product.category === "Airpods"));

  useEffect(() => {
    setLoading(true);
    if (searchQuery) {
      const filtered = PRODUCTS.filter((product) =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase()) && product.category === "Airpods"
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(PRODUCTS.filter(product => product.category === "Airpods"));
    }
    setLoading(false);
  }, [searchQuery, setLoading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full h-full rounded flex flex-col justify-center items-center pt-20">
      <h1 className="text-5xl font-bold mb-10">Airpods</h1>
      <div className="w-full max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center font-semibold py-6 items-center mx-auto justify-center">
        {filteredProducts.map(product => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Airpods;
