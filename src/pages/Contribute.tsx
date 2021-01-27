import React from 'react';

import '../styles/pages/Contribute.css';

import BackgroundTopDetail from '../images/BackgroundTopLeftDetail.svg';
import BackgroundBottomDetail from '../images/BackgroundBottomRightDetail.svg';

import Experiments from '../images/Experiments.svg';
import QuestionMark from '../images/QuestionMark.svg';

export default function Contribute() {
    return (
        <div id="page-contribute">
            <img src={BackgroundTopDetail} alt="background top detail" className="background-top-detail"/>
            <img src={BackgroundBottomDetail} alt="background bottom detail" className="background-bottom-detail"/>
            <div className="content-wrapper">
                <div className="contribute_content">
                    <div className="grid_row">
                        <div className="grid_column">
                            <div className="text_grid">
                                <h1>Do you want to join us<img src={QuestionMark} alt="Question mark with green dot" className="question-mark" /></h1>
                            </div>
                            <div>
                                <img src={Experiments} alt="Scientist in front some test tubes" className="contribute-science" />
                            </div>
                        </div>
                    </div>
                    <div className="grid_row">
                        <div className="grid_column">
                            <div>
                                <p>Suggest a change on any public project or start to code and open a pull request. <br /> Certainlly we'll discuss, open an issue and expect for your contribution!</p>
                            </div>
                            <div>
                                <button className="button_contribute">
                                    <a href="https://github.com/Try-tech-Labs" target="_blank" rel="noopener noreferrer">
                                        Access now our github page!
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}