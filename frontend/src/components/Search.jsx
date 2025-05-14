import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`/api/products?search=${query}`);
      setProducts(res.data);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  return (
    <div>
      <h2>Search Products</h2>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {products.map((p) => (
          <div key={p._id}>
            <Link to={`/product/${p._id}`}>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
