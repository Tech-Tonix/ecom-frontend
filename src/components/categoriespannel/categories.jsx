import React from 'react';
import './categories.css';
import { Heart24Regular,Person24Regular,ShoppingBag24Regular,ReOrder24Regular,Map24Regular,SignOut24Regular } from '@fluentui/react-icons';
import ProfilPic from '../../assets/ProfilePic.jpg'
import { NavLink } from 'react-router-dom';
import { Menu,MenuList, MenuItem, Paper } from '@material-ui/core';
import { useState,useContext } from 'react';
import AuthContext from '../../context/AuthContext'

export const Categories = () => {

  const { logoutUser } = useContext(AuthContext);
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "bold",
            textDecoration: isActive ? "none" : "none",
            background: isActive ? "#878787" : "#C2C2C2",
            marginBottom: isActive ? "7px" : "7px",
            width: isActive ? "100%" : "100%",
            padding: isActive ? "10px" : "10px",
            borderRadius: isActive ? "5px" : "5px",
            boxSizing: "border-box",
            textAlign: isActive ? "center" : "center",
            alignItems: isActive ? "center" : "center",
            border: isActive ? "50px" : "50px",
            width: isActive ? "230px" : "230px",
            height: isActive ? "50px" : "a50px",
            display: "flex",
    
        };
      };

      const [isMenuSignOpen , setIsMenuSignOpen] = useState(false);

      const handleMenuToggle = () => {
        setIsMenuSignOpen(!isMenuSignOpen)
      }

  return (
    <div className="categories-wrapper">
      {/* User profile picture*/}
      <div className="profile-pic-container">
        <img src={ProfilPic} alt="Profilepicturedisplayed" />
      </div>
      {/*Categories*/}
      <div className="categories">
        <ul>
        <li>
            <div>
              <NavLink style={navLinkStyles} to="/Profile" >
                <Person24Regular  className="icons" />
                <span className="categorie-text" style={{ marginLeft: "25px" }}>
                  My Info
                </span>
              </NavLink>
            </div>
          </li>

          <li>
            <div>
              <NavLink style={navLinkStyles} to="/My-wishlist">
                <Heart24Regular className="icons" />
                <span className="categorie-text" style={{ marginLeft: "25px" }}>
                  My wishlist
                </span>
              </NavLink>
            </div>
          </li>

          <li>
              <NavLink  style={navLinkStyles} to="/My-bag">
                <ShoppingBag24Regular className="icons" />
                <span className="categorie-text" style={{ marginLeft: "40px" }}>
                  My bag
                </span>
              </NavLink>
            
          </li>

          <li>
            
              <NavLink style={navLinkStyles} to="/OrderHistory">
                <ReOrder24Regular className="icons" />
                <span className="categorie-text" style={{ marginLeft: "25px" }}>
                  Order history
                </span>
              </NavLink>
            
          </li>

          <li>
              <NavLink  style={navLinkStyles} to="/TrackMyOrder">
                <Map24Regular className="icons" />
                <span className="categorie-text" style={{ marginLeft: "25px" }}>
                  Track my order
                </span>
              </NavLink>
          </li>

          <li>
            <div className="categorie-container">
              <div className="categorie-item" onClick={handleMenuToggle}>
                <SignOut24Regular className="icons" />
                <span className="categorie-text" style={{ marginLeft: "40px" }}>
                  Sign out
                </span>
              </div>
              {isMenuSignOpen && (
                <Menu 
                  anchorEl={document.querySelector('.categorie-item')}
                  open={isMenuSignOpen}
                  onClose={() => setIsMenuSignOpen(false)}
                >
                  <MenuItem onClick={logoutUser}>
                    Sign out 
                  </MenuItem>

                </Menu>
              )}
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}


