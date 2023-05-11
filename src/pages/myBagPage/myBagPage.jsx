import {Categories} from "../../components/categoriespannel/categories"
import { MyBag } from "../../components/myBag/mybag"
import './myBagPage.css'
import { useState } from "react"
import {Subtotal} from "./subtotal"
// import p1 from 'D:/react/ecom-frontend/src/assets/Images-20230511T152215Z-001/Images/Gymshark Official Store_ Men_s _ Women_s Workout Apparel.jpg';
// import p2 from 'D:/react/ecom-frontend/src/assets/Images-20230511T152215Z-001/Images/pic1.jpg';
// import p3 from 'D:/react/ecom-frontend/src/assets/Images-20230511T152215Z-001/Images/pic3-men.jpg';
// import p4 from "D:/react/ecom-frontend/src/assets/Images-20230511T152215Z-001/Images/Shop Men_s Gym Clothes _ Men's Activewear - Gymshark.jpg";



const bags = [
    {
      id: 1,
      price: '2000',
      title: 'nike t-shirt',
      color: 'sky blue',
    //   imageUrl: p1
    },
    {
      id: 2,
      price: '2000',
      title: 'nike t-shirt',
      color: 'sky blue',
    //   imageUrl: p2
    },
    {
      id: 3,
      price: '2000',
      title: 'nike t-shirt',
      color: 'sky blue',
    //   imageUrl: p3
    },
    {
      id: 4,
      price: '2000',
      title: 'nike t-shirt',
      color: 'sky blue',
    //   imageUrl: p4
    },
    {
      id: 5,
      price: '2000',
      title: 'nike t-shirt',
      color: 'sky blue',
    //   imageUrl: p3
    },
    {
      id: 5,
      price: '2000',
      title: 'nike t-shirt',
      color: 'sky blue',
    //   imageUrl: p4
    }
  ];
  

















export const MyBagPage = () =>{

    const [heartIsClicked,setheartIsClicked] = useState('');
        function heartHandleClick(){
            setheartIsClicked(!heartIsClicked);
        }   



    const [count, setCount] = useState(0);
    
    const subtotal = count * 400;
  
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleDecrement = () => {
      setCount(count - 1);
    };
   
    return(
        <div className="myBagPage">
            <Categories/>
            <div className="myBagCards-list">
            <MyBag/>
            <div className="myBagCards-cards">
            {
            bags.map((bag,index)=>{
               
                return(
                    <div className="myBag">
                    <div className="myBag-left">
                        <div className="heyhey">
                            <img src={require('D:/react/ecom-frontend/src/assets/Images-20230511T152215Z-001/Images/Gymshark Official Store_ Men_s _ Women_s Workout Apparel.jpg').default} alt="Favourites" />
                        </div>
                        <div className="myBag-img-details"> 
                            <p className="__title">{bag.title}</p>
                            <p className="__p">{bag.subTitle}</p>
                            <p className="__p">{bag.color}</p>
                        </div>
                    </div>
                    <div className="myBag-right">
                        <div className="rectangle-container">
                            <div className="rectangle-part1" onClick={handleDecrement}>-</div>
                            <div className="rectangle-part2">{count}</div>
                            <div className="rectangle-part3" onClick={handleIncrement}>+</div>
                        </div>
                        <div className="price">
                            <div style={{paddingRight:'30px'}}><p>{bag.price}</p></div>
                            <div className="icons">
                            <i class="fa fa-trash" style={{fontSize:"25px", color:'#C2C2C2'}}></i>
                                <hr />
                                <i class="fa fa-heart " style={{fontSize:"25px",color:heartIsClicked? 'red' : '#C2C2C2',border: '1px '}} onClick={heartHandleClick}></i>
                            </div>
                        </div>
            
                    </div>
            
                </div>
                
                )
                
            })

        }
            
            </div>
                <Subtotal subtotal={subtotal} count={count}/>
                    <div style={{display:"flex",justifyContent:"flex-end"}}>
                        <button className='myBagCards-orderButton' > Order</button>
                    </div>
            
            </div>
            

        </div>

    )
    }