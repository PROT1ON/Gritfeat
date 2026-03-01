import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext'; 

const Header = () => {
  const { isOpen, setIsOpen, cart } = useContext(CartContext); 

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Logo */}
      <div className="text-xl font-bold">MyApp</div>

      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
      </div>

      <div>
        <button
          onClick={() => setIsOpen(!isOpen)} 
          className="relative focus:outline-none"
        >
          <FaShoppingCart className="w-6 h-6 text-white hover:text-gray-400" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;