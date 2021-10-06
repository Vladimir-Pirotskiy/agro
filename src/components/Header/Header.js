import React from "react";
import logo from '../../assets/agroTradeLogo.svg';

import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <img className="header_logo" src={logo} alt="logo" />
            <ul className="header_menu">
                <li className="header_menu-item">О проекте</li>
                <li className="header_menu-item">Аграриям</li>
                <li className="header_menu-item">Зерновым компаниям</li>
                <li className="header_menu-item">Производителям</li>
                <li className="header_menu-item menu_button button">Вход</li>
            </ul>
        </header>
    )
}

export default Header;