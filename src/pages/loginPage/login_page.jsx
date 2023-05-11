import { useState,useContext} from "react"
// import APIService from '../APIService'
import './loginPage.css'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
// import AuthContext from "../../context/AuthContext"
export const LoginPage = ()=>{
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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function formData() {
      const form_data = new FormData();
  
      form_data.append("username", email);
      form_data.append("password", password);
      form_data.append("grant_type", "password");
      form_data.append("client_id", "your_client_id");
      form_data.append(
        "client_secret",
        "your_client_Secret"
      );
  
      return form_data;
    }
  
    function handleSave(e) {
      e.preventDefault();
  
      const LOGIN_URL = "https://gymrat-app.onrender.com/rest-auth/login/";
  
      axios({
        baseURL: LOGIN_URL,
        method: "POST",
        data: formData(),
      })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            localStorage.setItem("user-token", res.data.access_token);
            toast("Email ou senha inválidos.");
            window.location.href = "/";
          }
        })
        .catch((error) => {
          console.log("ERROR", error);
          <h1>email or password invalid</h1>;
        });
    }



 























    return (
      <div className='login-wrapper'>
      <h1 className='font-header'> log into my gymrat</h1>
  <div>
    <form onSubmit={handleSave}>
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
    </form>
    <button className='button-style center-button' type='submit'>log in</button>
    <div className='container-one'>
      <p className='no-acc'>You don't have an account?</p>
      <Link to={'/Registration'}><p className='signup'>Sign Up.</p></Link>
    </div>
  </div>
  </div>
    )
}
