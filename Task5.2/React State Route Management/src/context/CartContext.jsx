import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // sidebar open state

  const addToCart = (product) => {
    const { id } = product;

    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
      setCart(newCart);
    } else {
      const newItem = { ...product, amount: 1 };
      setCart([...cart, newItem]);
    }

    setIsOpen(true); 
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.amount, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotalPrice, isOpen, setIsOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;