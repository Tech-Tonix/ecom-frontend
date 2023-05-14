// import { createContext, useState, useEffect } from "react";
// import jwt_decode from "jwt-decode";
// import { useHistory } from "react-router-dom";

// const AuthContext = createContext();

// export default AuthContext;

// export const AuthProvider = ({ children }) => {
//   const [authTokens, setAuthTokens] = useState(() =>
//     localStorage.getItem("authTokens")
//       ? JSON.parse(localStorage.getItem("authTokens"))
//       : null
//   );
//   const [user, setUser] = useState(() =>
//     localStorage.getItem("authTokens")
//       ? jwt_decode(localStorage.getItem("authTokens"))
//       : null
//   );
//   const [loading, setLoading] = useState(true);

//   const history = useHistory();

//   const loginUser = async (email, password) => {
//     const response = await fetch("https://gymrat-app.onrender.com/rest-auth/login/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         email,
//         password
//       })
//     });
//     const data = await response.json();

//     if (response.status === 200) {
//       setAuthTokens(data);
//       setUser(jwt_decode(data.access));
//       localStorage.setItem("authTokens", JSON.stringify(data));
//       history.push("/");
//     } else {
//       alert("Something went wrong!");
//     }
//   };
  
//   const registerUser = async (email, password1, password2,first_name,last_name,phone_number,bidth_date,city,address,postal_code,is_student,is_member_club) => {
//     const response = await fetch("https://gymrat-app.onrender.com/rest-auth/registration/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         email,
//         password1,
//         password2,
//         first_name,
//         last_name,
//         phone_number,
//         bidth_date,city,
//         address,postal_code,
//         is_student,
//         is_member_club
//       })
//     });
//     if (response.status === 201) {
//       history.push("/Login");
//     } else {
//       alert("Something went wrong!");
//     }
//   };

//   const logoutUser = () => {
//     setAuthTokens(null);
//     setUser(null);
//     localStorage.removeItem("authTokens");
//     history.push("/Registration");
//   };

//   const contextData = {
//     user,
//     setUser,
//     authTokens,
//     setAuthTokens,
//     registerUser,
//     loginUser,
//     logoutUser
//   };

//   useEffect(() => {
//     if (authTokens) {
//       setUser(jwt_decode(authTokens.access));
//     }
//     setLoading(false);
//   }, [authTokens, loading]);

//   return (
//     <AuthContext.Provider value={contextData}>
//       {loading ? null : children}
//     </AuthContext.Provider>
//   );
// };









// import { createContext, useState, useEffect } from "react"; 
// import jwt_decode from "jwt-decode"; 
// import { useNavigate } from "react-router-dom"; 
 
// const AuthContext = createContext(); 
 
// export default AuthContext; 
 
// export const AuthProvider = ({ children }) => { 
//   const [authTokens, setAuthTokens] = useState(() => 
//     localStorage.getItem("authTokens") 
//       ? JSON.parse(localStorage.getItem("authTokens")) 
//       : null 
//   ); 
//   const [user, setUser] = useState(() => 
//     localStorage.getItem("authTokens") 
//       ? jwt_decode(localStorage.getItem("authTokens")) 
//       : null 
//   ); 
//   const [loading, setLoading] = useState(true); 
 
//   const history = useNavigate(); 
 
//   const registerUser = async ( 
//     first_name,
//     last_name,
//     birth_date,
//     email,
//     password1,
//     phone_number,
//     city,postal_code,
//     is_student,
//     is_member_club 
     
//   ) => { 
//     const response = await fetch("https://gymrat-app.onrender.com/rest-auth/registration/", { 
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
 
//   const loginUser = async (email, password) => { 
//     const response = await fetch("https://gymrat-app.onrender.com/rest-auth/login/", { 
//       method: "POST", 
//       headers: { 
//         "Content-Type": "application/json", 
//       }, 
//       body: JSON.stringify({ 
//         email, 
//         password, 
//       }), 
//     }); 
//     const data = await response.json(); 
//     console.log(data.jwt); 
//     if (response.status === 201) { 
//       history("/login"); 
//       setAuthTokens(data.jwt); 
//       setUser(jwt_decode(data.jwt.access)); 
//       localStorage.setItem("authTokens", JSON.stringify(data.jwt)); 
//     } else { 
//       alert("Could not login !"); 
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
//       setUser(jwt_decode(authTokens.access)); 
//     } 
//     setLoading(false); 
//   }, [authTokens, loading]); 
 
//   return ( 
//     <AuthContext.Provider value={contextData}> 
//       {loading ? null : children} 
//     </AuthContext.Provider> 
//   ); 
// };
import { createContext, useState, useEffect } from "react"; 
import jwt_decode from "jwt-decode"; 
import { useNavigate } from "react-router-dom"; 
 
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
 
  const registerUser = async ( 
    first_name,last_name,birth_date,email,password1,phone_number,city,postal_code,is_student,is_member_club    
     
  ) => { 
    const response = await fetch("https://gymrat-app.onrender.com/rest-auth/registration/", { 
      method: "POST", 
      headers: { 
        "Content-Type": "application/json", 
        "Accept": "application/json" 
      }, 
 
      body: JSON.stringify({ 
        first_name,last_name,birth_date,email,password1,phone_number,city,postal_code,is_student,is_member_club    
 
      }), 
    }); 
    if (response.status === 200) { 
      history("/"); 
    } else { 
      alert("Could not register !"); 
    } 
  }; 
 
  const loginUser = async (email, password1) => { 
    const response = await fetch("https://gymrat-app.onrender.com/rest-auth/login/", { 
      method: "POST", 
      headers: { 
        "Content-Type": "application/json", 
      }, 
      body: JSON.stringify({ 
        email, 
        password1, 
      }), 
    }); 
    const data = await response.json(); 
    try { 
      console.log(data.jwt); 
      if (response.status === 200) { 
        history("/login"); 
        setAuthTokens(data.jwt); 
        console.log(jwt_decode(data.jwt)); 
        setUser(jwt_decode(data.jwt)); 
        localStorage.setItem("authTokens", JSON.stringify(data.jwt)); 
      } else { 
        alert("Could not login !"); 
      } 
    } catch (e) { 
      console.log(e); 
    } 
     
  }; 
 
  const logoutUser = () => { 
    setAuthTokens(null); 
    setUser(null); 
    localStorage.removeItem("authTokens"); 
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