import{useState,useContext,useEffect} from "react";
import './registration.css'
import AuthContext from '../../context/AuthContext'
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
 
// import { useNavigate } from 'react-router-dom';

export const RegistrationPage = ()=>{
  const {  registerUser } = useContext(AuthContext)
  const [login , setlogin]=useState(false) 
  const [loading , setLoading]=useState(false) 
  const [first_name, setFirstName] = useState('');
  const [birth_date,setBirthDay] = useState('')
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [password2, setConfirmPassword2] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [postal_code, setPostalCode] = useState('');
  const [is_student, setIsStudent] = useState(false);
  const [is_member_club, setIsMemberClub] = useState(false);
 
  // const navigate = useNavigate();
  useEffect(() => { 
    setFirstName("") 
    setLastName("") 
    setEmail("") 
    setPassword("") 
    setBirthDay("")
    setPhoneNumber("")
    setCity("")
    setAddress("")
    setPostalCode("")
    setIsStudent(false)
    setIsMemberClub(false)
    
  }, [login]) 
  
  
  
  const handleCheckboxChange = () => {
    setIsStudent(!is_student);

  };
  const handleCheckboxChange1 = () => {
    setIsMemberClub(!is_member_club);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        first_name === "" ||
        last_name === "" ||
        birth_date === "" ||
        email === "" ||
        password === "" ||
        phone_number === "" ||
        city === "" ||
        postal_code === ""
      ) {
        alert("Please fill in all the required fields!");
        return;
      }

      const userData = {
        email,
        password,
        first_name,
        last_name,
        phone_number,
        birth_date,
        city,
        address,
        postal_code,
        is_student,
        is_member_club
      };

      setLoading(true);
      await registerUser(userData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("An error occurred during registration.");
    }
  };


    
   
  









 
    return (
    <div className="registrationPage">
    <div className="registrationPage-body">
    <div className="registrationPage-container">
    <div className="registrationPage-title">SIGN INTO MY GYMRAT</div>
    <div className="registrationPage-content">
      <form onSubmit={handleSubmit} >
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
            <input type="text" placeholder="Enter your number"  value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} required/>
          </div>
          <div className="registrationPage-input-box">
            <span className="registrationPage-details">Password :</span>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
         
          <div className="registrationPage-input-box">
            <span className="registrationPage-details">city :</span>
            <input type="text" placeholder="Enter your city"  value={city} onChange={(e) => setCity(e.target.value)} required/>
         
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
                <input
                  type="checkbox"
                  value={is_student}
                  onChange={handleCheckboxChange}
                />

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
          <input
          type="checkbox"
          value={is_member_club}
          onChange={handleCheckboxChange1}
          />
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