import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import './ToGrainCompanies.css';
import picture2 from '../../../assets/corn.jpg';
import picture3 from '../../../assets/bread.jpg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const ToGrainCompanies = () => {
    return (
        <section className='screen-to-grain-companies to-grain-companies screen'>
            <div className="to-grain-companies_slider-wrapper">
                <div className="to-grain-companies_left-side to-grain-companies_side">
                    <div className="to-grain-companies_slide-content slide-content">
                        <div className="to-grain-companies_slide-title thin-title">Зерновым компаниям</div>
                        <div className="to-grain-companies_slide-text slide-text">
                            Прямой доступ к заявкам на продажу урожая от аграриев со всей страны.
                        </div>
                    </div>
                    <div className="to-grain-companies_slider-arrows slider-arrows">
                        <div className="to-grain-companies_slider-arrow--left slider-arrow--left slider-arrow">{'<'}</div>
                        <div className="to-grain-companies_slider-dots slider-dots">
                            <div className="to-grain-companies_slider-dot slider-dot"/>
                            <div className="to-grain-companies_slider-dot slider-dot"/>
                            <div className="to-grain-companies_slider-dot slider-dot slider-dot--active to-grain-companies_slider-dot--active"/>
                            <div className="to-grain-companies_slider-dot slider-dot"/>
                            <div className="to-grain-companies_slider-dot slider-dot"/>
                        </div>
                        <div className="to-grain-companies_slider-arrow--right slider-arrow--right slider-arrow">{'>'}</div>
                    </div>
                </div>
                <div className="to-grain-companies_right-side to-grain-companies_side">
                    <div className="to-grain-companies_slider-index slider-index">02</div>
                    <div className="to-grain-companies_slider-title-wrapper-mob">
                        <div className="to-grain-companies_slider-index to-grain-companies_slider-index--mob slider-index">
                            02
                        </div>
                        <div className="to-grain-companies_slide-title to-grain-companies_slide-title--mob thin-title">
                            Зерновым компаниям
                        </div>
                        <div className="to-grain-companies_slide-text to-grain-companies_slide-text--mob slide-text">
                            Прямой доступ к заявкам на продажу урожая от аграриев со всей страны.
                        </div>
                    </div>
                    <div className="to-grain-companies_slider-awesome-wrapper">
                        <AutoplaySlider
                            className="to-grain-companies_slider-awesome"
                            play={true}
                            cancelOnInteraction={false} // should stop playing on user interaction
                            interval={6000}
                            organicArrows={false}
                        >
                            <div
                                className="to-grain-companies_slide-picture slide-picture"
                                style={{
                                    backgroundImage: `url(${picture2})`
                                }}
                            />
                            <div
                                className="to-grain-companies_slide-picture slide-picture"
                                style={{
                                    backgroundImage: `url(${picture3})`
                                }}
                            />
                        </AutoplaySlider>
                    </div>
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