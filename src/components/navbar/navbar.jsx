import './navbar.css';
import { useState } from "react";
import { Link } from "react-router-dom"


export const NavBar = () => {
    return(
        

    <div>
         <header className="navbar-header">

    {/*top bar*/}
    <div className="navbar-top-bar">
      <div className="navbar-top-bar__content">
        
        {/*left section*/}
        <div className="navbar-section">

          <Link to="#">
            <span>HELP</span>
          </Link>

          <a href="#">
            <img className="navbar-top-bar-icon" src={require('./assets/dz.svg').default} alt="Country"/>
          </a>
        </div>

        {/*middle section*/}
        <div className="navbar-section">
          <Link to='/'>
            <h3><Link to='/'> LOGO</Link></h3>
          </Link>
        </div>

        {/*right section*/}
        <div className="navbar-section">
          
          <Link to='/My-wishlist'>
            <img className="navbar-top-bar-icon" src={require('./assets/ic_fluent_heart_24_regular.svg').default} alt="Favourites"/>
          </Link>
          
          
          <Link to='/'>
            <img className="navbar-top-bar-icon" src={require('./assets/ic_fluent_person_24_regular.svg').default} alt="Profile"/>
          </Link>
          
          
          <Link to='/My-bag'>
            <img className="navbar-top-bar-icon" src={require('./assets/ic_fluent_shopping_bag_24_regular.svg').default} alt="Shopping bag"/>
          </Link>
          
        </div>

      </div>
    </div>

    {/*bottom bar*/}
    <div className="navbar-bottom-bar">
      <div className="navbar-bottom-bar__content">
    
        <nav className="navbar-nav">
          <ul className="navbar-nav__list">
            
            <li className="navbar-nav__item">
              <Link className="navbar-nav__link">CLOTHING</Link>
              <div className="navbar-mega-box">
            <div className="navbar-content clothing">

              <div className="navbar-row">
                <header className="navbar-sub-category-title">Men</header>
                <ul className="navbar-mega-links">
                  <li><a href="#">Athletic wear</a></li>
                  <li><a href="#">Best sellers</a></li>
                  <li><a href="#">Team sports</a></li>
                  <li><a href="#">Outdoor gear</a></li>
                  <li><a href="#">Tracksuit</a></li>
                  <li><a href="#">All men sales</a></li>
                  <li><a href="#">Running shoes</a></li>
                </ul>
              </div>

              <div className="navbar-row">
                <header className="navbar-sub-category-title">Women</header>
                    <ul className="navbar-mega-links">
                    <li><a href="#">All women sales</a></li>
                    <li><a href="#">Best sellers</a></li>
                    <li><a href="#">Yoga and pilates</a></li>
                    <li><a href="#">Outdoor gear</a></li>
                    <li><a href="#">Hoodies and jackets</a></li>
                    <li><a href="#">Running shoes</a></li>
                    <li><a href="#">Athletic wear</a></li>
                  </ul>
              </div>

            </div>
          </div>
            </li>

            <li className="navbar-nav__item">
              <Link className="navbar-nav__link">EQUIPEMENT</Link>
              <div className="navbar-mega-box">
            <div className="navbar-content">

              <div className="navbar-row">
                <header className="navbar-sub-category-title">Strength</header>
                <ul className="navbar-mega-links">
                  <li><a href="#">Shop All</a></li>
                  <li><a href="#">Barebell</a></li>
                  <li><a href="#">Pull-up bars</a></li>
                  <li><a href="#">Plates</a></li>
                  <li><a href="#">Kettlebell</a></li>
                </ul>
              </div>

              <div className="navbar-row">
                <header className="navbar-sub-category-title">Cardio machines</header>
                <ul className="navbar-mega-links">
                  <li><a href="#">Shop All</a></li>
                  <li><a href="#">Stationary bikes</a></li>
                  <li><a href="#">Treadmills</a></li>
                </ul>
              </div>

              <div className="navbar-row">
                <header className="navbar-sub-category-title">Yoga</header>
                <ul className="navbar-mega-links">
                  <li><a href="#">Shop All</a></li>
                  <li><a href="#">Resistance</a></li>
                  <li><a href="#">Bags</a></li>
                  <li><a href="#">Headwear</a></li>
                </ul>
              </div>

              <div className="navbar-row">
                <header className="navbar-sub-category-title">Accessories</header>
                <ul className="navbar-mega-links">
                  <li><a href="#">Shop All</a></li>
                  <li><a href="#">Socks</a></li>
                  <li><a href="#">Bags</a></li>
                  <li><a href="#">Headwear</a></li>
                  <li><a href="#">Gloves</a></li>
                </ul>
              </div>

            </div>
          </div>
            </li>

            <li className="navbar-nav__item">
              <Link className="navbar-nav__link">SUPPLIMENT</Link>
              <div className="navbar-mega-box">
            <div className="navbar-content">

              <div className="navbar-row">
                <header className="navbar-sub-category-title">Protein</header>
                <ul className="navbar-mega-links">
                  <li><a href="#">Shop All</a></li>
                  <li><a href="#">Whey</a></li>
                  <li><a href="#">Creatine</a></li>
                  <li><a href="#">BCAAs</a></li>
                </ul>
              </div>

              <div className="navbar-row">
                <header className="navbar-sub-category-title">Muscle recovery</header>
                    <ul className="navbar-mega-links">
                    <li><a href="#">Shop All</a></li>
                    <li><a href="#">Vitamins</a></li>
                    <li><a href="#">Pre-Workout supplements</a></li>
                    <li><a href="#">Post-Workout supplements</a></li>
                  </ul>
              </div>

              <div className="navbar-row">
                <header className="navbar-sub-category-title">Personal care</header>
                    <ul className="navbar-mega-links">
                    <li><a href="#">Fat burners</a></li>
                    <li><a href="#">Weight loss</a></li>
                    <li><a href="#">Hair-Skin vitamins</a></li>
                    <li><a href="#">Headwear</a></li>
                  </ul>
              </div>

            </div>
          </div>
            </li>

            <li className="navbar-nav__item">
              <Link className="navbar-nav__link">DISCOVER</Link>
            </li>

          </ul>
        </nav>

      </div>
    </div>
  </header>


        {/* NAVBAR */}
        <Link to='/'> Home</Link>
        <Link to='/Registration'> registration</Link>
        <Link to='/Login'> Login</Link>
    </div>



    )



}