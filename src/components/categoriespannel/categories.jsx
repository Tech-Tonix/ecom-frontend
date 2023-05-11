import React from 'react';
import './categories.css';
import { Heart24Regular,Person24Filled,ShoppingBag24Regular,ReOrder24Regular,Map24Regular,SignOut24Regular } from '@fluentui/react-icons';
// import {Heart24Regular} from '@fluentui/react-icons';
// Icon,Heart24Regular,Person24Filled,ShoppingBag24Regular,ReOrder24Regular,Map24Regular,SignOut24Regular

export const Categories = () => {
  return (
    <div className='categories-wrapper'>
        {/* User profile picture*/}
        <div className='profile-pic-container'>
            <img src="D:/react/ecom-frontend/src/assets/portrait-homme-sport-assis-ballon-fitness.jpg" alt='' />
        </div>
        {/*Categories*/}
        <div className='categories'>
            <ul>
                <li>
                    <div className='categorie-container-filled'>
                    <div className='categorie-item'>
                        <Person24Filled className='icons'/>
                        <span className='categorie-text' style={{marginLeft: '40px'}}>My info</span>
                    </div>
                    </div>
                </li>

                <li>
                    <div className='categorie-container'>
                    <div className='categorie-item'>
                        <Heart24Regular className='icons'/>
                        <span className='categorie-text' style={{marginLeft: '25px'}}>My wishlist</span>
                    </div>
                    </div>
                </li>

                <li>
                    <div className='categorie-container'>
                    <div className='categorie-item'>
                        <ShoppingBag24Regular className='icons'/>
                        <span className='categorie-text' style={{marginLeft: '40px'}}>My bag</span>
                    </div>
                    </div>
                </li>
                
                <li>
                    <div className='categorie-container'>
                    <div className='categorie-item'>
                        <ReOrder24Regular className='icons'/>
                        <span className='categorie-text' style={{marginLeft: '25px'}}>Order history</span>
                    </div>
                    </div>
                </li>

                <li>
                    <div className='categorie-container'>
                    <div className='categorie-item'>
                        <Map24Regular className='icons'/>
                        <span className='categorie-text' style={{marginLeft: '25px'}}>Track my order</span>
                    </div>
                    </div>
                </li>

                <li>
                    <div className='categorie-container'>
                    <div className='categorie-item'>
                        <SignOut24Regular className='icons'/>
                        <span className='categorie-text' style={{marginLeft: '40px'}}>Sign out</span>
                    </div>
                    </div>
                </li>
            </ul>

        </div>
      
    </div>
  )
}


