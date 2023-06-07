import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Filter24Filled } from '@fluentui/react-icons';
import { Link } from "react-router-dom";
import './speceficCategoryPage.css';
import LoadingSpinner from "../../components/spinner/loadingSpinner";

export const SpeceficCategory = (props) => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterClicked, setFilterClicked] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState('');

  const getCategory = async () => {
    try {
      const categoryResponse = await axios.get(`https://gymrat-app.onrender.com/store/Categories/${id}/`);
      const category = categoryResponse.data;
      const categoryId = category.id;
      const categoryTitle = category.title;
      console.log("Selected Category ID:", categoryId);

      const productsResponse = await axios.get(`https://gymrat-app.onrender.com/store/products/`);
      const allProducts = productsResponse.data;
      console.log("All Products Response:", allProducts);

      const filteredProducts = allProducts.filter(product => {
        return product.categories.some(categoryIdItem => categoryIdItem === categoryId);
      });
      console.log("Filtered Products:", filteredProducts);

      setProducts(filteredProducts);
      setCategoryTitle(categoryTitle);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
  }, [id]);

  const handleFilterClick = () => {
    // Apply filtering logic here based on your requirements
    // In this example, we filter products based on a certain condition
    const filtered = products.filter((product) => product.unit_price === 64);
    setFilteredProducts(filtered);
    setFilterClicked(true);

    // Display a message if no products match the filters
    if (filtered.length === 0) {
      console.log("No products match the selected filters");
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (filterClicked && filteredProducts.length === 0) {
    return <h1 style={{ margin: "10rem 10rem" }}>NO PRODUCTS MATCH THE SELECTED FILTERS</h1>;
  }

  return (
    <div className="productsPage">
      <div className="showProducts">
        <p className="showProducs_p-title">{categoryTitle} <span>({products.length} results)</span></p>
        <hr />
        <div className="showProducts-filterYourReasearch">
          <Filter24Filled color="#171717" />
          <button onClick={handleFilterClick}>Filter your research</button>
        </div>
      </div>
      <div className="showAllTheProducts">
        {products.map((product) => {
          return (
            <Link to={`/show-ProductsItems/${product?.id}`} key={product.id}>
              <div className='root'>
                <div className='upper-side' style={{ backgroundImage: `url(${product.image_urls[0]})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                  <button className='shop-btn'>Shop now</button>
                </div>
                <div className='lower-side'>
                  <div>
                    <h5 style={{ textAlign: 'end' }} className='price-txt'>{product.unit_price} DZD</h5>
                  </div>
                  <h4 className='product-title'>{product.name}</h4>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
};
