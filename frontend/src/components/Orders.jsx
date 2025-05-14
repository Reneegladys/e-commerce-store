import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("/api/orders", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(res.data);
      } catch (err) {
        console.error("Fetch orders error:", err);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      <h2>Your Orders</h2>
      {orders.map((order) => (
        <div key={order._id}>
          <h4>Order ID: {order._id}</h4>
          <ul>
            {order.items.map((item, i) => (
              <li key={i}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Orders;
