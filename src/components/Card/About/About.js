import React from "react";
import './About.css';
import separator from '../../../assets/separator.svg';

const About = () => {
    return (
        <section className='screen-about screen'>
            <div className="screen-about_gradient-overlay">
                <div className="screen-about_text-content">
                    <div className="screen-about_title">О проекте</div>
                    <div className="screen-about_text">Платформа, объединяющая аграриев, производителей, поставщиков и зерновые компании в единую сеть для эффективного ведения бизнеса и создания открытого прозрачного рынка</div>
                </div>
                <div className="screen-about_numbers">
                    <div className="screen-about_numbers-item">
                        <div className="numbers-item_number">11262</div>
                        <img src={separator} alt="separator" className="numbers-item_separator" />
                        <div className="numbers-item_text">участников <br />проекта</div>
                    </div>
                    <div className="screen-about_numbers-item">
                        <div className="numbers-item_number">5520</div>
                        <img src={separator} alt="separator" className="numbers-item_separator" />
                        <div className="numbers-item_text">сельхоз-<br />производителей</div>
                    </div>
                    <div className="screen-about_numbers-item">
                        <div className="numbers-item_number">371</div>
                        <img src={separator} alt="separator" className="numbers-item_separator" />
                        <div className="numbers-item_text">активный <br />поставщик</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;