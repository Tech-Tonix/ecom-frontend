// import React from 'react';
// import './orderHistoryCompo.css';
// import { useContext, useState, useEffect } from 'react';
// import ActiveStepContext from '../../context/activeStepContext';
// import axios from 'axios';

// function OrderHistoryCompo({ dataOrderHistory }) {
//   const { activeStep } = useContext(ActiveStepContext);
//   const [productDetails, setProductDetails] = useState(null);

//   useEffect(() => {
//     fetchProductDetails();
//   }, []);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await axios.get(`https://gymrat-app.onrender.com/store/products/${dataOrderHistory.items[0].product[0]}`);
//       const product = response.data;
//       setProductDetails(product);
//     } catch (error) {
//       console.error('Error fetching product details:', error);
//     }
//   };

//   if (!dataOrderHistory || !productDetails) {
//     return null;
//   }

//   let status = '';

//   switch (activeStep) {
//     case 1:
//       status = 'Order Placed';
//       break;
//     case 2:
//       status = 'Packed';
//       break;
//     case 3:
//       status = 'Shipped';
//       break;
//     case 4:
//       status = 'Delivered';
//       // break;
//     default:
//       status = 'Unknown';
//       break;
//   }

//   return (
//     <div className='orderHistoryCard'>
//       <p>{'dataOrderHistory.id'}</p>
//       <img src={productDetails.image} alt={productDetails.name} />
//       <p>{'productDetails.name'}</p>
//       <p>{'status'}</p>
//       <p>{'dataOrderHistory.placed_at'}</p>
//     </div>
//   );
// }

// export default OrderHistoryCompo;
