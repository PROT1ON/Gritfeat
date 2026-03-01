import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FaPlus, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, title, price, image, category } = product;
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className='group relative overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white'>
      
      {/* Top-right buttons */}
      <div className='absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product)}
          className='bg-white p-2 rounded-full shadow hover:bg-gray-200 focus:outline-none'
        >
          <FaPlus className='text-black w-4 h-4' />
        </button>

        {/* View / Eye */}
        <button
          onClick={() => navigate(`/product/${id}`)}
          className='bg-white p-2 rounded-full shadow hover:bg-gray-200 focus:outline-none'
        >
          <FaEye className='text-black w-4 h-4' />
        </button>
      </div>

      <div className='p-4 flex flex-col items-center justify-center h-full'>
        {/* Category */}
        <div className='text-sm capitalize text-gray-500 mb-2'>{category}</div>

        {/* Product Image */}
        <img src={image} alt={title} className='w-full h-36 object-contain mb-3' />

        {/* Title */}
        <div className='text-sm font-semibold text-gray-800 mb-1 text-center line-clamp-2'>
          {title}
        </div>

        {/* Price */}
        <div className='text-lg font-bold text-gray-900 mt-1'>${price}</div>
      </div>
    </div>
  );
};

export default ProductCard;