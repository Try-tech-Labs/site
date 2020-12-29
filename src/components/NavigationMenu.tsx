import React, { useState } from 'react';

import '../styles/components/NavigationMenu.css';

import SiteLogo from '../components/SiteLogo';

export default function NavigationMenu() {
    const [useLogo, setUseLogo] = useState(false);

    const handlePageChange = (pageToGo: String) => {
        setTimeout(() => {
            if (pageToGo == "page-landing"){
                setUseLogo(false)
            }else{
                setUseLogo(true)
            }
        }, 300);         
    }

    return (
        <div id="navigation-menu">
            <div className="menu-grid">
                {useLogo && (<SiteLogo data-testid="logo" className="site_menu" width={162} height={70} />)}
                <div className="menu">
                    <a href="#page-landing" onClick={ () => handlePageChange('page-landing') }>Home</a>
                    <a href="#page-developers" onClick={ () => handlePageChange('page-developers') }>About us</a>
                    <a href="#page-projects" onClick={ () => handlePageChange('page-projects') }>Our tries</a>
                    <a href="#page-contribute" onClick={ () => handlePageChange('page-contribute') }>Contribute</a>
                </div>
            </div>
        </div>
    )
}
