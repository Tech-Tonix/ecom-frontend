import React from 'react'
import './orderHistoryCompo.css'; 
import { useContext } from 'react';
import ActiveStepContext from '../../context/activeStepContext';


function OrderHistoryCompo({dataOrderHistory}) {


  const {activeStep} = useContext(ActiveStepContext);


  if(!dataOrderHistory){
    return null; 
  }
  let status = ''; 

  switch(activeStep) {
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
  
  return (
        <div className='oderHistoryCard'>
            <p>{dataOrderHistory.id}</p>
            <img src={dataOrderHistory.image} alt={dataOrderHistory.name}/>
            <p>{dataOrderHistory.name}</p>
            <p>{status}</p>
            <p>{dataOrderHistory.date}</p>
        </div>
  )
}

export default OrderHistoryCompo
