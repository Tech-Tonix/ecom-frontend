import React from 'react';
import './loadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <div><p style={{color:'#747474',fontSize:'20px'}}>please wait...</p></div>
    </div>
  );
};

export default LoadingSpinner;
