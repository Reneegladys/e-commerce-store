// ProductList.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../services/api'; // Assuming you have an API function

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts('');
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id} onClick={() => handleProductClick(product._id)}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
