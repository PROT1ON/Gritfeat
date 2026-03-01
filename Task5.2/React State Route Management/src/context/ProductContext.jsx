import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  // States for products
  const [products, setProducts] = useState([]);

  // Fetching products JSON
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);  
        setProducts(data);  
      } catch (error) {
        console.log('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ setProducts, products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider 