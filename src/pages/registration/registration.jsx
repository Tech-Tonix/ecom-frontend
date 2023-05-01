import{useState} from "react";
import './registration.css'


export const RegistrationPage = ()=>{
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const handleInputChange = (event) => {
    const { value } = event.target;
    const regex = /^[0-9\b]+$/; // Regular expression to allow only numeric characters

    if (value === '' || regex.test(value)) {
      setInputValue(value);
      
    }
    };
    const handleInputChange2 = (event) => {
    const { value } = event.target;
    const regex = /^[0-9\b]+$/; // Regular expression to allow only numeric characters

    if (value === '' || regex.test(value)) {
      setInputValue2(value);
      
    }
    };

    return (
    <div className="registrationPage">
    <div className="registrationPage-body">
    <div className="registrationPage-container">
    <div class="registrationPage-title">SIGN INTO MY GYMRAT</div>
    <div class="registrationPage-content">
      <form action="#">
        <div class="registrationPage-user-details">
          <div class="registrationPage-input-box">
            <span class="registrationPage-details" >first name :</span>
            <input type="text" placeholder="Enter your first name" required/>
            
            <div class="registrationPage-input-box">
              <span className='registrationPage-details'>Date of Birth :</span>
              <input className='registrationPage-details_date' type="date"  required/>
            </div>
            <div class="registrationPage-rectangle">
              <p>Tell us and we’ll send you gift on your birthday!</p>
              <img src={require('./assets/Shape.svg').default} alt='mySvgImage' />
              </div>

          </div>
          <div class="registrationPage-input-box">
            <span class="registrationPage-details">last name :</span>
            <input type="text" placeholder="Enter your last name" required/>
          </div>
          <div class="registrationPage-input-box">
            <span class="registrationPage-details">Email :</span>
            <input type="text" placeholder="Enter your email" required/>
          </div>
          <div class="registrationPage-input-box">
            <span class="registrationPage-details">Phone Number :</span>
            <input type="text" placeholder="Enter your number" required value={inputValue} onChange={handleInputChange}/>
          </div>
          <div class="registrationPage-input-box">
            <span class="registrationPage-details">Password :</span>
            <input type="text" placeholder="Enter your password" required/>
          </div>
          <div class="registrationPage-input-box">
            <span class="registrationPage-details">Confirm Password :</span>
            <input type="text"  placeholder="Confirm your password" required />
          </div>
          <div class="registrationPage-input-box">
            <span class="registrationPage-details">city :</span>
            <input type="text" placeholder="Enter your password" required/>
            {/* <span class="details">postal code</span>
            <input type="text" placeholder="Enter your postal code" required/> */}
          </div>
          <div class="registrationPage-input-box">
            <span class="registrationPage-details">adress :</span>
            <input type="text" placeholder="enter your adress" required/>
          </div>
          <div class="registrationPage-input-box">
            <span class="registrationPage-details">postal code :</span>
            <input type="text" placeholder="enter you postal code" required value={inputValue2} onChange={handleInputChange2}/>
              <div className="registrationPage-student-checkbox">
                <p className="registrationPage-p__student">Are you a student ?</p>
                <input type="checkbox" />
              </div>
          </div>
          <div class="registrationPage-rectangle">
              <p>Tell us and you’ll get exclusive student promotions</p>
              <img src={require('./assets/Shape.svg').default} alt='mySvgImage' />
            </div>
          
        </div>
        <div className="registrationPage-card_section">
        <div className="registrationPage-upgrade-card">
          <div className="registrationPage-upgrade_header">
          <h2 className="-registrationPageupgrade_header__title">
          Uppgrade your shooping experience
          with our MAGAZINE CLUB
          </h2>
          <p className="registrationPage-upgrade_header__p">
          for exlusive discounts and free
          shipping SIGN UP FOR THE MAGAZINE CLUB !
          </p>
          </div>
          <div className="registrationPage-upgrade_signUp">
          <div className="registrationPage-upgrade_signUp__p">
            <span>Sign up</span> for the magazine club by accepting the
            <a href="#">privacy policy</a>
          </div>
          </div>
          <div className="registrationPage-upgrade_signUp__checkbox">
            <input type="checkbox" />
            <p className="registrationPage-upgrade_signUp__checkbox__p">
            I’ve read and 
            accepted all the conditions.
            </p>
          </div>
        </div>
        </div>
        
        {/* <div class="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Male</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Female</span>
          </label>
          
          </div>
        </div> */}
        <div className="registrationPage-button">
          <input type="submit" value="Register"/>
        </div>
      </form>
    </div>
    </div>
    </div>
  
  </div>)
}