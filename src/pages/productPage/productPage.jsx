import './productPage.css'
import { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { Rating } from '@fluentui/react';
import { StarRating } from './rating';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heart48Filled } from '@fluentui/react-icons';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import AuthContext from '../../context/AuthContext';
import { toast } from 'react-toastify';









export const ProductPage =() =>{
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          
          background: "#C2C2C2",
          padding:'20px',
          borderRadius:'15px'
        }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} style={{}} />
      </div>
    );
  }

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          
          background: "#C2C2C2",
          padding:'20px',
          borderRadius:'15px'
        }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} style={{}} />
      </div>

    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };
  const settings2 = {
    
    infinite: true,
    vertical:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  const { user,authTokens } = useContext(AuthContext);  

  let [heartColor,setHeartColor]=useState(true)
  const [product, setProduct] = useState({})
  

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const colors = ["red", "blue", "green", "yellow"];
  const sizes = ["XS", "S", "M", "L","XL","XXL"]; 
  const getProducts = async () => {
    try {
      const response = await axios.get('https://gymrat-app.onrender.com/store/products/');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
    };
    useEffect(() => {
    getProducts();
    }, []);

    
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `https://gymrat-app.onrender.com/store/products/${id}/`
        );
        setProduct(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = async () => {
    
    if (user) {
      try {
        const response = await axios.post(
          "https://gymrat-app.onrender.com/store/add-cart/",
          {
            product_id: product.id,
            quantity: quantity,
          },
          {
            headers: {
              Authorization: "JWT " + authTokens,
            },
          }
        );
        toast.success("Product added to cart!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } catch (error) {
        toast.error("Failed to add product to cart.", {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log(error);
      }
    } else {
      const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
      const existingProductIndex = cart.findIndex(
        (item) => item.id === product.id
      );
  
      if (existingProductIndex !== -1) {
        // Product already exists in the cart, update the quantity
        cart[existingProductIndex].quantity += quantity;
      } else {
        // Product does not exist in the cart, add it
        cart.push({
          id: product.id,
          name: product.name,
          quantity: quantity,
        });
      }
  
      sessionStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Product added to cart!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

    
  return(

  <div className="productPage">
      {!loading?
    ( <div style={{display:'flex',flexDirection:'column'}}>
      <div className="productPage-product" style={{display:'flex',gap:'50px',marginBottom:"70px",marginLeft:'10%'}}>
      <div className="slider" style={{width:'150px'}}>
      <Slider  {...settings2}>
      {
          products.map((product)=>{
              
              return (
                      <Link to={`/show-ProductsItems/${product.id}/`} key={product.id}>
                      <div className='root' style={{marginLeft:'25px',height:'120px',backgroundColor:'red',width:'100px'}}>
                        <img src={product.image} alt="imggg" style={{height:'120',width:'100px'}} />
                      </div>
                      </Link>
                  )
                  
              })

          }
              </Slider>
              </div>
          <div className="productPage-image">
              <img style={{width:'450px',height:'450px',borderRadius:'10px'}} src={product.image} alt="imaage" />
          </div>
          <div className="productPage-details">
              <div className="productPage-details-title-reviews-price">
                  <div className="productPage-details-title-reviews">
                      <p>{product.name}</p>
                      <div className="productPage-details-reviews">
                          <StarRating/>
                          {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
                          <hr  style={{height:'15px',color:'black'}}/>
                          <p className='p__reviews'>2 Reviews</p>
                      </div>
                  </div>
                  <div className="productPage-details-price">
                      <p>{product.unit_price} DZD</p>
                  </div>
              </div>
              <div className="productPage-details-color">
                  <p className='color'>Color: <span>{selectedColor}</span></p>
                  <div className='productPage-details-colorSquares'>
                  {colors.map((color) => (
      <div
          key={color}
          onClick={() => handleColorClick(color)}
          style={{
              display:'flex',
              backgroundColor: "white",
              width: "33px",
              height: "33px",
              borderRadius: "50%",
              margin: "10px",
              border: selectedColor === color ? "3px solid black" : "none",
              position: "relative"
          }}
      >
          <div
              style={{
                  backgroundColor: color,
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                                }}
                            ></div>
                        </div>
                    ))}

                  </div>
              </div>
              <div className="productPage-details-size">
                  <p className="p__size">Size: < span style={{fontSize:"20px"}}>{selectedSize}</span></p>
                  <div className='productPage-details-sizeSquares'>
                  {sizes.map((size) => (
                      <div
                      key={size}
                      onClick={() => handleSizeClick(size)}
                      style={{
                          display : "flex",
                          justifyContent:"center",
                          backgroundColor: '#F9F9F9',
                          alignItems:"center",
                          
                          width: "50px",
                          height: "30px",
                          margin: "10px",
                          border: selectedSize === size ? "3px solid black" : "1px solid black"
                      }}
                      >{size}</div>
                  ))}
                  </div>
                  </div>
              <div className="productPage-details-amount-button">
                  <div className="productPage-details-button">
                  <button onClick={handleAddToCart}>Add to Bag</button>

                  <Heart48Filled  style={{color:heartColor?'#C2C2C2':'red',marginBottom:'9px'}}/>
                      
                  </div>
              </div>
              <div className="productPage-details-description">
              <p className="p__description" 
              style={{fontFamily: 'Brandon Grotesque',
                  fontStyle: 'normal',
                  fontWeight: '450',
                  fontSize: '26px',
                  lineHeight: '40px',
                  letterSpacing: '0.065em',
                  color: '#171717'}}>
                  DESCRIPTION : 
              </p>
              <p>{product.description}
                  </p>
              </div>
          </div>
          </div>
          <div className='you-might-like'>
          <div className="you-might-like-title" style={{display:'flex',justifyContent:'space-between',margin:'0 10%',alignItems:"center"}}>
            <p style={{
              fontSize: '32px',
              fontWeight: 'bold',
              lineHeight: '51.48px',
              transition: 'all 0.2s'}}>
              You might like
            </p>
            {/* <div style={{display:'flex',gap:'10px'}}><ArrowCircleLeft48Filled/>
            <ArrowCircleRight48Filled/> </div> */}
            
                    
          </div>
          <div className="slider" style={{margin:'8px 8%'}}>
          <Slider  {...settings}>
          {
              products.map((product)=>{
                
                  return (
                      <Link to={`/show-ProductsItems/${product.id}/`} key={product.id}>
                      <div className='root' style={{marginLeft:'25px'}}>
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
              </Slider>
              </div>

          </div>
          

                      </div>
                      
                      ):(<h1>LOADING...</h1>
        )}
      </div>
      )
  }

// const wishListAddButtonHandler =() =>{
      
  //     let previousWishList = localStorage.getItem('wishListData')
  //     let wishListJson = JSON.parse(previousWishList);
      
  //     const wishListData = [
  //       {
  //         'product': {
  //           'id': product.id,
  //           'name': product.name,
  //           'color': selectedColor, // include selected color here
  //           'size': selectedSize,
  //           'price': product.unit_price,
  //           'description': product.description,
  //           'image': product.image
  //         },
  //         'user': {
  //           'id': 1
  //         }
  //       }
  //     ];
    
  //     if (Array.isArray(wishListJson)) {
  //       let allWishListData = wishListJson.concat(wishListData);
  //       let wishListString = JSON.stringify(allWishListData);
  //       localStorage.setItem('wishListData', wishListString);
  //     } else {
  //       let wishListString = JSON.stringify(wishListData);
  //       localStorage.setItem('wishListData', wishListString);
  //     }
    
  //     setHeartColor(!heartColor);  
    
  // }