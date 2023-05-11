import { useEffect,useState } from "react"
import axios from "axios"
import { Card } from "../../components/card/card"


export const TestPage = () =>{
    const [products, setProducts] = useState([])
    const getProducts = async () => {
    const response = await axios.get('https://gymrat-app.onrender.com/store/products/')
        setProducts(response.data)
    }
    useEffect(()=>{
        getProducts();
        },[])



    return (
        <div className="testPage">

            <h1>here are all the products</h1>
            {
            products.map((product,index)=>{
                return <Card productPrice = {product.unit_price} productName = {product.name} productColor = {product.description} imgUrl={product.image}/>

            })

        }




        </div>

    )
}