import React from 'react';

import '../styles/pages/Landing.css'

import SiteLogo from '../components/SiteLogo';
import BackgroundTopDetail from '../images/BackgroundTopLeftDetail.svg';
import BackgroundBottomDetail from '../images/BackgroundBottomRightDetail.svg';

import Developer from '../images/Developer.svg';

function Landing() {
    return (
        <div id="page-landing">
            <img src={BackgroundTopDetail} alt="background top detail" className="background-top-detail"/>
            <img src={BackgroundBottomDetail} alt="background bottom detail" className="background-bottom-detail"/>
            <div className="content-wrapper">
                <main>
                    <div className="main-page-logo">
                        <SiteLogo className="" width={277} height={166} />
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
