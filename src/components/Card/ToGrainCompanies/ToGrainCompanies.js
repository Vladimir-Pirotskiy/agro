import React from "react";
import './ToGrainCompanies.css';
import picture2 from '../../../assets/corn.jpg';

const ToGrainCompanies = () => {
    return (
        <section className='screen-to-grain-companies to-grain-companies screen'>
            <div className="to-grain-companies_slider-wrapper">
                <div className="to-grain-companies_left-side to-grain-companies_side">
                    <div className="to-grain-companies_slide-content slide-content">
                        <div className="to-grain-companies_slide-title thin-title">Зерновым компаниям</div>
                        <div className="to-grain-companies_slide-text slide-text">Прямой доступ к заявкам на продажу урожая от аграриев со всей страны.</div>
                    </div>
                    <div className="to-grain-companies_slider-arrows slider-arrows">
                        <div className="to-grain-companies_slider-arrow--left slider-arrow--left slider-arrow">{'<'}</div>
                        <div className="to-grain-companies_slider-dots slider-dots">
                            <div className="to-grain-companies_slider-dot slider-dot"></div>
                            <div className="to-grain-companies_slider-dot slider-dot"></div>
                            <div className="to-grain-companies_slider-dot slider-dot slider-dot--active to-grain-companies_slider-dot--active"></div>
                            <div className="to-grain-companies_slider-dot slider-dot"></div>
                            <div className="to-grain-companies_slider-dot slider-dot"></div>
                        </div>
                        <div className="to-grain-companies_slider-arrow--right slider-arrow--right slider-arrow">{'>'}</div>
                    </div>
                </div>
                <div className="to-grain-companies_right-side to-grain-companies_side">
                    <div className="to-grain-companies_slider-index slider-index">02</div>
                    <div
                        className="to-grain-companies_slide-picture slide-picture"
                        style={{
                            backgroundImage: `url(${picture2})`
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default ToGrainCompanies;