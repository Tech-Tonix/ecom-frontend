import React, { useState, useEffect,useContext } from 'react';
import './trackingpage.css';
import { Categories } from '../../components/categoriespannel/categories';
import Trackingtext from '../../components/trackingText/trackingtext';
import axios from 'axios';
import Trackcomponent from '../../components/trackComponent/trackcomponent';
import AuthContext from '../../context/AuthContext';
function Trackingpage() {
  const [orderStatus, setOrderStatus] = useState('');
  const [trackingNumber, setTrackingNumber] = useState('');
  const { user,authTokens } = useContext(AuthContext);  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://gymrat-app.onrender.com/store/orders/?tracking_number=${trackingNumber}/`,
        {headers: {
          Authorization: `JWT ${authTokens}`,}
        },
      );
      const data = response.data;
      console.log(data);
      const orderStatus = data[0].status;
      console.log(orderStatus)
      setOrderStatus(orderStatus);
    } catch (error) {
      console.error('Error fetching order information:', error);
    }
  };

  const handleChange = (event) => {
    setTrackingNumber(event.target.value);
  };

  return (
    <div className='TrackingPageWrapper'>
      <div className='categoriesPannelTrackingPage'>
        <Categories />
      </div>
      <div className='trackingComponentContainer'>
        <div>
          <Trackingtext />
          <form onSubmit={handleSubmit}>
            <label htmlFor='trackingNumber'>Enter Tracking Number:</label>
            <input
              type='text'
              value={trackingNumber}
              id='trackingNumber'
              required
              onChange={handleChange}
            />
            <button type='submit'>Track</button>
          </form>

          <div>
            <p>tracking number : {trackingNumber}</p>
            <p>Order Status: {orderStatus}</p>
            <Trackcomponent orderStatus={orderStatus}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trackingpage;
