import React, { useContext, useState,useEffect } from 'react';
import './myInfo.css';
import LoadingSpinner from '../spinner/loadingSpinner';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { Toaster,toast } from 'react-hot-toast';
function MyInfo({ userInfo,fetchUserInfo }) {
  const [editAddress, setEditAddress] = useState(false);
  const { user,authTokens } = useContext(AuthContext);
  const [newAddress, setNewAddress] = useState('');
  const [updatedUserInfo, setUpdtaedUserInfo] = useState(userInfo);

  const handleEditAddress = () => {
    setEditAddress(true);
  };
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('https://gymrat-app.onrender.com/auth/users/me/', {
          headers: {
            Authorization: 'JWT ' + authTokens,
          },
        });
        setUpdtaedUserInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserInfo();
  }, []);


  const handleSaveAddress = () => {
    axios
      .put(
        'https://gymrat-app.onrender.com/auth/users/me/',
        {
          address: newAddress,
          city: userInfo.city,
          first_name: userInfo.first_name,
          postal_code: userInfo.postal_code
        },
        {
          headers: {
            Authorization: 'JWT ' + authTokens
          }
        }
      )
      .then(response => {
        const updatedUserInfo = { ...userInfo, address: newAddress };
        setUpdtaedUserInfo(updatedUserInfo);
        setEditAddress(false);
        toast.success('Address updated successfully!',);
      })
      .catch(error => {
        console.error(error);
        toast.error('Failed to update address. Please try again.',);
      });
  };
  
  const handleAddressChange = event => {
    setNewAddress(event.target.value);
  };
  

  if (!userInfo) {
    return <div style={{marginRight:'500px',marginTop:'200px'}}><LoadingSpinner /></div>;
  }

  const UserInfo = {
    firstName: userInfo.first_name,
    email: userInfo.email,
    memberClubReduction: userInfo.member_club_reduction,
    postalCode: userInfo.postal_code,
    city: userInfo.city,
    address: userInfo.address,
  };

  return (
    <div className='MyInfoContainer'>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>


      <div className='TitleSection'>
        <p style={{ fontWeight: '420', fontSize: '36px', lineHeight: '51px', letterSpacing: '0.065em', color: '#171717', marginBottom: '10px', marginTop: '5px' }}>My Info</p>
        <p>Edit your information, login details, and preferences</p>
      </div>
      <div className='InfoSection'>
        {Object.entries(UserInfo).map(([key, value]) => (
          <div className='profile-Info' key={key}>
            <span className='info-title'>{key}:</span>
            {key === 'address' && editAddress ? (
              <input
                type='text'
                className='edit-input-Info'
                value={newAddress}
                onChange={handleAddressChange}
                placeholder='Please enter your Address'
              />
            ) : (
              <span className='value'>{value}</span>
            )}
            {key === 'address' && !editAddress && (
              <span className='edit-Label-Info' onClick={handleEditAddress}>
                Edit
              </span>
            )}
          </div>
        ))}
        {editAddress && (
          <button className='save-button-Info' onClick={handleSaveAddress}>
            Click to Save
          </button>
        )}
      </div>
    </div>
  );
}

export default MyInfo;







// import React, { useState, useEffect,useContext } from 'react';
// import './myInfo.css';
// import axios from 'axios';
// import AuthContext from '../../context/AuthContext';

// function MyInfo() {
//   const { user,authTokens } = useContext(AuthContext); 
//   const [editAddress, setEditAddress] = useState(false);
//   const [newAddress, setNewAddress] = useState('');
//   const [userInfo, setUserInfo] = useState(null);

//   useEffect(() => {
//     // Fetch user information from the API
//     const fetchUserInfo = async () => {
//       try {
//         const response = await axios.get('https://gymrat-app.onrender.com/auth/users/me/', {
//           headers: {
//             Authorization: 'JWT ' + authTokens,
//           },
//         });
//         setUserInfo(response.data);
        
//       } catch (error) {
//         console.log(error);
//       }}
//       fetchUserInfo();
//     }, []);
  
//   const handleEditAddress = () => {
//     setEditAddress(true);
//   };

//   const handleSaveAddress = () => {
//     setEditAddress(false);
//     // Update the address in the user information object
//     setUserInfo((prevUserInfo) => ({
//       ...prevUserInfo,
//       Address: newAddress,
//     }));
//   };

//   const handleAddressChange = (event) => {
//     setNewAddress(event.target.value);
//   };

//   if (!userInfo) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className='MyInfoContainer'>
//       <div className='TitleSection'>
//         <p style={{ fontWeight: '420', fontSize: '36px', lineHeight: '51px', letterSpacing: '0.065em', color: '#171717', marginBottom: '10px', marginTop: '5px' }}>My Info</p>
//         <p>Edit your information, login details, and preferences</p>
//       </div>
//       <div className='InfoSection'>
//         {Object.entries(userInfo).map(([key, value]) => (
//           <div className='profile-Info' key={key}>
//             <span className='info-title'>{key}:</span>
//             {key === 'Address' && editAddress ? (
//               <input
//                 type='text'
//                 className='edit-input-Info'
//                 value={newAddress}
//                 onChange={handleAddressChange}
//                 placeholder='Please enter your Address'
//               />
//             ) : (
//               <span className='value'>{value}</span>
//             )}
//             {key === 'Address' && !editAddress && (
//               <span className='edit-Label-Info' onClick={handleEditAddress}>
//                 Edit
//               </span>
//             )}
//           </div>
//         ))}
//         {editAddress && (
//           <button className='save-button-Info' onClick={handleSaveAddress}>
//             Click to Save
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MyInfo;
