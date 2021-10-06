import React from 'react';
import './MobileAppCard.css';
import appStoreBtn from '../../../assets/app-store.jpg';
import googlePlayBtn from '../../../assets/google-play.png';
import phoneAndLaptopImg from '../../../assets/phone-and-laptop.png';

const MobileAppCard = () => {
  return (
    <section className="card-mobile-app mobile-app">
      <div className="mobile-app_image-container">
        <img src={phoneAndLaptopImg} alt="Mobile App And Web Service" className="mobile-app_image" />
      </div>
      <div className="mobile-app_content-container">
        <div className="mobile-app_title thin-title">Мобильное приложение <br /> и веб-сервис</div>
        <div className="mobile-app_text">С широким набором простых и ценных инструментов для участников с/х рынка</div>
        <div className="mobile-app_buttons-container">
          <img src={appStoreBtn} className="mobile-app_button" alt="App Store Button" />
          <img src={googlePlayBtn} className="mobile-app_button" alt="Google Play Button" />
        </div>
      </div>
    </section>
  )
};

export default MobileAppCard;
