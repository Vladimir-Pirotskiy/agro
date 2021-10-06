import React from "react";
import './News.css';
import picture1 from '../../../assets/grains.jpg';
import picture4 from '../../../assets/mobile-at-field.jpg';

const News = () => {
    return (
        <section className='screen-news news screen'>
            <div className="screen-news_title thin-title">Новости</div>
            <div className="screen-news_content">
                <div className="screen-news_preview" style={{ backgroundImage: `url(${picture4})` }}>
                    <div className="screen-news_content-overlay">
                        <div className="screen-news_preview-date">15 окт 2019</div>
                        <div className="screen-news_preview-title">Онлайн-кооперация для аграриев</div>
                    </div>
                </div>
                <div className="screen-news_titles-stream titles-stream">
                    <div className="titles-stream_item">
                        <div className="titles-stream_date">15 окт 2021</div>
                        <div className="titles-stream_title">Startup Spotlight: How Agro.Club is Cultivating a Digital Ecosystem for Russian Farmers</div>
                    </div>
                    <div className="titles-stream_item">
                        <div className="titles-stream_date">15 окт 2021</div>
                        <div className="titles-stream_title">«Мы пытаемся объединить всех участников агросообщества на цифровой платформе»‎: история стартапа</div>
                    </div>
                </div>
                <div className="screen-news_preview" style={{ backgroundImage: `url(${picture1})` }}>
                    <div className="screen-news_content-overlay">
                        <div className="screen-news_preview-date">16 окт 2021</div>
                        <div className="screen-news_preview-title">Обновления в условиях для аграриев</div>
                    </div>
                </div>
            </div>
            <div className="screen-news_btn-all-news button">Все новости</div>
            {/* TODO: Use <button> tag above */}
        </section>
    )
}

export default News;