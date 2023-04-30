import { useState } from "react";
import { Link } from "react-router-dom"
import './navbar.css';


export const NavBar = () => {
    return(
        

    <div>
         <header class="header">

    {/*top bar*/}
    <div class="top-bar">
      <div class="top-bar__content">
        
        {/*left section*/}
        <div class="section">

          <a href="#">
            <span>HELP</span>
          </a>

          <a href="#">
            <img class="top-bar-icon" src={require('./assets/dz.svg').default} alt="Country"/>
          </a>
        </div>

        {/*middle section*/}
        <div class="section">
          <Link to='/'>
            <h3><Link to='/'> LOGO</Link></h3>
          </Link>
        </div>

        {/*right section*/}
        <div class="section">
          
          <Link to='/Login'>
            <img class="top-bar-icon" src={require('./assets/ic_fluent_heart_24_regular.svg').default} alt="Favourites"/>
          </Link>
          
          
          <Link to='/'>
            <img class="top-bar-icon" src={require('./assets/ic_fluent_person_24_regular.svg').default} alt="Profile"/>
          </Link>
          
          
          <Link to='/Registration'>
            <img class="top-bar-icon" src={require('./assets/ic_fluent_shopping_bag_24_regular.svg').default} alt="Shopping bag"/>
          </Link>
          
        </div>

      </div>
    </div>

    {/*bottom bar*/}
    <div class="bottom-bar">
      <div class="bottom-bar__content">
    
        <nav className='nav'>
          <ul class="nav__list">
            
            <li className='nav__item'>
              <Link className="nav__link">CLOTHING</Link>
              <div class="mega-box">
            <div class="content clothing">

              <div class="row">
                <header class="sub-category-title">Men</header>
                <ul class="mega-links">
                  <li><a href="#">Athletic wear</a></li>
                  <li><a href="#">Best sellers</a></li>
                  <li><a href="#">Team sports</a></li>
                  <li><a href="#">Outdoor gear</a></li>
                  <li><a href="#">Tracksuit</a></li>
                  <li><a href="#">All men sales</a></li>
                  <li><a href="#">Running shoes</a></li>
                </ul>
              </div>

              <div class="row">
                <header class="sub-category-title">Women</header>
                    <ul class="mega-links">
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

            <li className='nav__item'>
              <Link className="nav__link">EQUIPEMENT</Link>
              <div class="mega-box">
            <div class="content">

              <div class="row">
                <header class="sub-category-title">Strength</header>
                <ul class="mega-links">
                  <li><a href="#">Shop All</a></li>
                  <li><a href="#">Barebell</a></li>
                  <li><a href="#">Pull-up bars</a></li>
                  <li><a href="#">Plates</a></li>
                  <li><a href="#">Kettlebell</a></li>
                </ul>
              </div>

              <div class="row">
                <header class="sub-category-title">Cardio machines</header>
                <ul class="mega-links">
                  <li><a href="#">Shop All</a></li>
                  <li><a href="#">Stationary bikes</a></li>
                  <li><a href="#">Treadmills</a></li>
                </ul>
              </div>

              <div class="row">
                <header class="sub-category-title">Yoga</header>
                <ul class="mega-links">
                  <li><a href="#">Shop All</a></li>
                  <li><a href="#">Resistance</a></li>
                  <li><a href="#">Bags</a></li>
                  <li><a href="#">Headwear</a></li>
                </ul>
              </div>

              <div class="row">
                <header class="sub-category-title">Accessories</header>
                <ul class="mega-links">
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

            <li className='nav__item'>
              <Link className="nav__link">SUPPLIMENT</Link>
              <div class="mega-box">
            <div class="content">

              <div class="row">
                <header class="sub-category-title">Protein</header>
                <ul class="mega-links">
                  <li><a href="#">Shop All</a></li>
                  <li><a href="#">Whey</a></li>
                  <li><a href="#">Creatine</a></li>
                  <li><a href="#">BCAAs</a></li>
                </ul>
              </div>

              <div class="row">
                <header class="sub-category-title">Muscle recovery</header>
                    <ul class="mega-links">
                    <li><a href="#">Shop All</a></li>
                    <li><a href="#">Vitamins</a></li>
                    <li><a href="#">Pre-Workout supplements</a></li>
                    <li><a href="#">Post-Workout supplements</a></li>
                  </ul>
              </div>

              <div class="row">
                <header class="sub-category-title">Personal care</header>
                    <ul class="mega-links">
                    <li><a href="#">Fat burners</a></li>
                    <li><a href="#">Weight loss</a></li>
                    <li><a href="#">Hair-Skin vitamins</a></li>
                    <li><a href="#">Headwear</a></li>
                  </ul>
              </div>

            </div>
          </div>
            </li>

            <li className='nav__item'>
              <Link className="nav__link">DISCOVER</Link>
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