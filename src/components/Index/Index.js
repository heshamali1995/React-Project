import React from 'react';
import Header from "../Header/Header";
import Work from "../Work/Work";
import Portfolio from "../Portfolio/Portfolio";
import Profile from "../Profile/Profile";
import About from "../About/About";
import SocialMedia from "../SocialMedia/SocialMedia";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function Index() {
    return (
        <React.Fragment>
            <Header />
            <Work />
            <Portfolio />
            <Profile />
            <About />
            <SocialMedia />
            <Contact />
            <Footer />
        </React.Fragment>
    )
}

export default Index;