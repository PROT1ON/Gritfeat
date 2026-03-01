import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import  ProductContextProvider  from './context/ProductContext';
import CartProvider from './context/CartContext';
import SideBarProvider from './context/SideBarContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
  <SideBarProvider>
    <ProductContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductContextProvider>
  </SideBarProvider>
  </CartProvider>
  </React.StrictMode>
);