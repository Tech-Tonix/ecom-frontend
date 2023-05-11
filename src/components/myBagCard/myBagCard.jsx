import { useState } from "react"
import p1 from 'D:/react/ecom-frontend/src/assets/Images-20230511T152215Z-001/Images/Gymshark Official Store_ Men_s _ Women_s Workout Apparel.jpg';
import './myBagCard.css'







export const MyBagCard = ({ count, handleIncrement, handleDecrement}) =>{
    var title;
    var subTitle;
    var color;
    var price
    const [heartIsClicked,setheartIsClicked] = useState('');
        function heartHandleClick(){
            setheartIsClicked(!heartIsClicked);
        }   

    return(
        <div className="myBag">
        <div className="myBag-left">
            <div className="heyhey">
                <img src={require(p1).default} alt="Favourites" />
            </div>
            <div className="myBag-img-details"> 
                <p className="__title">{title}</p>
                <p className="__p">{subTitle}</p>
                <p className="__p">{color}</p>
            </div>
        </div>
        <div className="myBag-right">
            <div className="rectangle-container">
                <div className="rectangle-part1" onClick={handleDecrement}>-</div>
                <div className="rectangle-part2">{count}</div>
                <div className="rectangle-part3" onClick={handleIncrement}>+</div>
            </div>
            <div className="price">
                <div style={{paddingRight:'30px'}}><p>{price}</p></div>
                <div className="icons">
                <i class="fa fa-trash" style={{fontSize:"25px", color:'#C2C2C2'}}></i>
                    <hr />
                    <i class="fa fa-heart " style={{fontSize:"25px",color:heartIsClicked? 'red' : '#C2C2C2',border: '1px '}} onClick={heartHandleClick}></i>
                </div>
            </div>

        </div>

    </div>
    
    )




}