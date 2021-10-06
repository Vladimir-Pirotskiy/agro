import React from "react";

import Body from "./components/Body/Body";
import About from "./components/Card/About/About";
import ToPrivateFarmers from "./components/Card/ToPrivateFarmers/ToPrivateFarmers";
import ToManufactures from "./components/Card/ToManufactures/ToManufactures";
import ToGrainCompanies from "./components/Card/ToGrainCompanies/ToGrainCompanies";
import Footer from "./components/Footer/Footer";
import Home from "./components/Card/Home/Home";
import News from "./components/Card/News/News";
import MobileAppCard from './components/Card/MobileAppCard/MobileAppCard';
import QuestionsFormCard from './components/Card/QuestionsFormCard/QuestionsFormCard';
import ContactsCard from './components/Card/ContactsCard/ContactsCard';

const App = () => {
    return (
        <div>
            <Body>
                <Home />
                <About />
                <ToPrivateFarmers />
                <ToGrainCompanies />
                <ToManufactures />
                <News />
                <MobileAppCard />
                <QuestionsFormCard />
                <ContactsCard />
                <Footer />
            </Body>
        </div>
    );
}

export default App;
