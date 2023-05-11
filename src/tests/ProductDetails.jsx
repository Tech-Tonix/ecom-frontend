import axios from "axios";
import { useEffect, useState,useParams } from "react";
import { Card } from "../components/card/card";


export const ProductDetails = () =>{
    const [product, setProduct] = useState("")
    const {id} = useParams()
    const getSinglProduct = async () => {
        const {data} = await axios.get(`/${id}`)
        setProduct(data)
    }
    useEffect(()=>{
        getSinglProduct();
    },[])
    

return (
    <div>
        <h1> PRODUCTS</h1>
                <Card productPrice = {product.price} productName = {product.name} productColor = {product.color} imgUrl={product.image}/>
    </div>
)
}
