import React from 'react';

import '../styles/pages/Landing.css'

import SiteLogo from '../components/SiteLogo';
import NavigationMenu from '../components/NavigationMenu';
import BackgroundvectorDetail from '../images/BackgroundVector1.svg';
import BackgroundvectorDetail2 from '../images/BackgroundVector2.svg';

import Developer from '../images/Developer.svg';

function Landing() {
    return (
        <div id="page-landing">
            <img src={BackgroundvectorDetail} alt="" className="background-top-detail"/>
            <img src={BackgroundvectorDetail2} alt="" className="background-bottom-detail"/>
            <NavigationMenu />
            <div className="content-wrapper">
                <main>
                    <div className="main-page-logo">
                        <SiteLogo width={277} height={166} />
                    </div>
                    <h1>Our lab to try tech</h1>
                    <p>We're a group of friends trying to do cool things.</p>
                    <div className="green-dot"></div>
                    <img src={Developer} alt="Man front a laptop" className="home-developer" />
                </main>
            </div>
        </div>
    );
}

export default Landing;
