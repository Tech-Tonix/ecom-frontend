import {Categories} from "../../components/categoriespannel/categories"
import { MyBag } from "../../components/myBag/mybag"
import './myBagPage.css'
import { useState,useEffect,useContext } from "react"
import {Subtotal} from "./subtotal"
import axios from "axios"
import AuthContext from '../../context/AuthContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const MyBagPage = () =>{
   const { user,authTokens } = useContext(AuthContext);  
  const [bags, setBags] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [heartIsClicked,setheartIsClicked] = useState('');
  let [count, setCount] = useState([]);
  const [quantityList, setQuantityList] = useState([]);
  

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
  
        toast.success('Product deleted from cart!', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error('Error deleting cart item:', error);
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

  const subtotal = cartItems.reduce((total, item, index) => {
    const itemTotal = item.product.unit_price * quantityList[index];
    return total + itemTotal;
  }, 0);

  
  function heartHandleClick(){
    setheartIsClicked(!heartIsClicked);
} 
  const handleOrder = async () => {
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
        
        toast.success('Order placed successfully!');
      } else {
         
        setCartItems([]);
        setCount(0)
        toast.error('Failed to place order.');
      }
    } catch (error) {
      setCartItems([]);
      toast.error('Failed to place order.');
    }
  };


    return(
      user ? (

        <div className="myBagPage">
            <div style={{marginTop:'-560'}}><Categories /></div>
            <div className="myBagCards-list">
              <div ><MyBag/></div>
            
            <div className="myBagCards-cards">
            {cartItems.map((bag,index) => (
              bag.product.color?(<div className="myBag" key={bag.id} >
              <div className="myBag-left">
                <div className="heyhey">
                  <img src={bag.product.name} alt="" />
                </div>
                <div className="myBag-img-details">
                  <p className="__title">{bag.product.name}</p>
                  <p className="__p"> {bag.product.description}</p>
                  <p className="__p">color: {JSON.stringify(bag.product.color)}</p>
                  
                  <p className="__p">size: {JSON.stringify(bag.product.size)}</p>
                  <p className="__p"> {bag.product_id}</p>
                </div>
              </div>
              <div className="myBag-right">
                <div className="rectangle-container">
                  <div className="rectangle-part1" onClick={() => handleDecrement(index)}>
                    -
                  </div>
                  <div className="rectangle-part2">{bag.product.quantity}</div>
                  <div className="rectangle-part3" onClick={() => handleIncrement(index)}>
                    +
                  </div>
                </div> 
                <div className="price">
                  <div style={{ paddingRight: '30px' }}>
                    <p>{bag.product.unit_price}</p>
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
                      onClick={heartHandleClick}
                    ></i>
                  </div>
                </div>
              </div>
            </div>):(<div className="myBag" key={bag.id} >
          <div className="myBag-left">
            <div className="heyhey">
              <img src={bag.product.image} alt="" />
            </div>
            <div className="myBag-img-details">
              <p className="__title">{bag.product.name}</p>
              <p className="__p"> {bag.product.description}</p>
              <p className="__p"> product id :{bag.product_id}</p>
              
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
                <p>{bag.product.unit_price} DZD</p>
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
                  onClick={heartHandleClick}
                ></i>
              </div>
            </div>
          </div>
        </div>)
        
      ))}
            
            </div>
                <Subtotal subtotal={subtotal} count={count}/>
                    <div style={{display:"flex",justifyContent:"flex-end"}}>
                    <button className='myBagCards-orderButton' onClick={handleOrder}>Order</button>
                    </div>
            
            </div>
            

        </div>)
        :
        (
          <div style={{margin:"4rem 0"}}>please login to acces to this page</div>
        )

    )
    }