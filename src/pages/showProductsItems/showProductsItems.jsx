import { Card } from "../../components/card/card";
import { useEffect, useState } from "react";
import { Filter24Filled } from '@fluentui/react-icons';
import { Link } from "react-router-dom";
import axios from "axios";
import Filters from "../../components/filters/filters"; 




import './showProductsItems.css'




export const ShowProductsItems = (props) => {

  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await axios.get('https://gymrat-app.onrender.com/store/products/');
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const quantityy = products.length;

 
 const handleFilterToggle = () => {
  props.setIsFiltersVisible(!props.isFiltersVisible);
};

const availbleColors = ['Red', 'Blue', 'Green', 'yellow','Black'];

const [selectedColor, setSelectedColor] = useState(null);

const handleColorChange = (selectedColor) => {
  setSelectedColor(selectedColor);
}


  return (
    
    <div className='productsPage'>
      {props.isFiltersVisible && <Filterpannel/>}
      <div  className= {` screen ${props.isFiltersVisible ? 'blur' : ''}`}>
      <div className='showProducts'>
        <p className="showProducts_p-title">TRACKLIST <span>({quantityy} results)</span></p>
        <hr />

        <div className="showProducts-filterYourReasearch">
          <div className="filterIcon" onClick={handleFilterToggle}>
            <Filter24Filled color="#171717" />
          </div>
          <div className="filter-text">
            <p>Filter your research</p>
          </div>
        </div>

      </div>
      
      
      <div className="showAllTheProducts">
        {
          products.map((product) => {
            return (
              <Link to={`/show-ProductsItems/${product.id}/`} key={product.id}>
                <div className='root'>
                  <div className='upper-side' style={{ backgroundImage: `url(${product.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <button className='shop-btn'>Shop now</button>
                  </div>
                  <div className='lower-side'>
                    <div>
                      <h5 style={{ textAlign: 'end' }} className='price-txt'>{product.unit_price} DZD</h5>
                    </div>
                    <h4 className='product-title'>{product.name}</h4>
                    <h4 className='prodoct-color-txt'>{product.description}</h4>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
      </div>
    </div>
  );
};
