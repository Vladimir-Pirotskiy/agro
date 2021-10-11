import React, { useState } from "react";
import logo from '../../assets/agroTradeLogo.svg';

import './Header.css';

const Header = () => {
    const [ menuHidden, setMenuHidden ] = useState(true);

    const toggleMenu = () => setMenuHidden((prevState) => !prevState);

    return (
        <header className="header">
            <img className="header_logo" src={logo} alt="logo" />
            <ul className={`header_menu ${menuHidden ? 'header_menu--hidden' : ''}`}>
                <li className="header_menu-item">О проекте</li>
                <li className="header_menu-item">Аграриям</li>
                <li className="header_menu-item">Зерновым компаниям</li>
                <li className="header_menu-item">Производителям</li>
                <li className="header_menu-item header_menu-item--only-mob">Новости</li>
                <li className="header_menu-item header_menu-item--only-mob">Контакты</li>
                <li className="header_menu-item menu_button button">Вход</li>
            </ul>
            <div className="header_menu-mobile-sandwich" onClick={toggleMenu}>
                <svg viewBox="0 0 100 80" width="40" height="40" className="header_menu-mobile-sandwich-svg">
                    <rect width="100" height="5"></rect>
                    <rect width="80" height="5" y="25"></rect>
                    <rect width="100" height="5" y="50"></rect>
                </svg>
            </div>
            <div className={`header_menu-mobile-blur ${menuHidden ? 'header_menu-mobile-blur--hidden' : ''}`} />
            <div className={`header_menu-mobile-header ${menuHidden ? 'header_menu-mobile-header--hidden' : ''}`}>
                <img className="header_menu-mobile-logo" src={logo} alt="Logo" />
                <div className="header_menu-mobile-close" onClick={toggleMenu}>&#10060;</div>
            </div>
        </header>
    )
}

export default Header;