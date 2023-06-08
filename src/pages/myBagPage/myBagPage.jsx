import {Categories} from "../../components/categoriespannel/categories"
import { MyBag } from "../../components/myBag/mybag"
import './myBagPage.css'
import { useState,useEffect,useContext } from "react"
import {Subtotal} from "./subtotal"
import axios from "axios"
import AuthContext from '../../context/AuthContext'

import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { fontSize, textAlign } from "@mui/system"
import { toast,Toaster } from "react-hot-toast"
import { Link } from "react-router-dom"


export const MyBagPage = () =>{
   const { user,authTokens } = useContext(AuthContext);  
  const [bags, setBags] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [heartIsClicked,setheartIsClicked] = useState('');
  let [count, setCount] = useState([]);
  const [quantityList, setQuantityList] = useState([]);
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(trackingNumber)
      .then(() => setCopied(true))
      .catch(() => setCopied(false));
  };

  

  const handleIncrement = async (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);

    const itemToUpdate = newCartItems[index];
    const cartItemId = itemToUpdate.product.id;
    const newQuantity = newCartItems[index].quantity;

    try {
      await axios.put(
        `https://gymrat-app.onrender.com/store/update-cartitem/${cartItemId}/`,
        { quantity: newQuantity },
        {
          headers: {
            Authorization: 'JWT ' + authTokens,
          },
        }
      );
      console.log('Cart item quantity updated successfully!');

      const newQuantityList = [...quantityList];
      newQuantityList[index] += 1;
      setQuantityList(newQuantityList);
    } catch (error) {
      console.log('Failed to update cart item quantity.', error);
    }
  };

  const handleDecrement = async (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);

      const itemToUpdate = newCartItems[index];
      const cartItemId = itemToUpdate.product.id;
      const newQuantity = newCartItems[index].quantity;
      
      try {
        await axios.put(
          `https://gymrat-app.onrender.com/store/update-cartitem/${cartItemId}/`,
          { quantity: newQuantity },
          {
            headers: {
              Authorization: 'JWT ' + authTokens,
            },
          }
        );
        console.log('Cart item quantity updated successfully!');

        const newQuantityList = [...quantityList];
        newQuantityList[index] -= 1;
        setQuantityList(newQuantityList);
        
      } catch (error) {
        console.log('Failed to update cart item quantity.', error);
      }
    }
  };
   count = quantityList.reduce((acc, quantity) => acc + quantity, 0);
  
  const handleDelete = async (index) => {
    const itemToDelete = cartItems[index];
    const cartItemId = itemToDelete.product.id;
    const deletedQuantity = itemToDelete.quantity;
    
    try {
      const response = await axios.delete(
        `https://gymrat-app.onrender.com/store/delete-cartitem/${cartItemId}/`,
        {
          headers: {
            Authorization: 'JWT ' + authTokens,
          },
        }
      );
  
      if (response.status === 204) {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        
  
        // Update the count by subtracting the deleted quantity
        setCount((prevCount) => prevCount - deletedQuantity);
  
        toast.success('Product deleted from cart!');
      }
    } catch (error) {
      console.error('Error deleting cart item:', error);
      toast.error('Product have not been deleted from cart!');
    }
  };
  
  useEffect(() => {
    
    const updateCartItems = async () => {
      try {
        const response = await axios.get('https://gymrat-app.onrender.com/store/carts/', {
          headers: {
            Authorization: 'JWT ' + authTokens,
          },
        });
        setCartItems(response.data);
        
        const initialQuantities = response.data.map((item) => item.quantity);
        setQuantityList(initialQuantities);
      } catch (error) {
        console.log('Failed to fetch cart items.', error);
      }
    };

    updateCartItems();
    
  }, []);
  const handleAddToWishlist1 = async (index) => {
    const itemToAdd = cartItems[index];
    console.log(itemToAdd)
    if (user) {
      try {
        const response = await axios.post(
          "https://gymrat-app.onrender.com/favorites/add-favorites/",
          {
            product_id: itemToAdd.product.id,
            quantity: itemToAdd.quantity,
          },
          {
            headers: {
              Authorization: "JWT " + authTokens,
            },
          }
        );
        
        toast.success("Product added to wishlist!");
        
      } catch (error) {
        console.error(error);
        toast.error("Failed to add product to wishlist. Please try again.");
      }
    } else {
      toast.error("You need to be logged in to add products to the wishlist.");
    }
  };
  






  const subtotal = cartItems.reduce((total, item, index) => {
    const itemTotal = item.product.unit_price * quantityList[index];
    return total + itemTotal;
  }, 0);

  
  

