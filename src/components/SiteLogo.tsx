import React from 'react';

import Logo from '../images/Logo.svg';

interface ImageSize {
    width: number,
    heigth: number
}

export default function SiteLogo(props: ImageSize){
    return (
        <img src={Logo} alt="Trytechlabs logo" width={props.width} height={props.heigth} />    
    )
}   