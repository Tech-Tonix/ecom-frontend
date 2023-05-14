import { Navigate, Outlet } from "react-router-dom"; 
import { useContext } from "react"; 
import AuthContext from "../context/AuthContext"; 
import {NavBar} from "../components/navbar/navbar"
 
const PublicRoute = () => { 
  let { user } = useContext(AuthContext); 
  return (user ?  <Navigate to="/profile" /> :  
  <> 
  <NavBar/> 
  <Outlet/> 
  </> 
  ); 
}; 
 
export default PublicRoute;