import {Categories} from "../../components/categoriespannel/categories"
import { MyBag } from "../../components/myBag/mybag"
import './myBagPage.css'
import { useState,useEffect } from "react"
import {Subtotal} from "./subtotal"
// import p1 from 'D:/react/ecom-frontend/src/assets/Images-20230511T152215Z-001/Images/Gymshark Official Store_ Men_s _ Women_s Workout Apparel.jpg';
// import p2 from 'D:/react/ecom-frontend/src/assets/Images-20230511T152215Z-001/Images/pic1.jpg';
// import p3 from 'D:/react/ecom-frontend/src/assets/Images-20230511T152215Z-001/Images/pic3-men.jpg';
// import p4 from "D:/react/ecom-frontend/src/assets/Images-20230511T152215Z-001/Images/Shop Men_s Gym Clothes _ Men's Activewear - Gymshark.jpg";



// const bags = [
//     {
//       id: 1,
//       price: '2000',
//       title: 'nike t-shirt',
//       color: 'sky blue',
//     //   imageUrl: p1
//     },
//     {
//       id: 2,
//       price: '2000',
//       title: 'nike t-shirt',
//       color: 'sky blue',
//     //   imageUrl: p2
//     },
//     {
//       id: 3,
//       price: '2000',
//       title: 'nike t-shirt',
//       color: 'sky blue',
//     //   imageUrl: p3
//     },
//     {
//       id: 4,
//       price: '2000',
//       title: 'nike t-shirt',
//       color: 'sky blue',
//     //   imageUrl: p4
//     },
//     {
//       id: 5,
//       price: '2000',
//       title: 'nike t-shirt',
//       color: 'sky blue',
//     //   imageUrl: p3
//     },
//     {
//       id: 5,
//       price: '2000',
//       title: 'nike t-shirt',
//       color: 'sky blue',
//     //   imageUrl: p4
//     }
//   ];
  


















export const MyBagPage = () =>{
  const [bags, setBags] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem('cartData');
    if (cartData) {
      const parsedCartData = JSON.parse(cartData);
      setBags(parsedCartData);
      setQuantityList(Array(parsedCartData.length).fill(0));
    }
  }, []);

    const [heartIsClicked,setheartIsClicked] = useState('');
        function heartHandleClick(){
            setheartIsClicked(!heartIsClicked);
        }   




    
  
    const [quantityList, setQuantityList] = useState(Array(bags.length).fill(1)); 

    const handleIncrement = (index) => {
      const newQuantityList = [...quantityList];
      newQuantityList[index] = newQuantityList[index]+1; 
      setQuantityList(newQuantityList);
    };
  
    const handleDecrement = (index) => {
      const newQuantityList = [...quantityList];
      if (newQuantityList[index] > 1) {
        newQuantityList[index] -= 1; // Decrement the quantity at the specified index
        setQuantityList(newQuantityList);
      }
    };
    const subtotal = bags.reduce((total, bag, index) => {
      const itemTotal = bag.product.price * quantityList[index];
      return total + itemTotal;
    }, 0);

    const count = quantityList.reduce((acc, quantity) => acc + quantity, 0);




    function handleDelete(index) {
      let previousCart = localStorage.getItem('cartData')
      let cartJson = JSON.parse(previousCart);
      cartJson.splice(index, 1);
      let updatedCart = JSON.stringify(cartJson);
      localStorage.setItem('cartData', updatedCart);
      setBags(cartJson);
    }




    return(
        <div className="myBagPage">
            <Categories/>
            <div className="myBagCards-list">
            <MyBag/>
            <div className="myBagCards-cards">
            {bags && bags.map((bag, index) => (
        <div className="myBag" key={index} >
          <div className="myBag-left">
            <div className="heyhey">
              <img
                src={require('D:/react/ecom-frontend/src/assets/Gymshark Official Store_ Men_s _ Women_s Workout Apparel.jpg').default}
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
              <div className="rectangle-part2">{quantityList[index]}</div>
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
                  className="fa fa-trash"onClick={() => handleDelete(index)} 
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