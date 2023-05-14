import { useState,useContext,AuthContext} from "react"
// import APIService from '../APIService'
import './loginPage.css'
import { Link } from "react-router-dom";
// import AuthContext from "../../context/AuthContext"
export const LoginPage = ()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(AuthContext)
  const [login , setlogin]=useState(false) 
  const [loading , setLoading]=useState(false) 
    
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
     
    const handleLogin = async () => { 
      if(email==="" || password==="") { 
        alert("Some fields are missing") 
        return 
      } 
      setLoading(true) 
      const res = await loginUser(email, password) 
      setLoading(false) 
    } 
    
     
    const handleSubmitLogin = (e) => { 
      e.preventDefault() 
      handleLogin() 
     
    } 


    return (
      <div className='login-wrapper'>
      <h1 className='font-header'> log into my gymrat</h1>
  <div>
    <form onSubmit={handleSubmitLogin}>
    <label>
        <p className='font-elements'>EMAIL-ADDRESS</p>
        <input value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email" required/>
    </label>
    <label>
        <p className='font-elements'>PASSWORD</p>
        <input value={password}
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password" />
      </label>
      <button className='button-style center-button' type='submit'>login</button>
    </form>
    <button className='button-style center-button' type='submit'>login</button>
    <div className='container-one'>
      <p className='no-acc'>You don't have an account?</p>
      <Link to={'/Registration'}><p className='signup'>Sign Up.</p></Link>
    </div>
  </div>
  </div>
    )
}





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