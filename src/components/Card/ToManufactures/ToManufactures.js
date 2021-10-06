import React from "react";
import './ToManufactures.css';
import picture3 from '../../../assets/bread.jpg';

const ToManufactures = () => {
    return (
        <section className='screen-to-manufactures to-manufactures screen'>
            <div className="to-manufactures_slider-wrapper">
                <div className="to-manufactures_slide slide">
                    <div
                        className="to-manufactures_slide-picture slide-picture"
                        style={{
                            backgroundImage: `url(${picture3})`
                        }}
                    />
                    <div className="to-manufactures_slide-content slide-content">
                        <div className="to-manufactures_slide-title thin-title">Производителям</div>
                        <div className="to-manufactures_slide-text slide-text">Отслеживайте спрос на продукцию и заказы аграриев</div>
                    </div>
                </div>
                <div className="to-manufactures_slider-controls slider-controls slider-controls--bottom">
                    <div className="to-manufactures_slider-index slider-index">03</div>
                    <div className="to-manufactures_slider-arrows slider-arrows">
                        <div className="to-manufactures_slider-arrow--left slider-arrow--left slider-arrow">{'<'}</div>
                        <div className="to-manufactures_slider-dots slider-dots">
                            <div className="to-manufactures_slider-dot slider-dot"></div>
                            <div className="to-manufactures_slider-dot slider-dot"></div>
                            <div className="to-manufactures_slider-dot slider-dot slider-dot--active"></div>
                            <div className="to-manufactures_slider-dot slider-dot"></div>
                            <div className="to-manufactures_slider-dot slider-dot"></div>
                        </div>
                        <div className="to-manufactures_slider-arrow--right slider-arrow--right slider-arrow">{'>'}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ToManufactures;