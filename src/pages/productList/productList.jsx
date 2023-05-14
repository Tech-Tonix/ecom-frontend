import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const filteredProducts = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    });
    setSearchResults(filteredProducts);
    setSearchQuery(query);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://gymrat-app.onrender.com/store/products/");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div style={{margin:'12rem 5rem'}}>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />

      {searchQuery.length === 0 ? (
        <>
          <h1>Popular Products</h1>
          <ul>
            <h1>LIFE IS A BITCH</h1>
          </ul>
        </>
      ) : (
        <>
          <h1>Search Results</h1>
          <ul>
            {searchResults.map((product) => (
              <li key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

