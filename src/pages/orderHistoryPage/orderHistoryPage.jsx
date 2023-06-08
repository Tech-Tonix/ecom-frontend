import React, { useState, useEffect, useContext } from 'react';
import './orderHistoryPage.css';
import { Categories } from '../../components/categoriespannel/categories';
import OrderHistoryCompo from '../../components/orderHistoryCompo/orderHistoryCompo';
import { DatePicker } from '@fluentui/react';
import ActiveStepContext from '../../context/activeStepContext';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';

function OrderHistoryPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [orderHistory, setOrderHistory] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const { activeStep } = useContext(ActiveStepContext);
  const { user, authTokens } = useContext(AuthContext);
  const [orderToDelete, setOrderToDelete] = useState();
  let status = '';

  switch (activeStep) {
    case 1:
      status = 'Order Placed';
      break;
    case 2:
      status = 'Packed';
      break;
    case 3:
      status = 'Shipped';
      break;
    case 4:
      status = 'Delivered';
      break;
    default:
      status = 'Unknown';
      break;
  }

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const fetchOrderHistory = async () => {
    try {
      const response = await axios.get('https://gymrat-app.onrender.com/store/orders/', {
        headers: {
          Authorization: `JWT ${authTokens}`,
        },
      });
      const data = response.data;
      setOrderHistory(data);
      setOrderToDelete(data[0].id)
      console.log("hhh",data[0].id)
      
    } catch (error) {
      console.error('Error fetching order history:', error);
    }
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
  };

  const filteredOrderHistoryDate = selectedDate
    ? orderHistory.filter((item) => item.date === selectedDate)
    : orderHistory;

  const handleCancelOrder = async () => {
    
    try {
      await axios.delete(
        `https://gymrat-app.onrender.com/store/orders/delete/${orderToDelete}/`,
        {
          headers: {
            Authorization: `JWT ${authTokens}`,
          },
        }
      );
      fetchOrderHistory(); // Fetch updated order history after cancellation
    } catch (error) {
      console.error('Error canceling order:', error);
    }
  };

  return (
    <div className='OrderHistoryWrapper'>
      <div className='CategoriesWrapperHistoryPage'>
        <Categories />
      </div>

      <div className='OrderHistoryCompoWrapper'>
        <div className='calendarIconPlusDatePicker'>
            <div className='datePickerContainer'>
            <svg viewbox="0 0 48 48" width="48" height="48" stroke="currentColor" fill="currentColor"><path d="M31.2 26.4a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Zm-2.4 4.8a2.4 2.4 0 1 0 4.8 0 2.4 2.4 0 0 0-4.8 0Zm-4.8-4.8a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Zm-2.4 4.8a2.4 2.4 0 1 0 4.8 0 2.4 2.4 0 0 0-4.8 0Zm-4.8-4.8a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8ZM7.2 13.2A6 6 0 0 1 13.2 7.2h21.6A6 6 0 0 1 40.8 13.2v21.6a6 6 0 0 1-6 6h-21.6A6 6 0 0 1 7.2 34.8v-21.6ZM38.4 16.8H9.6v18A3.6 3.6 0 0 0 13.2 38.4h21.6a3.6 3.6 0 0 0 3.6-3.6V16.8Zm-3.6-7.2h-21.6A3.6 3.6 0 0 0 9.6 13.2V14.4h28.8v-1.2A3.6 3.6 0 0 0 34.8 9.6Z"  /></svg>
              <DatePicker onSelectDate={handleDateChange}  className='datePickerStyling' />
            </div>
        </div>
        

        <div className='OrderTableRows'>
          {filteredOrderHistoryDate.length > 0 ? (
            filteredOrderHistoryDate.map((item, index) => {
              const product = productDetails[index] || {};
              return (
                <div key={item.id} className='orderHistoryColumn' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <p>{index + 1}</p>
                  <p>{status}</p>
                  <p>{item.placed_at}</p>
                  <button className='CancelBtnTrack' onClick={() => handleCancelOrder(item.id, item.order_item_id)}>cancel</button>
                </div>
              );
            })
          ) : (
            <p style={{ margin: '250px', fontSize: '35px' }}>:/ YOU DIDN'T PLACE ANY ORDER</p>
          )}
        </div>
        <p style={{ fontSize: '14px', color: '#e9080881' }}>
                NOTE: You can cancel an order only within 24 hours of placing it.
        </p>
      </div>
    </div>
  );
}

export default OrderHistoryPage;
