import React from 'react';

import '../styles/components/SiteFooter.css';

export default function SiteFooter(){
    return (
        <div className="footer">
            <div className="footer_content">
                <h3 data-testid="footer-text" className="footer_text">Made with <span role="img" aria-label="heart">💜</span> by TryTechLabs</h3>
                <button className="footer_button"><a href="#page-landing">Back to home</a></button>
            </div>
        </div>
    )
}