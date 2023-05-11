
import './orderSummaryCard.css'
import 'font-awesome/css/font-awesome.min.css';
import { TicketDiagonal24Regular} from '@fluentui/react-icons';



export const OrderSummaryCard = () => {
    return (
        <div className="bigContainer">
            <div className="bigContainer-title">
                <h1>ORDER SUMMARY</h1>
            </div>
            <hr />
            <div className="topContainer">
                
                <div className="topContainer-line">
                    <div className='topContainer-line-leftButton'>
                        <div className='ticket-icon'>
                            <TicketDiagonal24Regular color='#787878'/>
                            
                        </div>
                        <input type="text"  placeholder="ENTER CODE" />
                        
                    </div>
                    <div>
                        <button className='topContainer-line-rightButton' >Apply</button>
                    </div>
                </div>
                
            </div>
            <hr />
            <div className="middleContainer">
                <div className="middleContainer-line">
                    <p>PRODUCTS : </p>
                    <p> 2 </p>
                </div>
                <div className="middleContainer-line">
                    <p>SUB-TOTAL : </p>
                    <p> 8000DZD</p>
                </div>
                <div className="middleContainer-line">
                    <p>SHIPPING(FREE FOR MEMBERS) :</p>
                    <p> 1000DZD</p>
                </div>
                <hr />
            </div>

            <div className="bottomContainer">
                <div className="bottomContainer-top">

                
                <div className="bottomContainer-line">
                    <p>TOTAL :</p>
                    <p> 9000 DZD</p>
                </div>
                </div>
            
                <div className='bottomContainer-buttons'>
                    
                    <div>
                        <button className='bottomContainer-line-topButton' > SECURE CHECKOUT</button>
                    </div>
                    <div>
                        <button className='bottomContainer-line-topButton' style={{background:'#3b7bbf'}} > 
                        <i className="fa fa-paypal fa-2x"></i>

                        </button>
                    </div>
            </div>
            </div>
        </div>



    );

};