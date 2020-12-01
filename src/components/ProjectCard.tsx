import React from 'react';
import styled from "styled-components";

import ProjectDefaultImage from '../images/ProjectDefaultImage.svg'
import '../styles/components/ProjectCard.css';

interface ProjectProps{
    name: string,
    presentation_image: string,
    presentation_image_gradient_color: string,
    description: string,
    background_color: string,
    in_progress: boolean
}

export default function ProjectCard(props: ProjectProps){

    const ProjectCard = styled.div`
    width: 230px;
    height: 300px;
    background: ${props.background_color || "#62478C"};
    color: #000;
    border-radius: 25px;
    margin: 0 40px 0 40px;
    text-align: justify;
    margin: 47px;
    background-image: url(${props.presentation_image || ProjectDefaultImage}), ${props.presentation_image_gradient_color || "linear-gradient(180deg, #FFFFFF 0%, #0E538C 100%)"};
    background-size: cover;
    background-position: top;`;

    const NameLabel = styled.div`
    position: absolute;
    height: 85px;
    text-align: center;
    width: 50%;
    margin: auto;
    background-color: ${props.background_color || "#62478C"};
    color: #E6E3D9;
    border: 2px solid #ECECE9;
    border-radius: 10px;
    line-height: 85px;
    transform: skewY(-22deg);`;

    const CardBottom = styled.div`
    bottom: 0;
    position: absolute;
    right: 0;
    text-align: center;
    background-color: ${props.background_color || "rgba(0,0,0,0)"};
    color: #FFFFFF;
    height: 3em;
    border-radius: 0 0 25px 25px;`;

    return (
        <ProjectCard>
            <div className="card_body">
                {props.in_progress && <span className="progress_badge">In progress</span>}
                <NameLabel><p>{props.name || "Soon"}</p></NameLabel>
                <CardBottom>
                    <div className="description">
                        <p>{props.description}</p>
                    </div>
                </CardBottom>
            </div>
        </ProjectCard>
    )
}

