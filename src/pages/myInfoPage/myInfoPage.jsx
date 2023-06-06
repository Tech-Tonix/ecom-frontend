import React from 'react'
import './myInfoPage.css';
import MyInfo from '../../components/myInfo/MyInfo';
import { Categories } from '../../components/categoriespannel/categories';
import MembershipCard from '../../components/membershipCard/membershipCard';


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
        
          <div className='MemberShipWrapper'>
            <MembershipCard/>
          </div>
        </div>
            
      
    </div>
  )
}

export default MyInfoPage
