import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
