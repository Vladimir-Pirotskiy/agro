import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer_menu">
                <div className="footer_menu-item"><a href="#" className="footer_menu-link link">Аграриям</a></div>
                <div className="footer_menu-item"><a href="#" className="footer_menu-link link">О проекте</a></div>
                <div className="footer_menu-item"><a href="#" className="footer_menu-link link">Политика конфеденциальности</a></div>
                <div className="footer_menu-item"><a href="#" className="footer_menu-link link">Зерновым компаниям </a></div>
                <div className="footer_menu-item"><a href="#" className="footer_menu-link link">Новости</a></div>
                <div className="footer_menu-item"><a href="#" className="footer_menu-link link">Договор оферты</a></div>
                <div className="footer_menu-item"><a href="#" className="footer_menu-link link">Производителям</a></div>
                <div className="footer_menu-item"><a href="#" className="footer_menu-link link">Контакты</a></div>
            </div>
            <div className="footer_copyright">© All rights reserved. AgroTreid 2021</div>
        </footer>
    )
}

export default Footer;
