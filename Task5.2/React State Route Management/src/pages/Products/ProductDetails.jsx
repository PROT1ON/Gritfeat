import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { CartContext } from '../../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams(); // get product id from URL
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // find the product by id
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="p-4">Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      {/* Product Image */}
      <div className="flex-1 flex items-center justify-center">
        <img src={product.image} alt={product.title} className="w-full max-w-sm object-contain" />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col space-y-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-600 capitalize">{product.category}</p>
        <p className="text-xl font-semibold">${product.price}</p>
        <p className="text-gray-700">{product.description}</p>

        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;