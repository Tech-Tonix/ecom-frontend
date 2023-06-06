import React, { useState } from 'react';
import './MyInfo.css';

function MyInfo() {
  const [editAddress, setEditAddress] = useState(false);
  const [newAddress, setNewAddress] = useState('sba');

  const handleEditAddress = () => {
    setEditAddress(true);
  };

  const handleSaveAddress = () => {
    setEditAddress(false);
  };

  const handleAddressChange = (event) => {
    setNewAddress(event.target.value);
  };

  const UserInfo = {
    FirstName: 'Razika',
    LastName: 'Kheraya',
    DOB: '30/04/2000',
    Email: 'r.kheraya@esi-sba.dz',
    PhoneNumber: '0557702294',
    Address: newAddress,
  };

  return (
    <div className='MyInfoContainer'>
      <div className='TitleSection'>
        <h1>My Info</h1>
        <p>Edit your information, login details, and preferences</p>
      </div>
      <div className='InfoSection'>
        {Object.entries(UserInfo).map(([key, value]) => (
          <div className='Info' key={key}>
            <span className='title'>{key}:</span>
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