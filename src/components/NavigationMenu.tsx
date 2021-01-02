import React, { useEffect, useState } from 'react';

import '../styles/components/NavigationMenu.css';

import SiteLogo from '../components/SiteLogo';

export default function NavigationMenu() {
    const [useLogo, setUseLogo] = useState(false);
    const [currentPage, setCurrentPage] = useState('page-landing');

    const isActive = (element_id:string) =>{
        if(element_id == currentPage){
            return "active"
        }
        return ""
    }
    
    const handlePageChange = (pageToGo: String) => {
        setTimeout(() => {
            if (pageToGo == "home"){
                setUseLogo(false)
            }else{
                setUseLogo(true)
            }
            setCurrentPage(pageToGo.toString())
        }, 200);         
    }

    return (
        <div id="navigation-menu">
            <div>
                {useLogo && (<SiteLogo data-testid="logo" className="site_menu" width={162} height={70} />)}
                <div className="menu">
                    <a className={isActive("home")} href="#page-landing" onClick={ () => handlePageChange('home') }>Home</a>
                    <a className={isActive("about_us")} href="#page-developers" onClick={ () => handlePageChange('about_us') }>About us</a>
                    <a className={isActive("our_tries")} href="#page-projects" onClick={ () => handlePageChange('our_tries') }>Our tries</a>
                    <a className={isActive("contribute")} href="#page-contribute" onClick={ () => handlePageChange('contribute') }>Contribute</a>
                </div>
            </div>
        </div>
    )
}
