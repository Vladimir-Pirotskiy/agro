import React from "react";
import './ToPrivateFarmers.css';
import picture1 from '../../../assets/grains.jpg';

const ToPrivateFarmers = () => {
    return (
        <section className='screen-to-private to-private screen'>
            <div className="to-private_slider-wrapper">
                <div className="to-private_slide slide">
                    <div
                        className="to-private_slide-picture slide-picture"
                        style={{
                            backgroundImage: `url(${picture1})`
                        }}
                    />
                    <div className="to-private_slide-content slide-content">
                        <div className="to-private_slide-title thin-title">Аграриям</div>
                        <div className="to-private_slide-text slide-text">Прямой доступ к тысячам закупщиков урожая.</div>
                    </div>
                </div>
                <div className="to-private_slider-controls slider-controls slider-controls--bottom">
                    <div className="to-private_slider-index slider-index">01</div>
                    <div className="to-private_slider-arrows slider-arrows">
                        <div className="to-private_slider-arrow--left slider-arrow--left slider-arrow">{'<'}</div>
                        <div className="to-private_slider-dots slider-dots">
                            <div className="to-private_slider-dot slider-dot"></div>
                            <div className="to-private_slider-dot slider-dot"></div>
                            <div className="to-private_slider-dot slider-dot slider-dot--active"></div>
                            <div className="to-private_slider-dot slider-dot"></div>
                            <div className="to-private_slider-dot slider-dot"></div>
                        </div>
                        <div className="to-private_slider-arrow--right slider-arrow--right slider-arrow">{'>'}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ToPrivateFarmers;