
import './heroSection.css'
import Typical from 'react-typical'

export const HeroSection = () => {

    const steps = [
  'You know what they say ?', 3000,
  'Succes starts with a good outfit', 3000,
];





    return(
         
        <div className="heroSection-container">
            <div className="heroSection-titles">
                <h1 className="heroSection-titles-h1">WHAT PRODUCTS WOULD GIVE YOU THE CONFIDENCE TO BECOME AN ICON?</h1>
                <p className="heroSection-titles-p"> <Typical wrapper="span" steps={steps} loop={100} className={'caca'} /></p>
            </div>
            <div className="heroSection-buttons">
            <button type="button" style={{background: '#F9F9F9',borderRadius: '25px',color:'#171717'}} id="leftButton" > HAVE YOUR SAY</button>
            <button type="button" style={{background: '#4A4A4A',borderRadius: '25px',color:'#F9F9F9'}} id="rightButton"> LEARN MORE</button>
            </div>
        </div>

 



// WHAT PRODUCTS WOULD GIVE YOU THE CONFIDENCE TO BECOME AN ICON?

// Succes starts with a good outfit






    )









}