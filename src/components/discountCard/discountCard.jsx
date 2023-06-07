import React from 'react';
import video1 from "../../assets/video1.mp4" 
import video2 from "../../assets/video2.mp4" 
import video3 from "../../assets/video3.mp4" 
import './discountCard.css';

export const DiscountCard = () => {
  return (
    <div className="discountCard">
      <video className="backgroundVideo" autoPlay loop muted>
        <source src={video1}type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="discountCard-title">
        -40% ON EVERYTHING
      </div>
      <div className="discountCard-button">
        <button type="button" style={{ background: '#4A4A4A', borderRadius: '25px', color: '#F9F9F9' }}> SHOP IT</button>
      </div>
    </div>
  );
};

export const DiscountCard2 = () => {
  return (
    <div className="discountCard">
      <video className="backgroundVideo" autoPlay loop muted>
        <source src={video2} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="discountCard-title">
      FREE SHIPPING !
      </div>
      <div className="discountCard-button">
        <button type="button" style={{ background: '#4A4A4A', borderRadius: '25px', color: '#F9F9F9' }}> SHOP IT</button>
      </div>
    </div>
  );
};

export const DiscountCard3 = () => {
  return (
    <div className="discountCard">
      <video className="backgroundVideo" autoPlay loop muted>
        <source src={video3} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="discountCard-title">
      DON'T MISS OUR PROMOTIONS
      </div>
      <div className="discountCard-button">
        <button type="button" style={{ background: '#4A4A4A', borderRadius: '25px', color: '#F9F9F9' }}> SHOP IT</button>
      </div>
    </div>
  );
};
