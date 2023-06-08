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

import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from '../../components/spinner/loadingSpinner';
import toast, { Toaster } from 'react-hot-toast';
import AuthContext from '../../context/AuthContext';








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
    slidesToShow: 3,
    slidesToScroll: 2,
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

  

  let [heartColor,setHeartColor]=useState(true)
  const [product, setProduct] = useState({})
  

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState();
  const colors = ["red", "blue", "green", "yellow"];
  const sizes = ["XS", "S", "M", "L","XL","XXL"]; 

  const [currentProduct, setCurrentProduct] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const { user,authTokens } = useContext(AuthContext);


  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('https://gymrat-app.onrender.com/auth/users/me/', {
          headers: {
            Authorization: 'JWT ' + authTokens,
          },
        });
        setUserInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserInfo();
  }, []);

 
  

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
        setCurrentProduct(product);
        
        setProduct(res.data);
        const fetchedProductId = res.data.id; // Replace with the actual property containing the ID
        setProductId(fetchedProductId)
        console.log(res.data)
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
            size: selectedSize,
            color: selectedColor,
          },
          {
            headers: {
              Authorization: "JWT " + authTokens,
            },
          }
        );
        toast.success("Product added to cart!");
      } catch (error) {
        toast.error("Failed to add product to cart. Please try again.");
        console.log(error);
      }
    } else {
      toast.error("Please log in to add items to your bag.");
    }
  };
  
  
  
  const handleAddToWishlist = async (index) => {
    if (user) {
      try {
        const response = await axios.post(
          "https://gymrat-app.onrender.com/favorites/add-favorites/",
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
        setHeartColor(false);
        toast.success("Product added to wishlist!");
  
      } catch (error) {
        toast.error("Failed to add product to wishlist. Please try again.");
        console.log(error);
      }
    } else {
      toast.error("Please log in to add items to your wishlist.");
    }
    
    if (sessionStorage.getItem("wishlist")) {
      const wishlist = JSON.parse(sessionStorage.getItem("wishlist"));
      const existingProductIndex = wishlist.findIndex((item) => item.id === product.id);
      if (existingProductIndex !== -1) {
        toast.error("Product is already added to wishlist.");
        return;
      }
    }
  };
      
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Retrieve comments from local storage on page load
    const storedComments = localStorage.getItem(`comments_${product.id}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [product.id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      const updatedComments = [...comments, { content: newComment, user: userInfo }];
      setComments(updatedComments);
      localStorage.setItem(`comments_${product.id}`, JSON.stringify(updatedComments));
      setNewComment('');
    }
  };
  
  return(

    <div className="productPage">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>


    {!loading ? (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="productPage-product" style={{ display: 'flex', gap: '70px', marginBottom: "70px" }}>
          <div className="images" style={{marginLeft:'70px',gap:'30px'}}>
          <div className="images2" style={{display:'flex',gap:'10px',marginBottom:'10px'}}>
          <div className="productPage-image">
          {product.image_urls[0] &&<img style={{ width: '250px', height: '300px', borderRadius: '5px' }} src={product.image_urls[0]} alt="imaage" />}
          </div>
          <div className="productPage-image">
          {product.image_urls[1] &&<img style={{ width: '250px', height: '300px', borderRadius: '5px' }} src={product.image_urls[1] } alt="imaage" />}
          </div>
          </div>
          
          <div className="images2" style={{display:'flex',gap:'10px'}}>
          <div className="productPage-image">
          {product.image_urls[2] &&<img style={{ width: '250px', height: '300px', borderRadius: '5px' }} src={product.image_urls[2]} alt=''/>}
          </div>
          <div className="productPage-image">
          {product.image_urls[3] &&<img style={{ width: '250px', height: '300px', borderRadius: '5px' }} src={ product.image_urls[3]} alt="imaage" />}
          </div>
          </div>
          
          </div>
          
          <div className="productPage-details" >
              <div className="productPage-details-title-reviews-price">
                  <div className="productPage-details-title-reviews">
                      <p>{product.name}</p>
                      <div className="productPage-details-reviews" style={{display:'flex',gap:'20px',height:'40px',alignItems:'center'}}>
                          <StarRating/>
                          {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
                          <hr  style={{height:'20px',color:'black'}}/>
                          <p className='p__reviews'>{comments.length} Reviews</p>
                      </div>
                  </div>
                  <div className="productPage-details-price">
                      <p>{product.unit_price*170} DZD</p>
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

                  <Heart48Filled onClick={handleAddToWishlist} style={{color:heartColor?'#C2C2C2':'red',marginBottom:'9px'}}/>
                      
                  </div>
              </div>
              <div className="productPage-details-description" >
              <p className="p__description" 
              style={{fontFamily: 'Brandon Grotesque',
              width:'500px',
                  fontStyle: 'normal',
                  fontWeight: '450',
                  fontSize: '26px',
                  lineHeight: '40px',
                  letterSpacing: '0.065em',
                  color: '#171717'}}>
                  DESCRIPTION : 
              </p>
              <p 
              style={{maxWidth: '100%',
              
              wordWrap: 'break-word',
        }}>{product.description}</p>
              </div>
          </div>
          </div>
          <div className="productPage-comments">
      
      <div className="productPage-comments">
        <p style={{fontFamily: 'Brandon Grotesque',
            fontStyle: 'normal',
            fontWeight: '450',
            fontSize: '32px',
            lineHeight: '40px',
            letterSpacing: '0.065em',

            color: '#171717',marginBottom:'30px'}}>Comments:</p>
        <ul className="comment-list">
          {comments.map((comment, index) => (
            <li key={index} className="comment" style={{ margin: '-5px' }}>
              <div>
                {comment.user && (
                  <p style={{ color: '#4A4A4A' }}>{comment.user.first_name}:</p>
                )}

                <div
                  className="comment-saved-container"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '7px',
                    padding: '5px',
                    width: `${comment.length * 10}px`,
                    color: 'gray',
                  }}
                >
                  {comment.content}
                </div>
                <p style={{ fontSize: '11px', marginLeft: '3px', color: '#C2C2C2' }}>
                  08-06-2023
                </p>
              </div>
            </li>
  ))}
</ul>

        <form onSubmit={handleCommentSubmit} className="comment-form">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="comment-input"
          ></textarea>
          <button type="submit" className="comment-button">Submit</button>
        </form>
      </div>
    </div>
          <div className='you-might-like'>
          
          <div className="you-might-like-title" style={{display:'flex',justifyContent:'space-between',margin:' 30px 120px',alignItems:"center"}}>
            <p style={{
              fontSize: '32px',
              fontWeight: 'bold',
              lineHeight: '51.48px',
              transition: 'all 0.2s'}}>
              You might like
            </p>
                  
          </div>
          <div className="slider" style={{ marginLeft:'20px',marginRight:'120px' }}>
                      <Slider {...settings}>
              {products
                .filter((product) => (product.category >1 && product.category[0]) === (currentProduct.category >1 && currentProduct.category[0]))
                .slice(0, 12)
                .map((product) => (
                  <div key={product.id} className='root' style={{marginLeft:'20px'}}>
                    <div
                      className='upper-side'
                      style={{
                        backgroundImage: `url(${
                          product.image_urls.length > 0 ? product.image_urls[0] : ''
                        })`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                      }}
                    >
                      <button className='shop-btn'>Shop now</button>
                    </div>
                    <div className='lower-side'>
                      <div>
                        <h5 style={{ textAlign: 'end' }} className='price-txt'>
                          {product.unit_price} DZD
                        </h5>
                      </div>
                      <h4 className='product-title'>{product.name}</h4>
                      <h4 className='prodoct-color-txt'>{product.color}</h4>
                    </div>
                  </div>
                ))}
            </Slider>

          </div>
        </div>
      </div>
    ) : (<LoadingSpinner/>)}
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