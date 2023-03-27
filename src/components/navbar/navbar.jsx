import { Link } from "react-router-dom"


export const NavBar = () => {

    return(
    <div>
        {/* NAVBAR */}
        <Link to='/'> Home</Link>
        <Link to='/Registration'> registration</Link>
        <Link to='/Login'> Login</Link>
    </div>



    )



}