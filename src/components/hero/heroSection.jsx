
import { Link } from 'react-router-dom';
import './heroSection.css'
import Typical from 'react-typical'

export const HeroSection = () => {

    const steps = [
  'You know what they say ?', 3000,
  'Succes starts with a good outfit', 5000,
];





    return(
         
        <div className="heroSection-container">
            <div className="heroSection-titles">
                
                <p className="heroSection-titles-pp">FULL FOCUS. PURE PERFORMANCE.</p>
                <p className="heroSection-titles-p"> <Typical wrapper="span" steps={steps} loop={100} className={'caca'} /></p>
            </div>
            <div className="heroSection-buttons">
            <Link to='/category/9'>
            <button type="button" style={{background: '#F9F9F9',borderRadius: '30px',color:'#171717'}} id="leftButton" > SHOP NEW RELEASES</button>
            
            </Link>
            <button type="button" style={{background: '#4A4A4A',borderRadius: '30px',color:'#F9F9F9'}} id="rightButton"> LEARN MORE</button>
            </div>
        </div>

 



// WHAT PRODUCTS WOULD GIVE YOU THE CONFIDENCE TO BECOME AN ICON?

// Succes starts with a good outfit






    )









}