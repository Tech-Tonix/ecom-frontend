import React, { useState, useEffect,useContext } from 'react';
import './myInfoPage.css';
import MyInfo from '../../components/myInfo/myInfo';
import { Categories } from '../../components/categoriespannel/categories';
import MembershipCard from '../../components/membershipCard/memebershipCard';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
function MyInfoPage(  ) {
  const [userInfo, setUserInfo] = useState(null);
  const { user,authTokens } = useContext(AuthContext);


  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('https://gymrat-app.onrender.com/auth/users/me/', {
          headers: {
            Authorization: 'JWT ' + authTokens,
          },
        });
        setUserInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserInfo();
  }, []);

  const updateUserInfo = userInfo => {
    setUserInfo(userInfo);
  };

  return (
    <div className='myInfoPageWrapper'>
      <div className='CategoriesWrapperMyInfoPage'>
        <Categories />
      </div>
      <div className='MyInfoAndMemberShipWrapper'>
        <div className='MyInfoWrapper'>
           <MyInfo userInfo={userInfo} updateUserInfo={updateUserInfo} />
        </div>
      </div>
    </div>
  );
}

export default MyInfoPage;
