import {Categories} from "../../components/categoriespannel/categories"
import { MyBag } from "../../components/myBag/mybag"
import './myBagPage.css'
import { useState,useEffect,useContext } from "react"
import {Subtotal} from "./subtotal"








import axios from "axios"
import AuthContext from '../../context/AuthContext'



export const MyBagPage = () =>{
  const { user,authTokens } = useContext(AuthContext);  
  const [bags, setBags] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [heartIsClicked,setheartIsClicked] = useState('');

  const [quantityList, setQuantityList] = useState([]);
  
  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('https://gymrat-app.onrender.com/store/cartitems/', {
        headers: {
          Authorization: 'JWT ' + authTokens, // Replace with your authentication tokens
        },
      });
      setCartItems(response.data);
    } catch (error) {
      console.log('Failed to fetch cart items.', error);
    }
  };

  const handleIncrement = async (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);

    const cartItemId = newCartItems[index].id;
    const newQuantity = newCartItems[index].quantity;

    try {
      await axios.put(
        `https://gymrat-app.onrender.com/store/cartitems/${cartItemId}/`,
        { quantity: newQuantity },
        {
          headers: {
            Authorization: 'JWT ' + authTokens, // Replace with your authentication tokens
          },
        }
      );
      console.log('Cart item quantity updated successfully!');
    } catch (error) {
      console.log('Failed to update cart item quantity.', error);
    }
  };

  const handleDecrement = async (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);

      const cartItemId = newCartItems[index].id;
      const newQuantity = newCartItems[index].quantity;

      try {
        await axios.put(
          `https://gymrat-app.onrender.com/store/cartitems/${cartItemId}/`,
          { quantity: newQuantity },
          {
            headers: {
              Authorization: 'JWT ' + authTokens, // Replace with your authentication tokens
            },
          }
        );
        console.log('Cart item quantity updated successfully!');
      } catch (error) {
        console.log('Failed to update cart item quantity.', error);
      }
    }
  };

  const handleDelete = async (index) => {
    const cartItemId = cartItems[index].id;

    try {
      await axios.delete(`https://gymrat-app.onrender.com/store/cartitems/${cartItemId}/`, {
        headers: {
          Authorization: 'JWT ' + authTokens, // Replace with your authentication tokens
        },
      });
      console.log('Cart item deleted successfully!');
      const updatedCartItems = cartItems.filter((item, i) => i !== index);
      setCartItems(updatedCartItems);
    } catch (error) {
      console.log('Failed to delete cart item.', error);
    }
  };

  useEffect(() => {
    // Fetch the user and authentication tokens (implement your own logic)
    const updateCartItems = async () => {
      try {
        const response = await axios.get('https://gymrat-app.onrender.com/store/carts/', {
          headers: {
            Authorization: 'JWT ' + authTokens,
          },
        });
        setCartItems(response.data);
      } catch (error) {
        console.log('Failed to fetch cart items.', error);
      }
    };

    updateCartItems();
  }, []);
    const subtotal = cartItems.reduce((total, item, index) => {
    const itemTotal = item.product.price * quantityList[index];
    return total + itemTotal;
  }, 0);

  const count = quantityList.reduce((acc, quantity) => acc + quantity, 0);

  function heartHandleClick(){
    setheartIsClicked(!heartIsClicked);
} 


    return(
        <div className="myBagPage">
            <Categories/>
            <div className="myBagCards-list">
            <MyBag/>
            <div className="myBagCards-cards">
            {cartItems.map((bag,index) => (
        <div className="myBag" key={bag.id} >
          <div className="myBag-left">
            <div className="heyhey">
              <img
                alt="Favourites"
              />
            </div>
            <div className="myBag-img-details">
              <p className="__title">{bag.product.name}</p>
              <p className="__p"> {bag.product.description}</p>
              <p className="__p">color: {JSON.stringify(bag.product.color)}</p>
              <p className="__p">size: {JSON.stringify(bag.product.size)}</p>
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
                <p>{bag.product.price}</p>
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
        </div>
      ))}
            
            </div>
                <Subtotal subtotal={subtotal} count={count}/>
                    <div style={{display:"flex",justifyContent:"flex-end"}}>
                        <button className='myBagCards-orderButton' > Order</button>
                    </div>
            
            </div>
            

        </div>

    )
    }