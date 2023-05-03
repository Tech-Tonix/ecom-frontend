import React from 'react';
import './categories.css';
import ProfilPic from '../Assets/Images/Profilepic.JPG';
import {Heart24Regular} from '@fluentui/react-icons';
import { Person24Filled } from '@fluentui/react-icons';
import { ShoppingBag24Regular } from '@fluentui/react-icons';
import { Question24Regular } from '@fluentui/react-icons';
import { ReOrder24Regular } from '@fluentui/react-icons';
import { Map24Regular } from '@fluentui/react-icons';
import { SignOut24Regular } from '@fluentui/react-icons';

const Categories = () => {
  return (
    <div className='categories-wrapper'>
        {/* User profile picture*/}
        <div className='profile-pic-container'>
            <img src={ProfilPic} alt='Profile picture displayed'/>
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

export default Categories;
