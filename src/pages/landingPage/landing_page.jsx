import './landing_page.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { HeroSection } from '../../components/hero/heroSection'
import {HeroSection2} from '../../components/hero/heroSection2'
import { Search } from '../../components/search/search'
import { DiscountCard } from '../../components/discountCard/discountCard'
import { ShopCard, ShopCard2 } from '../../components/shopCard/shopCard'
import {BestSeller} from '../../components/bestSeller/bestSeller'
import { Card } from '../../components/card/card'
import sports from '../../assets/bckground-search.png'
import p1 from '../../components/bestSeller/assets/p6.jpg'
export const LandingPage = () => {
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
      <div className="landingPage">
        <div className='search__container'>
            <div className='search__image'>
                <img className='sports__image' src={sports} alt="sports" />
            </div>
            <div className="search__box">
			    <img className="search__icon" src={require('../../components/search/assets/ic_fluent_search_24_filled.svg').default} alt="Country"/>
			    <input className='input__area' type="text" placeholder="Search.." id="search" onChange={(e) => handleSearch(e.target.value)}/>
		    </div>
        </div>
        {searchQuery.length === 0 ? (
        <>


        <HeroSection />
  
        
            <BestSeller title={"BEST SELLERS"} />
            <BestSeller title={"New Realeases"} />
            <HeroSection2 />
  
            <div
              className="discountSection"
              style={{ display: "flex", justifyContent: "space-evenly", margin: "0px 50px" }}
            >
              <DiscountCard />
              <DiscountCard />
              <DiscountCard />
            </div>
            <div className="shopSection" style={{ display: "flex", gap: "50px", margin: "0 200px" }}>
              <ShopCard myVariable="MEN" />
              <ShopCard2 myVariable="WOMEN" />
            </div>
          </>  ) : (
          <div >
                <h1 style={{ fontFamily: 'Brandon Grotesque',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '25px',
                    marginLeft:'50px',
                    marginBottom:'30px',
                    lineHeight: '46px',
                    letterSpacing: '0.065em',
                    color: '#171717'}}>
                        Search Results <span style={{color:'#C2C2C2'}}>"{searchQuery}"</span>
                </h1>
                <div style={{marginLeft:  '50px',
    
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, 1fr)',
                    gap: '30px',
                    justifyContent:'space-between'
                    }}>
          {
            searchResults.map((product)=>{
               
                return (
                    <Link to={`/show-ProductsItems/${product.id}/`} key={product.id}>
                    <div className='root'>
                        <div className='upper-side' >
                           <img style={{    width: '264px',height: '365px'}} src={p1} alt="" />
                            <button className='shop-btn'>Shop now</button>
                        </div>
                        <div className='lower-side'>
                            <div style={{display:'flex',justifyContent:'space-evenly'}}>
                                <h4 className='product-title'>{product.name}</h4>
                                <h5 style={{textAlign:'end'}} className='price-txt'>{product.unit_price} DZD</h5>
                            </div>
                            
                            <h4 className='prodoct-color-txt'>{product.description}</h4>
                        </div>
                    </div>
                    </Link>
                )
                
            })

        }</div>
        </div>
      )}
        
  
        {/* {searchQuery.length > 0 && (
          <div className="searchResults">
            {products.map((product) => {
              return (
                <Link to={`/show-ProductsItems/${product.id}/`} key={product.id}>
                  <div className="root">
                    <div
                      className="upper-side"
                      style={{ backgroundImage: `url(${product.image})`, backgroundPosition: "center", backgroundSize: "cover" }}
                    >
                      <button className="shop-btn">Shop now</button>
                    </div>
                    <div className="lower-side">
                      <div>
                        <h5 style={{ textAlign: "end" }} className="price-txt">
                          {product.unit_price} DZD
                        </h5>
                      </div>
                      <h4 className="product-title">{product.name}</h4>
                      <h4 className="prodoct-color-txt">{product.description}</h4>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )} */}
</div>
    )}