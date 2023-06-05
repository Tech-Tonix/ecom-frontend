
import './shopCard.css'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export const ShopCard = (props) => {
    
    return(

        <Flippy
        flipOnHover={true}
        
        flipDirection="horizontal"
        
      >
        <FrontSide >
          <div className="shopCard">
            <div className="shopCard-title">
              SHOP <br /> MEN
            </div>
            <div className="shopCard-button">
              <button type="button" style={{ background: '#4A4A4A', borderRadius: '25px', color: '#F9F9F9' }}>
                SHOP IT
              </button>
            </div>
          </div>
        </FrontSide>
        <BackSide style={{ backgroundColor: 'gray' }}>
          <div className="shopCard-back">
            <h3 className="back-title">Offers and Discounts</h3>
            <div className="offer-container">
              <div className="offer-item">
                <h4 className="offer-title">50% Off</h4>
                <p className="offer-description">Get 50% off on all men's clothing items</p>
              </div>
              <div className="offer-item">
                <h4 className="offer-title">Free Shipping</h4>
                <p className="offer-description">Enjoy free shipping on all men's footwear</p>
              </div>
              <div className="offer-item">
                <h4 className="offer-title">Buy 1 Get 1 Free</h4>
                <p className="offer-description">Buy any men's accessory and get another one for free</p>
              </div>
            </div>
          </div>
        </BackSide>
      </Flippy>
)}




















    // <div className="shopCard" >
    //     <div className="shopCard-title">
    //         SHOP <br /> MEN
    //     </div>
    //     <div className="shopCard-button">
    //     <button type="button" style={{background: '#4A4A4A',borderRadius: '25px',color:'#F9F9F9'}} > SHOP IT</button>
    //     </div>
    // </div>

//     )

// }
    
export const ShopCard2 = () => {
    
    return(
      <Flippy
        flipOnHover={true}
        
        flipDirection="horizontal">
      <FrontSide >
    <div className="shopCard2" >
        <div className="shopCard2-title">
            SHOP <br /> WOMEN
        </div>
        <div className="shopCard2-button">
        <button type="button" style={{background: '#4A4A4A',borderRadius: '25px',color:'#F9F9F9'}} > SHOP IT</button>
        </div>
    </div>
    </FrontSide>
    <BackSide style={{ backgroundColor: 'gray' }}>
    <div className="shopCard-back">
      <h3 className="back-title">Offers and Discounts</h3>
      <div className="offer-container">
        <div className="offer-item">
          <h4 className="offer-title">50% Off</h4>
          <p className="offer-description">Get 50% off on all men's clothing items</p>
        </div>
        <div className="offer-item">
          <h4 className="offer-title">Free Shipping</h4>
          <p className="offer-description">Enjoy free shipping on all men's footwear</p>
        </div>
        <div className="offer-item">
          <h4 className="offer-title">Buy 1 Get 1 Free</h4>
          <p className="offer-description">Buy any men's accessory and get another one for free</p>
        </div>
      </div>
    </div>
  </BackSide>
</Flippy>

    )

}