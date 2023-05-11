import {Categories} from "../../components/categoriespannel/categories"
import { OrderSummaryCard } from "../../components/orderSummary_card/orderSummaryCard"
import './orderPage.css'
export const OrderPage = () =>{
    return(
        <div className="OrderPage">
            <Categories/>
            <OrderSummaryCard/>
        </div>

    )




}