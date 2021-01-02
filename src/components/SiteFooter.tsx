import React from 'react';

import '../styles/components/SiteFooter.css';

export default function SiteFooter(){
    return (
        <div className="footer">
            <div className="footer_content">
                <h3 className="footer_text">Made with 💜 by TryTechLabs</h3>
                <button className="footer_button"><a href="#page-landing">Back to home</a></button>
            </div>
        </div>
    )
}