import React from 'react';
import './heroSection2.css';
import videoFile from './assets/backgroundVideo2.mp4';
import videoFile2 from './assets/background.mp4';

export const HeroSection2 = () => {
    return (
      <div className="heroSection2-container">
        <div className="video-background">
          <video autoPlay loop muted className="video-element">
            <source src={videoFile} type="video/mp4" />
          </video>
        </div>
        <div className="heroSection2-content">
          <div className="heroSection2-titles">
            <h1 className="heroSection2-titles-pp">WHAT PRODUCTS WOULD GIVE YOU THE CONFIDENCE TO BECOME AN ICON?</h1>
            <p className="heroSection2-titles-p">Succes starts with a good outfit</p>
          </div>
          <div className="heroSection2-buttons">
            <button type="button" style={{ background: '#F9F9F9', borderRadius: '35px', color: '#171717' ,padding:'1rem 1rem '}} id="leftButton">
              SHOP ARTICLES NOW !
            </button>
            
          </div>
        </div>
      </div>
    );
  };
  


  export const HeroSection3 = () => {
    return (
      <div className="heroSection2-container">
        <div className="video-background">
          <video autoPlay loop muted className="video-element">
            <source src={videoFile2} type="video/mp4" />
          </video>
        </div>
        <div className="heroSection2-content">
          <div className="heroSection2-titles">
            <h1 className="heroSection2-titles-pp">WHAT PRODUCTS WOULD GIVE YOU THE CONFIDENCE TO BECOME AN ICON?</h1>
            <p className="heroSection2-titles-p">Succes starts with a good outfit</p>
          </div>
          <div className="heroSection2-buttons">
            <button type="button" style={{ background: '#F9F9F9', borderRadius: '35px', color: '#171717' ,padding:'1rem 1rem '}} id="leftButton">
              SHOP ARTICLES NOW !
            </button>
            
          </div>
        </div>
      </div>
    );
  };
