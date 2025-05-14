import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`/api/products/${id}`);
      setProduct(res.data);
    };
    fetch();
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default ProductDetail;
