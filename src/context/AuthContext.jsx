
// import { createContext, useState, useEffect } from "react"; 
// import jwt_decode from "jwt-decode"; 
// import { useNavigate } from "react-router-dom"; 
 
// const AuthContext = createContext(); 
 
// export default AuthContext; 
 
// export const AuthProvider = ({ children }) => { 
//   const [authTokens, setAuthTokens] = useState(localStorage.getItem("authTokens")); 
//   const [user, setUser] = useState( 
//     localStorage.getItem("authTokens") 
//       ? jwt_decode(localStorage.getItem("authTokens")) 
//       : null 
//   ); 
//   const [loading, setLoading] = useState(true); 
 
//   const history = useNavigate(); 
 
//   const registerUser = async ( 
//     first_name,last_name,birth_date,email,password1,phone_number,city,postal_code,is_student,is_member_club    
     
//   ) => { 
//     const response = await fetch("https://gymrat-app.onrender.com/auth/users/", { 
//       method: "POST", 
//       headers: { 
//         "Content-Type": "application/json", 
//         "Accept": "application/json" 
//       }, 
 
//       body: JSON.stringify({ 
//         first_name,last_name,birth_date,email,password1,phone_number,city,postal_code,is_student,is_member_club    
 
//       }), 
//     }); 
//     if (response.status === 200) { 
//       history("/"); 
//     } else { 
//       alert("Could not register !"); 
//     } 
//   }; 
 
//   const loginUser = async (email, password1) => { 
//     const response = await fetch("https://gymrat-app.onrender.com/rest-auth/login/", { 
//       method: "POST", 
//       headers: { 
//         "Content-Type": "application/json", 
//       }, 
//       body: JSON.stringify({ 
//         email, 
//         password1, 
//       }), 
//     }); 
//     const data = await response.json(); 
//     try { 
//       console.log(data.jwt); 
//       if (response.status === 200) { 
//         history("/login"); 
//         setAuthTokens(data.jwt); 
//         console.log(jwt_decode(data.jwt)); 
//         setUser(jwt_decode(data.jwt)); 
//         localStorage.setItem("authTokens", JSON.stringify(data.jwt)); 
//       } else { 
//         alert("Could not login !"); 
//       } 
//     } catch (e) { 
//       console.log(e);
//     } 
     
//   }; 
 
//   const logoutUser = () => { 
//     setAuthTokens(null); 
//     setUser(null); 
//     localStorage.removeItem("authTokens"); 
//     history("/"); 
//   }; 
 
//   const contextData = { 
//     user, 
//     setUser, 
//     authTokens, 
//     setAuthTokens, 
//     registerUser, 
//     loginUser, 
//     logoutUser, 
//   }; 
 
//   useEffect(() => { 
//     if (authTokens) { 
//       setUser(jwt_decode(authTokens)); 
//     } 
//     setLoading(false); 
//   }, []); 
 
//   return ( 
//     <AuthContext.Provider value={contextData}> 
//       {loading ? null : children} 
//     </AuthContext.Provider> 
//   ); 
// };



import { toast } from 'react-toastify';
import { createContext, useState, useEffect } from "react"; 
import jwt_decode from "jwt-decode"; 
import { useNavigate } from "react-router-dom"; 
import axios from 'axios'; 
import Cookies from 'js-cookie'; 
 
const AuthContext = createContext(); 
 
export default AuthContext; 
 
export const AuthProvider = ({ children }) => { 
  const [authTokens, setAuthTokens] = useState(localStorage.getItem("authTokens")); 
  const [user, setUser] = useState( 
    localStorage.getItem("authTokens") 
      ? jwt_decode(localStorage.getItem("authTokens")) 
      : null 
  ); 
  const [loading, setLoading] = useState(true); 
 
  const history = useNavigate(); 
 
  const registerUser = async (userData) => {
    try {
      const response = await axios.post("https://gymrat-app.onrender.com/auth/users/", userData, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });

      if (response.status === 201) {
        history("/login");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        const { status, data } = error.response;
        if (status === 400) {
          // Handle specific validation errors
          if (data.email) {
            alert(`Email error: ${data.email}`);
          } else if (data.phone_number) {
            alert(`Phone number error: ${data.phone_number}`);
          } else {
            alert("Invalid input. Please check your information.");
          }
        } else {
          alert("An error occurred during registration. Please try again.");
        }
      } else if (error.request) {
        // The request was made but no response was received
        alert("No response received from the server. Please try again later.");
      } else {
        // Something else happened in making the request
        alert("An error occurred. Please try again later.");
      }
    }
  };
  

 
  const loginUser = async (email, password) => {
    try {
      const response = await fetch("https://gymrat-app.onrender.com/auth/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (response.status === 200) {
        setAuthTokens(data.access);
        localStorage.setItem("authTokens", data.access);
        Cookies.set("JWT", data.access);
        setUser(jwt_decode(data.access));
        
        // Redirect to the desired page upon successful login
        history("/");
      } else {
        toast.error("Please enter a valid email or check your information!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
   
  const logoutUser = async () => { 
    setAuthTokens(null); 
    setUser(null); 
    localStorage.removeItem("authTokens"); 
    try { 
      const response = await axios.post('https://gymrat-app.onrender.com/auth/logOut/'); 
      console.log(response.data); 
    } catch(err) { 
      console.log(err.response.data); 
    } 
    history("/"); 
  }; 
 
  const contextData = { 
    user, 
    setUser, 
    authTokens, 
    setAuthTokens, 
    registerUser, 
    loginUser, 
    logoutUser, 
  }; 
 
  useEffect(() => { 
    if (authTokens) { 
      setUser(jwt_decode(authTokens)); 
    } 
    setLoading(false); 
  }, []); 
 
  return ( 
    <AuthContext.Provider value={contextData}> 
      {loading ? null : children} 
    </AuthContext.Provider> 
  ); 
};