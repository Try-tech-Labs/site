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
                    <div className="home_content">
                        <div className="grid_column">
                            <div className="main-page-logo">
                                <SiteLogo className="" width={277} height={166} />
                            </div>
                            <div>
                                <div className="text_grid">
                                    <h1>Our lab to try tech</h1>
                                    <div className="green-dot"></div>
                                </div>
                            </div>
                            <p>We're a group of friends trying to do cool things.</p>
                        </div>
                        <div className="grid_column">
                            <img src={Developer} alt="Man front a laptop" className="home-developer" />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Landing;
