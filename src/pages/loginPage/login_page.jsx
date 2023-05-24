import { useState,useContext} from "react"
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { useNavigate } from "react-router-dom";

// import APIService from '../APIService'
import './loginPage.css'
import { Link } from "react-router-dom"
import AuthContext from "../../context/AuthContext"



export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleLogin = async () => {
    if (email === "" || password === "") {
      toast.error("Please enter your email and password.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
  
    setLoading(true);
  
    try {
      await loginUser(email, password);
      // Login successful, navigate to the desired page
       // Replace the current URL with the dashboard page
    } catch (error) {
      console.log(error);
      toast.error("Invalid email or password. Please try again.", {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    handleLogin();
  };
  
  return (
    <div className="login-wrapper">
      <h1 className="font-header">Log into My Gymrat</h1>
      <div>
        <form onSubmit={handleSubmitLogin}>
          <label>
            <p className="font-elements">EMAIL ADDRESS</p>
            <input
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              required
            />
          </label>
          <label>
            <p className="font-elements">PASSWORD</p>
            <input
              value={password}
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </label>
          <button className="button-style center-button" type="submit">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="container-one">
          <p className="no-acc">Don't have an account?</p>
          <Link to={"/Registration"}>
            <p className="signup">Sign Up</p>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};





// const [email,setEmail] = useState('')
    // const [password,setPassword] = useState('')
    // const loginBtn = () => {
    //     APIService.LoginUser({email,password})
    //     .then(resp => console.log(resp))
    //     .catch(error => console.log(error))
    // }

    // const { loginUser } = useContext(AuthContext);
    // const handleSubmit = e => {
    //   e.preventDefault();
    //   const email = e.target.username.value;
    //   const password = e.target.password.value;
    //   email.length > 0 && loginUser(email, password);
    // };


       
    // const handleLogin = async () => { 
    //   if(email==="" || password==="") { 
    //     alert("Some fields are missing") 
    //     return 
    //   } 
    //   setLoading(true) 
    //   const res = await loginUser(email, password) 
    //   setLoading(false) 
    // } 
    // const handleSubmitLogin = (e) => { 
    //   e.preventDefault() 
    //   handleLogin()  
    // } 
    // useEffect(() => { 
    //   setFirst_name("") 
    //   setLast_name("") 
    //   setEmail("") 
    //   setPassword("") 
    //   setPhone("") 
    //   setUsername("") 
    // }, [login]) 
