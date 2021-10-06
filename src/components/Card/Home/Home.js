import React from "react";
import './Home.css'
import Header from "../../Header/Header";

const Home = (props) => {
    return (
        <section className='screen-home screen'>
            <Header></Header>
            <h1 className="home-title">
                Ваш инструмент <br /> для эффективного сельского хозяйства
            </h1>
        </section>
    )
}

export default Home;
