import React from 'react';

import LogoImage from '../images/SiteLogo.svg';


interface LogoProperties {
    width: number,
    height: number,
    className: string
}

export default function SiteLogo(props: LogoProperties){
    return (
        <img src={LogoImage} className={props.className} alt="Web site logo image" width={props.width} height={props.height} />
    )
}