const [trackingCode, setTrackingCode] = useState('');
const [trackingNumber, setTrackingNumber] = useState('');




const exceedsInventory = cartItems.some(
  (item) => item.quantity > item.inventory
);

const handleOrder = async () => {
  if (exceedsInventory) {
    toast.error('Cannot order more than available inventory.');
    return;
  }

  try {
    const response = await axios.post(
      'https://gymrat-app.onrender.com/store/orders/',
      null,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'JWT ' + authTokens,
        },
      }
    );

    if (response.status === 201) {
      setCartItems([]);
      const { tracking_number } = response.data;
      setTrackingNumber(tracking_number);
      openModal2();
    } else {
      toast.error('Cannot order more than available inventory.');
    }
  } catch (error) {
    toast.error('Cannot order more than available inventory.');
  }
};


const [isOpen, setIsOpen] = useState(false);
const [isOpen2, setIsOpen2] = useState(false);

const openModal = () => {
  if (cartItems.length > 0) {
    setIsOpen(true);
  }
};

const openModal2 = () => {
  setIsOpen2(true);
};

const closeModal = () => {
  setIsOpen(false);
};

const closeModal2 = () => {
  setIsOpen2(false);
};

const closeModalss = () => {
  setIsOpen2(false);
  setIsOpen(false);
};
    return(
      user ? (

        <div className="myBagPage">
          <Toaster
  position="top-center"
  reverseOrder={false}
/>


            <div style={{marginTop:'-560'}}><Categories /></div>
            <div className="myBagCards-list">
              <div ><MyBag/></div>
            
            <div className="myBagCards-cards">
            {cartItems.map((bag,index) => (
              bag.product.color?(
              
              
              <div className="myBag" key={bag.id} >
              <div className="myBag-left">
              <Link to={'/show-ProductsItems/'+bag.product.id}>
                <div className="heyhey">
                  <img src={bag.product.image_urls && bag.product.image_urls[0]} alt="hahaha" style={{height:'auto',width:'150px',}}/>
                </div>
                </Link>
                <div className="myBag-img-details">
                <p className="__title">
                          {bag.product.name} <span style={{fontSize:'12px',color:'#747474'}}>({bag.product.inventory} item available)</span>
                        </p>

                  
                  <p className="__p">color: {bag.product.color}</p>

                  <p className="__p">size: {bag.product.size}</p>
                  
                </div>
              </div>
              <div className="myBag-right">
                <div className="rectangle-container">
                  <div className="rectangle-part1" onClick={() => handleDecrement(index)}>
                    -
                  </div>
                  <div className="rectangle-part2">{bag.quantity}</div>
                  <div className="rectangle-part3" onClick={() => handleIncrement(index)}>
                    +
                  </div>
                </div> 
                <div className="price">
                  <div style={{ paddingRight: '30px' }}>
                    <p>{bag.product.unit_price*170}DZD</p>
                  </div>
                  <div className="icons">
                    <i
                      className="fa fa-trash" onClick={() => handleDelete(index)} 
                      style={{ fontSize: '25px', color: '#C2C2C2',cursor:'pointer' }}
                    ></i>
                    <hr />
                    
                  </div>
                </div>
              </div>
              
            </div>
            )
           
            :(<div className="myBag" key={bag.id} >
          <div className="myBag-left">
            <div className="heyhey">
            <img src={bag.product.image_urls && bag.product.image_urls[0]} alt="hahaha" />
            </div>
            <div className="myBag-img-details">
              <p className="__title">{bag.product.name}<span style={{fontSize:'12px',color:'#747474'}}>({bag.product.inventory} item available)</span></p>
              <p className="__p"> {bag.product.description}</p>
              
              
            </div>
          </div>
          <div className="myBag-right">
            <div className="rectangle-container">
              <div className="rectangle-part1" onClick={() => handleDecrement(index)}>
                -
              </div>
              <div className="rectangle-part2">{bag.quantity}</div>
              <div className="rectangle-part3" onClick={() => handleIncrement(index)}>
                +
              </div>
            </div> 
            <div className="price">
              <div style={{ paddingRight: '30px' }}>
                <p>{bag.product.unit_price*170} DZD</p>
              </div>
              <div className="icons">
                <i
                  className="fa fa-trash" onClick={() => handleDelete(index)} 
                  style={{ fontSize: '25px', color: '#C2C2C2',cursor:'pointer' }}
                ></i>
                <hr />
                <i
                  className="fa fa-heart" 
                  style={{
                    fontSize: '25px',
                    color: heartIsClicked ? 'red' : '#C2C2C2',
                    border: '1px ',
                  }}
                  onClick={handleAddToWishlist1}
                ></i>
              </div>
            </div>
          </div>
        </div>)
        
      ))}
            
            </div>
                <Subtotal subtotal={subtotal*170} count={count}/>
                    <div style={{display:"flex",justifyContent:"flex-end"}}>
                    <button className='myBagCards-orderButton' onClick={openModal}>Order</button>
                    </div>
                    <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            width: '400px',
            height: '300px',
            margin: 'auto',
            background: '#fff', // Background color
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow
          },
        }}
      >
        
        <h2 className="titleModal1">Order Confirmation</h2>
        
        <p style={{ color: '#333',
                    marginBottom:'20px',
                    fontSize:'18px',
                    display:'block',
                    padding:'8px',
                    textAlign:'center'

      }}>Awsome! You just have to confirm your oder </p>
      <div className="CancelOptionBtn">
      <button
  style={{
    background: '#00d800', // Button background color
    color: '#fff', // Button text color
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
    display: 'block',
    marginTop: '80px'
  }}
  onClick={() => {
    handleOrder();
    closeModal();
  }}
