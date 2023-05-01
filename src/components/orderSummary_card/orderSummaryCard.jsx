
import './orderSummaryCard.css'
import 'font-awesome/css/font-awesome.min.css';


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
                    {/* <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
        <FaTicketAlt /> 

      </span> */}
             <div><i className="fas fa-ticket-alt"></i></div>
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
                    <h3>PRODUCTS : </h3>
                    <h3> 2 </h3>
                </div>
                <div className="middleContainer-line">
                    <h3>SUB-TOTAL : </h3>
                    <h3> 8000DZD</h3>
                </div>
                <div className="middleContainer-line">
                    <h3>SHIPPING(FREE FOR MEMBERS) :</h3>
                    <h3> 1000DZD</h3>
                </div>
                <hr />
            </div>

            <div className="bottomContainer">
                <div className="bottomContainer-top">

                
                <div className="bottomContainer-line">
                    <h3>TOTAL :</h3>
                    <h3> 9000 DZD</h3>
                </div>
                </div>
            
                <div className='bottomContainer-buttons'>
                    <div>
                        <button className='bottomContainer-line-topButton' style={{background:'#3b7bbf'}} > 
                        <i className="fa fa-paypal fa-2x"></i>

                        </button>
                    </div>
                    <div>
                        <button className='bottomContainer-line-topButton' > SECURE CHECKOUT</button>
                    </div>
            </div>
            </div>
        </div>



    );

};