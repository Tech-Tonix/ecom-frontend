import React from 'react'
import './footer.css'; 

const Footer = () => {
  return (
    <div>
      <div className='footer-wrapper'>
        <hr className='hr-style'/>
        <div className='container'>
            <div className='center-container'>
            <div className='row'>
                {/*column1*/}
                <div className='col'>
                    <h4>HELP</h4>
                    <ul className='liste-item'>
                        <li  className='item-title'>About us</li>
                        <li  className='item-title'>Delievery informations</li>
                        <li  className='item-title'>Returns policy</li>
                        <li  className='item-title'>Make a return</li>
                    </ul>
                    
                </div>
                {/*column2*/}
                <div className='col'>
                <h4 >MY ACCOUNT</h4>
                    <ul className='liste-item'>
                        <li className='item-title'>Log In</li>
                        <li  className='item-title'>Register</li>
                        <li  className='item-title'>View my shooping bag </li>
                        <li  className='item-title'>Track my order </li>
                    </ul>
                </div>
                {/*column3*/}
                <div className='col'>
                <h4 >LET US HELP YOU!</h4>
                    <ul className='liste-item'>
                        <li  className='item-title'>Assistance</li>
                        <li  className='item-title'>Shipping</li>
                    </ul>
                </div>
                {/*column4*/}
                <div className='col'>
                <h4>INFORMATIONS</h4>
                    <ul className='liste-item'>
                        <li  className='item-title'>General conditions</li>
                        <li  className='item-title'>Privacy policy </li>
                        <li  className='item-title'>Contact us </li>
                    </ul>
                </div>

            </div>
            </div>
            <div className='col-lower'>
                <p>
                    &copy;{new Date().getFullYear()} GYMRAT TECH-TONIX | All right reserved | Terms Of Service | Privacy
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer;