>
  CONFIRM
</button>
<button
  style={{
    background: '#e04000', // Button background color
    color: '#fff', // Button text color
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
    display: 'block',
    marginTop: '80px'
  }}
  onClick={closeModal}
>
  CANCEL
</button>

        </div>
      </Modal>
      <Modal
        isOpen={isOpen2}
        onRequestClose={closeModal2}
        style={{
          content: {
            width: '500px',
            height: '500px',
            margin: 'auto',
            background: '#fff', // Background color
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
            zIndex:'80'
          },
        }}
      >
        <div className="wrapperTrackCpyetc">
        <h2 style={{ color: '#333',
        marginBottom: '20px',

      
      }}>Order tracking</h2>
       
        <p style={{ color: '#333',
      width:'400px',
      textAlign:'center',
      fontSize:'18px' }}>You can track your order using this Tracking Code in the Track Order Page,You'll be updated during the hole process of Delievery! </p>
       {trackingNumber && (
          <div className="TrackingNumberSecondModal">
            <p className="ParagTrackModal2">Tracking Number: {trackingNumber}</p>
          <button className="myBagCards-orderButtonTrackModal" onClick={handleCopy}>
            {copied ? 'Copied' : 'Copy'}
          </button>
            
          </div>
          
        )}
        <button className="buttonCloseTrack" onClick={closeModalss}
        >
          close
        </button>
        </div>
      </Modal>
            
            </div>
            

        </div>)
        :
        (
          <div style={{margin:"4rem 0"}}>please login to acces to this page</div>
        )

    )
    }