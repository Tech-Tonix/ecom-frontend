import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../components/card/card";


export const ShowProducts = () =>{

const [products, setProducts] = useState([])
const getProducts = async () => {
    const response = await axios.get('')
    setProducts(response.data)
}
useEffect(()=>{
    getProducts();
},[])
return (
    <div>
        <h1>SHOW ALL THE PRODUCTS</h1>
        {
            products.map((product,index)=>{
                return <Card productPrice = {product.price} productName = {product.name} productColor = {product.color} imgUrl={product.image}/>

            })

        }



    </div>






)

}