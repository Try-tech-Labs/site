import { func } from "prop-types";
import React from 'react';

import LogoImage from '../images/SiteLogo.svg';


interface LogoProperties {
    width: number,
    height: number
}

export default function SiteLogo(props: LogoProperties){
    return (
        <img src={LogoImage} alt="Web site logo image" width={props.width} height={props.height} />
    )
}