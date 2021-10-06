import React from 'react';
import './ContactsCard.css';

import map from '../../../assets/map.png';
import geoPointIconMap from '../../../assets/map_point_white.svg';
import phoneIcon from '../../../assets/phone.svg';
import mailIcon from '../../../assets/mail.svg';
import geoPointIconContent from '../../../assets/map_point.svg';
import fbIcon from '../../../assets/fb.svg';
import instaIcon from '../../../assets/insta.png';
import linkedinIcon from '../../../assets/linkedin.svg';

const ContactsCard = () => {
  return (
    <section className="card-contacts">
      <img src={map} alt="Address Map" className="card-contacts_map" />
      <img src={geoPointIconMap} alt="Geo Point Map Icon" className="card-contacts_map-geo-point" />
      <div className="card-contacts_info">
        <div className="card-contacts_title thin-title">Контакты</div>
        <div className="card-contacts_content">
          <div className="card-contacts_content-item">
            <img src={phoneIcon} alt="Phone Number Icon" className="card-contacts_content-item-icon" />
            <div className="card-contacts_content-item-text">+380 123-456-7890</div>
          </div>
          <div className="card-contacts_content-item">
            <img src={mailIcon} alt="Email Icon" className="card-contacts_content-item-icon" />
            <div className="card-contacts_content-item-text">info@agrotraid.com</div>
          </div>
          <div className="card-contacts_content-item">
            <img src={geoPointIconContent} alt="Geo Point Icon" className="card-contacts_content-item-icon" />
            <div className="card-contacts_content-item-address">
              <span className="card-contacts_content-address-line">Воздвиженская, 40</span> <br />
              <span className="card-contacts_content-address-line">Киев</span> <br />
              <span className="card-contacts_content-address-line">Украина</span>
            </div>
          </div>
        </div>
        <div className="card-contacts_social-networks">
          <img src={fbIcon} alt="Facebook Icon" className="card-contacts_social-network-icon" />
          <img src={instaIcon} alt="Instagram Icon" className="card-contacts_social-network-icon" />
          <img src={linkedinIcon} alt="LinkedIn Icon" className="card-contacts_social-network-icon" />
        </div>
      </div>
    </section>
  );
};

export default ContactsCard;
