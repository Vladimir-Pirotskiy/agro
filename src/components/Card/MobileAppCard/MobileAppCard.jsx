import React from 'react';
import './MobileAppCard.css';
import appStoreBtn from '../../../assets/app-store.png';
import googlePlayBtn from '../../../assets/google-play.png';
import phoneAndLaptopImg from '../../../assets/phone-and-laptop.png';

const MobileAppCard = () => {
  return (
    <section className="card-mobile-app mobile-app card">
      <div className="mobile-app_image-container">
        <img src={phoneAndLaptopImg} alt="Mobile App And Web Service" className="mobile-app_image" />
      </div>
      <div className="mobile-app_content-container">
        <div className="mobile-app_title thin-title">Мобильное приложение <br /> и веб-сервис</div>
        <div className="mobile-app_text">С широким набором простых и ценных инструментов для участников с/х рынка</div>
        <img src={phoneAndLaptopImg} alt="Mobile App And Web Service" className="mobile-app_image mobile-app_image--mob" />
        <div className="mobile-app_buttons-container">
          <button className="mobile-app_button button">
            <img src={appStoreBtn} className="mobile-app_button-image" alt="App Store Button" />
          </button>
          <button className="mobile-app_button button">
            <img src={googlePlayBtn} className="mobile-app_button-image" alt="Google Play Button" />
          </button>
        </div>
      </div>
    </section>
  )
};

export default MobileAppCard;
