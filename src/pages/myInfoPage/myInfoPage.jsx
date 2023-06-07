import React from 'react'
import './myInfoPage.css';
import MyInfo from '../../components/myInfo/myInfo';
import { Categories } from '../../components/categoriespannel/categories';
import MembershipCard from '../../components/membershipCard/memebershipCard';


function MyInfoPage() {
  return (
    <div className='myInfoPageWrapper'>
        <div className='CategoriesWrapperMyInfoPage'>
        <Categories />
      </div>
        <div className='MyInfoAndMemberShipWrapper'>
          <div className='MyInfoWrapper'>
            <MyInfo/>
          </div>
        
          
        </div>
            
      
    </div>
  )
}

export default MyInfoPage
