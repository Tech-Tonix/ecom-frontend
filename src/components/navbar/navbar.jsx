import './navbar.css';
import { useState,useContext } from "react";
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import { SearchContext } from './searchContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ratpic from '../../assets/logo black.png'
export const NavBar = () => {
  const location = useLocation();
 
  const { searchQuery, setSearchQuery } = useContext(SearchContext);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };


    return(
        

    <div>
         <header className="navbar-header">

    {/*top bar*/}
    <div className="navbar-top-bar">
      <div className="navbar-top-bar__content">
        
        {/*left section*/}
        <div className="navbar-section">

        <Link to="#">
  <img src={ratpic} alt="inventory" style={{ width: '140px', height: 'auto' }} />
</Link>


          
        </div>

        {/*middle section*/}
        <div className="navbar-section">
        {location.pathname === '/' ? (
                <div className="search__box">
                  <img className="search__icon" src={require('../../components/search/assets/ic_fluent_search_24_filled.svg').default} alt="Country"/>
                  <input className='input__area' type="text" placeholder="Search.." id="search"   value={searchQuery}onChange={handleChange} />
                </div>
              ) : (null)}
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
                  <li><a href="/category/:id">Athletic wear</a></li>
                  <li><a href="/category/:id">Best sellers</a></li>
                  <li><a href="/category/:id">Team sports</a></li>
                  <li><a href="/category/:id">Outdoor gear</a></li>
                  <li><a href="/category/:id">Tracksuit</a></li>
                  <li><a href="/category/:id">All men sales</a></li>
                  <li><a href="/category/:id">Running shoes</a></li>
                </ul>
              </div>

              <div className="navbar-row">
                <header className="navbar-sub-category-title">Women</header>
                    <ul className="navbar-mega-links">
                    <li><a href="/category/:id">All women sales</a></li>
                    <li><a href="/category/:id">Best sellers</a></li>
                    <li><a href="/category/:id">Yoga and pilates</a></li>
                    <li><a href="/category/:id">Outdoor gear</a></li>
                    <li><a href="/category/:id">Hoodies and jackets</a></li>
                    <li><a href="/category/:id">Running shoes</a></li>
                    <li><a href="/category/:id">Athletic wear</a></li>
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
                  <li><a href="/category/:id">Shop All</a></li>
                  <li><a href="/category/:id">Barebell</a></li>
                  <li><a href="/category/:id">Pull-up bars</a></li>
                  <li><a href="/category/:id">Plates</a></li>
                  <li><a href="/category/:id">Kettlebell</a></li>
                </ul>
              </div>

              <div className="navbar-row">
                <header className="navbar-sub-category-title">Cardio machines</header>
                <ul className="navbar-mega-links">
                  <li><a href="/category/:id">Shop All</a></li>
                  <li><a href="/category/:id">Stationary bikes</a></li>
                  <li><a href="/category/:id">Treadmills</a></li>
                </ul>
              </div>

              <div className="navbar-row">
                <header className="navbar-sub-category-title">Yoga</header>
                <ul className="navbar-mega-links">
                  <li><a href="/category/:id">Shop All</a></li>
                  <li><a href="/category/:id">Resistance</a></li>
                  <li><a href="/category/:id">Bags</a></li>
                  <li><a href="/category/:id">Headwear</a></li>
                </ul>
              </div>

              <div className="navbar-row">
                <header className="navbar-sub-category-title">Accessories</header>
                <ul className="navbar-mega-links">
                  <li><a href="/category/:id">Shop All</a></li>
                  <li><a href="/category/:id">Socks</a></li>
                  <li><a href="/category/:id">Bags</a></li>
                  <li><a href="/category/:id">Headwear</a></li>
                  <li><a href="/category/:id">Gloves</a></li>
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
                  <li><a href="/category/:id">Shop All</a></li>
                  <li><a href="/category/:id">Whey</a></li>
                  <li><a href="/category/:id">Creatine</a></li>
                  <li><a href="/category/:id">BCAAs</a></li>
                </ul>
              </div>

              <div className="navbar-row">
                <header className="navbar-sub-category-title">Muscle recovery</header>
                    <ul className="navbar-mega-links">
                    <li><a href="/category/:id">Shop All</a></li>
                    <li><a href="/category/:id">Vitamins</a></li>
                    <li><a href="/category/:id">Pre-Workout supplements</a></li>
                    <li><a href="/category/:id">Post-Workout supplements</a></li>
                  </ul>
              </div>

              <div className="navbar-row">
                <header className="navbar-sub-category-title">Personal care</header>
                    <ul className="navbar-mega-links">
                    <li><a href="/category/:id">Fat burners</a></li>
                    <li><a href="/category/:id">Weight loss</a></li>
                    <li><a href="/category/:id">Hair-Skin vitamins</a></li>
                    <li><a href="/category/:id">Headwear</a></li>
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
        
    </div>



    )



}

