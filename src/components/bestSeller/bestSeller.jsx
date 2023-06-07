import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../spinner/loadingSpinner';
import { Card } from '../card/card';

import './bestSeller.css';

export const BestSeller = (props) => {
    var title = props.title;
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    const getCategory = async () => {
      try {
        const categoryResponse = await axios.get('https://gymrat-app.onrender.com/store/Categories/' + 7 + '/', {
          params: {
            limit: 13,
          },
        });
        const category = categoryResponse.data;
        const categoryId = category.id;
        console.log("Selected Category ID:", categoryId);
  
        const productsResponse = await axios.get(`https://gymrat-app.onrender.com/store/products/`);
        const allProducts = productsResponse.data;
        console.log("All Products Response:", allProducts);
  
        const filteredProducts = allProducts.filter(product => {
          return product.categories.some(categoryIdItem => categoryIdItem === categoryId);
        });
  
        // Shuffle the filteredProducts array randomly
        const shuffledProducts = shuffleArray(filteredProducts);
  
        console.log("Filtered Products:", shuffledProducts);
  
        setProducts(shuffledProducts);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      getCategory();
    }, [7]);
  
    // Function to shuffle the array randomly
    const shuffleArray = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };
  return (
    <div className='root'>
      <div className='bestSeller-section'>
        <div className='bestSeller-section-title'>
          <h1 className='bestSeller-section-title-txt'>{title}</h1>
          <Link to={'/Category/' + 7 + '/'}>
            <p style={{ textDecorationLine: 'underline', fontSize: '22px', cursor: 'pointer' }}>view all</p>
          </Link>
        </div>

        <div className='bestSeller-section-cards'>
          {isLoading ? (
            <div className='loading-spinner-container'>
              <LoadingSpinner />
            </div>
          ) : (
            <Suspense fallback={<LoadingSpinner />}>
              {products.map((product) => {
                return (
                    
                    <div>
                <Link to={`/show-ProductsItems/${product.id}/`} >
                <Card
                  
                  productId={product.id}
                  productInventory={product.inventory}
                  productPrice={product.unit_price}
                  productName={product.name}
                  productColor={product.color}
                  imgUrl={product.image_urls[0]}
                />
                </Link>
                </div>
                
                )
                
                })}
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export const BestSeller2 = (props) => {
    var title = props.title;
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    const getCategory = async () => {
      try {
        const categoryResponse = await axios.get('https://gymrat-app.onrender.com/store/Categories/' + 17 + '/', {
          params: {
            limit: 4,
          },
        });
        const category = categoryResponse.data;
        const categoryId = category.id;
        console.log("Selected Category ID:", categoryId);
  
        const productsResponse = await axios.get(`https://gymrat-app.onrender.com/store/products/`);
        const allProducts = productsResponse.data;
        console.log("All Products Response:", allProducts);
  
        const filteredProducts = allProducts.filter(product => {
          return product.categories.some(categoryIdItem => categoryIdItem === categoryId);
        });
  
        // Shuffle the filteredProducts array randomly
        const shuffledProducts = shuffleArray(filteredProducts);
  
        console.log("Filtered Products:", shuffledProducts);
  
        setProducts(shuffledProducts);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      getCategory();
    }, [17]);
  
    // Function to shuffle the array randomly
    const shuffleArray = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };
  return (
    <div className='root'>
      <div className='bestSeller-section'>
        <div className='bestSeller-section-title'>
          <h1 className='bestSeller-section-title-txt'>{title}</h1>
          <Link to={'/Category/' + 17 + '/'}>
            <p style={{ textDecorationLine: 'underline', fontSize: '22px', cursor: 'pointer' }}>view all</p>
          </Link>
        </div>

        <div className='bestSeller-section-cards'>
          {isLoading ? (
            <div className='loading-spinner-container'>
              <LoadingSpinner />
            </div>
          ) : (
            <Suspense fallback={<LoadingSpinner />}>
              {products.map((product) => (
                <div key={product.id}>
                  <Link to={`/show-ProductsItems/${product.id}/`} >
                    <Card
                      
                      productId={product.id}
                      productPrice={product.unit_price}
                      productName={product.name}
                      productColor={product.color}
                      imgUrl={product.image_urls[0]}
                    />
                    </Link>
                  
                </div>
              ))}
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};
