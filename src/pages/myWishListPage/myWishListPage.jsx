import { useState,useEffect,useContext } from "react";
import { Categories } from "../../components/categoriespannel/categories";
import Card from "../../components/myWishlistCard/wishlistCard";
import './mywishlistpage.css' 
import Wishtext from "../../components/wishpagetext/wishtext";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { ChevronRight24Filled } from '@fluentui/react-icons';
import { Delete24Regular } from '@fluentui/react-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './wishlistCard.css'



const sizes = ["S", "M", "L", "XL"];
const colors = ["Black", "White",  "Red", "Green"]


export const MyWishListPage = () =>{
  let size;
  let color;
  const { user,authTokens } = useContext(AuthContext);  
  const [wishList, setWishList] = useState([]);
  const [quantityList, setQuantityList] = useState([]);
  const [selectedSize, setSelectedSize] = useState(size || sizes[0]);
  


  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  
  const [selectedColor, setSelectedColor] = useState(color || colors[0]); 
  const handleColorChange = (eventcolor) => {
    setSelectedColor(eventcolor.target.value); 
  };

  const [numItems, setNumItems] = useState(1);
  

 







  const handleAddItem = () =>{
    setNumItems(numItems + 1); 
  };


  useEffect(() => {
    const fetchWishList = async () => {
      try {
        const response = await axios.get('https://gymrat-app.onrender.com/favorites/favorites/', {
          headers: {
            Authorization: 'JWT ' + authTokens,
          },
        });
        setWishList(response.data);
        console.log(response.data)
        const initialQuantities = response.data.map((item) => item.quantity);
        setQuantityList(initialQuantities);
      } catch (error) {
        console.log('Failed to fetch wishlist items.', error);
      }
    };

    fetchWishList();
  }, [authTokens]);

  const handleIncrement = async (index) => {
    const newWishList = [...wishList];
    newWishList[index].quantity += 1;
    setWishList(newWishList);

    const wishItemId = newWishList[index].product.id;
    const newQuantity = newWishList[index].quantity;

    try {
      await axios.put(
        `https://gymrat-app.onrender.com/store/update-wishlistitem/${wishItemId}/`,
        { quantity: newQuantity },
        {
          headers: {
            Authorization: 'JWT ' + authTokens,
          },
        }
      );
      console.log('Wishlist item quantity updated successfully!');

      const newQuantityList = [...quantityList];
      newQuantityList[index] += 1;
      setQuantityList(newQuantityList);
    } catch (error) {
      console.log('Failed to update wishlist item quantity.', error);
    }
  };

  const handleDecrement = async (index) => {
    const newWishList = [...wishList];
    if (newWishList[index].quantity > 1) {
      newWishList[index].quantity -= 1;
      setWishList(newWishList);

      const wishItemId = newWishList[index].product.id;
      const newQuantity = newWishList[index].quantity;

      try {
        await axios.put(
          `https://gymrat-app.onrender.com/store/update-wishlistitem/${wishItemId}/`,
          { quantity: newQuantity },
          {
            headers: {
              Authorization: 'JWT ' + authTokens,
            },
          }
        );
        console.log('Wishlist item quantity updated successfully!');

        const newQuantityList = [...quantityList];
        newQuantityList[index] -= 1;
        setQuantityList(newQuantityList);
      } catch (error) {
        console.log('Failed to update wishlist item quantity.', error);
      }
    }
  };

  const handleAddToCart1 = async (index) => {
    const itemToAdd = wishList[index];
    console.log(itemToAdd);
    try {
      await axios.post(
        'https://gymrat-app.onrender.com/store/add-cart/',
        {
          product_id: itemToAdd.product.id,
          quantity: itemToAdd.quantity,
        },
        {
          headers: {
            Authorization: 'JWT ' + authTokens,
          },
        }
      );
      console.log('Product added to cart successfully!');
      toast.success('Product added to cart!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      console.log('Failed to add product to cart.', error);
      toast.error('Failed to add product to cart.', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
     


  const handleDelete = async (index) => {
    const itemToDelete = wishList[index];
    const wishItemId = itemToDelete.product.id;
  
    try {
      const response = await axios.delete(
        `https://gymrat-app.onrender.com/favorites/delete-favorites/${wishItemId}/`,
        {
          headers: {
            Authorization: 'JWT ' + authTokens,
          },
        }
      );
  
      if (response.status === 204) {
        const updatedWishList = [...wishList];
        updatedWishList.splice(index, 1);
        setWishList(updatedWishList);
      }
    } catch (error) {
      console.error('Error deleting wishlist item:', error);
    }
  };
  

  
  return (
  <div className="MyWishListPageWrapper">
    <div className="categoriesPannelWishListPage">
      <Categories />
    </div>
    <div className="text-plus-card">
      <div className="textMywishListPage">
        <Wishtext />
      </div>
      <div className="cardContainerWishList">
        {wishList.map((wishCard, index) => (
          <div className="card-container-wishlist" key={wishCard.id}>
            <Delete24Regular className="deleteIcon" onClick={()=>handleDelete(index)} />
            <div className="cardImgContainer">
              {<img src={wishCard.product.image_urls && wishCard.product.image_urls[0]} alt="product_image" className="cardImage" />}
            </div>
            <div className="cardContent-btn-wrapper">
              <div className="cardContent-wishlist">
                <h2 className="cardTitle">{wishCard.product.name}</h2>
                <p className="cardPrice">{wishCard.product.unit_price*170} DZD</p>

                <div className="colorOfItems">
                  <Select value={selectedColor} onChange={handleColorChange} IconComponent={ChevronRight24Filled}>
                    {colors.map((color) => (
                      <MenuItem key={color} value={color}>
                        {color}
                      </MenuItem>
                    ))}
                  </Select>
                </div>

                <div className="cardSizeSelect" style={{marginBottom:'30px'}}>
                  <Select value={selectedSize} onChange={handleSizeChange} IconComponent={ChevronRight24Filled}>
                    {sizes.map((size) => (
                      <MenuItem key={size} value={size}>
                        {size}
                      </MenuItem>
                    ))}
                  </Select>
                </div>

               
              </div>
              <div>
                <button className="cardBtn" onClick={() => handleAddToCart1(index)}>
                  ADD TO BAG
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

  
    
    
}


/*return(

  <div style={{margin:'10rem 10rem',display:'flex',justifyContent:'space-evenly'}}>
      <Categories/>
      <div className="wishlists">
  { wishlists.map((wishlist,index) =>(

      <div className="wishList" key={index}>
        <p>{wishlist.product.name}</p>
        <p>{wishlist.product.price}</p>
        <p>{wishlist.product.description}</p>
        <i
            className="fa fa-trash" onClick={() => handleDelete2(index)} 
            style={{ fontSize: '25px', color: '#C2C2C2',cursor:'pointer' }}
          ></i>
      </div>



          ))} 
      </div>





  </div>
)*/  
    
    // Sample array of card data
  // const cardData = [
  //   {
  //     id: 1,
  //     imageSrc: "path-to-image1",
  //     title: "Card 1",
  //     price: "$10",
  //     color: "Black",
  //     size: "M",
  //     nbItems: 1,
  //   },
  //   {
  //     id: 2,
  //     imageSrc: "path-to-image1",
  //     title: "Card 1",
  //     price: "$10",
  //     color: "Black",
  //     size: "M",
  //     nbItems: 1,
  //   },
  //   {
  //     id: 3,
  //     imageSrc: "path-to-image1",
  //     title: "Card 1",
  //     price: "$10",
  //     color: "Black",
  //     size: "M",
  //     nbItems: 1,
  //   },
  //   {
  //     id: 4,
  //     imageSrc: "path-to-image1",
  //     title: "Card 4",
  //     price: "$10",
  //     color: "Black",
  //     size: "M",
  //     nbItems: 1,
  //   },
  //   {
  //     id: 5,
  //     imageSrc: "path-to-image1",
  //     title: "Card 4",
  //     price: "$10",
  //     color: "Black",
  //     size: "M",
  //     nbItems: 1,
  //   },
  //   {
  //     id: 6,
  //     imageSrc: "path-to-image1",
  //     title: "Card 4",
  //     price: "$10",
  //     color: "Black",
  //     size: "M",
  //     nbItems: 1,
  //   },
  // ];
