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
          {/* Calendar icon SVG */}
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'start' }}>
            <div>
              <p style={{ fontWeight: '420', fontSize: '30px', lineHeight: '51px', letterSpacing: '0.065em', color: '#171717', fontFamily: 'Brandon Grotesque' }}>
                ORDER HISTORY
              </p>
              <p style={{ fontSize: '14px', color: '#999' }}>
                NOTE: You can cancel an order only within 24 hours of placing it.
              </p>
            </div>
            <div className='datePickerContainer'>
              <p>pick a date</p>
              <DatePicker onSelectDate={handleDateChange} />
            </div>
          </div>
        </div>
        <div>
          {filteredOrderHistoryDate.length > 0 ? (
            filteredOrderHistoryDate.map((item, index) => {
              const product = productDetails[index] || {};
              return (
                <div key={item.id} className='orderHistoryCard' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <p>{index + 1}</p>
                  <p>{status}</p>
                  <p>{item.placed_at}</p>
                  <button onClick={() => handleCancelOrder(item.id, item.order_item_id)}>cancel order</button>
                </div>
              );
            })
          ) : (
            <p style={{ margin: '250px', fontSize: '35px' }}>:/ YOU DIDN'T PLACE ANY ORDER</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryPage;
