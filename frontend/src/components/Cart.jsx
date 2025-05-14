import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeItem = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const checkout = () => {
    if (cart.length === 0) return alert("Cart is empty");
    navigate("/checkout");
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item, i) => (
        <div key={i}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => removeItem(i)}>Remove</button>
        </div>
      ))}
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Cart;
