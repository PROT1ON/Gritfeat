import React, { useContext } from 'react';
// Import context
import { ProductContext } from '../../context/ProductContext';
// Import product component
import Product from '../Products/ProductCard';

const Home = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter(
    (product) => product.category === "women's clothing" || product.category === "men's clothing"
  );

  return (
    <div className="min-h-screen bg-gray-300 py-10 px-5">
      <div className="max-w-4xl mx-auto">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;