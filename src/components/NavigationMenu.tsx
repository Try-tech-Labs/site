import React from 'react';

import '../styles/components/NavigationMenu.css';

import SiteLogo from '../components/SiteLogo';

interface NavigationProps {
    useLogo: boolean
}

export default function NavigationMenu(props: NavigationProps) {
    return (
        <div id="navigation-menu">
            {props.useLogo && (<SiteLogo data-testid="logo" className="site_menu" width={162} height={70} />)}
            <div className="menu">
                <a href="#page-landing">Home</a>
                <a href="#page-developers">About us</a>
                <a href="">Our tries</a>
                <a href="">Contribute</a>
            </div>
        </div>
    )
}
