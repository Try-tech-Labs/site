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
                <div className="main-page-logo">
                    <SiteLogo className="" width={277} height={166} />
                </div>
                <div className="home_content">
                    <div className="grid_row">
                        <h1>Our lab to try tech<span className="green-dot">.</span></h1>
                        <p>We're a group of friends trying to do cool things.</p>
                    </div>
                    <div>
                        <img src={Developer} alt="Man in front of a laptop" className="home-developer" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
