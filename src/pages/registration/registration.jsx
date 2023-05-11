import{useState} from "react";
import './registration.css'
// import { useNavigate } from 'react-router-dom';

import axios from "axios";
export const RegistrationPage = ()=>{
  const [first_name, setFirstName] = useState('');
  const [birth_date,setBirthDay] = useState('')
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setConfirmPassword2] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [postal_code, setPostalCode] = useState('');
  const [is_student, setIsStudent] = useState(false);
  // const navigate = useNavigate();
  
  
  
  const handleCheckboxChange = (event) => {
    setIsStudent(event.target.checked);
  };


  // const registerUser = (e) => {
    
  //       fetch('https://gymrat-app.onrender.com/rest-auth/registration/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(Response.data),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         console.log('User registered successfully');
  //       } else {
  //         throw new Error('Registration failed');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
    
    const handleRegister = async (event) => {
      
      event.preventDefault();
      // token = localStorage.getItem("token")
      try {
        const response = await axios.post('https://gymrat-app.onrender.com/rest-auth/registration/', { first_name,last_name,email,password1,password2,phone_number,city,address,postal_code,is_student},
       {
        // headers: { "Content-Type": 'application/json', Authorization: "Bearer "+ token },
      });

      localStorage.setItem("token", response.data.token)
      localStorage.setItem("user")
      } catch (error) {
      }
      

    };

    // fetch('https://gymrat-app.onrender.com/rest-auth/registration/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       console.log('User registered successfully');
    //     } else {
    //       throw new Error('Registration failed');
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });


    // const [inputValue, setInputValue] = useState('');
    // const [inputValue2, setInputValue2] = useState('');
    // const handleInputChange = (event) => {
    // const { value } = event.target;
    // const regex = /^[0-9\b]+$/; // Regular expression to allow only numeric characters

    // if (value === '' || regex.test(value)) {
    //   setInputValue(value);
      
    // }
    // };
    // const handleInputChange2 = (event) => {
    // const { value } = event.target;
    // const regex = /^[0-9\b]+$/; // Regular expression to allow only numeric characters

    // if (value === '' || regex.test(value)) {
    //   setInputValue2(value);
      
    // }
    // };

























    

    return (
    <div className="registrationPage">
    <div className="registrationPage-body">
    <div className="registrationPage-container">
    <div className="registrationPage-title">SIGN INTO MY GYMRAT</div>
    <div className="registrationPage-content">
      <form >
        <div className="registrationPage-user-details">
          <div className="registrationPage-input-box">
            <span className="registrationPage-details" >first name :</span>
            <input type="text" placeholder="Enter your first name" value={first_name} onChange={(e) => setFirstName(e.target.value)} required/>
            
            <div className="registrationPage-input-box">
              <span className='registrationPage-details'>Date of Birth :</span>
              <input className='registrationPage-details_date' type="date" value={birth_date} onChange={(e) => setBirthDay(e.target.value)} required/>
            </div>
            <div className="registrationPage-rectangle">
              <p>Tell us and we’ll send you gift on your birthday!</p>
              <img src={require('./assets/Shape.svg').default} alt='mySvgImage' />
              </div>

          </div>
          <div className="registrationPage-input-box">
            <span className="registrationPage-details">last name :</span>
            <input type="text" placeholder="Enter your last name" value={last_name} onChange={(e) => setLastName(e.target.value)} required/>
          </div>
          <div className="registrationPage-input-box">
            <span className="registrationPage-details">Email :</span>
            <input type="text" placeholder="Enter your email"  value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="registrationPage-input-box">
            <span className="registrationPage-details">Phone Number :</span>
            <input type="text" placeholder="Enter your number" required value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)}/>
          </div>
          <div className="registrationPage-input-box">
            <span className="registrationPage-details">Password :</span>
            <input type="text" placeholder="Enter your password"  value={password1} onChange={(e) => setPassword1(e.target.value)} required/>
          </div>
          <div className="registrationPage-input-box">
            <span className="registrationPage-details">Confirm Password :</span>
            <input type="text"  placeholder="Confirm your password" value={password2} onChange={(e) => setConfirmPassword2(e.target.value)} required />
          </div>
          <div className="registrationPage-input-box">
            <span className="registrationPage-details">city :</span>
            <input type="text" placeholder="Enter your password"  value={city} onChange={(e) => setCity(e.target.value)} required/>
            {/* <span className="details">postal code</span>
            <input type="text" placeholder="Enter your postal code" required/> */}
          </div>
          <div className="registrationPage-input-box">
            <span className="registrationPage-details">address :</span>
            <input type="text" placeholder="enter your adress"  value={address} onChange={(e) => setAddress(e.target.value)} required/>
          </div>
          <div className="registrationPage-input-box">
            <span className="registrationPage-details">postal code :</span>
            <input type="text" placeholder="enter you postal code" required value={postal_code} onChange={(e) => setPostalCode(e.target.value)}/>
              <div className="registrationPage-student-checkbox">
                <p className="registrationPage-p__student">Are you a student ?</p>
                <input type="checkbox" onChange={handleCheckboxChange} />
              </div>
          </div>
          <div className="registrationPage-rectangle">
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
            <a href="/magazin-club-privacy-policy">privacy policy</a>
          </div>
          </div>
          <div className="registrationPage-upgrade_signUp__checkbox">
            <input type="checkbox" value={is_student}  onChange={handleCheckboxChange}/>
            <p className="registrationPage-upgrade_signUp__checkbox__p">
            I’ve read and 
            accepted all the conditions.
            </p>
          </div>
        </div>
        </div>
        <div className="registrationPage-button">
          <input type="submit" value="Register"/>
        </div>
      </form>
    </div>
    </div>
    </div>
  
  </div>)
}