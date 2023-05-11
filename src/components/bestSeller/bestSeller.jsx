
import { useState,useEffect } from 'react';

import { Card } from '../card/card';
import p1 from 'D:/react/ecom-frontend/src/assets/Images-20230511T152215Z-001/Images/Gymshark Official Store_ Men_s _ Women_s Workout Apparel.jpg';
import p2 from 'D:/react/ecom-frontend/src/assets/Images-20230511T152215Z-001/Images/pic1.jpg';
import p3 from 'D:/react/ecom-frontend/src/assets/Images-20230511T152215Z-001/Images/pic3-men.jpg';
import p4 from "D:/react/ecom-frontend/src/assets/Images-20230511T152215Z-001/Images/Shop Men_s Gym Clothes _ Men's Activewear - Gymshark.jpg";
import p5 from './assets/p5.jpg';
import p6 from './assets/p6.jpg';

import './bestSeller.css'
export const BestSeller = (props) => {
    var title = props.title;
    // const [products, setProducts] = useState([])
    // const getProducts = async () => {
    // const response = await axios.get('https://gymrat-app.onrender.com/store/products/',{params: {
    //     limit: 13
    //   }
    // });
    //     setProducts(response.data)
    // }
    // useEffect(()=>{
    //     getProducts();
    //     },[])












    return (
        <div className='root'>
            <div className='bestSeller-section'>
                <div className='bestSeller-section-title'>
                    <h1 className='bestSeller-section-title-txt'>{title}</h1>
                    <p style={{textDecorationLine:'underline',fontSize:"22px",cursor:"pointer"}}> view all</p>
                </div>
                <div className='bestSeller-section-cards'>
                    <Card  productPrice ='2000' productName = 'Nike T-shirt' productColor = 'Sky Blue' imgUrl={p1}/>
                    <Card productPrice ='2000' productName = 'Nike T-shirt' productColor = 'Sky Blue' imgUrl = {p2}/>
                    <Card productPrice ='2000' productName = 'Nike T-shirt' productColor = 'Sky Blue' imgUrl={p3}/>
                    <Card productPrice ='2000' productName = 'Nike T-shirt' productColor = 'Sky Blue' imgUrl={p4}/>
                    <Card productPrice ='2000' productName = 'Nike T-shirt' productColor = 'Sky Blue' imgUrl={p5}/>
                    <Card productPrice ='2000' productName = 'Nike T-shirt' productColor = 'Sky Blue' imgUrl={p6}/>
                    <Card productPrice ='2000' productName = 'Nike T-shirt' productColor = 'Sky Blue' imgUrl={p1}/>
                    <Card productPrice ='2000' productName = 'Nike T-shirt' productColor = 'Sky Blue' imgUrl={p2}/>
                </div>
            </div>
        </div>
    );
}; 
