import { Card } from "../../components/card/card";
import { useEffect,useState } from "react"
import { Filter24Filled } from '@fluentui/react-icons';
import { Link } from "react-router-dom";
import axios from "axios";

import './showProductsItems.css'
export const ShowProductsItems = () =>{
  
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        const response = await axios.get('https://gymrat-app.onrender.com/store/products/')
        setProducts(response.data)
    }
    useEffect(()=>{
        getProducts();
    },[])



      let quantityy=products.length;
    return(
        <div className="productsPage">
        <div className="showProducts">
            <p className="showProducs_p-title">TRACKLIST <span>({quantityy} results)</span></p>
            <hr />
            <div className="showProducts-filterYourReasearch">
              
            <Filter24Filled color="#171717"/>
            <p>Filter your research </p>
            </div>
        </div>
        <div className="showAllTheProducts">
        {
            products.map((product)=>{
               
                return (
                    <Link to={`/show-ProductsItems/${product.id}/`} key={product.id}>
                    <div className='root'>
                        <div className='upper-side' style={{backgroundImage: `url(${product.image})`  ,backgroundPosition:'center',backgroundSize:'cover'}}>
                            
                            <button className='shop-btn'>Shop now</button>
                        </div>
                        <div className='lower-side'>
                            <div >
                                <h5 style={{textAlign:'end'}} className='price-txt'>{product.unit_price} DZD</h5>
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
        

    )

}