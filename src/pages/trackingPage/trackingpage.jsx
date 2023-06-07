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
        <div className='newTrackingZadhaAmir'>
          <Trackingtext />
         </div>
         <div className='formeStylingTrack'>
            <div className="iconContainerTruck">
            <svg viewbox="0 0 64 64" width="64" height="64" stroke="currentColor" fill="currentColor"><path d="M12.8 3.2c1.2 0 2.3 0.3 3.2 0.9A6.4 6.4 0 0 1 25.6 9.6v3.2h1.6a1.6 1.6 0 0 1 1.6 1.6V28.8a6.4 6.4 0 0 1-6.4 6.4H9.6a6.4 6.4 0 0 1-6.4-6.4V14.4a1.6 1.6 0 0 1 1.6-1.6H6.4V9.6a6.4 6.4 0 0 1 6.4-6.4ZM9.6 12.8h6.4V9.6a3.2 3.2 0 0 0-6.4 0v3.2Zm9.6-3.2v3.2h3.2V9.6a3.2 3.2 0 0 0-4-3.1c0.5 0.9 0.8 2 0.8 3.1Zm9.6 0.3V9.6h10.4c3.1 0 5.6 2.5 5.6 5.6V19.2h2.8a4.8 4.8 0 0 1 4.3 2.7l5.2 10.3a4.8 4.8 0 0 1 0.5 2.1V46.4a4.8 4.8 0 0 1-4.8 4.8h-5a8 8 0 0 1-15.6 0h-3.6a8 8 0 0 1-15.6 0h-0.9a5.6 5.6 0 0 1-5.6-5.6v-7.7c1 0.3 2 0.5 3.1 0.5h0.1v7.2c0 1.3 1.1 2.4 2.4 2.4h0.9a8 8 0 0 1 15.6 0h3.6A8 8 0 0 1 41.6 41.8v-26.6a2.4 2.4 0 0 0-2.4-2.4H31.7A4.8 4.8 0 0 0 28.8 9.9ZM44.8 43.2c1.5 1.1 2.6 2.9 3 4.8h5a1.6 1.6 0 0 0 1.6-1.6V35.2h-9.6v8Zm0-11.2h8.6L49.1 23.3A1.6 1.6 0 0 0 47.6 22.4H44.8v9.6Zm-24 12.8a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm14.4 4.8a4.8 4.8 0 1 0 9.6 0 4.8 4.8 0 0 0-9.6 0Z"  /></svg>
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor='trackingNumber'>Enter Tracking Number:</label>
              <div className='btnPlusInputTrack'>
                <input
                  type='text'
                  value={trackingNumber}
                  id='trackingNumber'
                  required
                  onChange={handleChange}
                />
                <button type='submitbtnTrackCode'>SUBMIT</button>
              </div>
            </form>
          </div>


          <div className='TrackingFieldNumberStatus'>
            <p>tracking number : {trackingNumber}</p>
            <p>Order Status: {orderStatus}</p>
          </div>
          <div className='TrackcompoWrapperPage'>
          <Trackcomponent orderStatus={orderStatus}/>
          </div>
      </div>
    </div>
  );
}

export default Trackingpage;
