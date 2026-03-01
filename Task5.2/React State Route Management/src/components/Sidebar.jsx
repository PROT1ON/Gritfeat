import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Sidebar = () => {
  const { isOpen, setIsOpen, cart, removeFromCart } = useContext(CartContext);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 flex flex-col
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          ✕
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map(item => (
            <div
              key={item.id}
              className="flex items-center p-3 bg-gray-100 rounded-lg shadow-sm space-x-3"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain rounded flex-shrink-0"
              />

              {/* Product Info */}
              <div className="flex-1 min-w-0">
                {/* min-w-0 is important for truncate to work in flex */}
                <p className="font-semibold text-gray-800 truncate">{item.title}</p>
                <p className="text-sm text-gray-600">Qty: {item.amount}</p>
              </div>

              {/* Product Price & Remove Button */}
              <div className="flex flex-col items-end space-y-1 flex-shrink-0">
                <p className="font-bold text-gray-900">${(item.price * item.amount).toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 text-sm focus:outline-none"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer / Total */}
      {cart.length > 0 && (
        <div className="p-4 border-t">
          <p className="text-lg font-semibold text-gray-800">
            Total: ${cart.reduce((acc, item) => acc + item.price * item.amount, 0).toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;