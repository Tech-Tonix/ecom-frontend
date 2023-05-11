import './productPage.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { Rating } from '@fluentui/react';
import { StarRating } from './rating';
import { Heart28Regular } from '@fluentui/react-icons';
export const ProductPage =() =>{

    


  const [product, setProduct] = useState({})
  const [cartButtonClickStatus,setCartButtonClickStatus] = useState(false)
  const [count, setCount] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const colors = ["red", "blue", "green", "yellow"];
  const sizes = ["XS", "S", "M", "L","XL","XXL"]; 
  const handleColorClick = (color) => {
    setSelectedColor(color);
    
  };
  const handleSizeClick = (size) => {
    setSelectedSize(size);
    
  };
  const handleIncrement = () => {
    
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0){
    setCount(count - 1);}
  };
  // const {id} = useParams()
 
  // useEffect(()=>{
  //     getSinglProduct();
  // },[])
  // const getSinglProduct = async () => {
  //   const {data} = await axios.get(`https://gymrat-app.onrender.com/store/products/`+{id})
  //   console.log(data)
  //     setProduct(data)
  // }
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`https://gymrat-app.onrender.com/store/products/`+id);
        setProduct(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, );

 // const [product, setProduct] = useState({})
  // const [cartButtonClickStatus,setCartButtonClickStatus] = useState(false)

  // const {id} = useParams()
 
  // useEffect(()=>{
  //     getSinglProduct();
  // },[])
  // const getSinglProduct = async () => {
  //   const {data} = await axios.get(`https://gymrat-app.onrender.com/store/products/`+{id})
  //   console.log(data)
  //     setProduct(data)
  // }
  // const [loading, setLoading] = useState(true);
  // const { id } = useParams();

  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const res = await axios.get(`https://gymrat-app.onrender.com/store/products/`+id);
  //       setProduct(res.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getProduct();
  // }, );
  // useEffect(() => {
  //   const fetchProductData = async () => {
  //     try {
  //       const response = await axios.get('https://gymrat-app.onrender.com/store/products/%3Cint:id%3E//'+id);
  //       const data = response.data;
  //       setProduct(data);
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   };
  
  //   fetchProductData();
  //   console.log(id)
  // }, []);


  const cartAddButtonHandler = () =>{
    let previousCart = localStorage.getItem('cartData')

    let cartJson = JSON.parse(previousCart);
    
    const cartData=[
      {'product':{
        'id' : product.id,
        'name': product.name,
        'price':product.unit_price,
    },
      'user':{
        'id':1
      }
      }
    ];
    if (cartJson==null){
      let allCartData = cartJson.push(cartData);
      let cartString = JSON.stringify(allCartData);
      localStorage.setItem('cartData',cartString)
    }else{
      let cartString = JSON.stringify(cartData);
      localStorage.setItem('cartData',cartString)
    }
}
  
    



  //   setCartButtonClickStatus(true)  
  // }
  // const cartRemoveButtonHandler = () =>{
  //   // localStorage.removeItem('cartData')
  //   setCartButtonClickStatus(false) 
  // }

























    return(

    <div className="productPage">
        {loading?
      ( <>
        <div className="productPage-image">
            <img style={{width:'450px',height:'450px'}} src={product.image} alt="imaage" />
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
                    <p>{product.unit_price}</p>
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
                <div className="productPage-details-amount">
                    <p className="p__amount">Amount</p>
                    <div className="rectangle-container" style={{alignItems:"start"}}>
                        <div className="rectangle-part1" onClick={handleDecrement}>-</div>
                        <div className="rectangle-part2">{count}</div>
                        <div className="rectangle-part3" onClick={handleIncrement}>+</div>
            </div>
                </div>
                <div className="productPage-details-button">
                    <button type='button' onClick={cartAddButtonHandler}>ADD TO BAG </button>
                    <Heart28Regular/>
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
                    </>):(<h1>LOADING...</h1>
      )}
    </div>
    )
}