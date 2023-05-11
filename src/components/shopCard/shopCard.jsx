
import './shopCard.css'

export const ShopCard = (props) => {
    
    return(

    <div className="shopCard" >
        <div className="shopCard-title">
            SHOP <br /> MEN
        </div>
        <div className="shopCard-button">
        <button type="button" style={{background: '#4A4A4A',borderRadius: '25px',color:'#F9F9F9'}} > SHOP IT</button>
        </div>
    </div>

    )

}
export const ShopCard2 = () => {
    
    return(

    <div className="shopCard2" >
        <div className="shopCard2-title">
            SHOP <br /> WOMEN
        </div>
        <div className="shopCard2-button">
        <button type="button" style={{background: '#4A4A4A',borderRadius: '25px',color:'#F9F9F9'}} > SHOP IT</button>
        </div>
    </div>

    )

}